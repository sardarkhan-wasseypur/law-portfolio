import React from "react";
import Link from "next/link";
import { StatuteCallout } from "./StatuteCallout";
import { InlineCTA } from "./InlineCTA";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text =
      typeof children === "string"
        ? children
        : React.Children.toArray(children).join("");
    const id = props.id || slugify(text);
    return (
      <h2
        id={id}
        className="font-headline-xl text-headline-xl text-on-surface tracking-tight scroll-mt-28 mt-8 mb-4"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text =
      typeof children === "string"
        ? children
        : React.Children.toArray(children).join("");
    const id = props.id || slugify(text);
    return (
      <h3
        id={id}
        className="font-headline-md text-subheading-serif text-on-surface font-semibold scroll-mt-28 mt-6 mb-3"
        {...props}
      >
        {children}
      </h3>
    );
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-on-surface-variant leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-on-surface-variant" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-on-surface-variant" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-tertiary pl-4 italic text-on-surface my-4" {...props} />
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-tertiary hover:underline font-medium" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-tertiary hover:underline font-medium"
        {...props}
      >
        {children}
      </a>
    );
  },
  StatuteCallout,
  InlineCTA,
};
