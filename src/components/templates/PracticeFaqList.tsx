"use client";

import React, { useState } from "react";
import { FaqItem } from "@/content/practice/types";

interface Props {
  faqs: FaqItem[];
}

export function PracticeFaqList({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3" id="criminal-faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-surface-container p-5 transition-all shadow-sm ${
              isOpen ? "bg-surface-container-high" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between cursor-pointer list-none select-none font-subheading-serif text-subheading-serif text-on-surface text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="pr-4">
                {index + 1}. {faq.question}
              </span>
              <span
                className={`material-symbols-outlined text-tertiary transition-transform shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="mt-4 pt-4 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-outline-variant/20">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
