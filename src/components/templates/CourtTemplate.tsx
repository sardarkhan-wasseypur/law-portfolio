"use client";

import Image from "next/image";
import Link from "next/link";
import { CourtData } from "@/content/courts/types";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

interface CourtTemplateProps {
  court: CourtData;
}

export function CourtTemplate({ court }: CourtTemplateProps) {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION WITH PHOTO ARCHITECTURE */}
      <section className="relative w-full -mt-20 pt-32 pb-24 overflow-hidden bg-primary-container">
        {/* Atmospheric Courtroom Visual Scrim Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            alt={court.name}
            src={court.heroImageSrc}
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/90 to-primary-container/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-primary-container/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb Bar */}
          <nav className="flex items-center gap-2 mb-6">
            {court.breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-tertiary text-body-sm">/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-eyebrow text-eyebrow uppercase text-on-surface-variant hover:text-tertiary transition-colors tracking-widest"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="font-eyebrow text-eyebrow uppercase text-tertiary tracking-widest">
                    {item.name}
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Authority Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-tertiary"></span>
            <p className="font-subheading-serif text-subheading-serif italic text-tertiary tracking-wider">
              {court.heroTagline}
            </p>
          </div>

          {/* Main Display H1 Headline */}
          <h1 className="font-display-lg text-display-lg uppercase text-on-surface tracking-wider max-w-4xl mb-6">
            {court.h1}
          </h1>

          {/* Executive Subtitle */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed mb-10">
            {court.heroSubtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              className="bg-secondary-container hover:bg-on-secondary text-secondary-fixed hover:text-on-surface font-label-md text-label-md uppercase px-8 py-3.5 shadow-xl transition-all duration-200 tracking-wider flex items-center gap-3"
              href="/contact/"
            >
              <span className="material-symbols-outlined text-[18px]">account_balance</span>
              Request Chamber Consultation
            </Link>
            <Link
              className="bg-surface-container-high hover:bg-tertiary hover:text-on-tertiary text-tertiary font-label-md text-label-md uppercase px-8 py-3.5 shadow-md transition-all duration-200 tracking-wider flex items-center gap-3"
              href="/contact/"
            >
              <span className="material-symbols-outlined text-[18px]">emergency</span>
              Emergency Vacation / Urgent Listing
            </Link>
          </div>

          {/* Quick Roster Metric Chips Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {court.metrics.map((chip, index) => (
              <div key={index} className="bg-surface-container-low/90 backdrop-blur p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    {chip.icon}
                  </span>
                  <span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">
                    {chip.category}
                  </span>
                </div>
                <p className="font-subheading-serif text-subheading-serif text-on-surface font-medium">
                  {chip.title}
                </p>
                <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                  {chip.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: TYPES OF MATTERS HANDLED */}
      <section className="w-full bg-surface-container-lowest py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  corporate_fare
                </span>
                <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary">
                  {court.mattersEyebrow}
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface">
                {court.mattersTitle}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {court.mattersDescription}
            </p>
          </div>

          {/* 6-Grid Matters Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {court.matters.map((matter, index) => (
              <Link
                key={index}
                href={matter.href}
                className="bg-surface-container-low p-8 hover:bg-surface-container transition-colors duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center mb-6 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      {matter.icon}
                    </span>
                  </div>
                  <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary mb-2 block">
                    {matter.category}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                    {matter.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {matter.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between text-outline">
                  <span className="font-label-md text-label-md uppercase text-tertiary">
                    {matter.rosterText}
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-tertiary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FILING & HEARING PROCESS */}
      <section className="w-full bg-[#f7f4ee] py-24 text-primary-container">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-16 max-w-3xl">
            <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-[#7a1f3d] font-bold block mb-2">
              {court.processEyebrow}
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase text-primary-container mb-4">
              {court.processTitle}
            </h2>
            <p className="font-body-lg text-body-lg text-primary-container/80">
              {court.processDescription}
            </p>
          </div>

          {/* 4-Stage Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {court.processSteps.map((step, index) => (
              <div key={index} className="bg-white/70 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline-md text-headline-md text-[#7a1f3d] font-bold">
                      {step.number}
                    </span>
                    <span className="font-eyebrow text-eyebrow uppercase bg-primary-container/5 px-2.5 py-1 text-primary-container tracking-wider">
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="font-subheading-serif text-subheading-serif uppercase text-primary-container font-semibold mb-3">
                    {step.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-primary-container/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-8 pt-4">
                  <span className="font-legal-disclaimer text-legal-disclaimer text-primary-container/60 uppercase">
                    Timeline: {step.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-primary-container py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary block mb-2">
              {court.faqsEyebrow}
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface mb-3">
              {court.faqsTitle}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
              {court.faqsDescription}
            </p>
          </div>

          <FAQAccordion items={court.faqs} />
        </div>
      </section>

      {/* SECTION 5: LOCATION & COORDINATES CARD */}
      <section className="w-full bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col mb-12">
            <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary block mb-2">
              Court Coordinates &amp; Access
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface">
              {court.location.complexTitle}
            </h2>
          </div>

          {/* Split Architectural Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Side: Transit & Gate Details */}
            <div className="lg:col-span-7 bg-surface-container p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-tertiary text-[26px]">
                    apartment
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide">
                    Complex &amp; Access Protocol
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-surface-container-lowest p-5">
                    <span className="font-eyebrow text-eyebrow uppercase text-tertiary block mb-1">
                      Official Address
                    </span>
                    <p className="font-body-md text-body-md text-on-surface font-medium mb-1">
                      {court.name}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {court.location.officialAddress}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-5">
                    <span className="font-eyebrow text-eyebrow uppercase text-tertiary block mb-1">
                      Chambers Location
                    </span>
                    <p className="font-body-md text-body-md text-on-surface font-medium mb-1">
                      Chamber Location
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {court.location.chambersLocation}
                    </p>
                  </div>
                </div>

                {/* Transit & Gates Matrix */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">
                      meeting_room
                    </span>
                    <div>
                      <span className="font-label-md text-label-md uppercase text-on-surface block">
                        Entry Gates:
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {court.location.entryGates}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">
                      directions_subway
                    </span>
                    <div>
                      <span className="font-label-md text-label-md uppercase text-on-surface block">
                        Nearest Metro Stations:
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {court.location.nearestMetro}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">
                      local_parking
                    </span>
                    <div>
                      <span className="font-label-md text-label-md uppercase text-on-surface block">
                        Litigant Parking &amp; Entry:
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {court.location.parkingInfo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-outline-variant/20">
                <span className="font-eyebrow text-eyebrow uppercase text-tertiary">
                  Direct Phone: {court.location.directPhone}
                </span>
                <span className="text-outline">•</span>
                <span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">
                  Hours: {court.location.hours}
                </span>
              </div>
            </div>

            {/* Right Side: Map Card */}
            <div className="lg:col-span-5 bg-surface-container-high p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary">
                    Judicial Precinct
                  </span>
                  <span className="bg-surface-container-lowest text-tertiary font-label-md text-label-md px-3 py-1">
                    {court.location.gpsCoordinates}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  GPS &amp; Navigation
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  {court.location.officialAddress}
                </p>
              </div>

              {/* Map View Container */}
              <div className="w-full h-64 relative mb-6 overflow-hidden shadow-inner bg-surface-container-lowest">
                <Image
                  alt={`Map location of ${court.name}`}
                  src={court.location.mapImageSrc}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary-container/30 pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 px-3 py-1.5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    pin_drop
                  </span>
                  <span className="font-label-md text-label-md uppercase text-on-surface">
                    {court.name}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  className="font-label-md text-label-md uppercase text-tertiary hover:text-on-surface transition-colors flex items-center gap-2"
                  href={court.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Open in Google Maps</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
                <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                  Court Precinct Entry
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA BANNER */}
      <section className="w-full bg-[#7a1f3d] py-16 text-on-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-[#ffd9df] block mb-2">
              Advocate Chamber Representation
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase text-white mb-3 leading-tight">
              {court.ctaTitle}
            </h2>
            <p className="font-body-md text-body-md text-white/85">
              {court.ctaDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <Link
              className="bg-surface-container-lowest hover:bg-surface text-on-surface font-label-md text-label-md uppercase px-7 py-4 text-center tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
              href={`tel:${court.phone}`}
              data-track="call_click"
              data-track-location="cta_band"
            >
              <span className="material-symbols-outlined text-tertiary text-[18px]">call</span>
              {court.phone}
            </Link>
            <a
              className="bg-surface-bright/20 hover:bg-white/20 text-white font-label-md text-label-md uppercase px-7 py-4 text-center tracking-wider transition-colors flex items-center justify-center gap-2"
              href={court.whatsapp}
              data-track="whatsapp_click"
              data-track-location="cta_band"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Matter Dossier
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
