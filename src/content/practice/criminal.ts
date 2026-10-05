// DRAFT: advocate must review before publishing
import { PracticePageData } from "./types";
import { whatsappLink, PREFILLED_WHATSAPP_MESSAGES } from "@/lib/contact";

export const criminalLawPillarData: PracticePageData = {
  slug: "criminal-lawyer-delhi",
  title: "Criminal Law",
  seoTitle: "Criminal Lawyer in Delhi | Advocate Shubham Singh",
  metaDescription: "Criminal defense advocate in Delhi representing clients in anticipatory bail, regular bail, BNSS remand, and FIR quashing before High Court & SC.",
  h1: "Criminal Lawyer in Delhi",
  heroTagline: "Appellate & Trial Defense Chambers",
  heroDescription: "Strategic defense counsel and trial advocacy before Delhi District Courts, Delhi High Court, and the Supreme Court of India. Rigorous procedural defense in anticipatory bail, CBI/ED trials, white-collar offenses, and FIR quashing under Section 528 BNSS / Section 482 CrPC.", // VERIFY: advocate to confirm section number
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas/" },
    { name: "Criminal Lawyer Delhi" }
  ],
  alertBadge: "Available 24/7 for Remand Hearings & Urgent Vacation Bench Mentions",
  triggersEyebrow: "Jurisdictional Trigger",
  triggersTitle: "Immediate Defense Scenarios",
  triggers: [
    {
      number: "Trigger 01",
      icon: "policy",
      title: "Apprehension of Imminent Arrest",
      description: "Notice received under Section 35 BNSS (formerly Section 41A CrPC), threatening agency summons, or credible apprehension of custodial arrest by Delhi Police or central investigating authorities.", // VERIFY: advocate to confirm section number
      linkText: "Pre-Arrest Protocol",
      href: "/practice-areas/criminal-lawyer-delhi/anticipatory-bail-lawyer-delhi/"
    },
    {
      number: "Trigger 02",
      icon: "lock_clock",
      title: "Detained in Custody / Remand",
      description: "Physical detention within 24 hours requiring immediate court appearance before Area Judicial Magistrate to oppose police custody remand and press for judicial custody or emergency regular bail.",
      linkText: "Remand Defense",
      href: "/practice-areas/criminal-lawyer-delhi/bail-lawyer-delhi/"
    },
    {
      number: "Trigger 03",
      icon: "gavel",
      title: "Vexatious or False FIR",
      description: "Civil, commercial, or matrimonial disputes maliciously cloaked as criminal breach of trust (Section 316 BNS), cheating (Section 318 BNS), or extortion needing High Court quashing.", // VERIFY: advocate to confirm section number
      linkText: "BNSS Quashing",
      href: "/practice-areas/criminal-lawyer-delhi/fir-quashing-lawyer-delhi/"
    },
    {
      number: "Trigger 04",
      icon: "account_balance_wallet",
      title: "Financial & ED / PMLA Inquiries",
      description: "Summons issued under Section 50 PMLA by Enforcement Directorate, SFIO corporate investigation notices, or Serious Fraud Investigation Office proceedings involving director liabilities.", // VERIFY: advocate to confirm section number
      linkText: "Special Court Defense",
      href: "/practice-areas/criminal-lawyer-delhi/bail-lawyer-delhi/"
    }
  ],
  subServicesEyebrow: "Specialized Practice Areas",
  subServicesTitle: "Core Criminal Defense Sub-Practices",
  subServices: [
    {
      icon: "door_front",
      title: "Regular Bail & Sentence Suspension",
      description: "Rigorous formulation of regular bail applications under Section 480 & 483 BNSS (formerly Section 437/439 CrPC) across Sessions Benches and Delhi High Court appellate rosters.", // VERIFY: advocate to confirm section number
      tag: "Session & High Court Roster",
      href: "/practice-areas/criminal-lawyer-delhi/bail-lawyer-delhi/"
    },
    {
      icon: "shield",
      title: "Anticipatory Bail (Pre-Arrest Liberty)",
      description: "Prompt Section 482 BNSS (formerly Section 438 CrPC) motions for pre-arrest protective bail and interim stay against custodial coercion before District Courts & Delhi High Court.", // VERIFY: advocate to confirm section number
      tag: "Same-Day Emergency Listing",
      href: "/practice-areas/criminal-lawyer-delhi/anticipatory-bail-lawyer-delhi/"
    },
    {
      icon: "cancel_presentation",
      title: "FIR Quashing (Sec 528 BNSS / 482 CrPC)",
      description: "Invocation of High Court inherent powers under Section 528 BNSS to quash frivolous chargesheets, private compromises, and commercial disputes wrongly criminalized under Gian Singh guidelines.", // VERIFY: advocate to confirm section number
      tag: "High Court Inherent Jurisdiction",
      href: "/practice-areas/criminal-lawyer-delhi/fir-quashing-lawyer-delhi/"
    }
  ],
  timelineEyebrow: "Standard Operating Procedure",
  timelineTitle: "Defense Protocol & Procedural Timeline",
  timelineSteps: [
    {
      phase: "Phase 01 • Immediate Docket Scrutiny",
      time: "Hours 0 – 4",
      title: "Emergency Document Intake & Case Diary Review",
      description: "Instant deconstruction of First Information Reports (FIR), general diary entries, search-seizure memos, and grounds of arrest to evaluate compliance with statutory mandates under Section 35 BNSS and constitutional safeguards under Article 22(1).", // VERIFY: advocate to confirm section number
      dotColor: "tertiary"
    },
    {
      phase: "Phase 02 • Drafting & Evidentiary Dossier",
      time: "Hours 4 – 12",
      title: "Drafting of Petitions, Alibi Collation & Affidavits",
      description: "Meticulous preparation of defense pleadings highlighting lack of custodial requirement, absence of flight risk, cooperation with investigation, and deep roots in society accompanied by local surety documentation.",
      dotColor: "tertiary"
    },
    {
      phase: "Phase 03 • Urgent Filing & Bench Mentioning",
      time: "Day 01 (Morning Roster)",
      title: "Listing Before Roster Bench / Vacation Bench",
      description: "Emergency e-filing clearance followed by formal mentioning before the Chief Justice Court or Sessions Roster Bench for urgent same-day or next-morning hearing.",
      dotColor: "secondary"
    },
    {
      phase: "Phase 04 • Oral Advocacy & Enforcement",
      time: "Bench Hearing Day",
      title: "Courtroom Defense & Release Order Verification",
      description: "Articulate oral advocacy before the Hon'ble Court, securing interim protection, executing bail bonds before the Magistrate, and transmitting release warrants to jail superintendents.",
      dotColor: "tertiary"
    }
  ],
  checklistTitle: "What to Bring • Essential Docket Checklist",
  checklistDescription: "When consulting Chamber Counsel or submitting papers for urgent criminal drafting, ensure the following documentation is compiled:",
  checklistItems: [
    "Copy of FIR or Police Complaint (including FIR Number, Year, and Police Station jurisdiction)",
    "Notice served under Section 35 BNSS (formerly Section 41A CrPC) or agency summons (if served)", // VERIFY: advocate to confirm section number
    "Arrest Memo, Search Memo & Magistrate Remand Order (for custody matters)",
    "Identity & Address Proof (Aadhaar Card / Passport) of the Accused and two local Delhi sureties",
    "Certified copy of Lower Court rejection order & trial court chargesheet (if appealing before Delhi High Court or Supreme Court)"
  ],
  forumsEyebrow: "Judicial Forums",
  forumsTitle: "Courts & Tribunals of Daily Practice",
  forums: [
    { icon: "account_balance", name: "Supreme Court of India", detail: "SLP (Crl) & Article 32 Writs", iconColor: "tertiary" },
    { icon: "gavel", name: "Delhi High Court", detail: "Appeals & Sec 528 BNSS Quashing", iconColor: "tertiary" }, // VERIFY: advocate to confirm section number
    { icon: "corporate_fare", name: "Patiala House Courts", detail: "NDMC & CBI Special Benches", iconColor: "secondary" },
    { icon: "domain", name: "Rouse Avenue Courts", detail: "PMLA, ED & MP/MLA Courts", iconColor: "secondary" },
    { icon: "balance", name: "Tis Hazari Court", detail: "Central & West Sessions Divisions", iconColor: "outline" },
    { icon: "balance", name: "Saket Court", detail: "South & South-East Sessions Divisions", iconColor: "outline" },
    { icon: "balance", name: "Karkardooma Court", detail: "East, Shahdara & North-East Benches", iconColor: "outline" },
    { icon: "balance", name: "Dwarka & Rohini Courts", detail: "South-West & North-West Divisions", iconColor: "outline" }
  ],
  detailedSections: [
    {
      title: "Criminal Law Practice Framework in Delhi Courts",
      paragraphs: [
        "Navigating criminal proceedings in New Delhi requires an in-depth understanding of procedural mechanics, statutory thresholds, and judicial precedents across trial courts and appellate benches. Criminal litigation begins at the police station or investigative agency level and progresses through Magistrate Courts, Sessions Benches, the Delhi High Court, and ultimately the Supreme Court of India.",
        "With the enactment of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) and the Bharatiya Nyaya Sanhita, 2023 (BNS), criminal jurisprudence in India has undergone significant statutory reform. Fundamental concepts governing arrest notices, police custody remand, anticipatory bail, and chargesheet scrutiny must now be evaluated under both BNSS statutory provisions and transitional CrPC jurisprudence. Counsel provides structured advocacy at every stage—from initial interrogation summons to apex court appellate relief.", // VERIFY: advocate to confirm section number
        "The primary focus of criminal defense advocacy is protecting personal liberty guaranteed under Article 21 of the Constitution of India. Whether addressing economic offenses under the PMLA, complex IPC/BNS offenses, or statutory white-collar disputes, procedural compliance by investigating authorities remains a cornerstone of effective courtroom defense."
      ]
    },
    {
      title: "Statutory Defense Stages: Investigation to Trial",
      paragraphs: [
        "Criminal defense representation is structured across distinct procedural milestones: Pre-Arrest Protection, Remand & Bail Hearings, Chargesheet Scrutiny, Charge Framing, and Trial Cross-Examination.",
        "During the investigation stage, police officers are bound by statutory directives governing arrest. Under Section 35 BNSS (formerly Section 41A CrPC), investigating officers must issue a formal notice before arresting accused individuals in offenses punishable with imprisonment up to seven years. Failure to comply with these statutory mandates allows defense counsel to seek immediate intervention and bail protection under Arnesh Kumar guidelines.", // VERIFY: advocate to confirm section number
        "If an arrest occurs, the accused must be produced before a Judicial Magistrate within 24 hours under Section 57 BNSS (formerly Section 57 CrPC). Defense counsel opposes police custody remand (PC) by demonstrating that custodial interrogation is unnecessary, pressing for judicial custody or instant regular bail under Section 480/483 BNSS." // VERIFY: advocate to confirm section number
      ]
    },
    {
      title: "Appellate Advocacy & High Court Inherent Powers",
      paragraphs: [
        "When trial courts deny bail or when frivolous proceedings are instituted, appellate remedies before the High Court of Delhi become critical. Under Section 528 BNSS (formerly Section 482 CrPC), the High Court holds inherent jurisdiction to prevent abuse of the court process and secure the ends of justice.", // VERIFY: advocate to confirm section number
        "Inherent powers under Section 528 BNSS are frequently invoked to quash criminal proceedings arising out of commercial contracts, civil disputes, or personal settlements between parties under Supreme Court principles established in Gian Singh v. State of Punjab and State of Haryana v. Bhajan Lal.", // VERIFY: advocate to confirm section number
        "For matters involving serious statutory provisions or complex constitutional questions, Special Leave Petitions (SLP Criminal) under Article 136 of the Constitution are presented before the Hon'ble Supreme Court of India."
      ]
    }
  ],
  faqsEyebrow: "Judicial Clarifications",
  faqsTitle: "Frequently Asked Criminal Law Questions",
  faqs: [
    {
      question: "How quickly can an Anticipatory Bail application be listed before the Delhi High Court or Sessions Court?",
      answer: "Before Sessions Courts, filing before 12:30 PM allows listing on the same afternoon or next morning. Before the Delhi High Court, urgent pre-arrest applications accompanied by a mentioning memo before the Hon'ble Chief Justice can achieve same-day or next-day vacation roster listing."
    },
    {
      question: "What should I do immediately upon receiving a Police Notice under Section 35 BNSS (41A CrPC)?",
      answer: "Do not ignore a Section 35 BNSS notice. Non-appearance grants the investigating officer statutory discretion to arrest. Instruct counsel to draft a formal written reply, accompany you for investigation recording, and ensure strict compliance with Arnesh Kumar Supreme Court guidelines." // VERIFY: advocate to confirm section number
    },
    {
      question: "Can an FIR be quashed if a settlement has been reached between private parties?",
      answer: "Yes. Under Section 528 BNSS (formerly Section 482 CrPC), the Delhi High Court can quash FIRs arising from civil, commercial, or matrimonial disputes if parties execute a compromise deed and record statements. Non-compoundable heinous offenses against the State cannot be quashed merely on private settlement." // VERIFY: advocate to confirm section number
    },
    {
      question: "What happens if a regular bail application is rejected by the District Sessions Court?",
      answer: "Upon rejection by Sessions, an immediate regular bail petition under Section 483 BNSS (formerly Section 439 CrPC) is filed before the Delhi High Court. Counsel obtains certified orders, identifies mitigating factors such as investigation completion and parity, and seeks urgent High Court listing." // VERIFY: advocate to confirm section number
    },
    {
      question: "Does Advocate Shubham Singh accept urgent late-night remand or holiday duty representation?",
      answer: "Yes. An arrested person must be produced before a magistrate within 24 hours, often occurring at duty magistrates' residential offices during off-hours or court holidays. Chambers maintains emergency protocols for night-duty and weekend remand representation."
    },
    {
      question: "How are Non-Bailable Warrants (NBWs) recalled or stayed in Delhi courts?",
      answer: "NBWs issued for non-appearance are addressed by filing an immediate cancellation application under Section 74 BNSS (formerly Section 70(2) CrPC) before the issuing court, citing genuine grounds such as medical incapacity. Urgent High Court petitions can stay execution if arrest is imminent." // VERIFY: advocate to confirm section number
    }
  ],
  insightsEyebrow: "Appellate Research",
  insightsTitle: "Related Practice Guides & Insights",
  insights: [
    {
      category: "Statutory Analysis",
      title: "Section 138 NI Act: Pre-requisites of Statutory Demand Notice & Cheque Dishonour Defense",
      excerpt: "Critical timelines governing delivery acknowledgement, presumption under Section 139, and strategic dispute mediation before Metropolitan Magistrates.",
      href: "/legal-insights/section-138-ni-act-cheque-bounce-notice-delhi/"
    },
    {
      category: "Precedent Review",
      title: "Special Leave Petitions (SLP) Against Criminal Convictions: Landmark Rulings & Urgent Relief",
      excerpt: "Analytical dissection of Supreme Court discretionary powers under Article 136, evidentiary evaluation thresholds, and immediate interim bail protocols.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    },
    {
      category: "Constitutional Liberty",
      title: "Anticipatory Bail Jurisprudence: Protecting Personal Liberty Against Vexatious Litigation",
      excerpt: "Strategic enforcement of Sushila Aggarwal constitutional bench principles governing pre-arrest protection under Indian criminal law.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    }
  ],
  sidebar: {
    rosterNotice: "Applications for tomorrow morning's court roster must be finalized and cleared through registry counters before 12:30 PM.",
    formTitle: "Confidential Case Review",
    formSubtitle: "Privileged & confidential intake directly reviewed by Advocate Shubham Singh.",
    phone: "+91 (011) 2338-8900",
    whatsapp: whatsappLink(PREFILLED_WHATSAPP_MESSAGES.criminal),
    officeAddress: "Chamber 412, Lawyers Chambers Block, Delhi High Court, Sher Shah Road, New Delhi – 110503."
  },
  bottomReview: {
    advocateName: "Advocate Shubham Singh",
    chambers: "Chambers of Shubham Singh, Delhi",
    lastReviewed: "October 2026",
    disclaimerText: "Information on this criminal defense practice profile is prepared solely for general awareness in adherence with Bar Council of India Rule 36 and does not create an advocate-client relationship."
  }
};

export const bailLawyerSubData: PracticePageData = {
  slug: "bail-lawyer-delhi",
  pillarSlug: "criminal-lawyer-delhi",
  title: "Bail Representation",
  seoTitle: "Bail Lawyer in Delhi | Regular & Interim Bail Advocate",
  metaDescription: "Experienced bail lawyer in Delhi handling regular bail, interim bail, and sentence suspension applications in Sessions Courts & High Court.",
  h1: "Bail Lawyer in Delhi",
  heroTagline: "Custodial Liberty & Appellate Bail Practice",
  heroDescription: "Rigorous legal representation for regular bail, interim bail on medical grounds, and suspension of sentence under Section 480 & 483 BNSS (formerly Section 437/439 CrPC) before District Courts, Delhi High Court, and the Supreme Court of India.", // VERIFY: advocate to confirm section number
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas/" },
    { name: "Criminal Lawyer Delhi", href: "/practice-areas/criminal-lawyer-delhi/" },
    { name: "Bail Lawyer Delhi" }
  ],
  alertBadge: "Immediate Courtroom Representation for Custody Remand & Regular Bail Motions",
  triggersEyebrow: "Bail Jurisdictional Grounds",
  triggersTitle: "Custodial Bail Defense Scenarios",
  triggers: [
    {
      number: "Trigger 01",
      icon: "lock_clock",
      title: "Judicial Custody Detention",
      description: "Accused remanded to judicial custody following police interrogation, requiring an immediate regular bail petition under Section 480/483 BNSS in the Sessions Court.", // VERIFY: advocate to confirm section number
      linkText: "Regular Bail Motion",
      href: "#intake-form"
    },
    {
      number: "Trigger 02",
      icon: "emergency",
      title: "Medical & Family Emergency",
      description: "Urgent interim bail applications sought for urgent surgical procedures, severe illness, or immediate family bereavement requiring short-term temporary release.",
      linkText: "Interim Bail Motion",
      href: "#intake-form"
    },
    {
      number: "Trigger 03",
      icon: "gavel",
      title: "Sessions Court Bail Rejection",
      description: "Bail application dismissed by the District Sessions Judge, requiring an urgent appellate bail motion before the High Court of Delhi under Section 483 BNSS.", // VERIFY: advocate to confirm section number
      linkText: "High Court Appeal",
      href: "#intake-form"
    },
    {
      number: "Trigger 04",
      icon: "schedule",
      title: "Statutory Default Bail (Delay in Filing Chargesheet)",
      description: "Investigating agency failed to file the chargesheet within the mandatory 60 or 90-day statutory period, establishing an indefeasible right to default bail under Section 187 BNSS (formerly 167(2) CrPC).", // VERIFY: advocate to confirm section number
      linkText: "Default Bail Petition",
      href: "#intake-form"
    }
  ],
  subServicesEyebrow: "Related Defense Services",
  subServicesTitle: "Criminal Defense Practice Cluster",
  subServices: [
    {
      icon: "shield",
      title: "Anticipatory Bail (Pre-Arrest)",
      description: "Pre-arrest protective bail applications under Section 482 BNSS to prevent custodial arrest during investigation.", // VERIFY: advocate to confirm section number
      tag: "Pre-Arrest Protection",
      href: "/practice-areas/criminal-lawyer-delhi/anticipatory-bail-lawyer-delhi/"
    },
    {
      icon: "cancel_presentation",
      title: "FIR Quashing Proceedings",
      description: "High Court petitions under Section 528 BNSS to quash compromise matters, private settlements, and groundless FIRs.", // VERIFY: advocate to confirm section number
      tag: "High Court Inherent Jurisdiction",
      href: "/practice-areas/criminal-lawyer-delhi/fir-quashing-lawyer-delhi/"
    },
    {
      icon: "balance",
      title: "Criminal Trial Defense",
      description: "Comprehensive trial advocacy including cross-examination, charge argument, and final defense arguments in Sessions Courts.",
      tag: "Trial Court Chambers",
      href: "/practice-areas/criminal-lawyer-delhi/"
    }
  ],
  timelineEyebrow: "Bail Application Mechanics",
  timelineTitle: "Regular Bail Procedure & Hearing Timeline",
  timelineSteps: [
    {
      phase: "Phase 01 • Case File Intake & Order Analysis",
      time: "Hours 0 – 3",
      title: "Chargesheet & Remand Order Audit",
      description: "Examining police chargesheet, witness statements under Section 180 BNSS (161 CrPC), search memos, and lower court rejection orders to isolate factual and legal grounds for bail.", // VERIFY: advocate to confirm section number
      dotColor: "tertiary"
    },
    {
      phase: "Phase 02 • Drafting Bail Petition & Affidavits",
      time: "Hours 3 – 8",
      title: "Formulation of Grounded Pleadings",
      description: "Drafting detailed bail petition highlighting completion of investigation, absence of requirement for custodial interrogation, co-accused parity, and local surety availability.",
      dotColor: "tertiary"
    },
    {
      phase: "Phase 03 • Filing & Notice Service to State",
      time: "Day 01",
      title: "Registry Filing & Advance Notice to Prosecutor",
      description: "Filing petition before Sessions Registry or High Court E-Filing Portal with advance copy served to the State Public Prosecutor and investigating agency.",
      dotColor: "secondary"
    },
    {
      phase: "Phase 04 • Oral Bench Arguments & Bond Execution",
      time: "Hearing Day",
      title: "Courtroom Arguments & Jail Order Dispatch",
      description: "Arguing bail application before the Hon'ble Judge, obtaining favorable bail order, executing surety bonds before the Magistrate, and serving release order on Jail Authorities.",
      dotColor: "tertiary"
    }
  ],
  checklistTitle: "Documents Required for Filing Regular Bail",
  checklistDescription: "To ensure prompt drafting and filing of regular bail applications in Delhi courts, bring the following documentation:",
  checklistItems: [
    "Certified copy of FIR and Police Chargesheet (if filed under Section 193 BNSS / 173 CrPC)", // VERIFY: advocate to confirm section number
    "Copy of Magistrate Remand Order placing the accused in judicial custody",
    "Certified copy of previous bail rejection order from District / Sessions Court (if moving High Court)",
    "Medical records, hospital discharge summaries, or emergency proof (if seeking interim medical bail)",
    "Identity proof (Aadhaar Card) and property title deed / RC of local Delhi surety for executing bail bonds"
  ],
  forumsEyebrow: "Bail Benches",
  forumsTitle: "Courts Handling Bail Applications in Delhi",
  forums: [
    { icon: "account_balance", name: "Supreme Court of India", detail: "SLP (Crl) against High Court bail refusal", iconColor: "tertiary" },
    { icon: "gavel", name: "Delhi High Court", detail: "Section 483 BNSS Regular & Interim Bail", iconColor: "tertiary" }, // VERIFY: advocate to confirm section number
    { icon: "corporate_fare", name: "Patiala House Courts", detail: "CBI & New Delhi District Sessions", iconColor: "secondary" },
    { icon: "domain", name: "Rouse Avenue Courts", detail: "ED, PMLA & Corruption Special Benches", iconColor: "secondary" },
    { icon: "balance", name: "Tis Hazari Court", detail: "Central & West Sessions Courts", iconColor: "outline" },
    { icon: "balance", name: "Saket Court", detail: "South & South-East Sessions Courts", iconColor: "outline" },
    { icon: "balance", name: "Karkardooma Court", detail: "East & Shahdara Sessions Courts", iconColor: "outline" },
    { icon: "balance", name: "Dwarka & Rohini Courts", detail: "South-West & North-West Sessions Benches", iconColor: "outline" }
  ],
  detailedSections: [
    {
      title: "Understanding Regular & Interim Bail in Delhi Jurisprudence",
      paragraphs: [
        "Bail jurisprudence in India rests upon the fundamental constitutional principle articulated by the Supreme Court: 'Bail is the rule, jail is the exception.' When an accused individual is taken into judicial custody, securing personal liberty through a structured regular bail application becomes the primary objective of defense counsel.",
        "Under Section 480 BNSS (formerly Section 437 CrPC) for Magistrate Courts and Section 483 BNSS (formerly Section 439 CrPC) for Sessions Courts and the High Court, courts evaluate specific parameters before granting bail: the nature and gravity of the offense, severity of punishment, danger of the accused fleeing justice, likelihood of tampering with evidence or influencing witnesses, and the progress of police investigation.", // VERIFY: advocate to confirm section number
        "Where full regular bail requires trial court record examination or chargesheet submission, defense counsel may press for 'Interim Bail'. Interim bail provides temporary release for specified durations on compassionate grounds such as medical treatment, family bereavements, or attending essential examinations."
      ]
    },
    {
      title: "Key Arguments in Regular Bail Advocacy",
      paragraphs: [
        "Regular bail applications rely on clear statutory and factual arguments presented during bench hearings:",
        "1. Completion of Investigation: Demonstrating that police custody is no longer required and that the investigating officer has completed interrogation or filed the chargesheet under Section 193 BNSS (formerly Section 173 CrPC).", // VERIFY: advocate to confirm section number
        "2. Principle of Parity: Establishing that co-accused individuals with similar or greater alleged roles have already been granted bail by competent courts.",
        "3. Indefeasible Right to Default Bail: If the investigating agency fails to complete investigation and file the chargesheet within 60 days (for offenses punishable up to 10 years) or 90 days (for offenses punishable with death, life imprisonment, or terms exceeding 10 years), the accused acquires an absolute right to statutory default bail under Section 187 BNSS (formerly Section 167(2) CrPC)." // VERIFY: advocate to confirm section number
      ]
    },
    {
      title: "Appellate Bail Procedure in High Court & Supreme Court",
      paragraphs: [
        "If a Sessions Court rejects a regular bail application, an immediate petition under Section 483 BNSS is instituted before the High Court of Delhi. Counsel prepares comprehensive pleadings citing specific errors in the Sessions Court's reasoning, highlighting changed circumstances, duration of incarceration, and relevant High Court and Supreme Court precedents.", // VERIFY: advocate to confirm section number
        "If regular bail is denied by the High Court, relief may be sought before the Hon'ble Supreme Court of India through a Special Leave Petition (SLP Criminal) under Article 136 of the Constitution, emphasizing constitutional liberty under Article 21 and undue delay in trial commencement."
      ]
    }
  ],
  faqsEyebrow: "Bail FAQs",
  faqsTitle: "Frequently Asked Questions on Bail Law in Delhi",
  faqs: [
    {
      question: "What is the difference between Regular Bail and Anticipatory Bail?",
      answer: "Regular bail is applied for when an accused is already in police or judicial custody following arrest. Anticipatory bail is sought prior to arrest when a person apprehends imminent detention by investigating authorities."
    },
    {
      question: "How long does it take to get a regular bail hearing in Delhi Sessions Court?",
      answer: "Upon filing a regular bail application before 12:30 PM, the matter is typically listed before the concerned Sessions Judge on the same afternoon or following morning. State response is usually called within 24 to 48 hours."
    },
    {
      question: "What is Default Bail under Section 187 BNSS (Section 167(2) CrPC)?",
      answer: "Default bail is an indefeasible statutory right to release when investigating agencies fail to file the chargesheet within 60 or 90 days of arrest. Once the period expires, bail must be granted if the accused applies and offers surety." // VERIFY: advocate to confirm section number
    },
    {
      question: "Can regular bail be granted in non-bailable offenses?",
      answer: "Yes. In non-bailable offenses, bail is at the judicial discretion of the court. Courts grant regular bail considering factors such as trial delay, lack of flight risk, cooperation with investigation, and parity with co-accused."
    },
    {
      question: "What happens after the court passes a bail order?",
      answer: "After a favorable bail order is issued, defense counsel submits bail bonds and local surety documents before the Magistrate. Upon verification, the court issues a release warrant (Robkar) sent to the jail superintendent."
    },
    {
      question: "Can bail conditions be modified if they are overly restrictive?",
      answer: "Yes. If bail conditions—such as daily police station reporting or passport impounding—cause severe hardship, an application for modification of bail conditions can be moved before the granting court."
    }
  ],
  insightsEyebrow: "Bail Practice Insights",
  insightsTitle: "Related Appellate & Bail Research",
  insights: [
    {
      category: "Precedent Review",
      title: "Special Leave Petitions (SLP) Against Criminal Convictions: Landmark Rulings & Urgent Relief",
      excerpt: "Analytical dissection of Supreme Court discretionary powers under Article 136, evidentiary evaluation thresholds, and immediate interim bail protocols.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    },
    {
      category: "Statutory Analysis",
      title: "Section 138 NI Act: Pre-requisites of Statutory Demand Notice & Cheque Dishonour Defense",
      excerpt: "Critical timelines governing delivery acknowledgement, presumption under Section 139, and strategic dispute mediation before Metropolitan Magistrates.",
      href: "/legal-insights/section-138-ni-act-cheque-bounce-notice-delhi/"
    },
    {
      category: "Constitutional Liberty",
      title: "Anticipatory Bail Jurisprudence: Protecting Personal Liberty Against Vexatious Litigation",
      excerpt: "Strategic enforcement of Sushila Aggarwal constitutional bench principles governing pre-arrest protection under Indian criminal law.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    }
  ],
  sidebar: {
    rosterNotice: "Bail petitions for tomorrow morning's court roster must be cleared through registry counters before 12:30 PM.",
    formTitle: "Confidential Case Review",
    formSubtitle: "Privileged & confidential intake directly reviewed by Advocate Shubham Singh.",
    phone: "+91 (011) 2338-8900",
    whatsapp: whatsappLink(PREFILLED_WHATSAPP_MESSAGES.criminal),
    officeAddress: "Chamber 412, Lawyers Chambers Block, Delhi High Court, Sher Shah Road, New Delhi – 110503."
  },
  bottomReview: {
    advocateName: "Advocate Shubham Singh",
    chambers: "Chambers of Shubham Singh, Delhi",
    lastReviewed: "October 2026",
    disclaimerText: "Information on this bail law practice profile is prepared solely for general awareness in adherence with Bar Council of India Rule 36 and does not create an advocate-client relationship."
  }
};

export const anticipatoryBailSubData: PracticePageData = {
  slug: "anticipatory-bail-lawyer-delhi",
  pillarSlug: "criminal-lawyer-delhi",
  title: "Anticipatory Bail",
  seoTitle: "Anticipatory Bail Lawyer in Delhi | Pre-Arrest Legal Defense",
  metaDescription: "Anticipatory bail lawyer in Delhi securing pre-arrest protection and interim stay against custodial coercion under BNSS / CrPC in Sessions & High Court.",
  h1: "Anticipatory Bail Lawyer in Delhi",
  heroTagline: "Pre-Arrest Liberty & Constitutional Protection",
  heroDescription: "Urgent legal representation for anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC) before Sessions Courts and the High Court of Delhi to prevent custodial arrest in non-bailable offenses.", // VERIFY: advocate to confirm section number
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas/" },
    { name: "Criminal Lawyer Delhi", href: "/practice-areas/criminal-lawyer-delhi/" },
    { name: "Anticipatory Bail Lawyer Delhi" }
  ],
  alertBadge: "Urgent Pre-Arrest Representation Before Sessions & High Court Benches",
  triggersEyebrow: "Pre-Arrest Scenarios",
  triggersTitle: "When to Seek Anticipatory Bail",
  triggers: [
    {
      number: "Trigger 01",
      icon: "policy",
      title: "Notice Issued Under Sec 35 BNSS (41A CrPC)",
      description: "Investigating agency issued a notice to join investigation, raising genuine apprehension of custodial arrest upon appearance at police station.", // VERIFY: advocate to confirm section number
      linkText: "Pre-Arrest Protection",
      href: "#intake-form"
    },
    {
      number: "Trigger 02",
      icon: "gavel",
      title: "FIR Registered in Non-Bailable Offense",
      description: "First Information Report lodged alleging non-bailable offenses (such as fraud, forgery, 498A/304B BNS, economic offenses) requiring immediate court intervention.", // VERIFY: advocate to confirm section number
      linkText: "Urgent Pre-Arrest Motion",
      href: "#intake-form"
    },
    {
      number: "Trigger 03",
      icon: "warning",
      title: "Matrimonial & 498A IPC / 85 BNS Complaints",
      description: "Apprehension of arrest arising out of matrimonial disputes, CAW Cell complaints, or domestic violence allegations before family courts or police stations.", // VERIFY: advocate to confirm section number
      linkText: "Matrimonial Protection",
      href: "#intake-form"
    },
    {
      number: "Trigger 04",
      icon: "account_balance_wallet",
      title: "Corporate, Tax & PMLA Inquiries",
      description: "Summons received from central investigative agencies (ED, EOW, GST Intelligence, SFIO) where custodial interrogation is threatened.",
      linkText: "Agency Defense Motion",
      href: "#intake-form"
    }
  ],
  subServicesEyebrow: "Related Practice Areas",
  subServicesTitle: "Criminal Defense Cluster",
  subServices: [
    {
      icon: "door_front",
      title: "Regular Bail Representation",
      description: "Bail petitions for individuals already in judicial custody under Section 480 & 483 BNSS.", // VERIFY: advocate to confirm section number
      tag: "Custodial Bail",
      href: "/practice-areas/criminal-lawyer-delhi/bail-lawyer-delhi/"
    },
    {
      icon: "cancel_presentation",
      title: "FIR Quashing Petitions",
      description: "High Court petitions under Section 528 BNSS to quash groundless FIRs and compromised disputes.", // VERIFY: advocate to confirm section number
      tag: "High Court Inherent Jurisdiction",
      href: "/practice-areas/criminal-lawyer-delhi/fir-quashing-lawyer-delhi/"
    },
    {
      icon: "balance",
      title: "Criminal Trial Defense",
      description: "Comprehensive courtroom defense across Sessions Courts and High Court appellate rosters.",
      tag: "Trial Chambers",
      href: "/practice-areas/criminal-lawyer-delhi/"
    }
  ],
  timelineEyebrow: "Pre-Arrest Protocol",
  timelineTitle: "Anticipatory Bail Filing & Relief Timeline",
  timelineSteps: [
    {
      phase: "Phase 01 • Threat Assessment & FIR Analysis",
      time: "Immediate (Hours 0–2)",
      title: "Emergency Review of Allegations & Jurisdiction",
      description: "Evaluating FIR contents, police station jurisdiction, specific role attributed to accused, and establishing genuine apprehension of arrest under statutory criteria.",
      dotColor: "tertiary"
    },
    {
      phase: "Phase 02 • Drafting Pre-Arrest Petition",
      time: "Hours 2–6",
      title: "Pleadings Formulation & Alibi Evidence",
      description: "Drafting Section 482 BNSS petition highlighting willingness to join investigation, absence of requirement for custodial interrogation, and clean antecedents.", // VERIFY: advocate to confirm section number
      dotColor: "tertiary"
    },
    {
      phase: "Phase 03 • Urgent Filing & Bench Mentioning",
      time: "Day 01",
      title: "E-Filing & Mentioning for Interim Protection",
      description: "Urgent filing before Sessions Roster Bench or High Court, followed by mentioning before the Hon'ble Judge for same-day interim protection order.",
      dotColor: "secondary"
    },
    {
      phase: "Phase 04 • Hearing & Conditions Compliance",
      time: "Bench Hearing",
      title: "Oral Arguments & Formal Order Compliance",
      description: "Arguing for anticipatory bail, securing interim stay on arrest, joining police investigation as directed, and furnishing bail bonds if arrest is formally recorded.",
      dotColor: "tertiary"
    }
  ],
  checklistTitle: "Documents Required for Anticipatory Bail",
  checklistDescription: "To file an urgent anticipatory bail application in Delhi courts, provide the following documents:",
  checklistItems: [
    "Copy of FIR or complaint details (FIR Number, Year, Section of BNS/IPC, Police Station)", // VERIFY: advocate to confirm section number
    "Notice served under Section 35 BNSS (41A CrPC) or police summons (if received)", // VERIFY: advocate to confirm section number
    "Documentary evidence establishing alibi, non-involvement, or commercial nature of transaction",
    "Identity & Address Proof (Aadhaar Card / Passport) of the applicant",
    "Certified copy of Sessions Court rejection order (if filing anticipatory bail before High Court)"
  ],
  forumsEyebrow: "Pre-Arrest Benches",
  forumsTitle: "Courts Granting Anticipatory Bail in Delhi",
  forums: [
    { icon: "gavel", name: "Delhi High Court", detail: "Section 482 BNSS Pre-Arrest Protection", iconColor: "tertiary" }, // VERIFY: advocate to confirm section number
    { icon: "account_balance", name: "Supreme Court of India", detail: "SLP against High Court anticipatory bail rejection", iconColor: "tertiary" },
    { icon: "corporate_fare", name: "Patiala House Courts", detail: "Sessions Benches for New Delhi District", iconColor: "secondary" },
    { icon: "domain", name: "Rouse Avenue Courts", detail: "Special Sessions Judges for CBI & ED Cases", iconColor: "secondary" },
    { icon: "balance", name: "Tis Hazari Court", detail: "Central & West District Sessions Courts", iconColor: "outline" },
    { icon: "balance", name: "Saket Court", detail: "South & South-East District Sessions Courts", iconColor: "outline" },
    { icon: "balance", name: "Karkardooma Court", detail: "East & Shahdara District Sessions Benches", iconColor: "outline" },
    { icon: "balance", name: "Dwarka & Rohini Courts", detail: "South-West & North-West Sessions Courts", iconColor: "outline" }
  ],
  detailedSections: [
    {
      title: "Statutory Law of Anticipatory Bail in Delhi",
      paragraphs: [
        "Anticipatory bail is a statutory remedy designed to protect individuals from humiliation, harassment, and unauthorized custodial arrest. Under Section 482 BNSS, 2023 (formerly Section 438 CrPC, 1973), a person who has reasonable grounds to apprehend arrest in a non-bailable offense may apply to the Court of Session or the High Court for a direction that, in the event of such arrest, they shall be released on bail.", // VERIFY: advocate to confirm section number
        "The Constitutional Bench of the Supreme Court in Sushila Aggarwal v. State (NCT of Delhi) established that anticipatory bail orders need not be restricted to a specific time period and can continue till the conclusion of trial, unless specific grounds for cancellation arise.",
        "When evaluating an anticipatory bail application, courts balance two competing interests: safeguarding personal liberty guaranteed under Article 21 of the Constitution and ensuring unhindered investigation by police authorities."
      ]
    },
    {
      title: "Factors Considered by Courts for Pre-Arrest Bail",
      paragraphs: [
        "Courts examine specific statutory criteria when deciding anticipatory bail petitions:",
        "1. Nature and Gravity of Allegations: Assessing whether the alleged offense involves violence, severe financial fraud, or offenses against the State.",
        "2. Antecedents of the Applicant: Demonstrating that the applicant has no prior criminal convictions or history of fleeing justice.",
        "3. Flight Risk and Cooperation: Showing that the applicant has deep roots in society, local residence, and is willing to join and cooperate fully with police investigation under Section 35 BNSS notices.", // VERIFY: advocate to confirm section number
        "4. Possibility of Vexatious Prosecution: Demonstrating that allegations stem from personal enmity, commercial disputes, or matrimonial discord intended to humiliate the applicant."
      ]
    },
    {
      title: "Procedure for Seeking Emergency Pre-Arrest Relief",
      paragraphs: [
        "When there is an immediate threat of arrest, defense counsel files an urgent anticipatory bail application before the Sessions Court or High Court along with an application for interim protection.",
        "If interim protection is granted by the Hon'ble Court, a direction is issued to the investigating officer that no coercive action (arrest) shall be taken against the applicant, subject to the applicant joining investigation whenever summoned.",
        "If the Sessions Court rejects anticipatory bail, an immediate application is moved before the High Court of Delhi. If the High Court also rejects relief, an SLP (Criminal) can be filed before the Supreme Court of India."
      ]
    }
  ],
  faqsEyebrow: "Anticipatory Bail FAQs",
  faqsTitle: "Frequently Asked Questions on Anticipatory Bail",
  faqs: [
    {
      question: "Can Anticipatory Bail be applied for before an FIR is formally registered?",
      answer: "Yes. Anticipatory bail can be sought if there is a reasonable and concrete apprehension of arrest based on police complaints, inquiry notices under Section 35 BNSS, or reliable information, even before an FIR number is formally assigned." // VERIFY: advocate to confirm section number
    },
    {
      question: "What happens if Anticipatory Bail is granted by the Court?",
      answer: "If anticipatory bail is granted, the court issues a direction that if police attempt to arrest the applicant, they must release the applicant immediately upon furnishing specified bail bonds and local sureties."
    },
    {
      question: "Does granting Anticipatory Bail mean the criminal case is closed?",
      answer: "No. Anticipatory bail only protects against physical detention. Investigation and trial proceedings continue normally, and the applicant must cooperate with investigating officers as directed."
    },
    {
      question: "Can Anticipatory Bail be rejected if the police claim custodial interrogation is needed?",
      answer: "Investigating agencies frequently argue that custodial interrogation is required for recovery. Defense counsel counters this by showing that all relevant documents or objects are already in police possession or that cooperation renders custody unnecessary."
    },
    {
      question: "What conditions are typically imposed in an Anticipatory Bail order?",
      answer: "Common conditions include: joining investigation when summoned by police, not leaving India without prior court permission, not contacting prosecution witnesses, and surrendering passport if ordered."
    },
    {
      question: "If Sessions Court rejects Anticipatory Bail, can I immediately approach Delhi High Court?",
      answer: "Yes. Upon rejection by the Sessions Judge, defense counsel obtains the certified rejection order and files a fresh anticipatory bail application under Section 482 BNSS before the Delhi High Court." // VERIFY: advocate to confirm section number
    }
  ],
  insightsEyebrow: "Pre-Arrest Research",
  insightsTitle: "Related Anticipatory Bail Insights",
  insights: [
    {
      category: "Constitutional Liberty",
      title: "Anticipatory Bail Jurisprudence: Protecting Personal Liberty Against Vexatious Litigation",
      excerpt: "Strategic enforcement of Sushila Aggarwal constitutional bench principles governing pre-arrest protection under Indian criminal law.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    },
    {
      category: "Statutory Analysis",
      title: "Section 138 NI Act: Pre-requisites of Statutory Demand Notice & Cheque Dishonour Defense",
      excerpt: "Critical timelines governing delivery acknowledgement, presumption under Section 139, and strategic dispute mediation before Metropolitan Magistrates.",
      href: "/legal-insights/section-138-ni-act-cheque-bounce-notice-delhi/"
    },
    {
      category: "Precedent Review",
      title: "Special Leave Petitions (SLP) Against Criminal Convictions: Landmark Rulings & Urgent Relief",
      excerpt: "Analytical dissection of Supreme Court discretionary powers under Article 136, evidentiary evaluation thresholds, and immediate interim bail protocols.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    }
  ],
  sidebar: {
    rosterNotice: "Pre-arrest applications for tomorrow's High Court / Sessions roster must be filed before 12:30 PM.",
    formTitle: "Confidential Case Review",
    formSubtitle: "Privileged & confidential intake directly reviewed by Advocate Shubham Singh.",
    phone: "+91 (011) 2338-8900",
    whatsapp: whatsappLink(PREFILLED_WHATSAPP_MESSAGES.criminal),
    officeAddress: "Chamber 412, Lawyers Chambers Block, Delhi High Court, Sher Shah Road, New Delhi – 110503."
  },
  bottomReview: {
    advocateName: "Advocate Shubham Singh",
    chambers: "Chambers of Shubham Singh, Delhi",
    lastReviewed: "October 2026",
    disclaimerText: "Information on this anticipatory bail practice profile is prepared solely for general awareness in adherence with Bar Council of India Rule 36 and does not create an advocate-client relationship."
  }
};

export const firQuashingSubData: PracticePageData = {
  slug: "fir-quashing-lawyer-delhi",
  pillarSlug: "criminal-lawyer-delhi",
  title: "FIR Quashing",
  seoTitle: "FIR Quashing Lawyer in Delhi | Sec 528 BNSS / 482 CrPC",
  metaDescription: "FIR quashing lawyer in Delhi filing petitions in Delhi High Court under Sec 528 BNSS / Sec 482 CrPC for compromise, settlement & groundless charges.",
  h1: "FIR Quashing Lawyer in Delhi",
  heroTagline: "High Court Inherent Jurisdiction & Criminal Proceedings Termination",
  heroDescription: "Expert representation before the High Court of Delhi for quashing First Information Reports (FIR), chargesheets, and criminal proceedings under Section 528 BNSS (formerly Section 482 CrPC) based on private settlements, compromise deeds, or absence of prima facie offense.", // VERIFY: advocate to confirm section number
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas/" },
    { name: "Criminal Lawyer Delhi", href: "/practice-areas/criminal-lawyer-delhi/" },
    { name: "FIR Quashing Lawyer Delhi" }
  ],
  alertBadge: "High Court Inherent Jurisdiction Petitions for Complete Criminal Quashing",
  triggersEyebrow: "Quashing Grounds",
  triggersTitle: "When Can an FIR Be Quashed",
  triggers: [
    {
      number: "Trigger 01",
      icon: "handshake",
      title: "Mutual Settlement & Compromise Deed",
      description: "Complainant and accused have resolved all private differences, executed a formal Memorandum of Understanding (MOU), and agreed to terminate proceedings.",
      linkText: "Compromise Quashing",
      href: "#intake-form"
    },
    {
      number: "Trigger 02",
      icon: "gavel",
      title: "Civil / Commercial Dispute Criminalized",
      description: "Breach of contract, property dispute, or monetary disagreement maliciously registered as a criminal case (cheating/fraud under BNS/IPC) to exert coercion.",
      linkText: "Commercial Quashing",
      href: "#intake-form"
    },
    {
      number: "Trigger 03",
      icon: "favorite",
      title: "Matrimonial Settlement (498A / 85 BNS)",
      description: "Divorce settlement reached between spouses, including full and final alimony payment and mutual agreement to withdraw all matrimonial criminal cases.", // VERIFY: advocate to confirm section number
      linkText: "Matrimonial Quashing",
      href: "#intake-form"
    },
    {
      number: "Trigger 04",
      icon: "fact_check",
      title: "Absence of Prima Facie Offense",
      description: "FIR allegations, even if accepted at face value, fail to disclose basic statutory ingredients of any criminal offense under Bhajan Lal guidelines.",
      linkText: "Bhajan Lal Quashing Motion",
      href: "#intake-form"
    }
  ],
  subServicesEyebrow: "Related Defense Services",
  subServicesTitle: "Criminal Defense Practice Cluster",
  subServices: [
    {
      icon: "door_front",
      title: "Regular Bail Representation",
      description: "Custodial bail petitions before Sessions Courts and Delhi High Court under Section 480 & 483 BNSS.", // VERIFY: advocate to confirm section number
      tag: "Custodial Bail",
      href: "/practice-areas/criminal-lawyer-delhi/bail-lawyer-delhi/"
    },
    {
      icon: "shield",
      title: "Anticipatory Bail Motions",
      description: "Pre-arrest protective bail applications under Section 482 BNSS to prevent custodial arrest.", // VERIFY: advocate to confirm section number
      tag: "Pre-Arrest Protection",
      href: "/practice-areas/criminal-lawyer-delhi/anticipatory-bail-lawyer-delhi/"
    },
    {
      icon: "balance",
      title: "Criminal Trial Advocacy",
      description: "Trial defense, charge argument, and cross-examination in Sessions Courts and Special Benches.",
      tag: "Trial Chambers",
      href: "/practice-areas/criminal-lawyer-delhi/"
    }
  ],
  timelineEyebrow: "Quashing Procedure",
  timelineTitle: "High Court FIR Quashing Petition Timeline",
  timelineSteps: [
    {
      phase: "Phase 01 • Compromise Deed & Affidavit Compilation",
      time: "Days 1 – 3",
      title: "Drafting Settlement Deed & Joint Affidavits",
      description: "Drafting comprehensive Settlement Agreement / MOU specifying terms of resolution, indemnity, and securing supporting affidavits from complainant and victim.",
      dotColor: "tertiary"
    },
    {
      phase: "Phase 02 • High Court Petition Preparation",
      time: "Days 3 – 5",
      title: "Drafting Sec 528 BNSS Quashing Petition",
      description: "Preparing High Court petition citing Gian Singh, Bhajan Lal, and Narinder Singh Supreme Court precedents, attaching FIR copy and settlement proof.", // VERIFY: advocate to confirm section number
      dotColor: "tertiary"
    },
    {
      phase: "Phase 03 • Filing & Advance State Notice",
      time: "Day 06",
      title: "E-Filing Clearance & Service to State / IO",
      description: "Filing petition before Delhi High Court Registry and serving advance copy on the Standing Counsel (Criminal) and Investigating Officer.",
      dotColor: "secondary"
    },
    {
      phase: "Phase 04 • Bench Hearing & Statement Verification",
      time: "Hearing Day",
      title: "High Court Appearance & Final Quashing Order",
      description: "Appearing before High Court Single Bench, recording complainant identification by IO, presenting settlement statements, and securing final judgment quashing the FIR.",
      dotColor: "tertiary"
    }
  ],
  checklistTitle: "Documents Required for Filing FIR Quashing Petition",
  checklistDescription: "To initiate an FIR quashing petition in the Delhi High Court, compile the following documents:",
  checklistItems: [
    "Certified copy of FIR and chargesheet / final report (if chargesheet has been filed in trial court)",
    "Original Settlement Deed / MOU executed between complainant and accused on non-judicial stamp paper",
    "No-Objection Affidavit of Complainant / Victim duly notarized with ID proof attached",
    "Identity & Address Proof (Aadhaar Card / Passport) of all petitioners and respondents",
    "Copy of trial court proceedings order sheet (showing current stage of pending case)"
  ],
  forumsEyebrow: "Quashing Benches",
  forumsTitle: "High Court & Supreme Court Quashing Jurisdiction",
  forums: [
    { icon: "gavel", name: "Delhi High Court (Single Bench)", detail: "Section 528 BNSS Inherent Powers Benches", iconColor: "tertiary" }, // VERIFY: advocate to confirm section number
    { icon: "account_balance", name: "Supreme Court of India", detail: "SLP (Criminal) against quashing rejection orders", iconColor: "tertiary" },
    { icon: "corporate_fare", name: "Patiala House Courts", detail: "Statements Verification & Compromise Recording", iconColor: "secondary" },
    { icon: "domain", name: "Rouse Avenue Courts", detail: "Special Courts Proceedings Stay Motions", iconColor: "secondary" },
    { icon: "balance", name: "Tis Hazari Court", detail: "Central & West District Trial Courts", iconColor: "outline" },
    { icon: "balance", name: "Saket Court", detail: "South & South-East District Trial Courts", iconColor: "outline" },
    { icon: "balance", name: "Karkardooma Court", detail: "East & Shahdara District Trial Courts", iconColor: "outline" },
    { icon: "balance", name: "Dwarka & Rohini Courts", detail: "South-West & North-West Trial Courts", iconColor: "outline" }
  ],
  detailedSections: [
    {
      title: "Legal Framework of FIR Quashing in Delhi High Court",
      paragraphs: [
        "FIR Quashing is an extraordinary remedy exercised exclusively by High Courts under their inherent powers. Under Section 528 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) [formerly Section 482 of the Code of Criminal Procedure, 1973 (CrPC)], the High Court possesses non-restricted inherent authority to pass orders necessary to prevent abuse of the process of any court or otherwise to secure the ends of justice.", // VERIFY: advocate to confirm section number
        "Magistrate Courts and Sessions Courts do not hold statutory jurisdiction to quash an FIR or chargesheet. All quashing petitions in Delhi must be instituted before the Hon'ble High Court of Delhi at Sher Shah Road.",
        "Quashing puts an absolute quietus to criminal proceedings, resulting in the cancellation of the FIR, set-aside of chargesheets, and discharge of accused persons without enduring a prolonged trial."
      ]
    },
    {
      title: "Grounds for Quashing Criminal Proceedings",
      paragraphs: [
        "The Supreme Court of India in the landmark judgment State of Haryana v. Bhajan Lal laid down clear guidelines governing FIR quashing:",
        "1. Malicious / Frivolous Prosecution: Where criminal proceedings are manifestly attended with mala fide intent or instituted maliciously with an ulterior motive for wreaking vengeance.",
        "2. Absence of Criminal Offense: Where allegations in the FIR, even if taken at face value and accepted in their entirety, do not prima facie constitute any offense or make out a case against the accused.",
        "3. Commercial / Civil Disputes: Where civil breach of contract or financial recovery disagreements are falsely given a criminal color (e.g., alleging cheating under Section 318 BNS or breach of trust under Section 316 BNS).", // VERIFY: advocate to confirm section number
        "4. Compromise & Settlement: Under Gian Singh v. State of Punjab and Narinder Singh v. State of Punjab, the High Court can quash FIRs in private, commercial, or matrimonial disputes where parties have voluntarily settled all disputes and the complainant no longer supports prosecution."
      ]
    },
    {
      title: "Procedure During High Court Quashing Hearing",
      paragraphs: [
        "On the hearing date before the High Court Single Bench (Criminal Jurisdiction), both the petitioner (accused) and respondent (complainant) appear in person or via virtual hearing.",
        "The Investigating Officer (IO) from the concerned police station is present in court to identify the complainant and verify their identity proof. The complainant records a statement before the Hon'ble Judge confirming that the settlement was executed voluntarily without coercion.",
        "Upon being satisfied that the dispute is private and settlement is genuine, the High Court issues a formal judgment quashing the FIR, chargesheet, and all consequential court proceedings."
      ]
    }
  ],
  faqsEyebrow: "Quashing FAQs",
  faqsTitle: "Frequently Asked Questions on FIR Quashing",
  faqs: [
    {
      question: "Can an FIR for a non-compoundable offense be quashed by the High Court?",
      answer: "Yes. Even if an offense is non-compoundable under BNSS/CrPC, the High Court can quash the FIR under Section 528 BNSS if the dispute is private, commercial, or matrimonial and parties have settled, provided it is not a heinous crime like murder or rape." // VERIFY: advocate to confirm section number
    },
    {
      question: "Is the presence of the complainant mandatory during the High Court quashing hearing?",
      answer: "Yes. The complainant must be present (physically or virtually) to confirm identity before the Investigating Officer and affirm to the Court that the settlement deed was signed voluntarily without force or coercion."
    },
    {
      question: "Can an FIR be quashed after the chargesheet has already been filed in court?",
      answer: "Yes. High Court inherent powers under Section 528 BNSS can be invoked at any stage—whether at FIR stage, after chargesheet filing, or even during trial before judgment is pronounced." // VERIFY: advocate to confirm section number
    },
    {
      question: "What happens if one of the co-accused is not part of the settlement?",
      answer: "The High Court can quash proceedings specifically against the settling petitioners while allowing trial to proceed against non-settling co-accused, depending on the severity and severability of allegations."
    },
    {
      question: "How long does the FIR quashing process take in the Delhi High Court?",
      answer: "Once compromise documents are finalized, filing and registry clearance take 2 to 4 days. The matter is listed before the High Court bench, and if IO verification is complete, quashing orders can be passed in 1 to 2 hearings."
    },
    {
      question: "Can an FIR be quashed based on lack of territorial jurisdiction?",
      answer: "While territorial jurisdiction issues are usually addressed by transferring investigation or filing a Zero FIR, an FIR registered in Delhi purely to harass an outstation party without any cause of action in Delhi can be challenged before the High Court."
    }
  ],
  insightsEyebrow: "Quashing Research",
  insightsTitle: "Related FIR Quashing Insights",
  insights: [
    {
      category: "Precedent Review",
      title: "The Anatomy of Section 528 BNSS FIR Quashing: Guidelines from Landmark Apex Bench Judgments",
      excerpt: "Analytical review of Bhajan Lal criteria, State of Haryana parameters, and the evolving threshold for premature chargesheet quashings.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    },
    {
      category: "Constitutional Liberty",
      title: "Anticipatory Bail Jurisprudence: Protecting Personal Liberty Against Vexatious Litigation",
      excerpt: "Strategic enforcement of Sushila Aggarwal constitutional bench principles governing pre-arrest protection under Indian criminal law.",
      href: "/legal-insights/special-leave-petitions-criminal-bail/"
    },
    {
      category: "Statutory Analysis",
      title: "Section 138 NI Act: Pre-requisites of Statutory Demand Notice & Cheque Dishonour Defense",
      excerpt: "Critical timelines governing delivery acknowledgement, presumption under Section 139, and strategic dispute mediation before Metropolitan Magistrates.",
      href: "/legal-insights/section-138-ni-act-cheque-bounce-notice-delhi/"
    }
  ],
  sidebar: {
    rosterNotice: "Quashing petitions for tomorrow morning's High Court roster must be filed before 12:30 PM.",
    formTitle: "Confidential Case Review",
    formSubtitle: "Privileged & confidential intake directly reviewed by Advocate Shubham Singh.",
    phone: "+91 (011) 2338-8900",
    whatsapp: whatsappLink(PREFILLED_WHATSAPP_MESSAGES.criminal),
    officeAddress: "Chamber 412, Lawyers Chambers Block, Delhi High Court, Sher Shah Road, New Delhi – 110503."
  },
  bottomReview: {
    advocateName: "Advocate Shubham Singh",
    chambers: "Chambers of Shubham Singh, Delhi",
    lastReviewed: "October 2026",
    disclaimerText: "Information on this FIR quashing practice profile is prepared solely for general awareness in adherence with Bar Council of India Rule 36 and does not create an advocate-client relationship."
  }
};
