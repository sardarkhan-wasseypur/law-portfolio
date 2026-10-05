import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header, Footer, StickyMobileCTA } from "@/components/layout";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";
import {
  buildLegalServiceSchema,
  buildPersonSchema,
  buildWebSiteSchema,
} from "@/lib/schema";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-hanken",
});

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION;

export const metadata: Metadata = {
  title: "Advocate in Delhi | Shubham Singh – Supreme Court & High Court",
  description:
    "Experienced Delhi advocate for criminal, civil, family, cheque bounce and trademark matters. Call or WhatsApp to book a consultation.",
  ...(gscVerification || bingVerification
    ? {
        verification: {
          ...(gscVerification ? { google: gscVerification } : {}),
          ...(bingVerification
            ? { other: { "msvalidate.01": [bingVerification] } }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${bodoniModa.variable} ${hankenGrotesk.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <GoogleAnalytics />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-tertiary focus:text-primary-container focus:font-semibold focus:rounded-sm"
        >
          Skip to main content
        </a>

        <JsonLd
          data={[
            buildWebSiteSchema(),
            buildLegalServiceSchema(),
            buildPersonSchema(),
          ]}
        />

        <AnalyticsTracker />

        <Header />

        <main id="main-content" tabIndex={-1} className="w-full pt-20 bg-surface min-h-screen">
          {children}
        </main>

        <Footer />

        <StickyMobileCTA />
      </body>
    </html>
  );
}
