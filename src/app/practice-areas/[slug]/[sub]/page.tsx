// DRAFT: advocate must review before publishing
import { notFound } from "next/navigation";
import { practiceAreas, getPracticePageData } from "@/content/practice";
import { buildMetadata } from "@/lib/seo";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PracticeAreaTemplate } from "@/components/templates/PracticeAreaTemplate";

interface Props {
  params: Promise<{ slug: string; sub: string }>;
}

export async function generateStaticParams() {
  return practiceAreas.flatMap((area) =>
    area.subServices.map((sub) => ({
      slug: area.slug,
      sub: sub.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug, sub } = await params;
  const data = getPracticePageData(slug, sub);
  const area = practiceAreas.find((item) => item.slug === slug);
  const subItem = area?.subServices.find((item) => item.slug === sub);

  if (data) {
    return buildMetadata({
      title: data.seoTitle,
      description: data.metaDescription,
      path: `/practice-areas/${slug}/${sub}/`,
    });
  }

  if (!area || !subItem) return {};

  return buildMetadata({
    title: subItem.seoTitle,
    description: subItem.metaDescription,
    path: `/practice-areas/${area.slug}/${subItem.slug}/`,
  });
}

export default async function SubServicePage({ params }: Props) {
  const { slug, sub } = await params;
  const data = getPracticePageData(slug, sub);
  const area = practiceAreas.find((item) => item.slug === slug);
  const subItem = area?.subServices.find((item) => item.slug === sub);

  if (!data && (!area || !subItem)) {
    notFound();
  }

  const currentTitle = data ? data.title : subItem!.title;
  const currentDescription = data ? data.metaDescription : subItem!.metaDescription;
  const pillarTitle = area ? area.title : "Practice Areas";
  const pillarSlug = slug;
  const currentFaqs = data ? data.faqs : [];

  const serviceSchema = buildServiceSchema(
    currentTitle,
    currentDescription,
    `https://shubhamsingh.adv.in/practice-areas/${pillarSlug}/${sub}/`
  );

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "https://shubhamsingh.adv.in/" },
    { name: "Practice Areas", url: "https://shubhamsingh.adv.in/practice-areas/" },
    { name: pillarTitle, url: `https://shubhamsingh.adv.in/practice-areas/${pillarSlug}/` },
    { name: currentTitle, url: `https://shubhamsingh.adv.in/practice-areas/${pillarSlug}/${sub}/` },
  ]);

  const faqSchema = currentFaqs.length > 0 ? buildFAQSchema(currentFaqs) : null;
  const jsonLdData = faqSchema ? [serviceSchema, breadcrumbSchema, faqSchema] : [serviceSchema, breadcrumbSchema];

  if (data) {
    return (
      <main>
        <JsonLd data={jsonLdData} />
        <PracticeAreaTemplate data={data} />
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-on-surface">
      <JsonLd data={jsonLdData} />
      <h1 className="font-headline-xl text-headline-xl uppercase text-on-surface mb-4">
        {subItem!.h1}
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        {subItem!.metaDescription}
      </p>
    </main>
  );
}
