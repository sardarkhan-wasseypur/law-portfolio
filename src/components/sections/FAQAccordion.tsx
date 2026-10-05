"use client";

import React, { useState } from "react";
import { buildFAQSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  renderSchema?: boolean;
}

export function FAQAccordion({ items, className = "", renderSchema = false }: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const faqSchema = renderSchema ? buildFAQSchema(items) : null;

  return (
    <div className={`space-y-4 ${className}`}>
      {faqSchema && <JsonLd data={faqSchema} />}

      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const accordionId = `faq-content-${index}`;

        return (
          <div
            key={index}
            className="bg-charcoal rounded-md border border-gold/20 overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={accordionId}
              className="w-full px-6 py-5 text-left flex items-center justify-between text-text-dark font-serif text-lg font-medium hover:text-gold focus-visible:outline-2 focus-visible:outline-gold transition-colors"
            >
              <span>{item.question}</span>
              <span
                className={`ml-4 text-gold transform transition-transform duration-200 text-xl font-bold shrink-0 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ↓
              </span>
            </button>

            <div
              id={accordionId}
              className={`px-6 pb-5 text-text-muted font-sans text-sm leading-relaxed ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
