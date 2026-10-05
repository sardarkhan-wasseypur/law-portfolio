// DRAFT: advocate must review before publishing
import { CourtData } from "./types";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";
import { siteConfig } from "@/content/site";

export const supremeCourtData: CourtData = {
  slug: "supreme-court-advocate-delhi",
  name: "Supreme Court of India",
  seoTitle: "Supreme Court Advocate Delhi | SLP & Writ Counsel",
  metaDescription: "Legal representation before the Supreme Court of India for Special Leave Petitions (SLP), Article 32 writs, bail petitions, and statutory appeals.",
  h1: "Supreme Court Advocate Delhi",
  heroTagline: "Apex Constitutional Jurisdiction • Tilak Marg, New Delhi",
  heroSubtitle: "Appellate litigation, Special Leave Petitions (SLP Civil & Criminal), Article 32 Constitutional writs, Transfer Petitions, and statutory appeals before the Hon'ble Supreme Court of India.",
  heroImageSrc: "/images/stitch/hero_supreme_court.jpg",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Courts", href: "/courts/" },
    { name: "Supreme Court Advocate Delhi" }
  ],
  metrics: [
    {
      icon: "gavel",
      category: "Apex Roster",
      title: "Special Leave Petitions",
      detail: "Article 136 Discretionary Review"
    },
    {
      icon: "balance",
      category: "Writ Bench",
      title: "Article 32 Petitions",
      detail: "Fundamental Rights Enforcement"
    },
    {
      icon: "swap_horiz",
      category: "Inter-State",
      title: "Transfer Petitions",
      detail: "Sec 25 CPC & Sec 406 CrPC"
    },
    {
      icon: "shield",
      category: "Bail Roster",
      title: "Pre-Arrest & Regular Bail",
      detail: "Sushila Aggarwal Precedents"
    }
  ],
  mattersEyebrow: "Apex Court Scope",
  mattersTitle: "Matters Handled Before Supreme Court of India",
  mattersDescription: "Appellate advocacy and constitutional litigation tailored to the practice rules of the Supreme Court of India.",
  matters: [
    {
      icon: "history_edu",
      category: "Constitutional Writs",
      title: "Article 32 Fundamental Rights Writs",
      description: "Direct petitions under Article 32 of the Constitution of India challenging severe fundamental rights infringements, illegal detention, and unconstitutional state action.",
      rosterText: "Constitutional Bench",
      href: "/about/"
    },
    {
      icon: "shield",
      category: "Discretionary Appeals",
      title: "Special Leave Petitions (SLP Criminal & Civil)",
      description: "SLPs under Article 136 of the Constitution challenging final or interlocutory judgments of High Courts across criminal convictions, bail rejections, and civil decrees.",
      rosterText: "Apex Appellate Bench",
      href: "/practice-areas/criminal-lawyer-delhi/"
    },
    {
      icon: "swap_horiz",
      category: "Inter-State Jurisdiction",
      title: "Transfer Petitions (Civil & Criminal)",
      description: "Section 25 CPC and Section 406 CrPC / BNSS petitions seeking transfer of matrimonial suits, civil claims, or criminal trials across different state jurisdictions.",
      rosterText: "Single Judge Transfer Bench",
      href: "/practice-areas/divorce-family-lawyer-delhi/"
    },
    {
      icon: "balance",
      category: "Criminal Appellate",
      title: "Supreme Court Bail & Sentence Suspension",
      description: "Emergency SLPs seeking anticipatory bail, regular bail, or suspension of sentence following dismissal by High Courts under Sushila Aggarwal and Data Ram precedents.",
      rosterText: "Criminal Vacation Bench",
      href: "/practice-areas/criminal-lawyer-delhi/anticipatory-bail-lawyer-delhi/"
    },
    {
      icon: "payments",
      category: "Financial Debt Appeals",
      title: "Sec 138 NI Act Supreme Court Appeals",
      description: "Challenging High Court conviction affirmance, compounding under Section 147 NI Act at apex level, and clarifying conflicting negotiable instrument rulings.",
      rosterText: "Negotiable Instruments Bench",
      href: "/practice-areas/cheque-bounce-lawyer-delhi/"
    },
    {
      icon: "domain",
      category: "Commercial & IBC Appeals",
      title: "Statutory Appeals under IBC & Commercial Acts",
      description: "Direct statutory appeals under Section 62 of Insolvency and Bankruptcy Code (IBC) from NCLAT orders and Section 13(1A) Commercial Courts Act appeals.",
      rosterText: "Commercial Division Bench",
      href: "/practice-areas/civil-lawyer-delhi/recovery-suit-lawyer-delhi/"
    }
  ],
  processEyebrow: "Apex Court Roadmap",
  processTitle: "Supreme Court Filing & Hearing Procedure",
  processDescription: "Overview of how Special Leave Petitions and writs move from Advocate-on-Record (AOR) drafting to oral hearing.",
  processSteps: [
    {
      number: "01",
      tag: "Scrutiny",
      title: "SLP Drafting & AOR Certificate",
      description: "Drafting grounds of appeal, synopsis, list of dates, and securing mandatory Advocate-on-Record certification under Supreme Court Rules 2013.",
      timeline: "48 to 72 Hours"
    },
    {
      number: "02",
      tag: "Registry",
      title: "E-Filing & Verification Scrutiny",
      description: "Submitting digital dossier on Supreme Court ICMIS portal, verifying lower court certified copies, and clearing registry defect notes.",
      timeline: "Defect Window: 7 Days"
    },
    {
      number: "03",
      tag: "Listing",
      title: "Registration & Computerized Listing",
      description: "Assignment of Diary Number, registration of SLP, and automatic computerized listing on designated Miscellaneous Mondays or Fridays.",
      timeline: "Standard 10-Day Window"
    },
    {
      number: "04",
      tag: "Hearing",
      title: "Admission Hearing & Notice Issuance",
      description: "Oral arguments before Two-Judge Bench for preliminary hearing, securing stay of lower court judgment, or issuance of notice to respondent.",
      timeline: "Real-time Court Roster"
    }
  ],
  faqsEyebrow: "Apex Court Guidance",
  faqsTitle: "Supreme Court Litigation FAQs",
  faqsDescription: "Key procedural insights regarding Special Leave Petitions, limitation periods, and Advocate-on-Record rules in the Supreme Court of India.",
  faqs: [
    {
      question: "What is the limitation period for filing a Special Leave Petition (SLP) in the Supreme Court?",
      answer: "Under Supreme Court Rules, an SLP against a High Court judgment must be filed within ninety days from the judgment date. If the High Court refuses a certificate of fitness, the limitation period is sixty days from the refusal date, subject to condonation of delay upon sufficient cause."
    },
    {
      question: "What role does an Advocate-on-Record (AOR) play in Supreme Court proceedings?",
      answer: "Under Supreme Court Rules 2013, only an Advocate-on-Record (AOR) is entitled to file appearances, petitions, or affidavits on behalf of litigants before the Supreme Court. Senior advocates or arguing counsel present oral arguments upon instructions from the AOR. The AOR remains accountable to the court for all procedural filings."
    },
    {
      question: "Under what conditions will the Supreme Court grant a stay of a High Court judgment?",
      answer: "The Supreme Court grants an interim stay if the petitioner demonstrates a strong prima facie case, balance of convenience, and potential for irreparable injury. In criminal matters, sentence suspension or interim bail is granted if prolonged incarceration would render the SLP infructuous."
    },
    {
      question: "How does a Transfer Petition function in matrimonial disputes before the Supreme Court?",
      answer: "Under Section 25 CPC, a spouse can file a Transfer Petition in the Supreme Court seeking transfer of a divorce or custody petition from one state to another. The court considers distance, financial hardship, security concerns, and child welfare when adjudicating transfer applications."
    },
    {
      question: "Can an urgent matter be mentioned before the Chief Justice of India for immediate listing?",
      answer: "Yes, urgent SLPs involving imminent arrest, demolition, or election deadlines can be mentioned orally before the Chief Justice of India at 10:30 AM. Counsel must submit a verified mentioning slip detailing reasons why standard listing timeline is insufficient. Prior written notice must be served on opposing counsel before oral mentioning."
    }
  ],
  location: {
    complexTitle: "Supreme Court Precinct & Chambers",
    officialAddress: "Tilak Marg, Mandi House, New Delhi – 110001",
    chambersLocation: siteConfig.address,
    entryGates: "Gate 1 (Advocates & AOR), Gate 2 (Litigants Pass Counter), Gate 4 (Judicial Officers & VVIP).",
    nearestMetro: "Supreme Court Metro Station (Blue Line, 200 meters) • Mandi House Metro (Blue/Violet, 800 meters).",
    parkingInfo: "Dedicated Underground Litigant Parking beneath Supreme Court Museum with shuttle service to Gate 2.",
    directPhone: siteConfig.phone,
    hours: siteConfig.hours,
    gpsCoordinates: "28.6144° N, 77.2388° E",
    googleMapsUrl: "https://maps.google.com/?q=Supreme+Court+of+India+Tilak+Marg",
    mapImageSrc: "/images/stitch/court_map_delhi_high_court.jpg"
  },
  ctaTitle: "Require Apex Court Representation or Urgent SLP Filing?",
  ctaDescription: "Schedule a confidential consultation for Supreme Court dossier preparation, SLP merits assessment, and urgent listing.",
  phone: siteConfig.phone,
  whatsapp: whatsappLink(PREFILLED_WHATSAPP_MESSAGES.general)
};
