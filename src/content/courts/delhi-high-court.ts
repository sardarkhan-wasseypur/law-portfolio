// DRAFT: advocate must review before publishing
import { CourtData } from "./types";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";
import { siteConfig } from "@/content/site";

export const delhiHighCourtData: CourtData = {
  slug: "delhi-high-court-advocate",
  name: "Delhi High Court",
  seoTitle: "Delhi High Court Advocate | Appellate & Original Counsel",
  metaDescription: "Legal representation before the High Court of Delhi in writ petitions, criminal appeals, Section 482 quashing, commercial suits, and trademark cases.",
  h1: "Delhi High Court Advocate",
  heroTagline: "Principal Appellate & Original Jurisdiction • Sher Shah Road, New Delhi",
  heroSubtitle: "Comprehensive legal advocacy, original side civil suits, criminal appeals & quashing, commercial division litigation, and Article 226 Constitutional writ petitions before the Hon'ble High Court of Delhi.",
  heroImageSrc: "/images/stitch/court_hero_delhi_high_court.jpg",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Courts", href: "/courts/" },
    { name: "Delhi High Court Advocate" }
  ],
  metrics: [
    {
      icon: "gavel",
      category: "Active Roster",
      title: "Daily Cause List",
      detail: "Ordinary & Supplementary Benches"
    },
    {
      icon: "balance",
      category: "Dual Wings",
      title: "Original & Appellate",
      detail: "Single & Division Benches"
    },
    {
      icon: "handshake",
      category: "ADR Bench",
      title: "Sec 34 Arbitration",
      detail: "Interim Sec 9 Injunctions"
    },
    {
      icon: "domain",
      category: "Commercial Bench",
      title: "Commercial Division",
      detail: "Pecuniary ₹2 Cr+ Threshold"
    }
  ],
  mattersEyebrow: "Jurisdictional Scope",
  mattersTitle: "Matters Handled Before Delhi High Court",
  mattersDescription: "Specialized litigation expertise tailored to the specific rosters, division benches, and procedural rules of the Delhi High Court.",
  matters: [
    {
      icon: "history_edu",
      category: "Constitutional Remedies",
      title: "Constitutional Writs (Art 226 & 227)",
      description: "Writs of Mandamus, Certiorari, and Habeas Corpus challenging government actions, tender cancellations, and administrative overreach across Delhi.",
      rosterText: "Division Bench Listing",
      href: "/practice-areas/civil-lawyer-delhi/"
    },
    {
      icon: "shield",
      category: "Penal & White Collar",
      title: "Criminal Appeals & Sec 528 BNSS Quashing",
      description: "High Court anticipatory bail, regular bail, sentence suspension, CBI/ED order challenges, and BNSS Section 528 / Sec 482 CrPC FIR quashing petitions.",
      rosterText: "Single Bench Criminal Roster",
      href: "/practice-areas/criminal-lawyer-delhi/"
    },
    {
      icon: "storefront",
      category: "Intellectual Property & Contracts",
      title: "Commercial Division & IPR Suits",
      description: "Commercial disputes under Commercial Courts Act, Section 9 interim relief, Section 34 arbitral award challenges, and trademark infringement suits.",
      rosterText: "IPD & Commercial Benches",
      href: "/practice-areas/trademark-lawyer-delhi/"
    },
    {
      icon: "real_estate_agent",
      category: "Original Side Jurisdiction",
      title: "Original Civil Suits & Property",
      description: "Partition suits, high-quantum specific performance claims, contested probate, and property title disputes valuing above ₹2.00 Crore threshold.",
      rosterText: "Original Civil Roster",
      href: "/practice-areas/civil-lawyer-delhi/property-dispute-lawyer-delhi/"
    },
    {
      icon: "account_balance",
      category: "Cheque Bounce Revisions",
      title: "Sec 138 NI Act High Court Revisions",
      description: "Appeals against Magistrate convictions, Section 378 leave to appeal, and criminal revision petitions under Negotiable Instruments Act.",
      rosterText: "Appellate Criminal Roster",
      href: "/practice-areas/cheque-bounce-lawyer-delhi/"
    },
    {
      icon: "family_restroom",
      category: "Matrimonial Appellate",
      title: "Matrimonial Appeals & Revisions",
      description: "First Appeals from Family Court orders under Section 19 of Family Courts Act, child custody habeas corpus writs, and interim maintenance revisions.",
      rosterText: "Matrimonial Division Bench",
      href: "/practice-areas/divorce-family-lawyer-delhi/"
    }
  ],
  processEyebrow: "Procedural Roadmap",
  processTitle: "Delhi High Court Filing & Hearing Protocol",
  processDescription: "A structured overview detailing how matters transition from chamber scrutiny to oral argument before Roster Benches.",
  processSteps: [
    {
      number: "01",
      tag: "Chambers",
      title: "Docket Scrutiny & Evidentiary Indexing",
      description: "Drafting petitions strictly conforming to Delhi High Court Rules, paginated indexing, statutory notice verification, and true-copy attestations.",
      timeline: "24 to 48 Hours"
    },
    {
      number: "02",
      tag: "Registry",
      title: "E-Filing & Registry Defect Clearance",
      description: "Digital submission through Delhi High Court E-Filing Portal, court-fee e-stamping, and immediate handling of registry scrutiny objections.",
      timeline: "Defect Window: 48 Hours"
    },
    {
      number: "03",
      tag: "Listing",
      title: "Advance Cause List & Urgent Mentioning",
      description: "Inclusion in Advance Cause List or priority mentioning slip submission at 10:30 AM before the Chief Justice Court for emergency stay directions.",
      timeline: "Same-Day Listing"
    },
    {
      number: "04",
      tag: "Hearing",
      title: "Courtroom Oral Argument & Compliance",
      description: "Oral arguments before Single or Division Benches, securing ad-interim ex-parte injunctions, notice issuance, and certified copy procurement.",
      timeline: "Real-time Registry Track"
    }
  ],
  faqsEyebrow: "Judicial Clarifications",
  faqsTitle: "Delhi High Court Litigation FAQs",
  faqsDescription: "Essential statutory thresholds, roster conventions, and procedural requirements for litigants approaching the High Court of Delhi.",
  faqs: [
    {
      question: "What is the current pecuniary jurisdiction for filing an original civil suit in the Delhi High Court?",
      answer: "Under the Delhi High Court (Amendment) Act, 2015, the Delhi High Court exercises original pecuniary jurisdiction in ordinary civil suits exceeding ₹2.00 Crores (Two Crore Rupees). Suits valued at ₹2.00 Crores or less must be instituted before Principal District Courts across Delhi's judicial districts."
    },
    {
      question: "How does urgent mentioning for same-day listing work at the Delhi High Court?",
      answer: "Urgent matters requiring immediate same-day consideration require an urgent mentioning slip submitted to the Chief Justice Court between 10:30 AM and 11:00 AM. Once oral permission is granted upon prima facie justification of urgency, the Registry assigns a matter number for supplementary inclusion."
    },
    {
      question: "Can an Anticipatory Bail application be filed directly in the Delhi High Court?",
      answer: "While Section 438 CrPC / BNSS provides concurrent jurisdiction to both Sessions Court and High Court, standard practice requires filing before the Sessions Court first. However, direct High Court filing is permitted under exceptional circumstances, such as multi-state central agency investigations or severe jurisdictional questions."
    },
    {
      question: "What are the strict requirements for challenging an arbitration award under Section 34?",
      answer: "Under Section 34 of the Arbitration and Conciliation Act 1996, an application must be instituted within a non-negotiable limitation period of three months. Challenges are restricted to narrow statutory grounds including patent illegality or conflict with the fundamental public policy of India without merits re-adjudication."
    },
    {
      question: "Does the Delhi High Court permit hybrid or virtual hearings for outstation clients?",
      answer: "Yes, the Delhi High Court operates functional hybrid courtrooms across benches pursuant to High Court Video Conferencing Rules, 2021. Litigants and outstation advocates can appear virtually through the official Cisco Webex platform with prior registry intimation while adhering to established judicial dress decorum standards."
    }
  ],
  location: {
    complexTitle: "Delhi High Court & Chambers Complex",
    officialAddress: "Sher Shah Road, Near India Gate, New Delhi – 110503",
    chambersLocation: siteConfig.address,
    entryGates: "Gate 1 & 2 (Advocates & Registered Litigants), Gate 5 (Central Registry & Pass Counter), Gate 7 (Judicial Officers & Staff).",
    nearestMetro: "Supreme Court Metro (Blue Line, 1.2 km) • Khan Market Metro (Violet Line, 1.4 km) • Central Secretariat (Yellow/Violet, 1.8 km).",
    parkingInfo: "Automated Multi-Level Car Parking facility at Sher Shah Suri Marg with underground pedestrian tunnel connecting directly to Gate 2.",
    directPhone: siteConfig.phone,
    hours: siteConfig.hours,
    gpsCoordinates: "28.6139° N, 77.2401° E",
    googleMapsUrl: "https://maps.google.com/?q=Delhi+High+Court+Sher+Shah+Road",
    mapImageSrc: "/images/stitch/court_map_delhi_high_court.jpg"
  },
  ctaTitle: "Need Appellate Advocacy or Urgent High Court Listing?",
  ctaDescription: "Contact Chambers for confidential docket assessment, case merits evaluation, and urgent listing inquiries before the Hon'ble High Court of Delhi.",
  phone: siteConfig.phone,
  whatsapp: whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)
};
