"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq1",
    question: "What documents are essential for an initial legal review?",
    answer:
      "Certified copies of impugned judgments or orders, relevant court records, notices, or contracts pertinent to the legal dispute.",
  },
  {
    id: "faq2",
    question: "Can outstation clients conduct virtual video consultations?",
    answer:
      "Yes. Encrypted video consultations can be scheduled for clients located outside the New Delhi National Capital Region.",
  },
  {
    id: "faq3",
    question: "How are urgent interim relief or stay applications processed?",
    answer:
      "Urgent applications are prepared and lodged in accordance with High Court and Supreme Court procedural rules.",
  },
];

export function ContactMobileAccordions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-margin-mobile py-space-sm flex flex-col gap-2">
      <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-wider">
        Chamber Protocols &amp; Information
      </span>
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className="rounded-lg bg-surface-container-low overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              className="w-full p-3.5 text-left flex items-center justify-between text-on-surface hover:bg-surface-container transition-colors min-h-[44px]"
            >
              <span className="font-label-md text-[13px] font-semibold pr-2">
                {faq.question}
              </span>
              <span
                className={`material-symbols-outlined text-tertiary text-[20px] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-3.5 pb-3.5 pt-1 text-on-surface-variant font-body-sm text-body-sm leading-relaxed bg-surface-container-low">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
