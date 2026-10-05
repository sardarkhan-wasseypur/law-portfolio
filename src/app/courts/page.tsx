import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { courtsData } from "@/content/courts";

export const metadata = buildMetadata({
  title: "Court Representation in Delhi | Advocate Shubham Singh",
  description:
    "Legal representation before the Supreme Court of India, Hon'ble High Court of Delhi, and District Courts across New Delhi.",
  path: "/courts/",
});

export default function CourtsPage() {
  return (
    <main className="w-full pt-[120px] pb-24 bg-surface text-on-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Header Block */}
        <header className="space-y-4 border-b border-outline-variant/30 pb-8 text-center max-w-3xl mx-auto">
          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-bold">
            Judicial Venues &amp; Jurisdiction
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase">
            Court Representation in Delhi
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Chambers advocacy and registry filing before the apex, appellate, and original trial courts in New Delhi.
          </p>
        </header>

        {/* Courts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courtsData.map((court) => (
            <div
              key={court.slug}
              className="bg-surface-container-low p-8 border border-outline-variant/30 rounded-DEFAULT shadow-lg flex flex-col justify-between space-y-6 hover:border-tertiary/50 transition-colors group"
            >
              <div className="space-y-4">
                <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-wider block">
                  {court.heroTagline}
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-tertiary transition-colors">
                  {court.h1}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-4 leading-relaxed">
                  {court.heroSubtitle}
                </p>
              </div>

              <Link
                href={`/courts/${court.slug}/`}
                className="inline-flex items-center gap-2 text-tertiary font-label-md uppercase tracking-wider group-hover:underline pt-4 border-t border-outline-variant/20"
              >
                <span>View Court Profile &amp; Practice</span>
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
