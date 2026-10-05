import { siteConfig } from "@/content/site";

export function buildLegalServiceSchema() {
  const sameAs = Object.values(siteConfig.socialLinks || {}).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": `${siteConfig.siteUrl}/#legalservice`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode || "110001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Delhi",
    },
    openingHours: siteConfig.hours,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildPersonSchema() {
  const sameAs = Object.values(siteConfig.socialLinks || {}).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: siteConfig.advocateName || siteConfig.name,
    jobTitle: siteConfig.role,
    worksFor: {
      "@id": `${siteConfig.siteUrl}/#legalservice`,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: [
      "Criminal Law",
      "Cheque Bounce Law",
      "Section 138 NI Act",
      "Divorce Law",
      "Civil Litigation",
      "Trademark Law",
    ],
  };
}

export function buildServiceSchema(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    provider: {
      "@id": `${siteConfig.siteUrl}/#legalservice`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Delhi",
    },
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildBlogPostingSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: `${siteConfig.siteUrl}/about/`,
    },
    publisher: {
      "@id": `${siteConfig.siteUrl}/#legalservice`,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.siteUrl}/#legalservice`,
    },
  };
}
