import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t-2 border-tertiary/20 text-on-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-outline-variant/30">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                account_balance
              </span>
              <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary">
                Chamber &amp; Registry
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">
              Chamber No. 412, Lawyers Chambers Block
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">
              Delhi High Court, Sher Shah Road
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              New Delhi – 110503
            </p>
            <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-1">
              <span className="font-eyebrow text-eyebrow uppercase tracking-wider text-outline">
                Direct Office Line
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                data-track="call_click"
                data-track-location="footer"
                className="font-body-md text-body-md text-on-surface hover:text-tertiary transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                gavel
              </span>
              <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary">
                Courts of Practice
              </span>
            </div>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link
                  href="/courts/supreme-court-advocate-delhi/"
                  className="hover:text-tertiary transition-colors"
                >
                  Supreme Court of India (Appellate &amp; Writ)
                </Link>
              </li>
              <li>
                <Link
                  href="/courts/delhi-high-court-advocate/"
                  className="hover:text-tertiary transition-colors"
                >
                  Delhi High Court (Original &amp; Appellate)
                </Link>
              </li>
              <li>
                <Link
                  href="/courts/delhi-district-courts-advocate/"
                  className="hover:text-tertiary transition-colors"
                >
                  Delhi District Courts (Commercial Divisions)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                menu_book
              </span>
              <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary">
                Core Practice Areas
              </span>
            </div>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link
                  href="/practice-areas/criminal-lawyer-delhi/"
                  className="hover:text-tertiary transition-colors"
                >
                  Criminal Law &amp; Writ Petitions
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/civil-lawyer-delhi/"
                  className="hover:text-tertiary transition-colors"
                >
                  Civil Disputes &amp; Suits
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/divorce-family-lawyer-delhi/"
                  className="hover:text-tertiary transition-colors"
                >
                  Matrimonial &amp; Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/trademark-lawyer-delhi/"
                  className="hover:text-tertiary transition-colors"
                >
                  Trademark &amp; IP Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/cheque-bounce-lawyer-delhi/"
                  className="hover:text-tertiary transition-colors"
                >
                  Cheque Bounce (Section 138 NI Act)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-secondary text-[20px]">
                notification_important
              </span>
              <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                Urgent Mentioning
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              For urgent writ listing, bail applications, or stay petitions before vacation benches:
            </p>
            <div className="bg-surface-container-low p-4 border border-outline-variant/40">
              <span className="font-eyebrow text-eyebrow uppercase tracking-wider text-outline block mb-1">
                Chamber Duty Counsel
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                data-track="call_click"
                data-track-location="footer"
                className="font-label-md text-label-md text-on-surface block mb-2 hover:text-tertiary transition-colors"
              >
                {siteConfig.phone}
              </a>
              <span className="font-legal-disclaimer text-legal-disclaimer text-outline block">
                Available for urgent listing notices
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-headline-md text-headline-md tracking-wider text-on-surface uppercase">
              Shubham Singh
            </span>
            <span className="font-body-sm text-body-sm text-outline">
              © {new Date().getFullYear()}. All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 font-legal-disclaimer text-legal-disclaimer uppercase text-outline">
            <Link href="/privacy-policy/" className="hover:text-tertiary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms/" className="hover:text-tertiary transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/disclaimer/" className="hover:text-tertiary transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-surface-container-high border-t border-tertiary/20 py-4 pb-20 md:pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant text-center leading-relaxed">
            <strong className="text-tertiary uppercase tracking-wider">
              Bar Council Compliance Notice:
            </strong>{" "}
            Information on this website is for general awareness only and is not legal advice or solicitation under Bar Council of India Rule 36. By accessing this chamber portal, the user acknowledges that they are seeking information voluntarily without any advertisement, personal communication, solicitation, or inducement by Advocate Shubham Singh or his associates.
          </p>
        </div>
      </div>
    </footer>
  );
}
