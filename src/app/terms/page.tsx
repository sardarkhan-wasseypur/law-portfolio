import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Terms of Use | Advocate Shubham Singh",
  description:
    "Terms of use and conditions governing the access and usage of Advocate Shubham Singh's website.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <main className="w-full pt-[120px] pb-24 bg-surface text-on-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Header Block */}
        <header className="space-y-4 border-b border-outline-variant/30 pb-8">
          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-bold">
            Legal Compliance
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase">
            Terms of Use
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Terms and conditions governing your access to and use of this website.
          </p>
        </header>

        {/* Content Body */}
        <article className="space-y-8 text-on-surface-variant leading-relaxed font-body-md">
          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using this website ({siteConfig.siteUrl}), you agree to be bound by these Terms of Use and our <Link href="/disclaimer/" className="text-tertiary underline">Legal Disclaimer</Link>. If you do not agree with any part of these terms, you should immediately cease using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              2. Website Content & Educational Purpose
            </h2>
            <p>
              All materials on this website—including legal insight articles, statutory summaries, practice area overviews, and court procedural notes—are provided strictly for general informational and educational purposes.
            </p>
            <p>
              Nothing on this website constitutes legal advice, formal opinion, or a substitute for specific legal counsel. Visitors must consult a qualified advocate registered with the Bar Council of India regarding individual legal matters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              3. No Advocate-Client Relationship
            </h2>
            <p>
              Accessing this website, viewing its content, or transmitting information through our online inquiry forms or email links does not create an advocate-client relationship between you and Advocate Shubham Singh. An advocate-client relationship is established solely upon formal engagement and execution of a Vakalatnama or retainer agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              4. Intellectual Property
            </h2>
            <p>
              Unless otherwise specified, all text, articles, structure, and original design elements on this website are the intellectual property of Advocate Shubham Singh. Content may be viewed or printed for personal, non-commercial educational use only. Commercial reproduction, redistribution, or modification without written permission is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              5. Limitation of Liability
            </h2>
            <p>
              While reasonable efforts are made to ensure information on this website remains current and accurate, laws and judicial precedents change frequently. Advocate Shubham Singh disclaims all liability for any loss or damage arising directly or indirectly from reliance on information contained on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of the Republic of India. Any disputes arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </section>
        </article>

        {/* Back Link */}
        <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
          <Link
            href="/disclaimer/"
            className="inline-flex items-center gap-2 text-tertiary hover:underline font-label-md uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[18px]">gavel</span>
            <span>Read Legal Disclaimer</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface font-label-md uppercase tracking-wider"
          >
            <span>Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
