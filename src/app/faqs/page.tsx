import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { buildFAQSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions | Advocate Shubham Singh",
  description:
    "Legal FAQs on Delhi court procedures, criminal law, cheque bounce, divorce, civil litigation, and trademark laws.",
  path: "/faqs/",
});

interface FAQGroup {
  title: string;
  pillarTitle: string;
  pillarHref: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

const faqGroups: FAQGroup[] = [
  {
    title: "Criminal Law & Bail Representation",
    pillarTitle: "Criminal Law Practice",
    pillarHref: "/practice-areas/criminal-lawyer-delhi/",
    description:
      "Frequently asked questions on anticipatory bail, regular bail, FIR quashing, and criminal trial procedures in Delhi Courts.",
    faqs: [
      {
        question: "What is the procedure for obtaining anticipatory bail in Delhi courts?",
        answer:
          "Anticipatory bail applications under Section 482 BNSS or Section 438 CrPC are instituted before the Sessions Court or Delhi High Court when there is a reasonable apprehension of arrest in a non-bailable offense. The court evaluates the gravity of accusations, antecedents, and necessity of custodial interrogation before granting pre-arrest protection.",
      },
      {
        question: "How does regular bail differ from anticipatory bail in criminal defense?",
        answer:
          "Anticipatory bail is sought prior to arrest when apprehension of detention exists, allowing the applicant to remain free upon arrest. Regular bail under Section 483 BNSS or Section 439 CrPC is filed after an individual is taken into police or judicial custody to secure temporary courtroom release.",
      },
      {
        question: "Can a false FIR be quashed by the Delhi High Court?",
        answer:
          "Yes, under Section 528 BNSS or Section 482 CrPC, the Delhi High Court possesses inherent powers to quash groundless FIRs, private complaints, or non-bailable proceedings. Quashing is granted under Supreme Court Bhajan Lal guidelines when allegations fail to disclose a cognizable offense or represent malicious prosecution.",
      },
      {
        question: "What rights does an arrested person possess under Indian criminal law?",
        answer:
          "An arrested individual has statutory rights under Section 47 BNSS and Article 22 of the Constitution, including the right to be informed of arrest grounds, the right to consult legal counsel, mandatory production before a Judicial Magistrate within 24 hours, and mandatory medical examination under Section 53 BNSS.",
      },
    ],
  },
  {
    title: "Cheque Bounce & Section 138 NI Act",
    pillarTitle: "Cheque Bounce Practice",
    pillarHref: "/practice-areas/cheque-bounce-lawyer-delhi/",
    description:
      "Clear guidance on statutory 30-day demand notices, bank return memos, 15-day cure windows, and MM Court trial procedure.",
    faqs: [
      {
        question: "What is the statutory time limit for sending a cheque bounce notice?",
        answer:
          "Under Section 138 of the Negotiable Instruments Act, 1881, the payee must issue a written statutory legal demand notice to the drawer within 30 days of receiving the official bank dishonour memo. The notice must grant the drawer 15 full days from receipt to make payment.",
      },
      {
        question: "What happens if the drawer fails to pay within 15 days of notice?",
        answer:
          "If the drawer fails to make full payment of the bounced cheque amount within 15 days of receiving the statutory demand notice, the cause of action arises on the 16th day. The payee can institute a formal criminal complaint before the Metropolitan Magistrate within 30 days.",
      },
      {
        question: "Is a cheque marked 'Stop Payment' punishable under Section 138 NI Act?",
        answer:
          "Yes. The Supreme Court of India has ruled that return memos indicating 'Stop Payment', 'Account Closed', or 'Exceeds Arrangement' attract criminal liability under Section 138 NI Act. The drawer must establish a valid defense during trial to rebut statutory presumptions of debt under Section 139.",
      },
      {
        question: "Can Section 138 cheque bounce proceedings be compounded or settled?",
        answer:
          "Yes, Section 147 of the Negotiable Instruments Act makes cheque bounce offences explicitly compoundable at any stage of trial or appellate review. Under Supreme Court Damodar S. Prabhu guidelines, settlement at early Magistrate trial stages involves zero additional costs, while appellate compounding attracts graded legal authority costs.",
      },
    ],
  },
  {
    title: "Divorce & Family Law Litigation",
    pillarTitle: "Divorce & Family Law Practice",
    pillarHref: "/practice-areas/divorce-family-lawyer-delhi/",
    description:
      "Answers on mutual consent divorce, contested dissolution, child custody access, and spousal maintenance claims.",
    faqs: [
      {
        question: "How long does a mutual consent divorce take in Delhi Family Courts?",
        answer:
          "Under Section 13B of the Hindu Marriage Act, 1955, mutual consent divorce requires two formal motions. While a six-month cooling period between motions is statutorily prescribed, Family Courts may grant a waiver of the waiting period under Supreme Court guidelines when all settlement terms are finalized.",
      },
      {
        question: "How are interim maintenance amounts calculated by Delhi Family Courts?",
        answer:
          "Family Courts evaluate interim maintenance claims under Section 144 BNSS / Section 125 CrPC and Section 24 HMA by analyzing standardized asset and liability affidavits mandated by the Supreme Court in Rajnesh v. Neha. Factors include net disposable income, standard of living, and financial liabilities of both spouses.",
      },
      {
        question: "Who gets child custody during pending divorce proceedings in Delhi?",
        answer:
          "Child custody determinations under the Guardians and Wards Act, 1890 and Section 6 of the Hindu Minority and Guardianship Act, 1956 prioritize the paramount welfare of the minor child. Benches grant interim joint custody, primary physical custody, or structured weekend visitation rights based on child emotional well-being.",
      },
      {
        question: "Can a wife claim domestic violence relief alongside divorce petitions?",
        answer:
          "Yes, remedies under the Protection of Women from Domestic Violence Act, 2005 (DV Act) can be pursued concurrently with divorce suits. Section 12 DV Act applications empower Magistrate Courts to grant urgent interim protection orders, residence rights in shared households, monetary relief, and temporary child custody access.",
      },
    ],
  },
  {
    title: "Civil & Property Law Litigation",
    pillarTitle: "Civil Law Practice",
    pillarHref: "/practice-areas/civil-lawyer-delhi/",
    description:
      "Information on property disputes, pecuniary court jurisdiction, interim injunctions, and commercial debt recovery.",
    faqs: [
      {
        question: "What is the pecuniary jurisdiction threshold for Delhi District Courts?",
        answer:
          "In Delhi, civil suits valued up to ₹2 Crore are instituted before District Courts (Tis Hazari, Saket, Patiala House, Rohini, Karkardooma, and Dwarka). Civil suits where subject-matter valuation exceeds ₹2 Crore fall under the Ordinary Original Civil Jurisdiction of the High Court of Delhi under the Delhi High Court Act.",
      },
      {
        question: "How can property owners secure urgent temporary injunctions in Delhi?",
        answer:
          "Property owners facing illegal construction, encroachment, or dispossession file civil suits accompanied by applications under Order XXXIX Rules 1 and 2 CPC. Courts evaluate a three-fold test: prima facie case, balance of convenience, and potential for irreparable injury before granting ad-interim temporary restraining orders.",
      },
      {
        question: "Is pre-institution mediation compulsory for commercial civil suits?",
        answer:
          "Yes, under Section 12A of the Commercial Courts Act, 2015, pre-institution mediation before the State or District Legal Services Authority is mandatory for commercial suits valued at ₹3 Lakh or above, unless the plaintiff seeks urgent interim relief from the court. Settlement agreements hold arbitral award status.",
      },
      {
        question: "What is the procedure for recovering unpaid commercial debts in civil court?",
        answer:
          "Payees file summary suits under Order XXXVII of the Code of Civil Procedure (CPC) for liquidated debt recovery based on written contracts or bills. Unless the defendant obtains leave to defend by demonstrating a substantial defense, the plaintiff is entitled to an immediate decree for recovery.",
      },
    ],
  },
  {
    title: "Trademark & Intellectual Property Law",
    pillarTitle: "Trademark Law Practice",
    pillarHref: "/practice-areas/trademark-lawyer-delhi/",
    description:
      "Guidance on trademark search, registry examination replies, Form TM-O opposition hearings, and High Court IP litigation.",
    faqs: [
      {
        question: "What steps are involved in registering a trademark in India?",
        answer:
          "Trademark registration involves filing Form TM-A with the Trade Marks Registry Delhi, followed by official examination. If Section 9 or Section 11 objections are issued, a formal reply is submitted within 30 days. Upon publication in the Trade Marks Journal, the mark achieves registration after four months.",
      },
      {
        question: "How do brand owners respond to Section 9 or 11 examination objections?",
        answer:
          "Section 9 objections (absolute grounds for refusal) are overcome by demonstrating acquired distinctiveness and commercial user evidence. Section 11 objections (relative grounds based on earlier marks) are addressed by establishing phonetic, visual, and trade channel dissimilarity, or claiming honest concurrent adoption under Section 12 Trade Marks Act.",
      },
      {
        question: "What remedies exist against trademark infringement in Delhi High Court?",
        answer:
          "Brand owners institute civil suits before the Intellectual Property Division (IPD) of the Delhi High Court for ex-parte ad-interim injunctions, appointment of Local Commissioners for search and seizure, dynamic John Doe orders against online counterfeiters, and recovery of punitive damages under the Trade Marks Act, 1999.",
      },
      {
        question: "How long is a registered trademark valid and how is it renewed?",
        answer:
          "Under Section 25 of the Trade Marks Act, 1999, a registered trademark remains valid for ten years from the date of application filing. It can be renewed indefinitely for successive ten-year periods by submitting renewal application Form TM-R along with prescribed statutory fees prior to expiration.",
      },
    ],
  },
];

export default function FAQsPage() {
  const allFaqs = faqGroups.flatMap((group) => group.faqs);
  const faqSchema = buildFAQSchema(allFaqs);

  return (
    <div className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)] text-on-surface">
      <JsonLd data={faqSchema} />

