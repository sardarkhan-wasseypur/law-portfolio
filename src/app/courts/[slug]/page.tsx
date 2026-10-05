import { notFound } from "next/navigation";
import { courtsDataList, getCourtData } from "@/content/courts";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { CourtTemplate } from "@/components/templates/CourtTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courtsDataList.map((court) => ({
    slug: court.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const court = getCourtData(slug);
  if (!court) return {};

  return buildMetadata({
    title: court.seoTitle,
    description: court.metaDescription,
    path: `/courts/${court.slug}/`,
  });
}

export default async function CourtPage({ params }: Props) {
  const { slug } = await params;
  const court = getCourtData(slug);

  if (!court) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "https://shubhamsingh.adv.in/" },
    { name: "Courts", url: "https://shubhamsingh.adv.in/courts/" },
    { name: court.name, url: `https://shubhamsingh.adv.in/courts/${court.slug}/` },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema]} />
      <CourtTemplate court={court} />
    </>
  );
}
