// DRAFT: advocate must review before publishing
import { notFound } from "next/navigation";
import { practiceAreas, getPracticePageData } from "@/content/practice";
import { buildMetadata } from "@/lib/seo";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PracticeAreaTemplate } from "@/components/templates/PracticeAreaTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getPracticePageData(slug);
  const area = practiceAreas.find((item) => item.slug === slug);

  if (data) {
    return buildMetadata({
      title: data.seoTitle,
      description: data.metaDescription,
      path: `/practice-areas/${data.slug}/`,
    });
  }

  if (!area) return {};

  return buildMetadata({
    title: area.seoTitle,
    description: area.metaDescription,
    path: `/practice-areas/${area.slug}/`,
  });
}

export default async function PracticeAreaPillarPage({ params }: Props) {
  const { slug } = await params;
  const data = getPracticePageData(slug);
  const area = practiceAreas.find((item) => item.slug === slug);

  if (!data && !area) {
    notFound();
  }

  const currentTitle = data ? data.title : area!.title;
  const currentDescription = data ? data.metaDescription : area!.metaDescription;
  const currentSlug = data ? data.slug : area!.slug;
  const currentFaqs = data ? data.faqs : [];

  const serviceSchema = buildServiceSchema(
    currentTitle,
    currentDescription,
    `https://shubhamsingh.adv.in/practice-areas/${currentSlug}/`
  );

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "https://shubhamsingh.adv.in/" },
    { name: "Practice Areas", url: "https://shubhamsingh.adv.in/practice-areas/" },
    { name: currentTitle, url: `https://shubhamsingh.adv.in/practice-areas/${currentSlug}/` },
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
        {area!.h1}
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        {area!.metaDescription}
      </p>
    </main>
  );
}
