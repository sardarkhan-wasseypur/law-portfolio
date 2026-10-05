import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "About Shubham Singh | Advocate Delhi",
  description:
    "Professional profile of Advocate Shubham Singh practicing before Supreme Court & Delhi High Court in criminal, civil & appellate law.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION (Deep Midnight Base) */}
      <section className="relative w-full bg-primary-container text-on-surface px-6 lg:px-12 py-16 lg:py-24 overflow-hidden">
        {/* Architectural background geometry */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 1440 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L720 800M720 0L1440 800M0 800L1440 0"
              stroke="currentColor"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Persona & Standing */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-tertiary"></span>
              <span className="font-eyebrow text-eyebrow text-tertiary tracking-[0.2em] uppercase">
                Appellate Advocate &amp; Legal Counsel • New Delhi
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg tracking-tight uppercase text-on-surface mb-2 font-normal">
              Shubham Singh
            </h1>
            <p className="font-subheading-serif text-subheading-serif text-tertiary-fixed-dim mb-4 tracking-wide font-light">
              Advocate, Supreme Court of India &amp; Delhi High Court
            </p>
            {Boolean(siteConfig.enrollment) && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-low w-fit mb-6 shadow-sm">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  verified
                </span>
                <span className="font-label-md text-label-md tracking-wider text-on-surface-variant uppercase">
                  Bar Council of Delhi • Enrollment No: {siteConfig.enrollment}
                </span>
              </div>
            )}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
              Appellate advocacy, trial defense, and constitutional litigation across the Supreme Court of India, High Court of Delhi, and specialized tribunals.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                className="bg-secondary-container hover:bg-on-secondary text-secondary-fixed hover:text-on-surface font-label-md text-label-md uppercase px-8 py-3.5 tracking-wider transition-colors shadow-md"
                href="/contact/"
              >
                Schedule Chamber Consultation
              </Link>
              <Link
                className="bg-surface-container-high hover:bg-surface-bright text-tertiary font-label-md text-label-md uppercase px-7 py-3.5 tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                href="/contact/"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Professional Docket / CV
              </Link>
            </div>
            {/* Key Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 bg-surface-container-lowest/60 p-6">
              <div className="flex flex-col">
                <span className="font-headline-xl text-[18px] sm:text-[20px] text-tertiary font-light uppercase">
                  Supreme Court
                </span>
                <span className="font-eyebrow text-eyebrow text-outline uppercase tracking-wider mt-1">
                  Court of Practice
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-xl text-[18px] sm:text-[20px] text-on-surface font-light uppercase">
                  Delhi High Court
                </span>
                <span className="font-eyebrow text-eyebrow text-outline uppercase tracking-wider mt-1">
                  Court of Practice
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-xl text-[18px] sm:text-[20px] text-tertiary font-light uppercase">
                  District Courts
                </span>
                <span className="font-eyebrow text-eyebrow text-outline uppercase tracking-wider mt-1">
                  Court of Practice
                </span>
              </div>
            </div>
          </div>
          {/* Right Column: Formal Advocate Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-surface-container-low p-3 shadow-2xl">
              {/* Portrait Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-container-lowest">
                <Image
                  alt="Advocate Shubham Singh portrait"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  src="/images/stitch/shubham_singh_profile_mobile.jpeg"
                  width={400}
                  height={500}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
              {/* Portrait Caption Tag */}
              <div className="mt-3 px-3 py-2 bg-surface-container text-center flex flex-col items-center">
                <span className="font-headline-md text-[18px] text-tertiary uppercase tracking-wider font-light">
                  Advocate Shubham Singh
                </span>
                <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant uppercase tracking-widest mt-0.5">
                  B.A. LL.B. (Hons.), LL.M. — Practicing Counsel
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VERIFIED CREDENTIALS BADGE AREA */}
      <section className="w-full bg-surface-container-low text-on-surface px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[20px]">shield</span>
            </div>
            <div>
              <span className="font-eyebrow text-eyebrow tracking-widest uppercase text-tertiary block">
                Verified Credentials &amp; Statutory Compliance
              </span>
              <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant">
                Attested via Supreme Court &amp; Delhi High Court Rolls
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 lg:gap-8 font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
              <span>Bar Council Attested</span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-legal-disclaimer text-legal-disclaimer text-outline uppercase tracking-wider block">
              Bar Council of India Rule 36
            </span>
            <span className="font-legal-disclaimer text-[10px] text-outline">
              Non-solicitation declaration
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3: BIOGRAPHY SECTION */}
      <section className="w-full bg-surface-bright text-on-surface px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Narrative Column */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] mb-2 block font-bold">
              Appellate Jurisprudence &amp; Practice
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase tracking-tight text-on-surface mb-8">
              Biography &amp; Advocacy Philosophy
            </h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Advocate Shubham Singh commenced his litigation practice across trial divisions in Delhi, grounding courtroom advocacy in cross-examination, interlocutory practice, and procedural jurisprudence under the Code of Civil Procedure and Bharatiya Nagarik Suraksha Sanhita (BNSS).
              </p>
              <p>
                His chambers handle constitutional writ jurisprudence, commercial disputes, white-collar criminal defense, and Special Leave Petitions (SLPs) before the Supreme Court of India and the High Court of Delhi.
              </p>
              <p>
                The practice prioritizes statutory compliance, early case evaluation, and methodical trial preparation, maintaining strict fidelity to Bar Council rules.
              </p>
              <p className="font-headline-md text-headline-md text-on-surface italic pl-6 py-2 bg-surface-container/60 border-l-2 border-tertiary">
                &quot;The credibility of an advocate is forged not in rhetorical flourish, but in unyielding factual fidelity and mastery of statutory architecture.&quot;
              </p>
            </div>
          </div>
          {/* Right Callout Column: Chamber Pillars */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-center">
            <div className="bg-surface-container-lowest text-on-surface p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-tertiary text-[24px]">gavel</span>
                <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-tertiary font-bold">
                  Core Chamber Pillars
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">
                    01. Fidelity to Law
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Upholding constitutional rectitude, Bar Council ethics, and courtroom advocacy before any bench.
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">
                    02. Absolute Discretion
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Privilege, confidentiality, and operational security surrounding all client dossiers and briefs.
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">
                    03. Meticulous Brief Scrutiny
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Evidentiary analysis with emphasis on factual clarity and statutory compliance.
                  </p>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider">
                    04. Objective Advocacy
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Structured representation securing timely filing, stay reliefs, and appellate review.
                  </p>
                </div>
              </div>
            </div>
            {/* Standing Accolade Notice */}
            <div className="bg-surface p-6 text-on-surface shadow-md">
              <span className="font-eyebrow text-eyebrow uppercase tracking-wider text-secondary block mb-1">
                Empanelment Registry
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                Empaneled panel counsel representing government institutions and public enterprises before courts in Delhi.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 5: ROLES AND APPOINTMENTS (Light Warmth Breakout) */}
      <section className="w-full bg-surface-bright text-on-surface px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-eyebrow text-eyebrow uppercase tracking-[0.2em] text-tertiary mb-2 font-bold">
              Government &amp; Statutory Representation
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase tracking-tight text-on-surface">
              Roles &amp; Appointments
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-4">
              Empanelments and standing counsel roles representing governmental bodies and public entities before appellate and district courts.
            </p>
            <div className="w-16 h-0.5 bg-tertiary mt-4"></div>
          </div>
          {/* Grid of Cards with Status Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Union of India */}
            <div className="bg-surface p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-secondary-container text-secondary-fixed font-eyebrow text-[11px] uppercase tracking-widest px-2.5 py-1">
                    CURRENT
                  </span>
                  <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                    High Court of Delhi
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-2">
                  Panel Counsel
                </h3>
                {/* needs client verification */}
                <span className="font-subheading-serif text-[16px] text-tertiary block mb-4">
                  Union of India (UOI)
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Representing the Union of India in legal proceedings and statutory matters before courts in Delhi.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-high/40 px-3 py-2 flex items-center gap-2 text-tertiary font-label-md text-[11px] tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">account_balance</span>
                Appellate &amp; Writ Matters
              </div>
            </div>

            {/* Card 2: State of UP */}
            <div className="bg-surface p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-secondary-container text-secondary-fixed font-eyebrow text-[11px] uppercase tracking-widest px-2.5 py-1">
                    CURRENT
                  </span>
                  <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                    Supreme Court of India
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-2">
                  Panel Counsel
                </h3>
                {/* needs client verification */}
                <span className="font-subheading-serif text-[16px] text-tertiary block mb-4">
                  State of Uttar Pradesh
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Representing the State of Uttar Pradesh in petitions and appellate matters before the Supreme Court of India.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-high/40 px-3 py-2 flex items-center gap-2 text-tertiary font-label-md text-[11px] tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">gavel</span>
                Apex Court Panel
              </div>
            </div>

            {/* Card 3: DMRC */}
            <div className="bg-surface p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-secondary-container text-secondary-fixed font-eyebrow text-[11px] uppercase tracking-widest px-2.5 py-1">
                    CURRENT
                  </span>
                  <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                    Delhi Courts
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-2">
                  Panel Counsel
                </h3>
                {/* needs client verification */}
                <span className="font-subheading-serif text-[16px] text-tertiary block mb-4">
                  Delhi Metro Rail Corporation (DMRC)
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Representing DMRC in civil, commercial, land, and litigation matters before courts and tribunals in Delhi.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-high/40 px-3 py-2 flex items-center gap-2 text-tertiary font-label-md text-[11px] tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                Infrastructure &amp; Transport Panel
              </div>
            </div>

            {/* Card 4: Muthoot Finance */}
            <div className="bg-surface p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-surface-container-highest text-on-surface-variant font-eyebrow text-[11px] uppercase tracking-widest px-2.5 py-1">
                    FORMER
                  </span>
                  <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                    Financial Recovery
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-2">
                  Former Panel Counsel
                </h3>
                {/* needs client verification */}
                <span className="font-subheading-serif text-[16px] text-outline block mb-4">
                  Muthoot Finance
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Represented financial institution in recovery proceedings, Section 138 NI Act litigation, and arbitration matters.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-high/40 px-3 py-2 flex items-center gap-2 text-outline font-label-md text-[11px] tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">history_edu</span>
                Corporate Financial Panel
              </div>
            </div>

            {/* Card 5: UP Madarsa Board */}
            <div className="bg-surface p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-surface-container-highest text-on-surface-variant font-eyebrow text-[11px] uppercase tracking-widest px-2.5 py-1">
                    FORMER
                  </span>
                  <span className="font-legal-disclaimer text-legal-disclaimer text-outline">
                    Statutory Board
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-2">
                  Former Legal Advisor
                </h3>
                {/* needs client verification */}
                <span className="font-subheading-serif text-[16px] text-outline block mb-4">
                  UP Madarsa Board
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Provided legal advice and representation on administrative, statutory, and regulatory affairs.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-high/40 px-3 py-2 flex items-center gap-2 text-outline font-label-md text-[11px] tracking-wider uppercase">
                <span className="material-symbols-outlined text-[16px]">balance</span>
                Statutory Advisory
              </div>
            </div>

            </div>
          </div>
        </section>

      {/* SECTION 6: PRACTICE AREAS OVERVIEW */}
      <section className="w-full bg-primary-container text-on-surface px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-eyebrow text-eyebrow uppercase tracking-[0.2em] text-tertiary mb-2">
              Institutional Scope
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase tracking-tight text-on-surface">
              Areas of Concentration
            </h2>
            <div className="w-16 h-0.5 bg-tertiary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Area 1: Criminal Law */}
            <Link
              href="/practice-areas/criminal-lawyer-delhi/"
              className="bg-surface-container-low p-8 shadow-md hover:bg-surface-container transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined text-[26px]">policy</span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-3">
                  Criminal Defense &amp; Bail
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Trial defense, regular bail, anticipatory bail, FIR quashing under Section 528 BNSS / Sec 482 CrPC, and appellate representation.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-tertiary">
                <span className="font-label-md text-label-md uppercase tracking-wider">Explore Area</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </Link>

            {/* Area 2: Cheque Bounce */}
            <Link
              href="/practice-areas/cheque-bounce-lawyer-delhi/"
              className="bg-surface-container-low p-8 shadow-md hover:bg-surface-container transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-3">
                  Cheque Bounce &amp; Sec 138 NI Act
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Statutory 30-day demand notice drafting, complaint filing, Special MM Court prosecution, interim compensation, and drawer defense.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-tertiary">
                <span className="font-label-md text-label-md uppercase tracking-wider">Explore Area</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </Link>

            {/* Area 3: Divorce & Family Law */}
            <Link
              href="/practice-areas/divorce-family-lawyer-delhi/"
              className="bg-surface-container-low p-8 shadow-md hover:bg-surface-container transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined text-[26px]">diversity_1</span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-3">
                  Divorce &amp; Family Law
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Mutual consent divorce petitions, contested divorce trials, child custody access, guardianship, and maintenance claims in Family Courts.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-tertiary">
                <span className="font-label-md text-label-md uppercase tracking-wider">Explore Area</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </Link>

            {/* Area 4: Civil Law */}
            <Link
              href="/practice-areas/civil-lawyer-delhi/"
              className="bg-surface-container-low p-8 shadow-md hover:bg-surface-container transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined text-[26px]">domain</span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-3">
                  Civil Law &amp; Property
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Property partition suits, title declaration, money recovery suits under Order XXXVII CPC, injunctions, and decree execution.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-tertiary">
                <span className="font-label-md text-label-md uppercase tracking-wider">Explore Area</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </Link>

            {/* Area 5: Trademark Law */}
            <Link
              href="/practice-areas/trademark-lawyer-delhi/"
              className="bg-surface-container-low p-8 shadow-md hover:bg-surface-container transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined text-[26px]">app_registration</span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-3">
                  Trademark &amp; IP Protection
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Brand availability search, filing Form TM-A, examination objection replies, TM-O opposition hearings, and High Court IP suits.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-tertiary">
                <span className="font-label-md text-label-md uppercase tracking-wider">Explore Area</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </Link>

            {/* Area 6: Appellate Litigation */}
            <Link
              href="/courts/"
              className="bg-surface-container-low p-8 shadow-md hover:bg-surface-container transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center text-tertiary mb-6">
                  <span className="material-symbols-outlined text-[26px]">account_balance</span>
                </div>
                <h3 className="font-headline-md text-[22px] text-on-surface uppercase mb-3">
                  Appellate &amp; Constitutional
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Special Leave Petitions (SLP) before Supreme Court of India, Article 226 writs, and High Court appellate bench practice.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-tertiary">
                <span className="font-label-md text-label-md uppercase tracking-wider">Explore Courts</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: COURTS OF PRACTICE & TRIBUNALS */}
      <section className="w-full bg-surface-bright text-on-surface px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-eyebrow text-eyebrow uppercase tracking-[0.2em] text-tertiary mb-2 font-bold">
              Judicial Venues &amp; Jurisdiction
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase tracking-tight text-on-surface">
              Courts of Practice
            </h2>
            <div className="w-16 h-0.5 bg-tertiary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Forum 1: Supreme Court */}
            <Link
              href="/courts/supreme-court-advocate-delhi/"
              className="bg-surface p-6 shadow-md flex items-start gap-4 hover:bg-surface-container transition-colors block"
            >
              <div className="w-10 h-10 bg-surface-container-high flex-shrink-0 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[22px]">account_balance</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface uppercase mb-1">
                  Supreme Court of India
                </h3>
                <span className="font-eyebrow text-[11px] text-tertiary uppercase tracking-wider block mb-2">
                  Tilak Marg, New Delhi
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Special Leave Petitions (SLP Civil &amp; Criminal), Article 32 Writs, Transfer Petitions, and Statutory Appellate Benches.
                </p>
              </div>
            </Link>

            {/* Forum 2: Delhi High Court */}
            <Link
              href="/courts/delhi-high-court-advocate/"
              className="bg-surface p-6 shadow-md flex items-start gap-4 hover:bg-surface-container transition-colors block"
            >
              <div className="w-10 h-10 bg-surface-container-high flex-shrink-0 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[22px]">gavel</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface uppercase mb-1">
                  High Court of Delhi
                </h3>
                <span className="font-eyebrow text-[11px] text-tertiary uppercase tracking-wider block mb-2">
                  Sher Shah Road, New Delhi
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Original Civil Suits, Commercial Appellate Division, Criminal Revisions &amp; Writs (Article 226), and Bail Applications.
                </p>
              </div>
            </Link>

            {/* Forum 3: Delhi District Courts */}
            <Link
              href="/courts/delhi-district-courts-advocate/"
              className="bg-surface p-6 shadow-md flex items-start gap-4 hover:bg-surface-container transition-colors block"
            >
              <div className="w-10 h-10 bg-surface-container-high flex-shrink-0 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[22px]">location_city</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface uppercase mb-1">
                  Delhi District Courts
                </h3>
                <span className="font-eyebrow text-[11px] text-tertiary uppercase tracking-wider block mb-2">
                  All District Complexes
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Trial court representation across Tis Hazari, Saket, Patiala House, Rohini, Karkardooma, and Dwarka courts.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: CHAMBER CONTACT BANNER */}
      <section
        className="w-full bg-secondary-container text-on-surface px-6 lg:px-12 py-16 lg:py-20 shadow-2xl"
        id="consultation-inquiry"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="font-eyebrow text-eyebrow text-secondary-fixed uppercase tracking-[0.2em] block mb-2">
              Chamber Registry &amp; Brief Engagement
            </span>
            <h2 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-tight mb-4">
              Initiate Counsel Consultation
            </h2>
            <p className="font-body-lg text-body-lg text-secondary-fixed leading-relaxed max-w-2xl">
              Chamber consultations are scheduled strictly by prior appointment following conflict checks. Urgent listing and vacation bench matters are given expedited intake priority.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                  schedule
                </span>
                <span>Chamber Hours: {siteConfig.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                  location_on
                </span>
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link
              className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase px-6 py-4 flex items-center justify-between shadow-lg transition-colors tracking-wider"
              href="/contact/"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  call
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-tertiary text-[11px] tracking-widest uppercase">
                    Direct Registry
                  </span>
                  <span className="text-[15px] font-bold">{siteConfig.phone}</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-tertiary">chevron_right</span>
            </Link>
            <Link
              className="bg-surface hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase px-6 py-4 flex items-center justify-between shadow-lg transition-colors tracking-wider"
              href="/contact/"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  mail
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-secondary text-[11px] tracking-widest uppercase">
                    Docket Dispatch
                  </span>
                  <span className="text-[13px] lowercase">{siteConfig.email}</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
