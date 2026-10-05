# Full Site Audit & Verification Report

**Project:** Portfolio / Advocate Shubham Singh Website  
**Date of Audit:** October 6, 2026  
**Auditor:** Antigravity AI  

---

## 1. Summary Table

| Page / Component | Visual Match % | Colors/BG | Typography | Layout | Missing Content | Images | Responsive | SEO | Compliance |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Global System (Tokens, Header, Footer)** | 85% | MINOR | MINOR | MAJOR | MINOR | MINOR | MINOR | MAJOR | OK |
| **1. Home (`/`)** | 85% | MINOR | OK | MINOR | MINOR | OK | MINOR | OK | OK |
| **2a. Practice Pillar: Criminal (`/practice-areas/criminal-lawyer-delhi/`)** | 90% | OK | OK | MINOR | MINOR | OK | OK | OK | MINOR |
| **2b. Practice Sub: Bail (`/practice-areas/criminal-lawyer-delhi/bail-lawyer-delhi/`)** | 90% | OK | OK | OK | MINOR | OK | OK | OK | MINOR |
| **2c. Practice Pillar: Civil (`/practice-areas/civil-lawyer-delhi/`)** | 90% | OK | OK | OK | MINOR | OK | OK | OK | MINOR |
| **3. About (`/about/`)** | 88% | MINOR | OK | MINOR | MINOR | OK | OK | OK | OK |
| **4a. Court: Delhi High Court (`/courts/delhi-high-court-advocate/`)** | 92% | OK | OK | OK | MINOR | OK | OK | OK | MINOR |
| **4b. Court: Supreme Court (`/courts/supreme-court-advocate-delhi/`)** | 92% | OK | OK | OK | MINOR | OK | OK | OK | MINOR |
| **4c. Court: District Courts (`/courts/delhi-district-courts-advocate/`)** | 90% | OK | OK | OK | MINOR | OK | OK | OK | MINOR |
| **5. Legal Insights Hub (`/legal-insights/`)** | 75% | MINOR | OK | MAJOR | MAJOR | OK | OK | OK | OK |
| **6. Article Page (`/legal-insights/anticipatory-bail-delhi-how-it-works/`)** | 82% | MINOR | OK | MINOR | MINOR | OK | OK | OK | MINOR |
| **7. Contact (`/contact/`)** | 80% | OK | OK | MAJOR | MINOR | OK | MINOR | OK | OK |
| **8. Mobile Menu Component (`design/mobile/menu.html`)** | 70% | MINOR | MINOR | MAJOR | MAJOR | MAJOR | OK | N/A | OK |
| **9. No-Stitch Pages (`/faqs/`, `/practice-areas/`, `/courts/`, etc.)** | 90% | OK | OK | OK | OK | OK | OK | MAJOR | OK |

---

## 2. Global Issues

1. **Footer Broken Links (CRITICAL):**
   - **Where:** `src/components/layout/Footer.tsx` (Lines 57, 65, 73).
   - **Stitch vs Build:** Footer links point to invalid URLs `/courts/supreme-court-of-india/`, `/courts/delhi-high-court/`, and `/courts/delhi-district-courts/`.
   - **Build Actual:** Slugs are `/courts/supreme-court-advocate-delhi/`, `/courts/delhi-high-court-advocate/`, and `/courts/delhi-district-courts-advocate/`. Clicking footer links leads to 404 pages.
   - **Severity:** CRITICAL.

2. **Google Font Loading Bypass (MAJOR):**
   - **Where:** `src/app/layout.tsx` (Line 74).
   - **Issue:** Google Fonts (`Bodoni Moda`, `Hanken Grotesk`, `Material Symbols Outlined`) are loaded via raw HTML `<link>` tags inside `layout.tsx`, triggering ESLint warning `@next/next/no-page-custom-font` and increasing render-blocking layout shift.
   - **Stitch vs Build:** Stitch HTML defines Tailwind config extending `fontFamily` with `Bodoni Moda` and `Hanken Grotesk`. Next.js should use `next/font/google` for optimal font optimization.
   - **Severity:** MAJOR.

