import React from "react";
import Link from "next/link";

interface InlineCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

export function InlineCTA({
  title = "Require Legal Representation or Counsel Advisory?",
  description = "Chambers provides urgent pre-litigation scrutiny, structured reply drafting within statutory timelines, and bench defense before Delhi Courts.",
  buttonText = "Request Consultation",
  href = "/contact/",
}: InlineCTAProps) {
  return (
    <aside className="my-space-xl p-space-xl rounded-DEFAULT bg-secondary-container text-on-secondary-fixed shadow-2xl relative overflow-hidden border border-secondary/30">
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
        <div className="space-y-space-xs max-w-lg">
          <span className="font-eyebrow text-eyebrow uppercase tracking-[0.2em] text-secondary-fixed opacity-90 block">
            Expedited Chamber Evaluation
          </span>
          <h3 className="font-headline-md text-subheading-serif font-bold text-secondary-fixed">
            {title}
          </h3>
          <p className="text-body-sm font-body-sm text-secondary-fixed/90 leading-snug">
            {description}
          </p>
        </div>
        <Link
          className="shrink-0 px-space-lg py-space-sm bg-on-secondary-fixed hover:bg-black text-secondary-fixed rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider transition-colors border border-secondary-fixed/30 shadow-lg inline-flex items-center gap-2"
          href={href}
        >
          <span>{buttonText}</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </aside>
  );
}
