"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { z } from "zod";

export const EnquirySchema = z.object({
  name: z.string().trim().min(2, "Full name must be at least 2 characters."),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number."),
  matterType: z.enum(
    ["criminal", "cheque-bounce", "divorce-family", "civil", "trademark"],
    { message: "Please select a valid practice area." }
  ),
  message: z.string().trim().max(1000, "Message cannot exceed 1,000 characters."),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the privilege and confidentiality terms.",
  }),
  honeypot: z.string().optional(),
  turnstileToken: z.string().optional(),
});

export interface ActionState {
  success: boolean;
  errors?: Record<string, string>;
  message?: string;
  values?: {
    name: string;
    phone: string;
    matterType: string;
    message: string;
    consent: boolean;
  };
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count += 1;
  return true;
}

async function verifyTurnstile(token: string, secretKey: string, ip?: string): Promise<boolean> {
  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (ip) formData.append("remoteip", ip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return false;
  }
}

export async function submitEnquiry(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") || "127.0.0.1";

  // Rate Limiting Check
  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: "Too many submission attempts. Please try again in 15 minutes.",
    };
  }

  const rawData = {
    name: (formData.get("name") as string) || "",
    phone: (formData.get("phone") as string) || "",
    matterType: (formData.get("matterType") as string) || "",
    message: (formData.get("message") as string) || "",
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
    honeypot: (formData.get("honeypot") as string) || "",
    turnstileToken: (formData.get("cf-turnstile-response") as string) || "",
  };

  // Honeypot trap: silently pretend success and redirect
  if (rawData.honeypot && rawData.honeypot.trim() !== "") {
    redirect("/thank-you/");
  }

  // Zod Validation
  const validated = EnquirySchema.safeParse(rawData);
  if (!validated.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of validated.error.issues) {
      if (issue.path[0]) {
        fieldErrors[issue.path[0].toString()] = issue.message;
      }
    }

    return {
      success: false,
      errors: fieldErrors,
      values: {
        name: rawData.name,
        phone: rawData.phone,
        matterType: rawData.matterType,
        message: rawData.message,
        consent: rawData.consent,
      },
    };
  }

  const { name, phone, matterType, message, turnstileToken } = validated.data;

  // Cloudflare Turnstile Verification if keys are set
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (turnstileSecretKey && turnstileSiteKey) {
    if (!turnstileToken) {
      return {
        success: false,
        message: "CAPTCHA verification required. Please complete the security check.",
        values: { name, phone, matterType, message, consent: true },
      };
    }

    const isHuman = await verifyTurnstile(turnstileToken, turnstileSecretKey, ip);
    if (!isHuman) {
      return {
        success: false,
        message: "CAPTCHA verification failed. Please try again.",
        values: { name, phone, matterType, message, consent: true },
      };
    }
  }

  // Send Email via Resend HTTP API
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL || "Lawofficeofshubhamsingh@gmail.com";

  if (!resendApiKey) {
    console.log("--------------------------------------------------");
    console.log("[DEV MODE - RESEND_API_KEY NOT SET]");
    console.log("Enquiry Received from:", name);
    console.log("Phone:", phone);
    console.log("Matter Type:", matterType);
    console.log("Message:", message);
    console.log("--------------------------------------------------");
  } else {
    try {
      const emailPayload = {
        from: "Legal Intake <onboarding@resend.dev>",
        to: [toEmail],
        subject: `New Chamber Enquiry: ${matterType.toUpperCase()} - ${name}`,
        html: `
          <h2>New Chamber Legal Intake Submission</h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Mobile Number:</strong> ${phone}</p>
          <p><strong>Practice Area / Matter:</strong> ${matterType}</p>
          <p><strong>Brief Details:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr/>
          <p><em>Statutory Advocate-Client Confidentiality Request</em></p>
        `,
      };

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify(emailPayload),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend API response error:", errText);
      }
    } catch (err) {
      console.error("Failed to send email via Resend API:", err);
    }
  }

  // Redirect to Thank-You Page on Success
  redirect("/thank-you/");
}
