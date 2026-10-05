// DRAFT: advocate must review before publishing
import { CourtData } from "./types";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";
import { siteConfig } from "@/content/site";

export const delhiDistrictCourtsData: CourtData = {
  slug: "delhi-district-courts-advocate",
  name: "Delhi District Courts",
  seoTitle: "Delhi District Courts Advocate | Trial & Commercial Counsel",
  metaDescription: "Trial litigation, bail hearings, civil suits, cheque bounce trials, and commercial disputes across District Courts in Delhi.",
  h1: "Delhi District Courts Advocate",
  heroTagline: "Original Trial Jurisdiction • 7 Judicial Complexes, Delhi",
  heroSubtitle: "Comprehensive trial advocacy, original civil suits, criminal bail & trials, Section 138 cheque bounce proceedings, and commercial disputes before District Courts across Delhi.",
  heroImageSrc: "/images/stitch/practice_hero_delhi_high_court.jpg",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Courts", href: "/courts/" },
    { name: "Delhi District Courts Advocate" }
  ],
  metrics: [
    {
      icon: "gavel",
      category: "Trial Roster",
      title: "Magistrate & Sessions",
      detail: "Civil & Criminal Trial Benches"
    },
    {
      icon: "balance",
      category: "Pecuniary Wing",
      title: "Suits up to ₹2 Crore",
      detail: "Senior Civil Judge & District Judge"
    },
    {
      icon: "handshake",
      category: "Special MM",
      title: "Sec 138 NI Act Benches",
      detail: "Summary Cheque Bounce Trials"
    },
    {
      icon: "domain",
      category: "Commercial Courts",
      title: "District Commercial Benches",
      detail: "Sec 12A Pre-Institution Mediation"
    }
  ],
  mattersEyebrow: "District Trial Scope",
  mattersTitle: "Matters Handled Before Delhi District Courts",
  mattersDescription: "Trial court representation across designated District Court complexes in Delhi for original civil, criminal, and commercial litigation.",
  matters: [
    {
      icon: "shield",
      category: "Criminal Trial & Bail",
      title: "Sessions Court Bail & Criminal Trial Defense",
      description: "Representing accused and complainants in regular bail applications, anticipatory bail under Section 482 BNSS, charge framing, witness cross-examination, and trial defense.",
      rosterText: "Sessions Court Roster",
      href: "/practice-areas/criminal-lawyer-delhi/bail-lawyer-delhi/"
    },
    {
      icon: "receipt_long",
      category: "Cheque Bounce Trial",
      title: "Section 138 NI Act Prosecution & Defense",
      description: "Prosecuting dishonoured cheque complaints for payees and defending drawers in Special Metropolitan Magistrate Courts, filing Section 143A interim compensation claims.",
      rosterText: "Special MM Court Benches",
      href: "/practice-areas/cheque-bounce-lawyer-delhi/section-138-ni-act-lawyer-delhi/"
    },
    {
      icon: "home_work",
      category: "Civil & Property Suits",
      title: "Partition, Title & Injunction Civil Suits",
      description: "Filing and contesting property partition suits, title declaration, recovery of possession under Specific Relief Act, and Order XXXIX temporary injunction applications.",
      rosterText: "Civil Judge & District Judge Roster",
      href: "/practice-areas/civil-lawyer-delhi/property-dispute-lawyer-delhi/"
    },
    {
      icon: "payments",
      category: "Debt Collection",
      title: "Order XXXVII Summary Debt Recovery Suits",
      description: "Expedited summary recovery suits for liquidated contractual debts, unpaid commercial invoices, and promissory notes before Senior Civil Judges.",
      rosterText: "Summary Suit Benches",
      href: "/practice-areas/civil-lawyer-delhi/recovery-suit-lawyer-delhi/"
    },
    {
      icon: "family_restroom",
      category: "Family & Matrimonial",
      title: "Family Court Divorce & Custody Petitions",
      description: "Handling mutual consent divorce petitions, contested divorce trials, child custody access under Guardians and Wards Act, and maintenance under Section 144 BNSS.",
      rosterText: "Principal Family Court Benches",
      href: "/practice-areas/divorce-family-lawyer-delhi/mutual-consent-divorce-delhi/"
    },
    {
      icon: "storefront",
      category: "Commercial Disputes",
      title: "District Commercial Court Litigation",
      description: "Litigating B2B commercial disputes valued between ₹3 Lakh and ₹2 Crore, conducting pre-institution mediation under Section 12A Commercial Courts Act.",
      rosterText: "District Commercial Benches",
      href: "/practice-areas/trademark-lawyer-delhi/"
    }
  ],
  processEyebrow: "Trial Court Roadmap",
  processTitle: "District Court Trial Procedure in Delhi",
  processDescription: "How civil and criminal matters progress through original District Courts from institution to final decree.",
  processSteps: [
    {
      number: "01",
      tag: "Pleadings",
      title: "Plaint / Complaint & Verification",
      description: "Drafting verified plaint or criminal complaint, assembling documentary evidence, calculating proper court fees, and filing at centralized filing counter.",
      timeline: "24 to 48 Hours"
    },
    {
      number: "02",
      tag: "Process",
      title: "Summons Service & Written Statement",
      description: "Court issues process to defendant or accused; defendant files Written Statement within 30 days under Order VIII CPC or enters appearance in criminal summons.",
      timeline: "30 to 90 Days"
    },
    {
      number: "03",
      tag: "Interim",
      title: "Interim Application Hearing & Issue Framing",
      description: "Court decides temporary injunctions under Order XXXIX CPC or interim maintenance applications, subsequently framing material issues of fact and law for trial.",
      timeline: "2 to 4 Months"
    },
    {
      number: "04",
      tag: "Trial",
      title: "Evidence Recording, Arguments & Decree",
      description: "Recording plaintiff and defendant witness testimonies, oral cross-examination, final arguments, judgment decree, and Order XXI execution proceedings.",
      timeline: "6 to 18 Months"
    }
  ],
  faqsEyebrow: "Trial Court Guidance",
  faqsTitle: "Delhi District Courts Litigation FAQs",
  faqsDescription: "Common procedural questions regarding pecuniary limits, bail procedures, and trial stages in Delhi District Courts.",
  faqs: [
    {
      question: "What is the pecuniary jurisdiction of Civil Courts in Delhi District Courts?",
      answer: "In Delhi, Civil Judges handle original civil suits valued up to ₹3 Lakh. District Judges and Additional District Judges hear civil suits valued between ₹3 Lakh and ₹2 Crore. Suits exceeding ₹2 Crore fall under the original civil jurisdiction of the High Court of Delhi."
    },
    {
      question: "How long does a Section 138 cheque bounce trial take in Delhi Magistrate Courts?",
      answer: "A Section 138 Negotiable Instruments Act trial in Delhi Special Metropolitan Magistrate Courts typically takes six to fifteen months to conclude, depending on summons service speed, interim compensation hearings under Section 143A, and trial evidence recording. Summary trial procedures help expedite proceedings compared to ordinary civil suits."
    },
    {
      question: "What is the difference between regular bail and anticipatory bail in District Courts?",
      answer: "Anticipatory bail under Section 482 BNSS is sought by a person apprehending arrest before detention occurs. Regular bail under Section 480 BNSS is filed after the accused has been arrested and remanded into judicial or police custody by the Magistrate."
    },
    {
      question: "Is pre-institution mediation mandatory before filing a commercial suit in District Courts?",
      answer: "Yes, under Section 12A of the Commercial Courts Act, 2015, pre-institution mediation before the District Legal Services Authority is compulsory for commercial recovery suits valued at ₹3 Lakh or above, unless the plaintiff seeks urgent interim court relief. Settlement agreements reached during pre-institution mediation have the status of an arbitral award."
    },
    {
      question: "What happens if a defendant fails to file a Written Statement within 30 days?",
      answer: "If a defendant fails to submit a Written Statement within thirty days (extendable up to ninety days in ordinary civil suits or 120 days in commercial suits), the court may forfeit the right to file defense under Order VIII Rule 1 CPC and proceed to judgment."
    }
  ],
  location: {
    complexTitle: "Delhi District Court Complexes Coordinates",
    officialAddress: siteConfig.address,
    chambersLocation: siteConfig.address,
    entryGates: "Advocates & Public Litigants Pass Counter at Tis Hazari, Patiala House, Saket, Rohini, Karkardooma & Dwarka.",
    nearestMetro: "Delhi Metro network connecting all 7 District Court complexes.",
    parkingInfo: "Litigant car parking available at designated multi-level court parking lots.",
    directPhone: siteConfig.phone,
    hours: siteConfig.hours,
    gpsCoordinates: "28.6667° N, 77.2167° E",
    googleMapsUrl: "https://maps.google.com/?q=Delhi+District+Courts",
    mapImageSrc: "/images/stitch/court_map_delhi_high_court.jpg"
  },
  ctaTitle: "Need District Court Trial Counsel or Bail Representation?",
  ctaDescription: "Schedule a confidential consultation for trial case assessment, bail applications, or civil recovery proceedings.",
  phone: siteConfig.phone,
  whatsapp: whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)
};
