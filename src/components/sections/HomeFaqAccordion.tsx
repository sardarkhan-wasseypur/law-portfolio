"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question:
      "What is the procedure for an urgent listing or mention before the Delhi High Court or Supreme Court?",
    answer:
      "Urgent matters requiring immediate interim protection or stay of execution are placed before the roster bench through a formal Mentioning Memo filed with the Registry before 10:00 AM. For extreme emergencies, oral mentioning is made directly before the Hon’ble Chief Justice Court with proof of urgency notice served to the opposing party.",
  },
  {
    question:
      "How quickly can a statutory legal notice under Section 138 (Cheque Bounce) be dispatched?",
    answer:
      "Under the Negotiable Instruments Act, 1881, the legal notice must be issued strictly within 30 days from the date of receipt of the bank return memo. Our chambers prioritize dispatching the verified statutory demand via registered speed post within 24 to 48 hours of docket verification to prevent statutory expiration.",
  },
  {
    question:
      "Can outstation or NRI clients engage Chambers for virtual representation?",
    answer:
      "Yes. Both the Supreme Court of India and Delhi High Court fully facilitate hybrid and virtual court appearances. NRI and outstation clients can execute a Special Power of Attorney (SPA) or consular attestation, review pleadings through encrypted cloud dockets, and participate in conferences remotely.",
  },
  {
    question:
      "What initial documents are required for filing an Anticipatory Bail or Quashing Petition under Section 482 CrPC?",
    answer:
      "Essential documentation includes a certified copy of the First Information Report (FIR), lower court bail dismissal or remand orders, notice issued under Section 41A CrPC (if any), proof of residence/identity, and contemporaneous documentary evidence refuting allegations.",
  },
];

export function HomeFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" id="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-surface-container-high rounded overflow-hidden"
          >
            <button
              type="button"
              className="w-full px-8 py-6 text-left flex items-center justify-between text-on-surface font-subheading-serif text-subheading-serif faq-trigger focus:outline-none"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <span
                className={`material-symbols-outlined text-tertiary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-label={faq.question}
                className="px-8 pb-6 text-on-surface-variant font-body-md text-body-md"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
