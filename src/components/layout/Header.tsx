"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Practice Areas", href: "/practice-areas/" },
    { label: "Courts", href: "/courts/" },
    { label: "Who We Help", href: "/#who-we-help" },
    { label: "Our Approach", href: "/#our-approach" },
    { label: "Meet the Advocate", href: "/about/" },
    { label: "Legal Insights", href: "/legal-insights/" },
    { label: "FAQ", href: "/faqs/" },
    { label: "Contact", href: "/contact/" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container/95 backdrop-blur-md border-b border-tertiary/20 shadow-lg">
      {/* Top Bar for Desktop */}
      <div className="bg-surface-container-lowest/90 border-b border-outline-variant/30 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between text-on-surface-variant font-eyebrow text-[11px] tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Supreme Court of India &amp; Delhi High Court Jurisdiction
          </span>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phoneDigits || siteConfig.phone}`}
              data-track="call_click"
              data-track-location="header"
              className="hover:text-tertiary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px] text-tertiary">call</span>
              <span>Registry Direct: {siteConfig.phone}</span>
            </a>
            {Boolean(siteConfig.enrollment) && (
              <span className="text-tertiary font-semibold">Enrollment: {siteConfig.enrollment}</span>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Compact Height h-16 / 64px) */}
      <div className="h-16 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo Wordmark (shrink-0 to prevent compression) */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 border border-tertiary/40 bg-surface-container-low flex items-center justify-center text-tertiary group-hover:border-tertiary transition-colors shadow-inner">
            <span className="material-symbols-outlined text-[20px]">balance</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-[18px] xl:text-[20px] tracking-wide text-on-surface uppercase leading-none group-hover:text-tertiary transition-colors">
              Shubham Singh
            </span>
            <span className="font-eyebrow text-[10px] xl:text-[11px] tracking-wider text-tertiary uppercase mt-1 leading-none">
              Advocate • Delhi
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links (Single line, whitespace-nowrap, controlled gap) */}
        <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5 h-full min-w-0">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`h-full flex items-center font-label-md text-[11px] xl:text-[11.5px] 2xl:text-[12px] uppercase whitespace-nowrap tracking-wide transition-colors border-b-2 ${
                  active
                    ? "text-tertiary border-tertiary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Profile (shrink-0) */}
        <div className="flex items-center gap-3 shrink-0 self-center">
          <Link
            href="/contact/"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 bg-secondary-container hover:bg-on-secondary text-secondary-fixed hover:text-on-surface font-label-md text-[11px] xl:text-[12px] uppercase whitespace-nowrap rounded-none border border-secondary/30 transition-colors tracking-wide shadow-md leading-none self-center"
          >
            Book Consultation
          </Link>
          <div className="relative shrink-0 hidden xl:flex items-center self-center">
            <Image
              alt="Profile photo of Advocate Shubham Singh"
              src="/images/stitch/shubham_singh_profile_mobile.jpeg"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover border border-tertiary/40 shadow-sm"
            />
          </div>
          <div className="xl:hidden flex items-center self-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
