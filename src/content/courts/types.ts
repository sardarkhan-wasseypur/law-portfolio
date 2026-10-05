// DRAFT: advocate must review before publishing

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface MetricChip {
  icon: string;
  category: string;
  title: string;
  detail: string;
}

export interface MatterCard {
  icon: string;
  category: string;
  title: string;
  description: string;
  rosterText: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  tag: string;
  title: string;
  description: string;
  timeline: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CourtLocationInfo {
  complexTitle: string;
  officialAddress: string;
  chambersLocation: string;
  entryGates: string;
  nearestMetro: string;
  parkingInfo: string;
  directPhone: string;
  hours: string;
  gpsCoordinates: string;
  googleMapsUrl: string;
  mapImageSrc: string;
}

export interface CourtData {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroTagline: string;
  heroSubtitle: string;
  heroImageSrc: string;
  breadcrumbs: BreadcrumbItem[];
  metrics: MetricChip[];
  mattersEyebrow: string;
  mattersTitle: string;
  mattersDescription: string;
  matters: MatterCard[];
  processEyebrow: string;
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];
  faqsEyebrow: string;
  faqsTitle: string;
  faqsDescription: string;
  faqs: FaqItem[];
  location: CourtLocationInfo;
  ctaTitle: string;
  ctaDescription: string;
  phone: string;
  whatsapp: string;
}
