import { Metadata } from "next";
import { siteConfig } from "@/content/site";

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
}: SEOProps): Metadata {
  const canonicalUrl = `${siteConfig.siteUrl}${path.startsWith('/') ? path : '/' + path}`;
  const formattedCanonical = formattedUrl(canonicalUrl);

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title,
    description,
    alternates: {
      canonical: formattedCanonical,
    },
    openGraph: {
      title,
      description,
      url: formattedCanonical,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteConfig.siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Advocate in Delhi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.siteUrl}/og-image.png`],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

function formattedUrl(url: string): string {
  if (url === siteConfig.siteUrl || url === `${siteConfig.siteUrl}/`) {
    return `${siteConfig.siteUrl}/`;
  }
  return url.endsWith('/') ? url : `${url}/`;
}
