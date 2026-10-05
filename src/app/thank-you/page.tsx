import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Inquiry Received | Advocate Shubham Singh",
  description: "Thank you for contacting the Chambers of Advocate Shubham Singh.",
  path: "/thank-you/",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <div className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)] text-on-surface flex items-center justify-center py-16 px-6 lg:px-12">
      <div className="max-w-2xl w-full bg-surface-container-low p-8 md:p-12 rounded-DEFAULT border border-tertiary/30 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-secondary-container/40 text-tertiary flex items-center justify-center mx-auto border border-tertiary/30">
          <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>

        <div className="space-y-2">
          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-bold">
            Chambers Intake Registered
          </span>
          <h1 className="font-headline-xl text-headline-xl uppercase text-on-surface">
            Thank You for Contacting Us
          </h1>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Your confidential legal inquiry has been received directly by the Chamber Registry of Advocate Shubham Singh. Our team will review your matter and contact you shortly.
        </p>

        <div className="p-4 rounded bg-surface-container border border-outline-variant/30 text-left text-body-sm text-on-surface-variant space-y-1">
          <div className="flex items-center gap-2 text-tertiary font-label-md uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span>Confidentiality Acknowledgment</span>
          </div>
          <p className="text-legal-disclaimer leading-relaxed">
            All submitted details and documents are kept strictly confidential under advocate-client privilege under Section 126 of the Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam, 2023.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 bg-secondary-container hover:bg-on-secondary text-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            <span>Return to Home</span>
          </Link>
          <Link
            href="/practice-areas/"
            className="w-full sm:w-auto px-6 py-3.5 bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT transition-colors border border-outline-variant/30 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">gavel</span>
            <span>Explore Practice Areas</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
