// DRAFT: advocate must review before publishing
import { PracticePageData } from "./types";
import {
  criminalLawPillarData,
  bailLawyerSubData,
  anticipatoryBailSubData,
  firQuashingSubData,
} from "./criminal";
import {
  chequeBouncePillarData,
  section138SubData as section138NiActSubData,
  chequeNoticeSubData as chequeBounceLegalNoticeSubData,
} from "./cheque-bounce";
import {
  divorceFamilyPillarData,
  mutualConsentDivorceSubData,
  contestedDivorceSubData,
  childCustodySubData,
  maintenanceAlimonySubData,
} from "./divorce";
import {
  civilLawPillarData,
  propertyDisputeSubData,
  recoverySuitSubData,
} from "./civil";
import {
  trademarkLawPillarData,
  trademarkRegistrationSubData,
  trademarkObjectionSubData,
} from "./trademark";

export * from "./types";
export * from "./criminal";
export * from "./cheque-bounce";
export * from "./divorce";
export * from "./civil";
export * from "./trademark";

export function getPracticePageData(slug: string, subSlug?: string): PracticePageData | null {
  if (slug === "criminal-lawyer-delhi") {
    if (!subSlug) return criminalLawPillarData;
    if (subSlug === "bail-lawyer-delhi") return bailLawyerSubData;
    if (subSlug === "anticipatory-bail-lawyer-delhi") return anticipatoryBailSubData;
    if (subSlug === "fir-quashing-lawyer-delhi") return firQuashingSubData;
  }

  if (slug === "cheque-bounce-lawyer-delhi") {
    if (!subSlug) return chequeBouncePillarData;
    if (subSlug === "section-138-ni-act-lawyer-delhi") return section138NiActSubData;
    if (subSlug === "cheque-bounce-legal-notice") return chequeBounceLegalNoticeSubData;
  }

  if (slug === "divorce-family-lawyer-delhi") {
    if (!subSlug) return divorceFamilyPillarData;
    if (subSlug === "mutual-consent-divorce-delhi") return mutualConsentDivorceSubData;
    if (subSlug === "contested-divorce-delhi") return contestedDivorceSubData;
    if (subSlug === "child-custody-lawyer-delhi") return childCustodySubData;
    if (subSlug === "maintenance-alimony-lawyer-delhi") return maintenanceAlimonySubData;
  }

  if (slug === "civil-lawyer-delhi") {
    if (!subSlug) return civilLawPillarData;
    if (subSlug === "property-dispute-lawyer-delhi") return propertyDisputeSubData;
    if (subSlug === "recovery-suit-lawyer-delhi") return recoverySuitSubData;
  }

  if (slug === "trademark-lawyer-delhi") {
    if (!subSlug) return trademarkLawPillarData;
    if (subSlug === "trademark-registration-delhi") return trademarkRegistrationSubData;
    if (subSlug === "trademark-objection-opposition") return trademarkObjectionSubData;
  }

  return null;
}

