import React from "react";
import Link from "next/link";

export interface ChipItem {
  label: string;
  href?: string;
}

export interface ChipsProps {
  title?: string;
  items: ChipItem[];
  className?: string;
}

export function Chips({
  title = "Forums Where Handled",
  items,
  className = "",
}: ChipsProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && (
        <span className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-bold block">
          {title}
        </span>
      )}
      <div className="flex flex-wrap gap-3">
        {items.map((chip, index) => {
          const chipStyles =
            "inline-flex items-center px-4 py-2 rounded-sm bg-charcoal border border-gold/30 text-text-dark font-sans text-xs uppercase tracking-wider hover:bg-gold hover:text-navy transition-colors duration-200";

          if (chip.href) {
            return (
              <Link key={index} href={chip.href} className={chipStyles}>
                <span>{chip.label}</span>
                <span className="ml-1.5 font-mono text-gold">→</span>
              </Link>
            );
          }

          return (
            <span key={index} className={chipStyles}>
              {chip.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
