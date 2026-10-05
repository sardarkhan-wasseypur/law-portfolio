"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HeadingItem } from "@/lib/mdx";
import { siteConfig } from "@/content/site";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";

interface ArticleSidebarProps {
  headings: HeadingItem[];
}

export function ArticleSidebar({ headings }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [readingProgress, setReadingProgress] = useState<number>(0);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(currentProgress);
      }

      // Determine active heading based on scroll position
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter((el): el is HTMLElement => el !== null);

      const scrollPosition = window.scrollY + 160;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveId(el.id);
          return;
        }
      }

      if (headingElements.length > 0) {
        setActiveId(headingElements[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-[140px] space-y-space-xl">
      {/* Table of Contents Card */}
      {headings.length > 0 && (
        <div className="p-space-lg rounded-DEFAULT bg-surface-container-low border border-tertiary/20 shadow-xl">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm mb-space-md">
            <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
              Table of Contents
            </span>
            <span className="text-[11px] font-legal-disclaimer text-on-surface-variant">
              {headings.length} Topics
            </span>
          </div>

          <nav className="space-y-1 text-body-sm font-body-sm" aria-label="Table of Contents">
            {headings.map((heading, idx) => {
              const isActive = activeId === heading.id;
              const formattedNum = (idx + 1).toString().padStart(2, "0");

              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`group flex items-start gap-space-xs p-1.5 rounded transition-colors ${
                    heading.level === 3 ? "pl-4" : ""
                  } ${
                    isActive
                      ? "bg-surface-container text-tertiary font-medium"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-tertiary"
                  }`}
                >
                  <span
                    className={`font-legal-disclaimer mt-0.5 ${
                      isActive ? "text-tertiary" : "text-tertiary/70 group-hover:text-tertiary"
                    }`}
                  >
                    {formattedNum}.
                  </span>
                  <span className="leading-snug">{heading.text}</span>
                </a>
              );
            })}
          </nav>

          {/* Reading Progress Visual Bar */}
          <div className="mt-space-md pt-space-sm border-t border-outline-variant/20">
            <div className="flex justify-between text-legal-disclaimer font-legal-disclaimer text-on-surface-variant mb-1">
              <span>Jurisprudence Review</span>
              <span className="text-tertiary font-semibold">Active Article</span>
            </div>
            <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
              <div
                className="bg-tertiary h-full transition-all duration-150"
                style={{ width: `${readingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Chambers Advisory / Callout Box */}
      <div className="p-space-lg rounded-DEFAULT bg-surface-container-lowest border-l-2 border-secondary-container relative overflow-hidden shadow-2xl">
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-secondary-container/10 rounded-full blur-xl pointer-events-none"></div>

        <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase mb-space-sm">
          <span className="material-symbols-outlined text-[18px]">gavel</span>
          <span>Chambers Advisory</span>
        </div>

        <h4 className="font-subheading-serif text-subheading-serif text-on-surface font-semibold mb-space-xs">
          Need to discuss your matter?
        </h4>

        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
          Chambers provides pre-litigation guidance, structured reply drafting, and trial representation before Delhi Courts.
        </p>

        {/* Direct Call / WhatsApp Pair */}
        <div className="bg-surface-container-high/60 p-space-sm rounded-DEFAULT mb-space-md space-y-2 border border-outline-variant/20">
          <a
            href={`tel:${siteConfig.phone}`}
            data-track="call_click"
            data-track-location="article_sidebar"
            className="flex items-center gap-2 text-on-surface hover:text-tertiary transition-colors"
          >
            <span className="material-symbols-outlined text-tertiary text-[18px]">call</span>
            <span className="font-label-md text-[13px] font-semibold">{siteConfig.phone}</span>
          </a>
          <a
            href={whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-track-location="article_sidebar"
            className="flex items-center gap-2 text-on-surface hover:text-emerald-400 transition-colors"
          >
            <span className="material-symbols-outlined text-emerald-400 text-[18px]">chat</span>
            <span className="font-label-md text-[13px] font-semibold">WhatsApp Desk</span>
          </a>
        </div>

        <Link
          className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-secondary-container hover:bg-on-secondary text-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT transition-all shadow-md"
          href="/contact/"
        >
          <span>Book Consultation</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </aside>
  );
}
