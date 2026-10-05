import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Privacy Policy | Advocate Shubham Singh",
  description:
    "Privacy Policy for Chambers of Advocate Shubham Singh, detailing data collection under the Digital Personal Data Protection Act, 2023.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full pt-[120px] pb-24 bg-surface text-on-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Header Block */}
        <header className="space-y-4 border-b border-outline-variant/30 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-bold">
              Legal Compliance
            </span>
            <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-mono text-xs uppercase tracking-wider rounded font-semibold">
              DRAFT: lawyer to review
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase">
            Privacy Policy
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Notice on Personal Data Collection & Processing under the Indian Digital Personal Data Protection Act, 2023 (DPDP Act 2023).
          </p>
        </header>

        {/* Content Body */}
        <article className="space-y-8 text-on-surface-variant leading-relaxed font-body-md">
          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              1. Overview & Data Fiduciary Details
            </h2>
            <p>
              This Privacy Policy explains how the Chambers of Advocate Shubham Singh (&quot;Chamber&quot;, &quot;we&quot;, &quot;us&quot;) collects, processes, and protects personal data provided by visitors (&quot;Data Principal&quot;, &quot;you&quot;) through this website ({siteConfig.siteUrl}).
            </p>
            <p>
              For the purposes of the Digital Personal Data Protection Act, 2023 (DPDP Act 2023), the Chamber acts as the Data Fiduciary regarding information submitted via our digital intake forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              2. Personal Data We Collect
            </h2>
            <p>
              When you submit an enquiry through our online intake form, we collect only the minimum necessary information required to evaluate your legal query:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-tertiary">
              <li><strong className="text-on-surface">Full Name:</strong> To identify you and address communication appropriately.</li>
              <li><strong className="text-on-surface">10-Digit Mobile Number:</strong> To contact you via telephone or WhatsApp regarding your inquiry.</li>
              <li><strong className="text-on-surface">Matter Type:</strong> The practice area selection (e.g., Criminal Law, Family & Divorce, Cheque Bounce, Civil Disputes, Trademark) to route your inquiry to the appropriate advocate.</li>
              <li><strong className="text-on-surface">Brief Description / Message:</strong> Information provided by you regarding the background of your legal matter.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              3. Purpose of Collection & Processing
            </h2>
            <p>
              Your personal data is collected exclusively for specified, lawful purposes under Section 6 of the DPDP Act 2023:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-tertiary">
              <li>Evaluating prospective legal engagements and conducting conflict-of-interest checks.</li>
              <li>Communicating with you regarding your legal inquiry via phone, email, or messaging.</li>
              <li>Fulfilling legal obligations under Indian law and Bar Council of India regulations.</li>
            </ul>
            <p>
              We do not use your personal data for automated marketing campaigns, third-party profiling, or commercial monetization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              4. Professional Confidentiality & Privilege
            </h2>
            <p>
              All information disclosed to the Chamber via digital forms or subsequent consultations is treated with strict professional confidentiality in accordance with advocate-client privilege under Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam, 2023 and the Bar Council of India Rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              5. Rights of Data Principals under DPDP Act 2023
            </h2>
            <p>
              As a Data Principal under Indian law, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-tertiary">
              <li><strong className="text-on-surface">Right to Access:</strong> Request a summary of personal data processed by us.</li>
              <li><strong className="text-on-surface">Right to Correction & Erasure:</strong> Request correction of inaccurate data or deletion of data no longer required for legal compliance.</li>
              <li><strong className="text-on-surface">Right of Grievance Redressal:</strong> Submit inquiries regarding our data handling practices directly to our chamber office.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-title-lg text-title-lg text-on-surface font-serif uppercase tracking-wide">
              6. Contact & Grievance Officer
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:
            </p>
            <div className="p-4 bg-surface-container-low border border-outline-variant/30 rounded-DEFAULT space-y-1 text-on-surface">
              <p className="font-bold">Chambers of Advocate Shubham Singh</p>
              <p className="text-body-sm text-on-surface-variant">Chamber No. 704, Lawyers Chambers Block, Delhi High Court / District Courts</p>
              <p className="text-body-sm text-on-surface-variant">Email: {siteConfig.email}</p>
              <p className="text-body-sm text-on-surface-variant">Phone: {siteConfig.phone}</p>
            </div>
          </section>
        </article>

        {/* Back Link */}
        <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 text-tertiary hover:underline font-label-md uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Return to Contact Page</span>
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
