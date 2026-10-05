import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";
import { ContactMobileAccordions } from "@/components/sections/ContactMobileAccordions";

export const metadata = buildMetadata({
  title: "Contact & Chambers | Advocate Shubham Singh",
  description:
    "Contact Law Office of Shubham Singh for legal consultations in Connaught Place, New Delhi.",
  path: "/contact/",
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.siteUrl}/` },
    { name: "Contact & Chambers", url: `${siteConfig.siteUrl}/contact/` },
  ]);

  return (
    <div className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)] text-on-surface">
      {/* Breadcrumb Schema Only - LegalService is rendered globally in layout.tsx */}
      <JsonLd data={breadcrumbSchema} />

      {/* MOBILE LAYOUT (below 768px) */}
      <div className="block md:hidden w-full pb-20">
        {/* Compact Breadcrumb Sub-strip */}
        <div className="px-margin-mobile py-2.5 bg-surface-container-lowest flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-1.5 text-legal-disclaimer font-legal-disclaimer text-on-surface-variant">
            <span>Home</span>
            <span className="text-tertiary">/</span>
            <span className="text-tertiary uppercase tracking-wider font-semibold">Contact &amp; Chambers</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container px-2 py-0.5 rounded-full">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-legal-disclaimer text-legal-disclaimer text-tertiary font-semibold tracking-wider uppercase">Chambers Open</span>
          </div>
        </div>

        {/* Editorial Section Title Banner */}
        <section className="px-margin-mobile pt-space-lg pb-space-md flex flex-col relative overflow-hidden bg-gradient-to-b from-primary-container via-surface-container-lowest to-surface">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-tertiary text-[16px]">balance</span>
            <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em]">Confidential Chamber Intake</span>
          </div>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface leading-tight tracking-tight">
            Chambers &amp; <br /><span className="italic font-normal text-tertiary">Confidential Consultation</span>
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
            Direct intake channel for legal consultations, filings, and dispute advisory.
          </p>

          {/* Quick Tap Touch Action Band */}
          <div className="grid grid-cols-2 gap-2.5 mt-space-md">
            <a
              className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all shadow-md active:scale-[0.98] min-h-[44px]"
              href={`tel:${siteConfig.phoneDigits}`}
              data-track="call_click"
              data-track-location="contact_mobile_banner"
            >
              <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined text-[19px]">call</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant uppercase font-medium">Chambers Desk</span>
                <span className="font-label-md text-[12px] leading-tight text-on-surface font-semibold truncate">{siteConfig.phone}</span>
              </div>
            </a>

            <a
              className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all shadow-md active:scale-[0.98]"
              href={whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)}
              data-track="whatsapp_click"
              data-track-location="contact_mobile_banner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[19px]">chat</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-legal-disclaimer text-legal-disclaimer text-on-secondary-container uppercase font-medium">WhatsApp Desk</span>
                <span className="font-label-md text-[12px] leading-tight text-on-surface font-semibold truncate">{siteConfig.whatsapp}</span>
              </div>
            </a>
          </div>
        </section>

        {/* Visual Divider / Chamber Crest Accent */}
        <div className="relative w-full h-40 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/stitch/court_hero_delhi_high_court.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-primary-container/80 flex items-end p-margin-mobile">
            <div className="flex items-center justify-between w-full">
              <div>
                <span className="font-legal-disclaimer text-legal-disclaimer text-tertiary uppercase tracking-widest block font-bold">New Delhi Chambers</span>
                <p className="font-subheading-serif text-[17px] text-on-surface font-medium leading-none mt-0.5">{siteConfig.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Cards / Chamber Coordinates */}
        <section className="px-margin-mobile py-space-sm flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between">
            <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-wider">Chamber Address</span>
            <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant">Location</span>
          </div>

          {/* Primary Chamber Card */}
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-md relative overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col">
                <span className="font-eyebrow text-[10px] text-tertiary uppercase tracking-widest">Office Address</span>
                <h2 className="font-subheading-serif text-[18px] text-on-surface font-semibold mt-0.5">{siteConfig.name}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  {siteConfig.address}<br />
                  <span className="text-tertiary">{siteConfig.landmark}</span>
                </p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined text-[22px]">account_balance</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-legal-disclaimer text-legal-disclaimer">
              <span className="flex items-center gap-1.5 text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-[15px]">schedule</span>
                Hours: {siteConfig.hours}
              </span>
              <span className="bg-surface-container-highest px-2 py-0.5 rounded text-tertiary">Official Desk</span>
            </div>
          </div>
        </section>

        {/* Arrival & Security */}
        <section className="px-margin-mobile py-space-sm flex flex-col gap-2.5">
          <div className="p-3 rounded-lg bg-surface-container flex items-start gap-2.5">
            <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">info</span>
            <p className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant leading-relaxed">
              Litigants visiting chambers are requested to schedule appointments prior to arrival and carry valid government-issued photo identification.
            </p>
          </div>
        </section>

        {/* Main Confidential Enquiry Form Container */}
        <section className="px-margin-mobile py-space-md flex flex-col">
          <div className="flex items-center justify-between pb-space-sm mb-space-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
              <h2 className="font-subheading-serif text-subheading-serif text-on-surface font-semibold">Contact the Chamber</h2>
            </div>
            <span className="font-eyebrow text-[10px] text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-2 py-0.5 rounded">Consultation Form</span>
          </div>
          <EnquiryForm />
        </section>

        {/* Interactive Map Card */}
        <section className="px-margin-mobile py-space-sm flex flex-col">
          <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-xl flex flex-col">
            <div
              className="w-full h-44 bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: "url('/images/stitch/court_map_delhi_high_court.jpg')" }}
            >
              <div className="absolute inset-0 bg-primary-container/40"></div>
              <div className="relative z-10 flex flex-col items-center bg-surface-container-lowest/90 px-3.5 py-2 rounded-xl shadow-lg backdrop-blur-md">
                <span className="material-symbols-outlined text-secondary text-[26px]">pin_drop</span>
                <span className="font-label-md text-[12px] font-semibold text-on-surface mt-0.5">{siteConfig.name}</span>
                <span className="font-legal-disclaimer text-[10px] text-tertiary">{siteConfig.city}, {siteConfig.country}</span>
              </div>
            </div>
            <div className="p-3.5 flex items-center justify-between bg-surface-container-high">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Chambers Location</span>
                <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant">{siteConfig.city}, {siteConfig.country}</span>
              </div>
              <a
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-tertiary hover:bg-surface-container font-label-md text-[12px] font-semibold shadow active:scale-95 transition-all min-h-[44px]"
                href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Open Maps</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        </section>

        {/* Chamber Protocols Accordions */}
        <ContactMobileAccordions />

        {/* Statutory Bar Compliance Notice Footer */}
        <footer className="mt-space-md pt-space-md pb-12 px-margin-mobile bg-surface-container-lowest flex flex-col gap-3 border-t border-outline-variant/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
            <span className="font-eyebrow text-eyebrow text-on-surface uppercase tracking-wider">Statutory Bar Compliance</span>
          </div>
          <p className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant leading-relaxed">
            This intake gateway is maintained solely to facilitate communication between clients and the office of Advocate {siteConfig.advocateName}. Under Rule 36 of Chapter II of Part VI of the Bar Council of India Rules, advocates are prohibited from soliciting work. No material contained herein constitutes legal advertisement or solicitation.
          </p>
          <div className="flex items-center justify-between pt-2 text-on-surface-variant font-legal-disclaimer text-legal-disclaimer">
            <span>Chambers of {siteConfig.advocateName} © 2026</span>
            {siteConfig.enrollment ? <span className="text-tertiary font-mono">{siteConfig.enrollment}</span> : null}
          </div>
        </footer>
      </div>

      {/* DESKTOP LAYOUT (768px and above) */}
      <div className="hidden md:block w-full">
        {/* Page Header */}
        <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-2xl border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto flex flex-col items-start gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container border border-tertiary/30 rounded-DEFAULT">
              <span className="material-symbols-outlined text-tertiary text-body-sm">gavel</span>
              <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                Chambers Registry &amp; Confidential Intake
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
              Contact &amp; Chambers
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              For confidential chamber briefings, legal consultations, and dispute advisory.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-body-sm text-tertiary-fixed-dim">
              <span className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Direct Registry Gateway Active
              </span>
              <span className="text-outline-variant">•</span>
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </section>

        {/* Main Grid Split (45% Logistics & Directions / 55% Intake Form) */}
        <section className="w-full px-margin-mobile lg:px-margin py-space-2xl bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-start">
            {/* Left Column: Chambers Logistics, Directions & Coordinates */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {/* Card 1: Official Chamber Coordinates */}
              <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex flex-col gap-space-md border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">
                      account_balance
                    </span>
                    <h2 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                      Chamber Address
                    </h2>
                  </div>
                  <span className="font-legal-disclaimer text-legal-disclaimer text-tertiary uppercase tracking-wider bg-surface-container-high px-space-xs py-0.5 rounded-DEFAULT">
                    Official Registry
                  </span>
                </div>
                <div className="flex flex-col gap-space-md text-body-md text-on-surface-variant">
                  <div className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-1">
                    <div className="flex items-center gap-space-xs text-tertiary font-label-md text-label-md uppercase">
                      <span className="material-symbols-outlined text-body-sm">gavel</span>
                      <span>{siteConfig.name}</span>
                    </div>
                    <p className="font-headline-md text-subheading-serif text-on-surface text-base">
                      {siteConfig.address}
                    </p>
                    <p className="text-body-sm text-tertiary leading-relaxed">
                      {siteConfig.landmark}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Operating Hours & Session Roster */}
              <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex flex-col gap-space-md border border-outline-variant/30">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">schedule</span>
                  <h2 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                    Operating Hours
                  </h2>
                </div>
                <div className="space-y-space-sm text-body-sm">
                  <div className="flex items-start justify-between p-space-sm bg-surface-container-low rounded-DEFAULT">
                    <div className="space-y-0.5">
                      <span className="font-label-md text-label-md text-on-surface block">
                        Chamber Consultations
                      </span>
                      <span className="text-legal-disclaimer text-on-surface-variant">
                        Prior Appointment Recommended
                      </span>
                    </div>
                    <span className="font-body-md text-body-sm text-tertiary text-right font-medium">
                      {siteConfig.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Direct Telecommunications */}
              <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex flex-col gap-space-md border border-outline-variant/30">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">
                    perm_phone_msg
                  </span>
                  <h2 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                    Direct Lines &amp; Dispatch
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm text-body-sm">
                  <a
                    className="p-space-sm bg-surface-container-low hover:bg-surface-container-high transition-colors rounded-DEFAULT flex flex-col gap-1"
                    href={`tel:${siteConfig.phoneDigits}`}
                    data-track="call_click"
                    data-track-location="contact_info"
                  >
                    <span className="text-legal-disclaimer text-tertiary uppercase font-semibold">
                      Chambers Desk Line
                    </span>
                    <span className="font-body-md text-on-surface font-medium">{siteConfig.phone}</span>
                  </a>
                  <a
                    className="p-space-sm bg-surface-container-low hover:bg-surface-container-high transition-colors rounded-DEFAULT flex flex-col gap-1"
                    href={`mailto:${siteConfig.email}`}
                  >
                    <span className="text-legal-disclaimer text-tertiary uppercase font-semibold">
                      Official Chamber Registry
                    </span>
                    <span className="font-body-md text-on-surface font-medium truncate">
                      {siteConfig.email}
                    </span>
                  </a>
                </div>

                {/* Dynamic WhatsApp Link */}
                <a
                  className="p-space-sm bg-[#075e54]/20 hover:bg-[#075e54]/30 rounded-DEFAULT flex items-center justify-between text-on-surface transition-colors border border-emerald-500/20"
                  href={whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)}
                  data-track="whatsapp_click"
                  data-track-location="contact_info"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-emerald-400">chat</span>
                    <div>
                      <span className="font-label-md text-label-md block">
                        WhatsApp Consultation Desk
                      </span>
                      <span className="text-legal-disclaimer text-on-surface-variant">
                        Direct Messaging ({siteConfig.whatsapp})
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                    open_in_new
                  </span>
                </a>
              </div>

              {/* Card 4: Visitor Information */}
              <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex flex-col gap-space-md border border-outline-variant/30">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">info</span>
                  <h2 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                    Visitor Information
                  </h2>
                </div>
                <div className="p-space-sm bg-surface-container-low rounded-DEFAULT space-y-1 text-body-sm text-on-surface-variant">
                  <p className="text-legal-disclaimer leading-relaxed">
                    Clients and litigants visiting chambers are requested to schedule appointments prior to arrival and carry valid government-issued photo identification.
                  </p>
                </div>
              </div>

              {/* Card 5: Interactive Map Guide */}
              <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex flex-col gap-space-md border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">explore</span>
                    <h2 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                      Location Guide
                    </h2>
                  </div>
                </div>
                <div className="w-full h-52 bg-surface-container-low rounded-DEFAULT relative overflow-hidden flex flex-col justify-end p-space-md border border-outline-variant/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                  <div className="relative z-10 flex items-end justify-between">
                    <div className="text-on-surface">
                      <span className="font-headline-md text-subheading-serif text-sm block">
                        Connaught Place Chambers
                      </span>
                      <span className="text-legal-disclaimer text-tertiary">
                        {siteConfig.landmark}
                      </span>
                    </div>
                    <a
                      className="inline-flex items-center gap-1 px-space-sm py-1 bg-surface-container-highest hover:bg-tertiary hover:text-on-tertiary text-on-surface text-label-md font-label-md rounded-DEFAULT transition-colors shadow"
                      href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Google Maps</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Confidential Intake Form */}
            <div className="lg:col-span-7 sticky top-[130px]">
              <EnquiryForm />
            </div>
          </div>
        </section>

        {/* Consultation Trajectory Steps */}
        <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-3xl border-t border-outline-variant/30">
          <div className="max-w-7xl mx-auto space-y-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="space-y-space-xs">
                <div className="inline-flex items-center gap-space-xs text-tertiary text-legal-disclaimer uppercase font-semibold">
                  <span className="material-symbols-outlined text-[14px]">account_tree</span>
                  <span>Chamber Workflow Standard</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">
                  Consultation Trajectory
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  A structured procedural roadmap governing initial intake, evidence evaluation, and consultation readiness.
                </p>
              </div>
              <span className="text-legal-disclaimer font-legal-disclaimer text-tertiary-fixed-dim bg-surface-container px-space-md py-space-xs rounded-DEFAULT">
                Registry Protocol Standard 2026
              </span>
            </div>

            {/* 3 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Step 1 */}
              <div className="p-space-lg bg-surface-container rounded-DEFAULT shadow-md relative overflow-hidden flex flex-col justify-between border border-outline-variant/20">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-xl text-headline-xl text-tertiary font-bold leading-none">
                      01
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-[24px]">
                      fact_check
                    </span>
                  </div>
                  <h3 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                    Dossier Triage
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Upon submission, the Chamber Registry verifies jurisdiction, assesses limitation periods, and completes mandatory conflict-of-interest vetting.
                  </p>
                </div>
                <div className="pt-space-md flex items-center gap-space-xs text-legal-disclaimer text-tertiary uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  <span>Turnaround: Within 2 Hours</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-space-lg bg-surface-container rounded-DEFAULT shadow-md relative overflow-hidden flex flex-col justify-between border border-outline-variant/20">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-xl text-headline-xl text-tertiary font-bold leading-none">
                      02
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-[24px]">
                      forum
                    </span>
                  </div>
                  <h3 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                    Merits Conference
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    In-person briefing with Advocate Shubham Singh at Connaught Place Chambers or via secure encrypted video conference.
                  </p>
                </div>
                <div className="pt-space-md flex items-center gap-space-xs text-legal-disclaimer text-tertiary uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  <span>Personal Consultation</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-space-lg bg-surface-container rounded-DEFAULT shadow-md relative overflow-hidden flex flex-col justify-between border border-outline-variant/20">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-xl text-headline-xl text-tertiary font-bold leading-none">
                      03
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-[24px]">
                      draw
                    </span>
                  </div>
                  <h3 className="font-headline-md text-subheading-serif text-on-surface font-semibold">
                    Vakalatnama &amp; Filing
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Formal execution of Vakalatnama and drafting of Petition, SLP, or Rejoinder for court lodging.
                  </p>
                </div>
                <div className="pt-space-md flex items-center gap-space-xs text-legal-disclaimer text-tertiary uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  <span>Action Expedited</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
