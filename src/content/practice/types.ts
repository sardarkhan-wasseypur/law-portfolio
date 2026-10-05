// DRAFT: advocate must review before publishing

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface TriggerItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href?: string;
}

export interface SubServiceCard {
  icon: string;
  title: string;
  description: string;
  tag: string;
  href: string;
}

export interface TimelineStep {
  phase: string;
  time: string;
  title: string;
  description: string;
  dotColor?: "tertiary" | "secondary";
}

export interface ForumChip {
  icon: string;
  name: string;
  detail: string;
  iconColor?: "tertiary" | "secondary" | "outline";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InsightCard {
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface ContentSection {
  title: string;
  paragraphs: string[];
}

export interface PracticePageData {
  slug: string;
  pillarSlug?: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroTagline: string;
  heroDescription: string;
  breadcrumbs: BreadcrumbItem[];
  alertBadge: string;
  triggersTitle: string;
  triggersEyebrow: string;
  triggers: TriggerItem[];
  subServicesTitle: string;
  subServicesEyebrow: string;
  subServices: SubServiceCard[];
  timelineTitle: string;
  timelineEyebrow: string;
  timelineSteps: TimelineStep[];
  checklistTitle: string;
  checklistDescription: string;
  checklistItems: string[];
  forumsTitle: string;
  forumsEyebrow: string;
  forums: ForumChip[];
  detailedSections: ContentSection[];
  faqsTitle: string;
  faqsEyebrow: string;
  faqs: FaqItem[];
  insightsTitle: string;
  insightsEyebrow: string;
  insights: InsightCard[];
  sidebar: {
    rosterNotice: string;
    formTitle: string;
    formSubtitle: string;
    phone: string;
    whatsapp: string;
    officeAddress: string;
  };
  bottomReview: {
    advocateName: string;
    chambers: string;
    lastReviewed: string;
    disclaimerText: string;
  };
}
