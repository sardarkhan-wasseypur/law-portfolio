# PROJECT RULES

## PROJECT
SEO-first website for Shubham Singh, Advocate, Delhi.

## SOURCES OF TRUTH
- **PRD_v2**: Content, SEO, and URLs.
- **/design**: Visual design.
- *Conflict Resolution*: If they conflict, PRD wins for content and SEO, `/design` wins for visuals.
- **HTML vs PNG**: The HTML files in `/design` are the primary visual source. Read their markup, classes, colors, fonts, spacing and text. The PNG files are only a rough layout reference. If a PNG is unclear, trust the HTML.

## STACK
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX
- `next/image`
- `next/font`
- No UI libraries unless explicitly requested.
- Server Components by default; `"use client"` only for the menu, accordion, and form.

## VISUAL RULE
Every page must be a 1:1 conversion of its Stitch HTML file. Copy the structure and Tailwind classes. Never redesign. Take screenshots at 1440px and 390px, compare with the Stitch PNG, and fix every difference before finishing.

## STRICT SCOPE
Do only what the current prompt asks. Never build ahead. If a task seems to need more, stop and ask me.

## RULES
1. **Never invent facts**: No fake phone, address, credentials, case results, reviews, or awards. Use placeholders such as `[PHONE]` stored only in `src/content/site.ts`.
2. **NO testimonials, ratings, "best lawyer" claims, or "featured in" logos** (Bar Council Rule 36).
3. **One h1 per page**, no skipped heading levels, semantic HTML, descriptive alt text, descriptive link text.
4. **Every page needs a unique title (under 60 characters), meta description (under 155)**, canonical, and Open Graph, through `buildMetadata()`.
5. **Stitch HTML Conversion**: Every page is a 1:1 conversion of its Stitch HTML file. Copy structure, Tailwind classes, gradients, and overlays. Rebuild as clean semantic React components (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`). Use `next/image` for all images, `next/link` for internal links. All content must be server-rendered.
6. **Colors, fonts, and spacing** match the Stitch HTML theme tokens.
7. **At the end of every task**, list files created, files changed, and anything you were unsure about.
