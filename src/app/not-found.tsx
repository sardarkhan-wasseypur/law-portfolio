import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "404 - Page Not Found | Advocate Shubham Singh",
  description: "The requested legal page could not be found. Navigate back to key sections of the Chambers portal.",
  path: "/404/",
  noindex: true,
});

export default function NotFound() {
  return (
    <div className="w-full pt-[120px] pb-24 bg-surface min-h-[calc(100vh-120px)] text-on-surface flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-2xl w-full bg-surface-container-low p-8 md:p-12 rounded-DEFAULT border border-tertiary/30 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto border border-tertiary/40 text-tertiary">
          <span className="material-symbols-outlined text-[36px]">gavel</span>
        </div>

        <div className="space-y-2">
          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] font-bold">
            404 Error • Document Not Found
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase">
            Requested Page Not Found
          </h1>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          The requested page or statutory briefing could not be located in the Chamber registry. It may have been moved, renamed, or temporarily archived.
        </p>

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
            <span className="material-symbols-outlined text-[18px]">balance</span>
            <span>View Practice Areas</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
