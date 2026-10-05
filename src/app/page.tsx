import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { HomeFaqAccordion } from "@/components/sections/HomeFaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Advocate in Delhi | Shubham Singh – Supreme Court & High Court",
  description:
    "Experienced Delhi advocate for criminal, civil, family, cheque bounce and trademark matters. Supreme Court of India, Delhi High Court and District Courts representation.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildWebSiteSchema()} />

      <div className="flex flex-col w-full">
        {/* SECTION 1: HERO SECTION */}
        <section className="relative w-full overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0">
            <Image
              alt="Dusk twilight architectural photograph of the Supreme Court of India in New Delhi, illuminated colonnades and grand dome under dramatic storm clouds, deep obsidian navy shadows, subtle gold lighting, wet marble reflection pool in courtyard, editorial legal prestige atmosphere"
              src="/images/stitch/hero_supreme_court.jpg"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-surface-container-lowest/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/20"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-28 pb-16 md:pb-32 flex flex-col justify-center min-h-[520px] md:min-h-[640px]">
            <div className="max-w-3xl flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-tertiary"></span>
                <span className="font-subheading-serif text-subheading-serif italic text-tertiary">
                  Advocate in Delhi
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg uppercase tracking-wide lg:tracking-wider text-on-surface mb-6 leading-tight">
                Justice, Argued <br className="hidden sm:inline" />
                With Precision
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                Criminal • Civil • Matrimonial • Trademark • Cheque Bounce | Supreme Court of India, Delhi High Court &amp; District Courts
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  className="bg-secondary-container hover:bg-on-secondary text-secondary-fixed hover:text-on-surface font-label-md text-label-md uppercase px-8 py-3.5 rounded transition-colors duration-200 tracking-wider shadow-md"
                  href="/contact/"
                >
                  Book a Consultation
                </Link>
                <a
                  className="bg-transparent hover:bg-tertiary/10 text-tertiary font-label-md text-label-md uppercase px-8 py-3.5 rounded transition-colors duration-200 tracking-wider flex items-center gap-2"
                  href={siteConfig.whatsapp}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: BURGUNDY INFORMATION BAND */}
        <section className="w-full bg-secondary-container text-secondary-fixed py-12 relative z-10 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="lg:w-1/4">
                <span className="font-eyebrow text-eyebrow uppercase tracking-[0.2em] text-tertiary block mb-2">
                  Jurisdiction Profile
                </span>
                <h2 className="font-headline-md text-headline-md uppercase text-on-surface">
                  Courts We Appear In
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-3/4">
                <Link
                  href="/courts/supreme-court-of-india/"
                  className="flex flex-col bg-on-secondary/40 p-6 rounded hover:bg-on-secondary/60 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2 text-tertiary">
                    <span className="material-symbols-outlined text-[20px]">assured_workload</span>
                    <span className="font-label-md text-label-md tracking-wider uppercase">Apex Bench</span>
                  </div>
                  <h3 className="font-subheading-serif text-subheading-serif text-on-surface mb-2 font-medium group-hover:text-tertiary transition-colors">
                    Supreme Court of India
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary-fixed/90 leading-relaxed">
                    Appellate Jurisdiction, Special Leave Petitions (SLP) &amp; Article 32 Constitutional Writs.
                  </p>
                </Link>
                <Link
                  href="/courts/delhi-high-court/"
                  className="flex flex-col bg-on-secondary/40 p-6 rounded hover:bg-on-secondary/60 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2 text-tertiary">
                    <span className="material-symbols-outlined text-[20px]">account_balance</span>
                    <span className="font-label-md text-label-md tracking-wider uppercase">State Jurisdiction</span>
                  </div>
                  <h3 className="font-subheading-serif text-subheading-serif text-on-surface mb-2 font-medium group-hover:text-tertiary transition-colors">
                    Delhi High Court
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary-fixed/90 leading-relaxed">
                    Original Civil, Criminal Appellate, Article 226 Writs &amp; Commercial Division Rosters.
                  </p>
                </Link>
                <Link
                  href="/courts/delhi-district-courts/"
                  className="flex flex-col bg-on-secondary/40 p-6 rounded hover:bg-on-secondary/60 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2 text-tertiary">
                    <span className="material-symbols-outlined text-[20px]">gavel</span>
                    <span className="font-label-md text-label-md tracking-wider uppercase">Trial Divisions</span>
                  </div>
                  <h3 className="font-subheading-serif text-subheading-serif text-on-surface mb-2 font-medium group-hover:text-tertiary transition-colors">
                    Delhi District Courts
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary-fixed/90 leading-relaxed">
                    Tis Hazari, Patiala House, Saket, Rohini, Karkardooma, Dwarka &amp; Rouse Avenue Courts.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE DO */}
        <section className="w-full bg-surface-container py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-subheading-serif text-subheading-serif italic text-tertiary block mb-2">
                  Our Specialized Practice
                </span>
                <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-wide">
                  What We Do
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Delivering methodical litigation advisory and aggressive courtroom advocacy across vital substantive arenas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tile 1 */}
              <Link
                href="/practice-areas/criminal-lawyer-delhi/"
                className="group relative bg-surface-container-high rounded p-8 transition-transform duration-300 hover:-translate-y-1 shadow-md block"
              >
                <div className="w-12 h-12 bg-surface-container-lowest text-tertiary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">shield</span>
                </div>
                <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary mb-2 block">
                  Appellate &amp; Trial
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-4">
                  Criminal Law
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Anticipatory and regular bail, CBI &amp; ED economic offense defense, specialized trial proceedings, and appellate quashing petitions under Section 482 CrPC.
                </p>
                <div className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>Core Practice Scope</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
              {/* Tile 2 */}
              <Link
                href="/practice-areas/civil-lawyer-delhi/"
                className="group relative bg-surface-container-high rounded p-8 transition-transform duration-300 hover:-translate-y-1 shadow-md block"
              >
                <div className="w-12 h-12 bg-surface-container-lowest text-tertiary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">domain</span>
                </div>
                <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary mb-2 block">
                  Chancery &amp; Claims
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-4">
                  Civil Litigation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  High-stake title and ancestral property disputes, commercial recovery suits, urgent permanent injunctions, and specific performance enforcement.
                </p>
                <div className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>Core Practice Scope</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
              {/* Tile 3 */}
              <Link
                href="/practice-areas/divorce-family-lawyer-delhi/"
                className="group relative bg-surface-container-high rounded p-8 transition-transform duration-300 hover:-translate-y-1 shadow-md block"
              >
                <div className="w-12 h-12 bg-surface-container-lowest text-tertiary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">family_restroom</span>
                </div>
                <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary mb-2 block">
                  Domestic &amp; Guardianship
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-4">
                  Matrimonial &amp; Family
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Discreet handling of mutual consent and contested divorces, complex child custody battles, spousal maintenance disputes, and Domestic Violence Act advocacy.
                </p>
                <div className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>Core Practice Scope</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
              {/* Tile 4 */}
              <Link
                href="/practice-areas/trademark-lawyer-delhi/"
                className="group relative bg-surface-container-high rounded p-8 transition-transform duration-300 hover:-translate-y-1 shadow-md block"
              >
                <div className="w-12 h-12 bg-surface-container-lowest text-tertiary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary mb-2 block">
                  IP &amp; Brand Equity
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-4">
                  Trademark &amp; IP
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Trademark infringement actions, passing-off suits before High Court Commercial Benches, dynamic IP opposition, and registered asset enforcement.
                </p>
                <div className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>Core Practice Scope</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
              {/* Tile 5 */}
              <Link
                href="/practice-areas/cheque-bounce-lawyer-delhi/"
                className="group relative bg-surface-container-high rounded p-8 transition-transform duration-300 hover:-translate-y-1 shadow-md block md:col-span-2 lg:col-span-2"
              >
                <div className="w-12 h-12 bg-surface-container-lowest text-tertiary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">receipt_long</span>
                </div>
                <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary mb-2 block">
                  Negotiable Instruments Act
                </span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-4">
                  Cheque Bounce (Section 138)
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Structured issuance of strict statutory 30-day demand notices, representation across Special MM Courts, rapid trial prosecution, defense against statutory presumption, and structured compounding settlements.
                </p>
                <div className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>Core Practice Scope</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHO WE HELP */}
        <section className="w-full bg-inverse-surface text-inverse-on-surface py-24" id="who-we-help">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <span className="font-subheading-serif text-subheading-serif italic text-on-secondary mb-2 block">
                Clientele &amp; Representation
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase text-inverse-on-surface tracking-wide mb-4">
                Who We Help
              </h2>
              <p className="font-body-lg text-body-lg text-inverse-on-surface/80 leading-relaxed">
                Strategic counsel tailored for individuals, estates, and enterprise ventures confronting complex litigation in the capital.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest/5 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="font-eyebrow text-eyebrow text-on-secondary uppercase tracking-widest mb-3">
                  01 • Private Citizens
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface mb-3">
                  Individuals
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">
                  Navigating unprompted criminal charges, safeguarding personal constitutional rights, defense in investigations, and private recovery.
                </p>
              </div>
              <div className="bg-surface-container-lowest/5 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="font-eyebrow text-eyebrow text-on-secondary uppercase tracking-widest mb-3">
                  02 • Domestic &amp; Lineage
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface mb-3">
                  Families
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">
                  Protecting inherited familial estates, partition suits, sensitive matrimonial resolutions, and multi-generational trust conflicts.
                </p>
              </div>
              <div className="bg-surface-container-lowest/5 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="font-eyebrow text-eyebrow text-on-secondary uppercase tracking-widest mb-3">
                  03 • Commercial Leadership
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface mb-3">
                  Business Owners
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">
                  Contractual disputes, corporate director liability, statutory agency summons, and high-value debt recovery actions.
                </p>
              </div>
              <div className="bg-surface-container-lowest/5 p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="font-eyebrow text-eyebrow text-on-secondary uppercase tracking-widest mb-3">
                  04 • Real Estate Holdings
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface mb-3">
                  Landlords &amp; Property Owners
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">
                  Tenant eviction protocols under Rent Control laws, illegal possession defense, long-term lease covenants, and title validation.
                </p>
              </div>
              <div className="bg-surface-container-lowest/5 p-8 rounded shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
                <div className="font-eyebrow text-eyebrow text-on-secondary uppercase tracking-widest mb-3">
                  05 • Innovators &amp; Emerging Entities
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-inverse-on-surface mb-3">
                  Brands &amp; Startups
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed">
                  Comprehensive trademark portfolio opposition, IP theft defense, founder equity agreements, cross-border commercial drafting, and regulatory scrutiny management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: OUR APPROACH */}
        <section className="w-full bg-surface-container-lowest py-24" id="our-approach">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-20">
              <span className="font-subheading-serif text-subheading-serif italic text-tertiary mb-2 block">
                Litigation Methodology
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-wide mb-4">
                Our Approach
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every matter is processed through a structured 4-tier appellate protocol ensuring total procedural discipline.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="bg-surface-container-low p-8 rounded flex flex-col justify-between h-full relative group">
                <div>
                  <div className="font-headline-xl text-headline-xl text-tertiary mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    01
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-3">
                    Consult
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    In-depth confidential docket intake, thorough conflict check, and strategic evaluation of jurisdictional urgency.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/30 text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest">
                  Initial Scrutiny
                </div>
              </div>
              {/* Step 2 */}
              <div className="bg-surface-container-low p-8 rounded flex flex-col justify-between h-full relative group">
                <div>
                  <div className="font-headline-xl text-headline-xl text-tertiary mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    02
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-3">
                    Case Review
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Rigorous scrutiny of lower court records, police charge sheets, impugned orders, and apex precedent citations.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/30 text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest">
                  Archival Analysis
                </div>
              </div>
              {/* Step 3 */}
              <div className="bg-surface-container-low p-8 rounded flex flex-col justify-between h-full relative group">
                <div>
                  <div className="font-headline-xl text-headline-xl text-tertiary mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    03
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-3">
                    Strategy
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Formulation of courtroom strategy, meticulous drafting of evidentiary dossiers, writ petitions, and core case theory.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/30 text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest">
                  Tactical Pleadings
                </div>
              </div>
              {/* Step 4 */}
              <div className="bg-surface-container-low p-8 rounded flex flex-col justify-between h-full relative group">
                <div>
                  <div className="font-headline-xl text-headline-xl text-tertiary mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    04
                  </div>
                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-3">
                    Representation
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Articulate, authoritative oral advocacy before Supreme Court benches, High Court rosters, and specialized tribunals.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-outline-variant/30 text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest">
                  Bench Advocacy
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: MEET THE ADVOCATE */}
        <section className="w-full bg-surface-container py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left: Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-2 bg-gradient-to-tr from-tertiary via-surface-container to-secondary-container shadow-2xl relative">
                    <Image
                      alt="Advocate Shubham Singh portrait photo"
                      src="/images/stitch/shubham_singh_profile_mobile.jpeg"
                      fill
                      className="object-cover rounded-full p-2"
                    />
                  </div>
                  <div className="absolute -bottom-4 right-4 bg-surface-container-lowest text-tertiary p-3 rounded shadow-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                    <span className="font-label-md text-label-md uppercase tracking-wider">
                      Chambers Counsel
                    </span>
                  </div>
                </div>
              </div>
              {/* Right: Information & Credentials */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="font-subheading-serif text-subheading-serif italic text-tertiary mb-2">
                  Principal Counsel &amp; Advocate
                </span>
                <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-wide mb-2">
                  Shubham Singh
                </h2>
                <p className="font-eyebrow text-eyebrow text-secondary uppercase tracking-[0.2em] mb-6">
                  Advocate-on-Record / Litigation Counsel, New Delhi
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
                  With dedicated courtroom tenure across the judicial corridors of the Supreme Court of India and the Delhi High Court, Advocate Shubham Singh represents clients in complex constitutional questions, high-stakes white-collar bail hearings, corporate insolvency disputes, and commercial equity protection.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed mb-8">
                  His practice is characterized by rigorous procedural precision, deep statutory analysis, and unwavering commitment to client confidentiality and judicial decorum.
                </p>
                {/* Verified Admissions */}
                <div className="w-full bg-surface-container-high p-6 rounded mb-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Enrolled with the Bar Council of Delhi
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Member, Supreme Court Bar Association (SCBA)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Member, Delhi High Court Bar Association (DHCBA)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Designated Advocate before High Court &amp; Specialized Tribunals (NCLAT, DRT, NGT)
                    </span>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center gap-3 text-tertiary font-label-md text-label-md uppercase tracking-wider py-2 group hover:text-on-surface transition-colors"
                  href="/about/"
                >
                  <span>Read Complete Chambers Profile</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: LEGAL INSIGHTS */}
        <section className="w-full bg-surface-container-lowest py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-subheading-serif text-subheading-serif italic text-tertiary block mb-2">
                  Articles &amp; Judicial Analyses
                </span>
                <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-wide">
                  Legal Insights
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Regularly updated jurisprudence updates, bench observations, and procedural advisories from chamber research.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <article className="bg-surface-container-low rounded overflow-hidden flex flex-col justify-between p-8 hover:bg-surface-container-high transition-colors">
                <div>
                  <div className="flex items-center justify-between text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest mb-4">
                    <span>Criminal Procedure</span>
                    <span className="text-on-surface-variant">6 min read</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4 leading-snug">
                    Special Leave Petitions (SLP) Against Criminal Convictions: Landmark Rulings &amp; Urgent Relief Criteria
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                    An analytical dissection of Supreme Court discretionary powers under Article 136, evidentiary evaluation thresholds, and immediate interim bail protocols.
                  </p>
                </div>
                <Link
                  className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2"
                  href="/legal-insights/special-leave-petitions-criminal-bail/"
                >
                  <span>Read Analysis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </article>
              {/* Article 2 */}
              <article className="bg-surface-container-low rounded overflow-hidden flex flex-col justify-between p-8 hover:bg-surface-container-high transition-colors">
                <div>
                  <div className="flex items-center justify-between text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest mb-4">
                    <span>Commercial Disputes</span>
                    <span className="text-on-surface-variant">5 min read</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4 leading-snug">
                    Section 138 NI Act: Pre-requisites of Statutory Demand Notice &amp; Compounding of Cheque Dishonour
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                    Critical timelines governing delivery acknowledgement, presumption under Section 139, and strategic dispute mediation before Metropolitan Magistrates.
                  </p>
                </div>
                <Link
                  className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2"
                  href="/legal-insights/section-138-ni-act-cheque-bounce-notice-delhi/"
                >
                  <span>Read Analysis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </article>
              {/* Article 3 */}
              <article className="bg-surface-container-low rounded overflow-hidden flex flex-col justify-between p-8 hover:bg-surface-container-high transition-colors">
                <div>
                  <div className="flex items-center justify-between text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest mb-4">
                    <span>Intellectual Property</span>
                    <span className="text-on-surface-variant">4 min read</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4 leading-snug">
                    Interim Injunctions in Trademark Infringement: Balance of Convenience before Delhi High Court Commercial Benches
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                    Navigating ex-parte ad-interim relief, evidentiary metrics for deceptive similarity, and jurisdictional nuances in capital suits.
                  </p>
                </div>
                <Link
                  className="text-tertiary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2"
                  href="/legal-insights/trademark-infringement-injunctions-delhi-high-court/"
                >
                  <span>Read Analysis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ PREVIEW */}
        <section className="w-full bg-surface-container py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="font-subheading-serif text-subheading-serif italic text-tertiary mb-2 block">
                Courtroom Procedure &amp; Guidance
              </span>
              <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-wide mb-4">
                Frequently Asked Questions
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Clear answers on listing schedules, urgent filings, NRI representation, and initial documentation.
              </p>
            </div>
            <HomeFaqAccordion />
          </div>
        </section>

        {/* SECTION 9: FINAL CTA BAND */}
        <section
          className="w-full bg-secondary-container text-secondary-fixed py-20 relative overflow-hidden shadow-2xl"
          id="consultation-inquiry"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-4 text-tertiary">
              <span className="material-symbols-outlined text-[22px]">balance</span>
              <span className="font-eyebrow text-eyebrow uppercase tracking-[0.2em]">
                Confidential Legal Intake
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg uppercase text-on-surface max-w-4xl mx-auto mb-6 leading-tight">
              Need Urgent Legal Representation or Appellate Counsel?
            </h2>
            <p className="font-body-lg text-body-lg text-secondary-fixed max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a privileged consultation at Delhi High Court Chambers or connect directly for listing inquiries.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                className="bg-on-surface text-secondary-container font-label-md text-label-md uppercase px-8 py-4 rounded tracking-wider flex items-center gap-3 shadow-lg hover:bg-secondary-fixed transition-colors"
                href={`tel:${siteConfig.phone}`}
                data-track="call_click"
                data-track-location="cta_band"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Call Chambers: {siteConfig.phone}</span>
              </a>
              <a
                className="bg-transparent hover:bg-tertiary/10 text-tertiary font-label-md text-label-md uppercase px-8 py-4 rounded tracking-wider flex items-center gap-3"
                href={siteConfig.whatsapp}
                data-track="whatsapp_click"
                data-track-location="cta_band"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>WhatsApp Matter Details</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 10: CHAMBERS NAP & STATUTORY DIRECTORY */}
        <section className="w-full bg-surface-container-lowest text-on-surface-variant py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-headline-md text-headline-md uppercase tracking-wider text-on-surface">
                      Shubham Singh
                    </span>
                    <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest">
                      • Advocate
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-md mb-6">
                    Chambers No. 412, Lawyers Chambers Block, Delhi High Court, Sher Shah Road, New Delhi – 110503.
                  </p>
                  <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <div>
                      <strong className="text-on-surface">Direct Phone:</strong> {siteConfig.phone}
                    </div>
                    <div>
                      <strong className="text-on-surface">Registry Email:</strong> {siteConfig.email}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary block mb-4">
                    Practice Roster Quicklinks
                  </span>
                  <div className="grid grid-cols-2 gap-3 font-body-sm text-body-sm text-on-surface-variant">
                    <Link
                      className="hover:text-tertiary transition-colors"
                      href="/practice-areas/criminal-lawyer-delhi/"
                    >
                      Criminal Defense
                    </Link>
                    <Link
                      className="hover:text-tertiary transition-colors"
                      href="/courts/delhi-high-court/"
                    >
                      Civil Writs (Art 226/32)
                    </Link>
                    <Link
                      className="hover:text-tertiary transition-colors"
                      href="/practice-areas/divorce-family-lawyer-delhi/"
                    >
                      Matrimonial Law
                    </Link>
                    <Link
                      className="hover:text-tertiary transition-colors"
                      href="/practice-areas/trademark-lawyer-delhi/"
                    >
                      Trademark &amp; IP
                    </Link>
                    <Link
                      className="hover:text-tertiary transition-colors"
                      href="/practice-areas/cheque-bounce-lawyer-delhi/"
                    >
                      Section 138 (Cheque Bounce)
                    </Link>
                    <Link
                      className="hover:text-tertiary transition-colors"
                      href="/courts/supreme-court-of-india/"
                    >
                      Supreme Court SLP
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Explicit Bar Council Disclaimer Box */}
            <div className="bg-surface-container-high p-6 rounded text-left">
              <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary block mb-2">
                Bar Council of India Rule 36 Mandatory Compliance Notice
              </span>
              <p className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant leading-relaxed">
                Information on this website is for general awareness only and is not legal advice or solicitation under the Advocates Act, 1961 and the Bar Council of India Rules. The visitor voluntarily accesses this platform without any advertisement, personal solicitation, inducement, or commercial incentive from Advocate Shubham Singh or associates.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
