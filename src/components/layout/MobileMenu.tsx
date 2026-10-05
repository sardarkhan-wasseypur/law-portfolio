"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";

interface MobileMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function MobileMenu({ isOpen: externalIsOpen, onClose }: MobileMenuProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isPracticeAccordionOpen, setIsPracticeAccordionOpen] = useState(false);

  const isControlled = typeof externalIsOpen !== "undefined";
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;

  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    if (isControlled) {
      onClose?.();
    } else {
      setInternalIsOpen(false);
    }
  }, [isControlled, onClose]);

  const handleToggle = () => {
    if (isControlled) {
      if (isOpen) {
        onClose?.();
      }
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus close button on open
      setTimeout(() => closeBtnRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
          return;
        }

        if (e.key === "Tab" && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, handleClose]);

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="Toggle Navigation Menu"
        className="xl:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface-variant hover:text-on-surface focus-visible:outline-2 focus-visible:outline-tertiary"
      >
        <span className="material-symbols-outlined text-[24px]">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 bg-surface text-on-surface overflow-y-auto flex flex-col pb-8 pt-safe pb-safe min-h-screen select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col w-full text-on-surface pb-8">
            {/* Top Brand & Close Header */}
            <div className="flex flex-col w-full px-margin-mobile pt-3 pb-4 bg-primary-container">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="font-headline-xl-mobile text-headline-xl-mobile tracking-wide text-primary-fixed">
                    SHUBHAM SINGH
                  </span>
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase mt-0.5">
                    Supreme Court &amp; Delhi High Court
                  </span>
                </div>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={handleClose}
                  aria-label="Close navigation"
                  className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant active:scale-95 transition-transform duration-150"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>

            {/* Profile & Credentials Card */}
            <div className="px-margin-mobile py-space-sm">
              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center gap-space-md">
                <div className="relative shrink-0">
                  {/* REPLACE with real photo */}
                  <Image
                    alt="Advocate Shubham Singh"
                    src="/images/stitch/shubham_singh_profile_mobile.jpeg"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container text-[11px] font-bold">
                      verified
                    </span>
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {Boolean(siteConfig.enrollment) && (
                      <>
                        <span className="font-eyebrow text-eyebrow text-tertiary">
                          Enrollment No: {siteConfig.enrollment}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      </>
                    )}
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-[11px]">
                      Advocate
                    </span>
                  </div>
                  <span className="font-subheading-serif text-subheading-serif text-on-surface truncate">
                    {siteConfig.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Advocate in Delhi
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Options */}
            <nav className="flex flex-col px-margin-mobile mt-space-xs space-y-1">
              <Link
                href="/"
                onClick={handleClose}
                className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg bg-surface-container text-tertiary group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-tertiary">gavel</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider font-bold">
                    Home
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              </Link>

              <Link
                href="/about/"
                onClick={handleClose}
                className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                    account_balance
                  </span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">
                    About / Chambers Profile
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline-variant">
                  arrow_forward_ios
                </span>
              </Link>

              {/* Accordion Block */}
              <div className="flex flex-col rounded-lg bg-surface-container-low overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsPracticeAccordionOpen((prev) => !prev)}
                  aria-expanded={isPracticeAccordionOpen}
                  className="flex items-center justify-between w-full p-3.5 min-h-[44px] text-left text-on-surface hover:bg-surface-container transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-tertiary">
                      balance
                    </span>
                    <span className="font-label-md text-label-md uppercase tracking-wider">
                      Practice Areas
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-eyebrow px-2 py-0.5 rounded bg-tertiary-container text-tertiary uppercase">
                      5 Fields
                    </span>
                    <span
                      className={`material-symbols-outlined text-[18px] text-outline-variant transition-transform duration-200 ${
                        isPracticeAccordionOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </div>
                </button>
                {isPracticeAccordionOpen && (
                  <div className="flex flex-col pl-11 pr-3 pb-3 pt-1 space-y-2 bg-surface-container-lowest">
                    <Link
                      href="/practice-areas/criminal-lawyer-delhi/"
                      onClick={handleClose}
                      className="flex items-center justify-between py-1.5 min-h-[44px] text-on-surface-variant hover:text-tertiary transition-colors"
                    >
                      <span className="font-body-sm text-body-sm">
                        Criminal Defense &amp; Special Leave Petitions
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-outline-variant">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/practice-areas/cheque-bounce-lawyer-delhi/"
                      onClick={handleClose}
                      className="flex items-center justify-between py-1.5 min-h-[44px] text-on-surface-variant hover:text-tertiary transition-colors"
                    >
                      <span className="font-body-sm text-body-sm">
                        Section 138 NI Act Corporate Litigation
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-outline-variant">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/practice-areas/divorce-family-lawyer-delhi/"
                      onClick={handleClose}
                      className="flex items-center justify-between py-1.5 min-h-[44px] text-on-surface-variant hover:text-tertiary transition-colors"
                    >
                      <span className="font-body-sm text-body-sm">
                        Matrimonial &amp; Custody Appellate Matters
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-outline-variant">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/practice-areas/civil-lawyer-delhi/"
                      onClick={handleClose}
                      className="flex items-center justify-between py-1.5 min-h-[44px] text-on-surface-variant hover:text-tertiary transition-colors"
                    >
                      <span className="font-body-sm text-body-sm">
                        Civil Disputes &amp; Suits
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-outline-variant">
                        chevron_right
                      </span>
                    </Link>
                    <Link
                      href="/practice-areas/trademark-lawyer-delhi/"
                      onClick={handleClose}
                      className="flex items-center justify-between py-1.5 min-h-[44px] text-on-surface-variant hover:text-tertiary transition-colors"
                    >
                      <span className="font-body-sm text-body-sm">
                        Trademark &amp; IP Protection
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-outline-variant">
                        chevron_right
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/courts/"
                onClick={handleClose}
                className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                    assured_workload
                  </span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">
                    Courts of Practice
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline-variant">
                  arrow_forward_ios
                </span>
              </Link>

              <Link
                href="/legal-insights/"
                onClick={handleClose}
                className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                    menu_book
                  </span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">
                    Legal Insights &amp; Treatises
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-eyebrow px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                    140+
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">
                    arrow_forward_ios
                  </span>
                </div>
              </Link>

              <Link
                href="/contact/"
                onClick={handleClose}
                className="flex items-center justify-between p-3.5 min-h-[44px] rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
                    mail
                  </span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">
                    Contact &amp; Chambers Intake
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline-variant">
                  arrow_forward_ios
                </span>
              </Link>
            </nav>

            {/* Book Consultation & Urgent Mentioning Card */}
            <div className="px-margin-mobile mt-space-md flex flex-col space-y-space-sm">
              <Link
                href="/contact/"
                onClick={handleClose}
                className="flex items-center justify-center h-[50px] min-h-[44px] w-full rounded-lg bg-secondary-container text-on-secondary-container shadow-md font-label-md text-label-md uppercase tracking-widest active:opacity-90 transition-opacity gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Book Chamber Consultation</span>
              </Link>

              <div className="p-3.5 rounded-lg bg-tertiary-container flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      emergency
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-eyebrow text-[11px] text-tertiary uppercase">
                      Urgent Mentioning Hotline
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      data-track="call_click"
                      data-track-location="mobile_menu"
                      className="font-body-sm text-body-sm text-on-background font-semibold truncate hover:text-tertiary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <span className="font-legal-disclaimer text-legal-disclaimer text-tertiary/80 uppercase tracking-widest text-[10px]">
                  Vacation Bench
                </span>
              </div>
            </div>

            {/* Chamber Coordinates Box */}
            <div className="px-margin-mobile mt-space-md">
              <div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col space-y-2.5">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-tertiary mt-0.5 shrink-0">
                    location_on
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-eyebrow text-[11px] text-on-surface-variant uppercase tracking-wider">
                      Chamber Coordinates
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {siteConfig.address}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">
                    desk
                  </span>
                  <div className="flex items-center justify-between w-full min-w-0">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Chambers Direct Line:
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      data-track="call_click"
                      data-track-location="mobile_menu"
                      className="font-body-sm text-body-sm text-on-surface font-semibold hover:text-tertiary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Call & WhatsApp Buttons */}
            <div className="px-margin-mobile mt-space-md">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a
                  href={`tel:${siteConfig.phone}`}
                  data-track="call_click"
                  data-track-location="mobile_menu"
                  className="flex items-center justify-center min-h-[44px] py-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider gap-2 active:bg-surface-bright transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    call
                  </span>
                  <span>Call Chambers</span>
                </a>
                <a
                  href={whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                  data-track-location="mobile_menu"
                  className="flex items-center justify-center min-h-[44px] py-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider gap-2 active:bg-surface-bright transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    chat
                  </span>
                  <span>Briefing WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Bar Council Compliance Footer Box */}
            <div className="px-margin-mobile mt-space-lg mb-2">
              <div className="p-3 rounded-lg bg-surface-container-lowest text-center">
                <p className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant leading-relaxed">
                  <strong className="font-bold text-on-surface">
                    Bar Council of India Rule 36 Disclosure:
                  </strong>{" "}
                  This platform serves solely archival and informational reference for ongoing Supreme
                  Court &amp; Delhi High Court matters. By accessing this chamber briefing, the user
                  acknowledges seeking information independently without solicitation, advertisement, or
                  personal inducement.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
