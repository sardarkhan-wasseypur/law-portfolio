import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { practiceAreas } from "@/content/practice";
import { siteConfig } from "@/content/site";
import { ArticleSidebar } from "@/components/legal-insights/ArticleSidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts(true);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, true);
  if (!post) return {};

  const truncatedTitle =
    post.title.length > 55 ? `${post.title.substring(0, 52)}...` : post.title;
  const truncatedDesc =
    post.description.length > 150
      ? `${post.description.substring(0, 147)}...`
      : post.description;

  return buildMetadata({
    title: truncatedTitle,
    description: truncatedDesc,
    path: `/legal-insights/${post.slug}/`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, true);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts(true);
  const siblingPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.pillar === post.pillar || true)
    .slice(0, 2);

  const pillarObj = practiceAreas.find((area) => area.slug === post.pillar);
  const pillarTitle = pillarObj ? pillarObj.title : "Practice Area";
  const pillarUrl = `/practice-areas/${post.pillar}/`;

  const blogPostingSchema = buildBlogPostingSchema({
    title: post.title,
    description: post.description,
    url: `${siteConfig.siteUrl}/legal-insights/${post.slug}/`,
    datePublished: post.date,
    dateModified: post.updated || post.date,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.siteUrl}/` },
    { name: "Legal Insights", url: `${siteConfig.siteUrl}/legal-insights/` },
    { name: pillarTitle, url: `${siteConfig.siteUrl}${pillarUrl}` },
    { name: post.title, url: `${siteConfig.siteUrl}/legal-insights/${post.slug}/` },
  ]);

  return (
    <div className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)]">
      <JsonLd data={[blogPostingSchema, breadcrumbSchema]} />

      {/* Top Article Header Banner */}
      <header className="relative w-full bg-primary-container border-b border-tertiary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container via-surface-container-lowest to-surface opacity-90 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-2xl">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-space-xs text-legal-disclaimer font-legal-disclaimer tracking-widest text-on-surface-variant uppercase mb-space-lg"
          >
            <Link className="hover:text-tertiary transition-colors flex items-center gap-1" href="/">
              <span className="material-symbols-outlined text-[14px]">home</span>
              <span>Home</span>
            </Link>
            <span className="material-symbols-outlined text-[12px] text-tertiary/60">
              chevron_right
            </span>
            <Link className="hover:text-tertiary transition-colors" href="/legal-insights/">
              Legal Insights
            </Link>
            <span className="material-symbols-outlined text-[12px] text-tertiary/60">
              chevron_right
            </span>
            <Link className="hover:text-tertiary transition-colors" href={pillarUrl}>
              {post.category}
            </Link>
            <span className="material-symbols-outlined text-[12px] text-tertiary/60">
              chevron_right
            </span>
            <span className="text-tertiary font-semibold line-clamp-1">{post.title}</span>
          </nav>

          {/* Category Eyebrow & Reading Duration */}
          <div className="inline-flex items-center gap-space-sm px-space-md py-1 bg-surface-container-high/80 rounded-DEFAULT border border-tertiary/30 mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em]">
              {post.category}
            </span>
            <span className="text-outline-variant">•</span>
            <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              {post.readTime}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight max-w-5xl leading-tight mb-space-xl">
            {post.title}
          </h1>

          {/* Author Byline & Verification String */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg pt-space-lg border-t border-outline-variant/30">
            <div className="flex items-center gap-space-md">
              <div className="relative shrink-0">
                <Image
                  alt={post.author}
                  src="/images/stitch/shubham_singh_profile_mobile.jpeg"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-tertiary/60 shadow-lg"
                />
                <div
                  className="absolute -bottom-1 -right-1 bg-tertiary text-on-tertiary rounded-full w-5 h-5 flex items-center justify-center shadow"
                  title="Verified Advocate"
                >
                  <span
                    className="material-symbols-outlined text-[12px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="font-subheading-serif text-subheading-serif font-bold text-on-surface tracking-wide">
                    {post.author}
                  </span>
                  <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] uppercase font-eyebrow text-tertiary tracking-wider border border-tertiary/20">
                    Reviewed by Advocate Shubham Singh
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Advocate in Delhi • Supreme Court &amp; Delhi High Court Practice
                </p>
                <div className="flex items-center gap-space-sm text-legal-disclaimer font-legal-disclaimer text-on-surface-variant/80 mt-0.5">
                  <span>Published: {post.date}</span>
                  <span>•</span>
                  <span className="text-tertiary-fixed-dim">
                    Last Updated: {post.updated || post.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Utilities */}
            <div className="flex items-center gap-space-sm self-start lg:self-center">
              <Link
                href={pillarUrl}
                className="inline-flex items-center gap-1.5 px-space-md py-2 bg-secondary-container hover:bg-on-secondary text-secondary-fixed text-label-md font-label-md rounded-DEFAULT border border-secondary/20 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">gavel</span>
                <span className="uppercase tracking-wider">Explore {pillarTitle}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Reading Layout Matrix */}
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-2xl w-full">
        <div className="flex flex-col lg:flex-row gap-space-2xl justify-between items-start">
          {/* Left Column: Sidebar Component (Sticky TOC & Chambers Advisory Callout) */}
          <ArticleSidebar headings={post.headings} />

          {/* Right Column: Main Article Body (720px reading column) */}
          <main className="w-full max-w-[760px] space-y-space-2xl text-on-surface font-body-md text-body-md leading-relaxed selection:bg-secondary-container selection:text-secondary-fixed">
            <article className="prose prose-invert max-w-none space-y-space-md">
              <MDXRemote source={post.content} components={mdxComponents} />
            </article>

            {/* Pillar Page Keyword Link Banner */}
            <div className="my-8 p-6 bg-surface-container rounded-DEFAULT border border-tertiary/20">
              <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest block mb-2">
                Core Practice Scope
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                For detailed legal information and representation regarding related cases, visit our comprehensive{" "}
                <Link
                  href={pillarUrl}
                  className="text-tertiary hover:underline font-semibold"
                >
                  {pillarTitle} Practice Area in Delhi
                </Link>
                .
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Lead Counsel Author Profile Card */}
      <section className="w-full bg-surface-container-lowest border-y border-outline-variant/30 py-space-2xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="p-space-xl rounded-DEFAULT bg-surface-container border border-tertiary/20 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-space-xl">
            <div className="relative shrink-0">
              <Image
                alt={post.author}
                src="/images/stitch/shubham_singh_profile_mobile.jpeg"
                width={144}
                height={144}
                className="w-28 h-28 md:w-36 md:h-36 rounded-DEFAULT object-cover ring-2 ring-tertiary/40 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary-container px-2 py-0.5 rounded text-[10px] uppercase font-eyebrow text-tertiary border border-tertiary/30">
                Chambers Counsel
              </div>
            </div>
            <div className="space-y-space-sm flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {post.author}
                </h3>
                <span className="text-tertiary font-eyebrow text-eyebrow uppercase tracking-widest">
                  • Advocate in Delhi
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Advocate Shubham Singh represents clients across original and appellate matters before the Supreme Court of India, Delhi High Court, and District Courts. His practice emphasizes procedural precision, constitutional compliance, and thorough evidentiary preparation.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-space-md pt-space-xs text-legal-disclaimer font-legal-disclaimer text-tertiary-fixed-dim">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">badge</span>
                  Enrolled: Bar Council of Delhi
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">balance</span>
                  Member: Supreme Court Bar Association
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">domain</span>
                  Delhi High Court Bar Association (DHCBA)
                </span>
              </div>
            </div>
            <div className="shrink-0 flex flex-col gap-space-sm self-stretch justify-center">
              <Link
                className="px-space-lg py-space-sm bg-secondary-container hover:bg-on-secondary text-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT transition-colors text-center border border-secondary/30"
                href="/contact/"
              >
                Consult Counsel
              </Link>
              <Link
                className="px-space-lg py-space-sm bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT transition-colors text-center border border-outline-variant/30"
                href="/about/"
              >
                View Credentials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sibling Articles Grid */}
      {siblingPosts.length > 0 && (
        <section className="w-full bg-surface py-space-2xl">
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
            <div className="flex items-end justify-between border-b border-outline-variant/30 pb-space-sm">
              <div>
                <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] block mb-1">
                  Appellate Insights &amp; Briefs
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Related Legal Commentary
                </h2>
              </div>
              <Link
                className="hidden md:inline-flex items-center gap-1 text-tertiary hover:text-tertiary-fixed font-label-md text-label-md uppercase tracking-wider"
                href="/legal-insights/"
              >
                <span>View Archive</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {siblingPosts.map((sibling) => (
                <article
                  key={sibling.slug}
                  className="p-space-lg rounded-DEFAULT bg-surface-container border border-outline-variant/30 hover:border-tertiary/50 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-space-sm">
                    <span className="font-eyebrow text-[11px] text-tertiary uppercase tracking-wider block">
                      {sibling.category} • {sibling.readTime}
                    </span>
                    <h3 className="font-subheading-serif text-subheading-serif font-bold text-on-surface group-hover:text-tertiary transition-colors">
                      <Link href={`/legal-insights/${sibling.slug}/`}>{sibling.title}</Link>
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {sibling.description}
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant">
                      {sibling.date}
                    </span>
                    <Link
                      href={`/legal-insights/${sibling.slug}/`}
                      className="inline-flex items-center gap-1 text-tertiary group-hover:translate-x-1 transition-transform"
                    >
                      <span className="font-label-md text-label-md uppercase tracking-wider">Read Article</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mandatory Bar Council Compliance Disclaimer Strip */}
      <section className="w-full bg-surface-container-low border-t border-outline-variant/30 py-space-md">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
              info
            </span>
            <p className="font-legal-disclaimer text-legal-disclaimer text-on-surface-variant leading-relaxed">
              <strong className="text-tertiary">Legal Awareness Disclaimer:</strong> The jurisprudential analyses provided in this treatise are prepared solely for informational and academic purposes in strict compliance with Bar Council of India Rule 36. This commentary does not constitute formal legal counsel, nor does accessing or reviewing this docket construct an advocate-client relationship. Litigants facing court summons or statutory demand notices are expressly advised to seek independent legal representation tailored to their specific transactional records.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