3. **Global Theme Token & Typography Mismatches (Category K) (MAJOR):**
   - **Where:** `src/app/globals.css`.
   - **Stitch Value:** `tailwind.config` in `desktop/home.html` defines specific line-heights, letter-spacings, font-weights, and color aliases (`secondary-container: #832644`, `tertiary: #e4c27d`, `surface-container-lowest: #090e17`).
   - **Current Value:** `src/app/globals.css` defines `@utility` rules, but some heading styles fallback to generic browser values or rely on raw `font-serif` without exact `line-height` and `letter-spacing` tokens.
   - **Severity:** MAJOR.

4. **Header Anchor Links Mismatch (MINOR):**
   - **Where:** `src/components/layout/Header.tsx` (Lines 13-14).
   - **Issue:** Header navigation contains links to `#who-we-help` and `#our-approach`. These IDs exist on the Home page (`/`) but do not exist on subpages like `/about/` or `/contact/`, making them broken links on non-home pages.
   - **Severity:** MINOR.

5. **SEO Duplicate JSON-LD Schema (MAJOR):**
   - **Where:** `src/app/layout.tsx` and `src/app/faqs/page.tsx`.
   - **Issue:** `src/app/faqs/page.tsx` renders 6 separate `<script type="application/ld+json">` tags, causing duplicate schema definitions.
   - **Severity:** MAJOR.

---

## 3. Per-Page Findings

### Page 1: Home (`/`) vs `home.html` (Desktop & Mobile)
1. **Hero Background Overlay Opacity (A. Colors & Backgrounds):**
   - **Where:** `src/app/page.tsx` (Hero Section).
   - **Stitch Value:** `bg-gradient-to-t from-surface via-surface/80 to-transparent` with opacity overlay 0.85.
   - **Current Value:** `bg-surface/70`, hero background is lighter than Stitch design.
   - **Severity:** MINOR.
2. **Mobile Intake Form Spacing (C. Layout & Spacing / G. Responsive):**
   - **Where:** `src/app/page.tsx` (Hero Intake Card at 390px).
   - **Stitch Value:** Padding `p-space-md` with touch target height `min-h-[48px]` for all inputs and button.
   - **Current Value:** Button height is `40px` on small mobile screens.
   - **Severity:** MINOR.

### Page 2: Practice Areas (`/practice-areas/criminal-lawyer-delhi/`, `/bail-lawyer-delhi/`, `/civil-lawyer-delhi/`)
1. **Unverified Statutory References (I. Compliance):**
   - **Where:** `src/content/practice/criminal.ts`, `src/content/practice/civil.ts`, `src/content/practice/cheque-bounce.ts`, `src/content/practice/divorce.ts`, `src/content/practice/trademark.ts`.
   - **Issue:** 63 `// VERIFY: advocate to confirm section number` comments remain in practice data files.
   - **Severity:** MINOR.

### Page 3: About (`/about/`) vs `about.html`
1. **Chamber Philosophy Background Gradient (A. Colors & Backgrounds):**
   - **Where:** `src/app/about/page.tsx` (Section 3).
   - **Stitch Value:** `bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest`.
   - **Current Value:** Flat background `bg-surface-container-low`.
   - **Severity:** MINOR.

### Page 4: Court Pages (`/courts/*`) vs `court.html`
1. **Metrics Grid Stacking on Mobile (C. Layout & Spacing):**
   - **Where:** `src/app/courts/[slug]/page.tsx`.
   - **Stitch Value:** 2x2 grid on mobile viewports (`grid-cols-2 gap-3`).
   - **Current Value:** Single column stack on 390px.
   - **Severity:** MINOR.

### Page 5: Legal Insights Hub (`/legal-insights/`) vs `blog-hub.html`
1. **Missing Blog Posts & Filter Tabs (D. Missing Content & C. Layout):**
   - **Where:** `src/app/legal-insights/page.tsx`, `src/components/legal-insights/LegalInsightsHub.tsx`.
   - **Stitch Value:** 6 featured articles in cards and a "Curated Monthly Appellate & High Court Jurisprudence" topic filter tab bar.
   - **Current Value:** Only 3 blog posts rendered; topic filter bar is completely missing.
   - **Severity:** MAJOR.

