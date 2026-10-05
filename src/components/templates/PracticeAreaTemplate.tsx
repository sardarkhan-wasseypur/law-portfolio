import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PracticePageData } from "@/content/practice/types";
import { PracticeIntakeForm } from "./PracticeIntakeForm";
import { PracticeFaqList } from "./PracticeFaqList";

interface Props {
  data: PracticePageData;
}

export function PracticeAreaTemplate({ data }: Props) {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Top Hero / Banner Section */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden">
        {/* Atmospheric architectural background overlay */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
          <Image
            alt="Monolithic view of the Supreme Court of India building at dusk"
            src="/images/stitch/practice_hero_supreme_court.jpg"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-surface-container-lowest/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/90 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2.5 font-label-md text-label-md uppercase tracking-wider text-outline mb-8">
            {data.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-tertiary transition-colors"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-tertiary font-semibold">
                    {crumb.name}
                  </span>
                )}
                {idx < data.breadcrumbs.length - 1 && (
                  <span className="text-tertiary/60">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Grid Hero Typography */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-surface-container-low mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em]">
                {data.heroTagline}
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight mb-6">
              {data.h1}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-3xl">
              {data.heroDescription}
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                className="inline-flex items-center gap-2.5 bg-secondary-container hover:bg-on-secondary text-secondary-fixed hover:text-on-surface font-label-md text-label-md uppercase px-6 py-3.5 tracking-wider transition-colors shadow-lg"
                href={`tel:${data.sidebar.phone}`}
                data-track="call_click"
                data-track-location="hero"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Chambers: {data.sidebar.phone}</span>
              </a>
              <a
                className="inline-flex items-center gap-2.5 bg-surface-container hover:bg-surface-container-high text-tertiary hover:text-tertiary-fixed font-label-md text-label-md uppercase px-6 py-3.5 tracking-wider transition-colors shadow-sm"
                href={data.sidebar.whatsapp}
                data-track="whatsapp_click"
                data-track-location="hero"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Urgent Listing</span>
              </a>
            </div>

            {/* 24/7 Remand Alert Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-low text-on-surface-variant font-legal-disclaimer text-legal-disclaimer uppercase tracking-wider">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                emergency_home
              </span>
              <span>{data.alertBadge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body: Two-Column Split Layout */}
      <section className="w-full bg-surface py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: Main Chambers Briefing (~68% width / col-span-8) */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Block 1: Common Situations / Jurisdictional Triggers */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                    {data.triggersEyebrow}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.triggersTitle}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.triggers.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-surface-container p-6 flex flex-col justify-between shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-wider">
                            {item.number}
                          </span>
                          <span className="material-symbols-outlined text-secondary text-[22px]">
                            {item.icon}
                          </span>
                        </div>
                        <h3 className="font-subheading-serif text-subheading-serif text-on-surface mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="mt-4 pt-3 flex items-center gap-2 text-tertiary font-label-md text-label-md uppercase tracking-wider hover:underline"
                        >
                          <span>{item.linkText}</span>
                          <span className="material-symbols-outlined text-[14px]">
                            arrow_forward
                          </span>
                        </Link>
                      ) : (
                        <div className="mt-4 pt-3 flex items-center gap-2 text-tertiary font-label-md text-label-md uppercase tracking-wider">
                          <span>{item.linkText}</span>
                          <span className="material-symbols-outlined text-[14px]">
                            arrow_forward
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 2: Sub-Services Grid (3 cards) */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                    {data.subServicesEyebrow}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.subServicesTitle}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.subServices.map((card, idx) => (
                    <Link
                      key={idx}
                      href={card.href}
                      className="bg-surface-container-low p-6 flex flex-col justify-between transition-colors shadow-sm hover:bg-surface-container group block"
                    >
                      <div>
                        <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-tertiary mb-4">
                          <span className="material-symbols-outlined text-[20px]">
                            {card.icon}
                          </span>
                        </div>
                        <h3 className="font-subheading-serif text-subheading-serif text-on-surface mb-3 group-hover:text-tertiary transition-colors">
                          {card.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                          {card.description}
                        </p>
                      </div>
                      <div className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest pt-2 flex items-center gap-1">
                        <span>{card.tag}</span>
                        <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                          chevron_right
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Block 3: Defense Protocol & Procedural Timeline */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-1 mb-8">
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                    {data.timelineEyebrow}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.timelineTitle}
                  </h2>
                </div>
                <div className="relative pl-8 md:pl-10 space-y-8">
                  <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-surface-variant"></div>
                  {data.timelineSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative flex flex-col md:flex-row gap-4 md:items-start group"
                    >
                      <div className="absolute -left-8 md:-left-10 top-0.5 w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            step.dotColor === "secondary"
                              ? "bg-secondary"
                              : "bg-tertiary"
                          }`}
                        ></div>
                      </div>
                      <div className="bg-surface-container p-6 w-full shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`font-eyebrow text-eyebrow uppercase tracking-widest ${
                              step.dotColor === "secondary"
                                ? "text-secondary"
                                : "text-tertiary"
                            }`}
                          >
                            {step.phase}
                          </span>
                          <span className="font-label-md text-label-md text-outline">
                            {step.time}
                          </span>
                        </div>
                        <h4 className="font-subheading-serif text-subheading-serif text-on-surface mb-2">
                          {step.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 4: Essential Docket Checklist Card */}
              <div className="bg-surface-container-high p-8 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-tertiary"></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-tertiary text-[24px]">
                    inventory_2
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.checklistTitle}
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {data.checklistDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.checklistItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 bg-surface-container p-4 ${
                        idx === data.checklistItems.length - 1 &&
                        data.checklistItems.length % 2 !== 0
                          ? "md:col-span-2"
                          : ""
                      }`}
                    >
                      <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 5: Judicial Forums */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                    {data.forumsEyebrow}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.forumsTitle}
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {data.forums.map((forum, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-surface-container hover:bg-surface-container-high transition-colors flex flex-col justify-between gap-3 shadow-sm"
                    >
                      <span
                        className={`material-symbols-outlined text-[22px] ${
                          forum.iconColor === "secondary"
                            ? "text-secondary"
                            : forum.iconColor === "outline"
                            ? "text-outline"
                            : "text-tertiary"
                        }`}
                      >
                        {forum.icon}
                      </span>
                      <div>
                        <span className="font-label-md text-label-md text-on-surface block mb-1">
                          {forum.name}
                        </span>
                        <span className="font-legal-disclaimer text-legal-disclaimer text-outline block">
                          {forum.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 6: Detailed Practice Overview & Legal Framework */}
              {data.detailedSections && data.detailedSections.length > 0 && (
                <div className="flex flex-col space-y-10 border-t border-b border-outline-variant/30 py-10">
                  {data.detailedSections.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <h3 className="font-subheading-serif text-subheading-serif text-on-surface font-semibold text-xl">
                        {section.title}
                      </h3>
                      {section.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Block 7: Frequently Asked Questions Accordion */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                    {data.faqsEyebrow}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.faqsTitle}
                  </h2>
                </div>
                <PracticeFaqList faqs={data.faqs} />
              </div>

              {/* Block 8: Related Practice Guides & Insights */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                    {data.insightsEyebrow}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.insightsTitle}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.insights.map((card, idx) => (
                    <Link
                      key={idx}
                      href={card.href}
                      className="bg-surface-container p-6 flex flex-col justify-between shadow-sm hover:bg-surface-container-high transition-colors group block"
                    >
                      <div>
                        <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest block mb-2">
                          {card.category}
                        </span>
                        <h4 className="font-subheading-serif text-subheading-serif text-on-surface mb-3 line-clamp-3 group-hover:text-tertiary transition-colors">
                          {card.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-4">
                          {card.excerpt}
                        </p>
                      </div>
                      <div className="pt-4 flex items-center justify-between text-tertiary">
                        <span className="font-label-md text-label-md uppercase tracking-wider">
                          Read Chamber Brief
                        </span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          arrow_outward
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Intake & Quick Contact Sidebar (~32% width / col-span-4) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* Urgent Notice Strip */}
              <div className="bg-surface-container-high p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    notification_important
                  </span>
                  <div>
                    <span className="font-label-md text-label-md text-secondary uppercase tracking-wider block mb-1">
                      Roster Deadline Notice
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {data.sidebar.rosterNotice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidential Intake Docket Card */}
              <div
                className="bg-surface-container p-6 shadow-xl relative overflow-hidden"
                id="intake-form"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary-container"></div>
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                    Chambers Registry
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    {data.sidebar.formTitle}
                  </h3>
                  <p className="font-legal-disclaimer text-legal-disclaimer text-outline mt-1">
                    {data.sidebar.formSubtitle}
                  </p>
                </div>

                <PracticeIntakeForm />
              </div>

              {/* Direct Chambers Helpline Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  className="flex items-center justify-between p-4 bg-surface-container hover:bg-surface-container-high transition-colors shadow-sm group"
                  href={`tel:${data.sidebar.phone}`}
                  data-track="call_click"
                  data-track-location="sidebar"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <span className="font-eyebrow text-eyebrow uppercase text-outline tracking-wider block">
                        Chamber Direct Line
                      </span>
                      <span className="font-label-md text-label-md text-on-surface">
                        {data.sidebar.phone}
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors text-[20px]">
                    chevron_right
                  </span>
                </a>
                <a
                  className="flex items-center justify-between p-4 bg-surface-container hover:bg-surface-container-high transition-colors shadow-sm group"
                  href={data.sidebar.whatsapp}
                  data-track="whatsapp_click"
                  data-track-location="sidebar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </div>
                    <div>
                      <span className="font-eyebrow text-eyebrow uppercase text-outline tracking-wider block">
                        Emergency WhatsApp Dossier
                      </span>
                      <span className="font-label-md text-label-md text-on-surface">
                        Send FIR / Summons Copy
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors text-[20px]">
                    chevron_right
                  </span>
                </a>
              </div>

              {/* Chamber Office Location Box */}
              <div className="p-4 bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                  Office Registry
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {data.sidebar.officeAddress}
                </p>
                <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                  Consultations strictly by prior bench appointment.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Review & Statutory Verification Block */}
      <section className="w-full bg-surface-container-low py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface-container flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[22px]">
                verified
              </span>
            </div>
            <div>
              <span className="font-label-md text-label-md text-on-surface block">
                Reviewed by {data.bottomReview.advocateName} • {data.bottomReview.chambers}
              </span>
              <span className="font-legal-disclaimer text-legal-disclaimer text-outline block">
                Practicing Counsel, Supreme Court of India &amp; Delhi High Court • Last reviewed: {data.bottomReview.lastReviewed}
              </span>
            </div>
          </div>
          <div className="max-w-md">
            <p className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant leading-relaxed text-right md:text-left">
              {data.bottomReview.disclaimerText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
