import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you/", "/design-system/"],
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
