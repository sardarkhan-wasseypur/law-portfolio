import React from "react";
import { siteConfig } from "@/content/site";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";

export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface-container-lowest/95 backdrop-blur-md border-t border-tertiary/30 p-3 flex gap-3 shadow-2xl"
      aria-label="Mobile Quick Contact Bar"
    >
      <a
        href={`tel:${siteConfig.phone}`}
        data-track="call_click"
        data-track-location="sticky_bar"
        className="flex-1 flex items-center justify-center min-h-[44px] py-2.5 px-4 bg-primary-container hover:bg-surface-container-high text-on-surface font-sans text-xs uppercase tracking-wider font-semibold rounded-DEFAULT border border-tertiary/30 transition-colors"
      >
        <span>Call</span>
      </a>
      <a
        href={whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        data-track-location="sticky_bar"
        className="flex-1 flex items-center justify-center min-h-[44px] py-2.5 px-4 bg-secondary-container hover:bg-on-secondary text-secondary-fixed font-sans text-xs uppercase tracking-wider font-semibold rounded-DEFAULT border border-secondary/40 transition-colors"
      >
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
