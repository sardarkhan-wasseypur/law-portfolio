import React from "react";
import { siteConfig } from "@/content/site";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";
import { Button } from "@/components/ui/Button";

export interface CTABandProps {
  title?: string;
  description?: string;
  className?: string;
}

export function CTABand({
  title = "Need Urgent Legal Representation or Appellate Counsel?",
  description = "Schedule a consultation at Delhi High Court Chambers or connect directly for listing inquiries.",
  className = "",
}: CTABandProps) {
  return (
    <section
      className={`w-full bg-burgundy text-text-dark py-16 px-6 lg:px-12 rounded-md shadow-xl border border-burgundy/40 relative overflow-hidden ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 text-gold">
          <span className="font-serif font-bold text-lg">§</span>
          <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold">
            Confidential Legal Intake
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-semibold uppercase tracking-wider leading-tight text-text-dark">
          {title}
        </h2>

        <p className="font-sans text-base md:text-lg text-text-dark/90 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            href={`tel:${siteConfig.phone}`}
            variant="outline"
            size="lg"
            data-track="call_click"
            className="bg-navy hover:bg-navy-light text-text-dark border-gold/40"
          >
            Call Chambers: {siteConfig.phone}
          </Button>

          <Button
            href={whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            data-track="whatsapp_click"
            className="bg-gold hover:bg-gold-light text-navy border-gold"
          >
            WhatsApp Details
          </Button>
        </div>
      </div>
    </section>
  );
}