      {/* Hero Header Section */}
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant/30 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-[0.2em] mb-2 font-bold">
            Court Procedure &amp; Guidance
          </span>
          <h1 className="font-headline-xl text-headline-xl uppercase text-on-surface tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Clear, authoritative answers on court procedures, statutory timelines, bail applications, cheque bounce notices, matrimonial disputes, and trademark enforcement in Delhi.
          </p>
        </div>
      </section>

      {/* Main FAQ Groups Matrix */}
      <section className="w-full py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          {faqGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low p-8 rounded-DEFAULT border border-outline-variant/20 shadow-lg space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-tertiary/20 pb-4 gap-4">
                <div>
                  <span className="font-eyebrow text-eyebrow text-tertiary uppercase tracking-widest block mb-1">
                    Group 0{idx + 1}
                  </span>
                  <h2 className="font-headline-md text-headline-md uppercase text-on-surface">
                    {group.title}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {group.description}
                  </p>
                </div>
                <Link
                  href={group.pillarHref}
                  className="shrink-0 inline-flex items-center gap-2 text-tertiary hover:underline font-label-md text-label-md uppercase tracking-wider"
                >
                  <span>Explore {group.pillarTitle}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              {/* FAQ Accordion Component */}
              <FAQAccordion items={group.faqs} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
