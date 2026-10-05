import { siteConfig } from "@/content/site";

export function whatsappLink(message?: string): string {
  const rawNumber = siteConfig.whatsappDigits || siteConfig.whatsapp.replace(/[^\d]/g, "");
  const number = rawNumber || "919990590014";

  if (!message) {
    return `https://wa.me/${number}`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export const PREFILLED_WHATSAPP_MESSAGES = {
  general: "Hello Advocate Shubham Singh, I would like to schedule a legal consultation regarding my matter.",
  criminal: "Hello, I need legal assistance regarding a criminal defense or bail matter before Delhi Courts.",
  chequeBounce: "Hello, I need legal assistance regarding a cheque bounce (Section 138 NI Act) matter.",
  divorce: "Hello, I need legal advice regarding a divorce or matrimonial dispute in Family Court.",
  civil: "Hello, I need legal representation regarding a civil or property dispute in Delhi.",
  trademark: "Hello, I need legal guidance regarding trademark registration or IP litigation in Delhi.",
};
