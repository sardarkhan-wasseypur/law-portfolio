"use client";

import React, { useActionState } from "react";
import Script from "next/script";
import { submitEnquiry, ActionState } from "@/app/actions/enquiry";
import { trackEvent } from "@/lib/track";

export interface EnquiryFormProps {
  className?: string;
  defaultMatterType?: string;
}

const initialState: ActionState = {
  success: false,
};

export function EnquiryForm({ className = "", defaultMatterType = "" }: EnquiryFormProps) {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const practiceOptions = [
    { value: "criminal", label: "Criminal Defense & Bail" },
    { value: "cheque-bounce", label: "Cheque Bounce (Section 138 NI Act)" },
    { value: "divorce-family", label: "Divorce & Family Law" },
    { value: "civil", label: "Civil Law & Property Disputes" },
    { value: "trademark", label: "Trademark & IP Law" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const matterType = (formData.get("matterType") as string) || defaultMatterType || "general";
    if (typeof window !== "undefined") {
      sessionStorage.setItem("submitted_matter_type", matterType);
      trackEvent("form_submit", {
        matter_type: matterType,
        page_path: window.location.pathname,
      });
    }
  };

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className={`p-6 md:p-8 bg-surface-container-low rounded-DEFAULT border border-tertiary/20 space-y-6 shadow-xl text-on-surface ${className}`}
    >
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      )}

      {/* Honeypot field (hidden from real users) */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="space-y-2">
        <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
          Schedule Legal Intake
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Your details are kept confidential under advocate-client privilege.
        </p>
      </div>

      {/* Global Error Banner */}
      {state.message && (
        <div
          aria-live="polite"
          className="p-4 rounded bg-error-container/40 border border-error/50 text-error font-body-sm text-body-sm"
        >
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block font-label-md text-label-md uppercase tracking-wider text-tertiary font-semibold"
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={state.values?.name || ""}
            placeholder="Your full name"
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className="w-full h-12 px-4 rounded-DEFAULT bg-surface-container border border-outline-variant/40 text-on-surface font-body-md text-body-md focus:border-tertiary focus:outline-none transition-colors"
          />
          {state.errors?.name && (
            <p id="name-error" aria-live="polite" className="text-xs text-error font-medium">
              {state.errors.name}
            </p>
          )}
        </div>

        {/* Phone Input */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block font-label-md text-label-md uppercase tracking-wider text-tertiary font-semibold"
          >
            Mobile Number (India) *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            defaultValue={state.values?.phone || ""}
            placeholder="10-digit mobile number"
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}
            className="w-full h-12 px-4 rounded-DEFAULT bg-surface-container border border-outline-variant/40 text-on-surface font-body-md text-body-md focus:border-tertiary focus:outline-none transition-colors"
          />
          {state.errors?.phone && (
            <p id="phone-error" aria-live="polite" className="text-xs text-error font-medium">
              {state.errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Matter Type Select */}
      <div className="space-y-2">
        <label
          htmlFor="matterType"
          className="block font-label-md text-label-md uppercase tracking-wider text-tertiary font-semibold"
        >
          Matter Type / Practice Area *
        </label>
        <select
          id="matterType"
          name="matterType"
          required
          defaultValue={state.values?.matterType || defaultMatterType || ""}
          aria-describedby={state.errors?.matterType ? "matterType-error" : undefined}
          className="w-full h-12 px-4 rounded-DEFAULT bg-surface-container border border-outline-variant/40 text-on-surface font-body-md text-body-md focus:border-tertiary focus:outline-none transition-colors"
        >
          <option value="" disabled>
            Select a Practice Area
          </option>
          {practiceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {state.errors?.matterType && (
          <p id="matterType-error" aria-live="polite" className="text-xs text-error font-medium">
            {state.errors.matterType}
          </p>
        )}
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block font-label-md text-label-md uppercase tracking-wider text-tertiary font-semibold"
        >
          Brief Summary of Legal Matter
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          defaultValue={state.values?.message || ""}
          placeholder="Briefly describe your matter"
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className="w-full p-4 rounded-DEFAULT bg-surface-container border border-outline-variant/40 text-on-surface font-body-md text-body-md focus:border-tertiary focus:outline-none transition-colors resize-none"
        />
        {state.errors?.message && (
          <p id="message-error" aria-live="polite" className="text-xs text-error font-medium">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* Cloudflare Turnstile Container if Enabled */}
      {turnstileSiteKey && (
        <div className="my-4">
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
        </div>
      )}

      {/* Privilege & Confidentiality Consent Checkbox */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            defaultChecked={state.values?.consent ?? true}
            aria-describedby={state.errors?.consent ? "consent-error" : undefined}
            className="mt-1 w-4 h-4 rounded accent-secondary-container focus:ring-tertiary cursor-pointer"
          />
          <label htmlFor="consent" className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant leading-relaxed cursor-pointer">
            I understand that submitting this inquiry is protected by advocate-client confidentiality and does not construct a formal advocate-client engagement until confirmed.
          </label>
        </div>
        {state.errors?.consent && (
          <p id="consent-error" aria-live="polite" className="text-xs text-error font-medium">
            {state.errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 bg-secondary-container hover:bg-on-secondary text-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <span>{isPending ? "Submitting Request..." : "Submit Consultation Request"}</span>
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </form>
  );
}
