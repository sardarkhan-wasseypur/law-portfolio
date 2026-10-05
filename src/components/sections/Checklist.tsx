import React from "react";

export interface ChecklistProps {
  title?: string;
  items: string[];
  className?: string;
}

export function Checklist({
  title = "What to Bring for Consultation",
  items,
  className = "",
}: ChecklistProps) {
  return (
    <div
      className={`p-6 md:p-8 bg-charcoal rounded-md border border-gold/20 space-y-6 shadow-md ${className}`}
    >
      {title && (
        <div className="flex items-center gap-2 pb-4 border-b border-gold/20">
          <span className="font-serif font-bold text-gold text-lg">✓</span>
          <h3 className="font-serif text-xl font-semibold text-text-dark uppercase tracking-wider">
            {title}
          </h3>
        </div>
      )}

      <ul className="space-y-3 font-sans text-sm text-text-muted">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-gold font-bold shrink-0 mt-0.5">✓</span>
            <span className="leading-relaxed text-text-dark">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
