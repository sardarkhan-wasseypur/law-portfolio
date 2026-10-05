import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  level?: "h2" | "h3";
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  level = "h2",
  align = "left",
  theme = "dark",
  className = "",
}: SectionHeadingProps) {
  const HeadingTag = level;

  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleThemeStyles = {
    dark: "text-text-dark",
    light: "text-text-light",
  };

  const subtitleThemeStyles = {
    dark: "text-text-muted",
    light: "text-text-light/80",
  };

  return (
    <div className={`flex flex-col ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-px bg-gold inline-block" />
          <span className="font-serif italic text-gold text-sm tracking-wide">
            {eyebrow}
          </span>
        </div>
      )}
      <HeadingTag
        className={`font-serif uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 ${titleThemeStyles[theme]}`}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p
          className={`font-sans text-sm md:text-base max-w-2xl leading-relaxed ${subtitleThemeStyles[theme]}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