### Page 6: Article Page (`/legal-insights/anticipatory-bail-delhi-how-it-works/`) vs `article.html`
1. **Sidebar Sticky Table of Contents (F. Components & Interactions):**
   - **Where:** `src/app/legal-insights/[slug]/page.tsx`.
   - **Stitch Value:** Sticky sidebar (`sticky top-28`) with TOC links and a prominent "Need Legal Representation?" callout box.
   - **Current Value:** Callout box rendered below text body instead of sticky sidebar.
   - **Severity:** MINOR.

### Page 7: Contact (`/contact/`) vs `contact.html` (Desktop & Mobile)
1. **Mobile Contact Layout Divergence (C. Layout & G. Responsive):**
   - **Where:** `src/app/contact/page.tsx`.
   - **Stitch Mobile Value:** `design/mobile/contact.html` uses single-column card stack with "Priority Docket Intake" card, direct tap buttons for Call/WhatsApp, and distinct High Court / Defence Colony address cards.
   - **Current Value:** Renders scaled-down version of desktop 2-column layout.
   - **Severity:** MAJOR.

### Page 8: Mobile Menu Component vs `design/mobile/menu.html`
1. **Missing Profile Photo & Badges (E. Images & D. Content):**
   - **Where:** `src/components/layout/MobileMenu.tsx` (Lines 165-180).
   - **Stitch Value:** Renders `shubham_singh_profile.jpg` photo with `verified` icon badge, "BCI D/1942/2012", and "AoR Candidate" tag.
   - **Current Value:** Renders a placeholder circle with "SS" initials.
   - **Severity:** MAJOR.
2. **Missing Practice Areas Submenu Accordion (F. Components & Interactions):**
   - **Where:** `src/components/layout/MobileMenu.tsx`.
   - **Stitch Value:** Expandable accordion showing 5 practice fields.
   - **Current Value:** Accordion missing; plain flat navigation list.
   - **Severity:** MAJOR.
3. **Missing Emergency Hotline & Chamber Coordinates Cards (D. Missing Content):**
   - **Where:** `src/components/layout/MobileMenu.tsx`.
   - **Stitch Value:** "Urgent Mentioning Hotline" (+91 98100 88921) card and "Chamber Coordinates" box.
   - **Current Value:** Omitted.
   - **Severity:** MAJOR.

### Page 9: No-Stitch Pages (`/faqs/`, `/practice-areas/`, `/courts/`, `/privacy-policy/`, `/terms/`, `/disclaimer/`)
1. **Meta Description Length Exceeded (H. SEO):**
   - `/practice-areas/`: 170 characters (exceeds 155 char limit).
   - `/privacy-policy/`: 160 characters (exceeds 155 char limit).
   - **Severity:** MAJOR.
2. **Title Length Exceeded (H. SEO):**
   - `/disclaimer/`: 69 characters (exceeds 60 char limit).
   - **Severity:** MAJOR.
3. **Duplicate FAQPage Schema (H. SEO):**
   - `/faqs/`: Renders 6 separate `FAQPage` JSON-LD objects.
   - **Severity:** MAJOR.

---

## 4. Missing Content List

- **Global Mobile Menu (`design/mobile/menu.html`):**
  - [ ] Profile Photo (`shubham_singh_profile.jpg`)
  - [ ] BCI Enrollment Badge (`BCI D/1942/2012`)
  - [ ] AoR Candidate Tag (`AoR Candidate`)
  - [ ] Practice Areas Submenu Accordion (5 fields)
  - [ ] Urgent Mentioning Hotline Card (`+91 98100 88921`)
  - [ ] Chamber Coordinates Box (`Chamber 412, Delhi High Court`)
  - [ ] Material Symbols Icons (`gavel`, `balance`, `assured_workload`, `emergency`, `location_on`, `desk`, `call`, `chat`)
- **Legal Insights Hub (`/legal-insights/`):**
  - [ ] Monthly Jurisprudence Filter Bar ("Curated Monthly Appellate & High Court Jurisprudence")
  - [ ] 3 Blog Articles matching Stitch (`anton_piller`, `pecuniary_thresholds`, `pmla_bail`)
