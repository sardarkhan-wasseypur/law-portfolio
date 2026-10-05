import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { practiceAreas } from "@/content/practice";

export const metadata = buildMetadata({
  title: "Legal Practice Areas in Delhi | Advocate Shubham Singh",
  description:
    "Legal practice areas in Delhi: Criminal Defense, Section 138 Cheque Bounce, Matrimonial & Family Law, Civil Disputes, and Trademark Litigation.",
  path: "/practice-areas/",
});

export default function PracticeAreasPage() {
  return (
    <main className="w-full pt-[120px] pb-24 bg-surface text-on-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header Block */}
        <header className="space-y-4 border-b border-outline-variant/30 pb-8 text-center max-w-3xl mx-auto">
          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-bold">
            Appellate &amp; Trial Advocacy
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase">
            Legal Practice Areas in Delhi
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Strategic representation across five primary fields of litigation before the Supreme Court of India, Delhi High Court, and District Courts across the National Capital Territory.
          </p>
        </header>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.slug}
              className="bg-surface-container-low p-8 border border-outline-variant/30 rounded-DEFAULT shadow-lg flex flex-col justify-between space-y-6 hover:border-tertiary/50 transition-colors group"
            >
              <div className="space-y-4">
                <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-wider block">
                  Chamber Practice
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-tertiary transition-colors">
                  {area.title}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  {area.metaDescription}
                </p>

                {/* Sub-services pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {area.subServices.map((sub) => (
                    <span
                      key={sub.slug}
                      className="px-2.5 py-1 bg-surface-container text-on-surface-variant font-eyebrow text-[11px] uppercase tracking-wider rounded border border-outline-variant/20"
                    >
                      {sub.title}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/practice-areas/${area.slug}/`}
                className="inline-flex items-center gap-2 text-tertiary font-label-md uppercase tracking-wider group-hover:underline pt-4 border-t border-outline-variant/20"
              >
                <span>Explore Practice Dossier</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
