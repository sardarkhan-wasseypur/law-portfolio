import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Legal Disclaimer & BCI Rule 36 | Advocate Shubham Singh",
  description:
    "Bar Council of India Rule 36 compliance statement and legal disclaimer for Advocate Shubham Singh's website.",
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <main className="w-full pt-[120px] pb-24 bg-surface text-on-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Header Block */}
        <header className="space-y-4 border-b border-outline-variant/30 pb-8">
          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-bold">
            Statutory Notice
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase">
            Legal Disclaimer & BCI Compliance
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Compliance statement under Rule 36 of the Bar Council of India Rules.
          </p>
        </header>

        {/* Content Body */}
        <article className="space-y-8 text-on-surface-variant leading-relaxed font-body-md">
          {/* Key BCI Box */}
          <div className="p-6 bg-surface-container-low border border-tertiary/30 rounded-DEFAULT space-y-4">
            <div className="flex items-center gap-3 text-tertiary">
              <span className="material-symbols-outlined text-[24px]">gavel</span>
              <h2 className="font-title-md text-title-md uppercase tracking-wider font-bold">
                Bar Council of India Rule 36 Declaration
              </h2>
            </div>
            <p className="text-on-surface leading-relaxed">
              Under Rule 36 of the Bar Council of India Rules, advocates in India are prohibited from soliciting work or advertising their services, either directly or indirectly. By accessing this website, you acknowledge and confirm the following:
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              1. Voluntary Access & No Solicitation
            </h2>
            <p>
              You are accessing this website voluntarily and seeking information about Advocate Shubham Singh for your own knowledge and information. There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Advocate Shubham Singh or any member of the Chambers to solicit work through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              2. General Information, Not Legal Advice
            </h2>
            <p>
              The content published on this website—including articles, practice area guides, statutory explanations, and FAQs—is intended solely to provide general educational information regarding legal processes in India.
            </p>
            <p>
              None of the information on this website constitutes legal advice, legal opinion, or binding statutory interpretation. Visitors should not act or refrain from acting based on any information contained on this website without seeking professional legal advice from an advocate licensed in the appropriate jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              3. Absence of Advocate-Client Relationship
            </h2>
            <p>
              The transmission, receipt, or viewing of information on this website, as well as the submission of any inquiry through our contact form or messaging channels, does not create an advocate-client relationship between Advocate Shubham Singh and the user.
            </p>
            <p>
              A formal advocate-client relationship is established only upon explicit engagement, conflict verification, and execution of a written Vakalatnama or retainer agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              4. Disclaimer of Liability
            </h2>
            <p>
              Advocate Shubham Singh explicitly disclaims any and all liability for actions taken or not taken by visitors based on any or all contents of this website. While we endeavor to maintain accurate and up-to-date content, statutory provisions and legal interpretations evolve, and the Chambers makes no guarantees regarding completeness or immediate currency of published material.
            </p>
          </section>
        </article>

        {/* Back Link */}
        <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
          <Link
            href="/privacy-policy/"
            className="inline-flex items-center gap-2 text-tertiary hover:underline font-label-md uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>View Privacy Policy</span>
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
