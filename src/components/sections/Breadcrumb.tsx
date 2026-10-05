import React from "react";
import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const schemaData = buildBreadcrumbSchema(items);

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs font-sans uppercase tracking-widest text-text-muted mb-6 ${className}`}
    >
      <JsonLd data={schemaData} />

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.url + index}>
            {index > 0 && <span className="text-gold/60">/</span>}
            {isLast ? (
              <span className="text-gold font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-none">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="hover:text-gold transition-colors flex items-center gap-1"
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