export interface SubService {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  subServices: SubService[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-lawyer-delhi",
    title: "Criminal Law",
    seoTitle: criminalLawPillarData.seoTitle,
    metaDescription: criminalLawPillarData.metaDescription,
    h1: criminalLawPillarData.h1,
    subServices: [
      {
        slug: "bail-lawyer-delhi",
        title: bailLawyerSubData.title,
        seoTitle: bailLawyerSubData.seoTitle,
        metaDescription: bailLawyerSubData.metaDescription,
        h1: bailLawyerSubData.h1,
      },
      {
        slug: "anticipatory-bail-lawyer-delhi",
        title: anticipatoryBailSubData.title,
        seoTitle: anticipatoryBailSubData.seoTitle,
        metaDescription: anticipatoryBailSubData.metaDescription,
        h1: anticipatoryBailSubData.h1,
      },
      {
        slug: "fir-quashing-lawyer-delhi",
        title: firQuashingSubData.title,
        seoTitle: firQuashingSubData.seoTitle,
        metaDescription: firQuashingSubData.metaDescription,
        h1: firQuashingSubData.h1,
      },
    ],
  },
  {
    slug: "cheque-bounce-lawyer-delhi",
    title: "Cheque Bounce",
    seoTitle: chequeBouncePillarData.seoTitle,
    metaDescription: chequeBouncePillarData.metaDescription,
    h1: chequeBouncePillarData.h1,
    subServices: [
      {
        slug: "section-138-ni-act-lawyer-delhi",
        title: section138NiActSubData.title,
        seoTitle: section138NiActSubData.seoTitle,
        metaDescription: section138NiActSubData.metaDescription,
        h1: section138NiActSubData.h1,
      },
      {
        slug: "cheque-bounce-legal-notice",
        title: chequeBounceLegalNoticeSubData.title,
        seoTitle: chequeBounceLegalNoticeSubData.seoTitle,
        metaDescription: chequeBounceLegalNoticeSubData.metaDescription,
        h1: chequeBounceLegalNoticeSubData.h1,
      },
    ],
  },
  {
    slug: "divorce-family-lawyer-delhi",
    title: "Divorce & Family Law",
    seoTitle: divorceFamilyPillarData.seoTitle,
    metaDescription: divorceFamilyPillarData.metaDescription,
    h1: divorceFamilyPillarData.h1,
    subServices: [
      {
        slug: "mutual-consent-divorce-delhi",
        title: mutualConsentDivorceSubData.title,
        seoTitle: mutualConsentDivorceSubData.seoTitle,
        metaDescription: mutualConsentDivorceSubData.metaDescription,
        h1: mutualConsentDivorceSubData.h1,
      },
      {
        slug: "contested-divorce-delhi",
        title: contestedDivorceSubData.title,
        seoTitle: contestedDivorceSubData.seoTitle,
        metaDescription: contestedDivorceSubData.metaDescription,
        h1: contestedDivorceSubData.h1,
      },
      {
        slug: "child-custody-lawyer-delhi",
        title: childCustodySubData.title,
        seoTitle: childCustodySubData.seoTitle,
        metaDescription: childCustodySubData.metaDescription,
        h1: childCustodySubData.h1,
      },
      {
        slug: "maintenance-alimony-lawyer-delhi",
        title: maintenanceAlimonySubData.title,
        seoTitle: maintenanceAlimonySubData.seoTitle,
        metaDescription: maintenanceAlimonySubData.metaDescription,
        h1: maintenanceAlimonySubData.h1,
      },
    ],
  },
  {
    slug: "civil-lawyer-delhi",
    title: "Civil Law",
    seoTitle: civilLawPillarData.seoTitle,
    metaDescription: civilLawPillarData.metaDescription,
    h1: civilLawPillarData.h1,
    subServices: [
      {
        slug: "property-dispute-lawyer-delhi",
        title: propertyDisputeSubData.title,
        seoTitle: propertyDisputeSubData.seoTitle,
        metaDescription: propertyDisputeSubData.metaDescription,
        h1: propertyDisputeSubData.h1,
      },
      {
        slug: "recovery-suit-lawyer-delhi",
        title: recoverySuitSubData.title,
        seoTitle: recoverySuitSubData.seoTitle,
        metaDescription: recoverySuitSubData.metaDescription,
        h1: recoverySuitSubData.h1,
      },
    ],
  },
  {
    slug: "trademark-lawyer-delhi",
    title: "Trademark Law",
    seoTitle: trademarkLawPillarData.seoTitle,
    metaDescription: trademarkLawPillarData.metaDescription,
    h1: trademarkLawPillarData.h1,
    subServices: [
      {
        slug: "trademark-registration-delhi",
        title: trademarkRegistrationSubData.title,
        seoTitle: trademarkRegistrationSubData.seoTitle,
        metaDescription: trademarkRegistrationSubData.metaDescription,
        h1: trademarkRegistrationSubData.h1,
      },
      {
        slug: "trademark-objection-opposition",
        title: trademarkObjectionSubData.title,
        seoTitle: trademarkObjectionSubData.seoTitle,
        metaDescription: trademarkObjectionSubData.metaDescription,
        h1: trademarkObjectionSubData.h1,
      },
    ],
  },
];
