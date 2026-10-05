import React from "react";
import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  eyebrow?: string;
  variant?: "dark" | "light";
  icon?: React.ReactNode;
  href?: string;
  linkText?: string;
  className?: string;
}

export function Card({
  title,
  description,
  eyebrow,
  variant = "dark",
  icon,
  href,
  linkText = "Learn More →",
  className = "",
}: CardProps) {
  const variantStyles = {
    dark: "bg-charcoal text-text-dark border border-gold/20 hover:border-gold/50 shadow-md",
    light: "bg-ivory text-text-light border border-gold/30 shadow-md",
  };

  const content = (
    <div className={`p-6 md:p-8 rounded-md transition-colors ${variantStyles[variant]} ${className}`}>
      {icon && (
        <div className="w-10 h-10 mb-4 rounded-sm bg-navy border border-gold/40 flex items-center justify-center text-gold font-serif font-bold text-lg shrink-0">
          {icon}
        </div>
      )}
      {eyebrow && (
        <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold font-bold block mb-2">
          {eyebrow}
        </span>
      )}
      <h3
        className={`font-serif text-xl font-semibold mb-3 ${
          variant === "dark" ? "text-text-dark" : "text-text-light"
        }`}
      >
        {title}
      </h3>
      <p
        className={`font-sans text-sm leading-relaxed ${
          variant === "dark" ? "text-text-muted" : "text-text-light/80"
        }`}
      >
        {description}
      </p>

      {href && (
        <div className="mt-6 pt-4 border-t border-gold/20">
          <span
            className={`font-sans text-xs uppercase tracking-wider font-semibold ${
              variant === "dark" ? "text-gold" : "text-burgundy"
            }`}
          >
            {linkText}
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block group">
        {content}
      </Link>
    );
  }

  return content;
}
