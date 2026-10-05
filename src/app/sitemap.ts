import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { practiceAreas } from "@/content/practice";
import { courtsData } from "@/content/courts";
import { getAllBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "/about/",
    "/practice-areas/",
    "/courts/",
    "/legal-insights/",
    "/faqs/",
    "/contact/",
    "/privacy-policy/",
    "/terms/",
    "/disclaimer/",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const pillarRoutes = practiceAreas.map((area) => ({
    url: `${baseUrl}/practice-areas/${area.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const subServiceRoutes = practiceAreas.flatMap((area) =>
    area.subServices.map((sub) => ({
      url: `${baseUrl}/practice-areas/${area.slug}/${sub.slug}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  const courtRoutes = courtsData.map((court) => ({
    url: `${baseUrl}/courts/${court.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = getAllBlogPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/legal-insights/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...pillarRoutes,
    ...subServiceRoutes,
    ...courtRoutes,
    ...blogRoutes,
  ];
}