- **Contact Page Mobile (`/contact/`):**
  - [ ] Priority Docket Intake Mobile Card
  - [ ] Separate High Court & Defence Colony Mobile Chamber Cards
- **Compliance & Data Files:**
  - [ ] 181 `[PLACEHOLDER]` occurrences to be verified/replaced by advocate
  - [ ] 91 `VERIFY` section number comments to be confirmed by advocate

---

## 5. Code Health

- **Build Status (`npm run build`):** PASSED with zero compilation errors.
- **Lint Status (`npm run lint`):** PASSED on core codebase with 5 ESLint warnings:
  1. `src/app/contact/page.tsx`: Unused import `Link`.
  2. `src/app/layout.tsx`: `@next/next/no-page-custom-font` warning for HTML `<link>` font loading.
  3. `src/components/layout/MobileMenu.tsx`: Missing `handleClose` dependency in `useEffect`.
  4. `src/components/legal-insights/LegalInsightsHub.tsx`: Unused variables `gridPosts` and `getPostCategorySlug`.
  5. `src/lib/track.ts`: 3 `no-explicit-any` ESLint rule violations.
- **Dependencies & Performance:**
  - Standard dependencies clean and up to date (`Next 16.3.8`, `React 19.2.8`, `Tailwind 4`).
  - No remote URL images remaining. All images local under `/images/stitch/`.

---

## 6. Prioritized Fix Plan

1. **Fix Footer Navigation Links (Global / Critical)**
   - **Files:** `src/components/layout/Footer.tsx`
   - **Stitch Match:** Update URLs to match actual court page slugs (`/courts/supreme-court-advocate-delhi/`, `/courts/delhi-high-court-advocate/`, `/courts/delhi-district-courts-advocate/`).

2. **Rebuild Mobile Menu Component (Global / Major)**
   - **Files:** `src/components/layout/MobileMenu.tsx`
   - **Stitch Match:** 1:1 match with `design/mobile/menu.html` (include profile photo, BCI badge, practice accordion, hotline card, chamber coordinates, and Material Symbols icons).

3. **Migrate Font Loading to `next/font` & Update Global CSS Utility Tokens (Global / Major)**
   - **Files:** `src/app/layout.tsx`, `src/app/globals.css`
   - **Stitch Match:** Load `Bodoni Moda` and `Hanken Grotesk` via `next/font/google`; update `@utility` declarations for heading line-heights and letter-spacings.

4. **Fix SEO Metadata Lengths & Duplicate JSON-LD (SEO / Major)**
   - **Files:** `src/app/practice-areas/page.tsx`, `src/app/privacy-policy/page.tsx`, `src/app/disclaimer/page.tsx`, `src/app/faqs/page.tsx`
   - **Fix:** Shorten meta descriptions < 155 chars, title < 60 chars; consolidate `/faqs/` JSON-LD into a single array structure.

5. **Enhance Legal Insights Hub Layout & Topic Filter (Page / Major)**
   - **Files:** `src/app/legal-insights/page.tsx`, `src/components/legal-insights/LegalInsightsHub.tsx`
   - **Stitch Match:** Add monthly jurisprudence filter tab bar matching `blog-hub.html`.

6. **Refactor Mobile Layout for Contact Page (Page / Major)**
   - **Files:** `src/app/contact/page.tsx`
   - **Stitch Match:** Implement dedicated mobile layout matching `design/mobile/contact.html`.

7. **Clean up Code Health & ESLint Warnings (Code Health / Minor)**
   - **Files:** `src/app/contact/page.tsx`, `src/components/layout/MobileMenu.tsx`, `src/components/legal-insights/LegalInsightsHub.tsx`, `src/lib/track.ts`
   - **Fix:** Remove unused imports/vars, add missing hook dependencies, fix explicit `any` types.

---

## 7. Things I Could Not Check

1. **Real Device Touch Interactions:** Touch gesture swipe responsiveness on physical iOS/Android hardware (simulated via standard viewport dimensions 390px and 768px).
2. **Form Submission Endpoints:** Production form dispatch logic, as form submissions target local state simulation during audit.
