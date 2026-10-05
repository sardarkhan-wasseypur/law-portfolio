import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export interface DisclaimerStripProps {
  className?: string;
}

export function DisclaimerStrip({ className = "" }: DisclaimerStripProps) {
  return (
    <div
      className={`p-4 md:p-6 rounded-md bg-charcoal border border-gold/30 text-left ${className}`}
    >
      <span className="font-sans text-xs uppercase tracking-widest text-gold block mb-2 font-bold">
        Bar Council of India Rule 36 Compliance Notice
      </span>
      <p className="font-sans text-xs text-text-muted leading-relaxed">
        Information on this website is provided for general awareness only and is
        not legal advice or solicitation under the Advocates Act, 1961 and the Bar
        Council of India Rules. The visitor voluntarily accesses this platform
        without any advertisement, personal solicitation, inducement, or commercial
        incentive from {siteConfig.name} or associates.
      </p>
    </div>
  );
}

export interface ReviewedByProps {
  date?: string;
  authorName?: string;
  authorTitle?: string;
  authorHref?: string;
  className?: string;
}

export function ReviewedBy({
  date = "October 2026",
  authorName = siteConfig.name,
  authorTitle = siteConfig.role,
  authorHref = "/about/",
  className = "",
}: ReviewedByProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 p-3 rounded-sm bg-charcoal border border-gold/20 font-sans text-xs text-text-muted ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-gold inline-block shrink-0" />
      <span>
        Reviewed by{" "}
        <Link
          href={authorHref}
          className="text-gold font-semibold hover:underline"
        >
          {authorTitle} {authorName}
        </Link>
      </span>
      <span>•</span>
      <span>Last reviewed: {date}</span>
    </div>
  );
}
