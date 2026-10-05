"use client";

import React, { useState } from "react";

export function PracticeIntakeForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 ${isSubmitted ? "opacity-50 pointer-events-none" : ""}`}
      >
        <div>
          <label
            className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider block mb-1.5"
            htmlFor="client-name"
          >
            Accused / Client Full Name *
          </label>
          <input
            className="w-full bg-surface-container-low text-on-surface px-3.5 py-2.5 font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-highest transition-colors"
            id="client-name"
            placeholder="Your full name"
            required
            type="text"
          />
        </div>
        <div>
          <label
            className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider block mb-1.5"
            htmlFor="client-phone"
          >
            Phone / WhatsApp Number (+91) *
          </label>
          <input
            className="w-full bg-surface-container-low text-on-surface px-3.5 py-2.5 font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-highest transition-colors"
            id="client-phone"
            placeholder="10-digit mobile number"
            required
            type="tel"
          />
        </div>
        <div>
          <label
            className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider block mb-1.5"
            htmlFor="matter-type"
          >
            Matter Type / Court Stage *
          </label>
          <select
            className="w-full bg-surface-container-low text-on-surface px-3.5 py-2.5 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-highest transition-colors cursor-pointer"
            id="matter-type"
            required
            defaultValue=""
          >
            <option className="text-outline" disabled value="">
              Select Matter Classification
            </option>
            <option value="anticipatory-bail">
              Anticipatory Bail (Pre-Arrest / Sec 482 BNSS)
            </option>
            <option value="regular-bail">
              Regular Bail (Custody Matter / Sec 483 BNSS)
            </option>
            <option value="quashing">
              FIR Quashing (High Court / Sec 528 BNSS)
            </option>
            <option value="notice-35">
              Police Notice / Sec 35 BNSS Summons
            </option>
            <option value="pmla-ed">PMLA / ED / White-Collar Prosecution</option>
            <option value="supreme-court-slp">Supreme Court Criminal SLP</option>
            <option value="trial-defense">Trial Defense &amp; Cross-Examination</option>
          </select>
        </div>
        <div>
          <label
            className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider block mb-1.5"
            htmlFor="case-brief"
          >
            Brief Case Summary &amp; Police Station *
          </label>
          <textarea
            className="w-full bg-surface-container-low text-on-surface px-3.5 py-2.5 font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-highest transition-colors"
            id="case-brief"
            placeholder="Briefly describe your matter"
            required
            rows={3}
          />
        </div>
        <div className="flex items-start gap-2.5 pt-1">
          <input
            className="mt-1 accent-tertiary cursor-pointer"
            id="intake-consent"
            required
            type="checkbox"
          />
          <label
            className="font-legal-disclaimer text-legal-disclaimer text-outline cursor-pointer leading-tight"
            htmlFor="intake-consent"
          >
            I understand this intake request is strictly privileged and does not constitute advertisement or legal solicitation under BCI Rule 36.
          </label>
        </div>
        <button
          className="w-full bg-secondary-container hover:bg-on-secondary text-secondary-fixed hover:text-on-surface font-label-md text-label-md uppercase py-3.5 px-4 tracking-wider transition-colors shadow-lg cursor-pointer mt-2"
          type="submit"
        >
          Request Immediate Case Review
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-4 p-3 bg-surface-container-high text-tertiary font-body-sm text-body-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">check_circle</span>
          <span>
            Dossier received by Chamber Counsel. You will receive an immediate communication shortly.
          </span>
        </div>
      )}
    </div>
  );
}
