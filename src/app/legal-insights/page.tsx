import { buildMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/mdx";
import { LegalInsightsHub } from "@/components/legal-insights/LegalInsightsHub";

export const metadata = buildMetadata({
  title: "Legal Insights & Articles | Shubham Singh, Advocate",
  description:
    "Legal articles, guides, and FAQs on Delhi court procedures, criminal law, and cheque bounce laws.",
  path: "/legal-insights/",
});

export default function LegalInsightsPage() {
  const posts = getAllBlogPosts(false); // Draft posts stay excluded in production

  return (
    <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
      <LegalInsightsHub posts={posts} />
    </main>
  );
}
