import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import {
  SectionHeading,
  ImageTile,
  Card,
  Breadcrumb,
  FAQAccordion,
  CTABand,
  ProcessSteps,
  Checklist,
  Chips,
  EnquiryForm,
  DisclaimerStrip,
  ReviewedBy,
} from "@/components/sections";

export const metadata = buildMetadata({
  title: "Design System Showcase | Shubham Singh, Advocate",
  description: "Internal design system showcase page for legal practice design tokens and components.",
  path: "/design-system/",
  noindex: true,
});

export default function DesignSystemPage() {
  const sampleBreadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Practice Areas", url: "/practice-areas/" },
    { name: "Criminal Lawyer in Delhi", url: "/practice-areas/criminal-lawyer-delhi/" },
  ];

  const sampleFaqs = [
    {
      question: "[SAMPLE] What initial documents are needed for filing an Anticipatory Bail petition?",
      answer:
        "[SAMPLE] Essential documents include a certified copy of the First Information Report (FIR), lower court bail dismissal orders, notice issued under Section 41A CrPC (if any), and proof of residence.",
    },
    {
      question: "[SAMPLE] Can Section 138 NI Act cheque bounce matters be settled through compounding?",
      answer:
        "[SAMPLE] Yes, Section 147 of the Negotiable Instruments Act permits compounding of cheque bounce offenses at any stage of proceedings.",
    },
  ];

  const sampleProcessSteps = [
    {
      stepNumber: "01",
      title: "[SAMPLE] Confidential Chamber Consultation & Document Audit",
      description:
        "[SAMPLE] Comprehensive legal audit of FIR, statutory notice, or petition pleadings to formulate defense strategy.",
    },
    {
      stepNumber: "02",
      title: "[SAMPLE] Drafting Pleadings & Listing Execution",
      description:
        "[SAMPLE] Precision drafting of writ petitions, bail applications, or statutory notices adhering to High Court registry rules.",
    },
    {
      stepNumber: "03",
      title: "[SAMPLE] Courtroom Advocacy & Appellate Representation",
      description:
        "[SAMPLE] Direct courtroom representation before Supreme Court, High Court, or District Court benches.",
    },
  ];

  const sampleChecklistItems = [
    "[SAMPLE] Certified Copy of FIR / Complaint Petition",
    "[SAMPLE] Statutory Legal Notice & Speed Post Delivery Receipt",
    "[SAMPLE] Lower Court Dismissal / Remand Orders",
    "[SAMPLE] Identity & Residence Proof of Petitioner",
  ];

  const sampleChips = [
    { label: "Supreme Court of India", href: "/courts/supreme-court-advocate-delhi/" },
    { label: "Delhi High Court", href: "/courts/delhi-high-court-advocate/" },
    { label: "Tis Hazari Courts", href: "/courts/delhi-district-courts-advocate/" },
    { label: "Patiala House Courts", href: "/courts/delhi-district-courts-advocate/" },
    { label: "Saket Courts", href: "/courts/delhi-district-courts-advocate/" },
  ];

  return (
    <div className="min-h-screen bg-navy text-text-dark p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      <header className="space-y-4">
        <div className="inline-block px-3 py-1 bg-charcoal border border-gold/40 rounded-sm">
          <span className="text-gold uppercase tracking-[0.18em] text-xs font-bold font-sans italic">
            Component Library Showcase (Phase 4B)
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark tracking-tight">
          Content Components Showcase
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-3xl font-sans">
          All sample components rendered below for visual inspection.
        </p>
      </header>

      {/* Gold Divider */}
      <div className="w-full h-px bg-gold/30 my-8" />

      {/* 1. Breadcrumb Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">1. Breadcrumb Component</h2>
        <div className="p-6 bg-charcoal border border-gold/20 rounded-md">
          <Breadcrumb items={sampleBreadcrumbs} />
        </div>
      </section>

      {/* 2. SectionHeading Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">2. SectionHeading Component</h2>
        <div className="p-6 bg-charcoal border border-gold/20 rounded-md space-y-6">
          <SectionHeading
            eyebrow="Appellate Practice"
            title="[SAMPLE] Criminal Defense & High Court Writs"
            subtitle="[SAMPLE] Methodical advocacy before Supreme Court of India and Delhi High Court."
          />
          <div className="pt-6 border-t border-border-muted/40">
            <SectionHeading
              eyebrow="Centered Layout"
              title="[SAMPLE] Courts & Jurisdiction"
              align="center"
            />
          </div>
        </div>
      </section>

      {/* 3. ImageTile Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">3. ImageTile Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImageTile
            title="[SAMPLE] Criminal Law"
            category="Appellate Defense"
            href="/practice-areas/criminal-lawyer-delhi/"
            imageSrc="/og-image.png"
            imageAlt="[SAMPLE] Criminal law court representation"
          />
          <ImageTile
            title="[SAMPLE] Cheque Bounce"
            category="Section 138 NI Act"
            href="/practice-areas/cheque-bounce-lawyer-delhi/"
            imageSrc="/og-image.png"
            imageAlt="[SAMPLE] Section 138 NI Act representation"
          />
          <ImageTile
            title="[SAMPLE] Divorce & Family"
            category="Family Court"
            href="/practice-areas/divorce-family-lawyer-delhi/"
            imageSrc="/og-image.png"
            imageAlt="[SAMPLE] Family law representation"
          />
        </div>
      </section>

      {/* 4. Card Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">4. Card Component (Dark & Light)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            variant="dark"
            eyebrow="[SAMPLE] Dark Variant"
            title="[SAMPLE] Supreme Court SLP Petitions"
            description="[SAMPLE] Appellate litigation under Article 136 of the Constitution of India."
            href="/courts/supreme-court-advocate-delhi/"
            linkText="View Jurisdiction →"
          />
          <Card
            variant="light"
            eyebrow="[SAMPLE] Light Parchment Variant"
            title="[SAMPLE] Statutory Legal Notice Drafting"
            description="[SAMPLE] Precision drafting of Section 138 NI Act statutory legal notices."
            href="/practice-areas/cheque-bounce-lawyer-delhi/"
            linkText="View Legal Notice Details →"
          />
        </div>
      </section>

      {/* 5. ProcessSteps Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">5. ProcessSteps Component</h2>
        <ProcessSteps steps={sampleProcessSteps} />
      </section>

      {/* 6. Checklist Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">6. Checklist Component</h2>
        <Checklist items={sampleChecklistItems} />
      </section>

      {/* 7. Chips Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">7. Chips Component</h2>
        <div className="p-6 bg-charcoal border border-gold/20 rounded-md">
          <Chips items={sampleChips} />
        </div>
      </section>

      {/* 8. FAQAccordion Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">8. FAQAccordion Component</h2>
        <FAQAccordion items={sampleFaqs} />
      </section>

      {/* 9. CTABand Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">9. CTABand Component</h2>
        <CTABand
          title="[SAMPLE] Need Urgent Legal Representation in Delhi?"
          description="[SAMPLE] Schedule a privileged chamber consultation or connect for listing inquiries."
        />
      </section>

      {/* 10. EnquiryForm Component */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">10. EnquiryForm Component (UI Only)</h2>
        <EnquiryForm />
      </section>

      {/* 11. Compliance Components */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-semibold text-gold">11. Compliance & ReviewedBy Components</h2>
        <div className="space-y-4">
          <ReviewedBy date="October 2026" />
          <DisclaimerStrip />
        </div>
      </section>

      {/* Button Component Variants */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-gold">12. Button Component Variants</h2>
        <div className="p-6 bg-charcoal border border-gold/20 rounded-md flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary Burgundy</Button>
          <Button variant="outline">Secondary Outline</Button>
          <Button variant="ghost">Ghost Muted</Button>
        </div>
      </section>
    </div>
  );
}
