import React, { forwardRef } from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-wider rounded-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 min-h-[44px] md:min-h-0";

    const variantStyles = {
      primary:
        "bg-burgundy hover:bg-burgundy-hover text-text-dark border border-burgundy/40 shadow-sm",
      outline:
        "bg-transparent border border-gold text-gold hover:bg-gold hover:text-navy",
      ghost:
        "bg-transparent text-text-dark hover:bg-charcoal hover:text-gold",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2.5 text-xs",
      lg: "px-8 py-3.5 text-sm",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

    if (href) {
      const isExternal =
        href.startsWith("http") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:");

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target}
            rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
            className={combinedClassName}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
