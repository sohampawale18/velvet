# 04 — Technical SEO & validation report

Validated 17 Nov 2026 with a local headless-Chromium run and scripted checks.

## Automated checks (all pass)
- 13 HTML pages; exactly one `<h1>` each; self-referencing canonical on every page.
- All internal links and asset references resolve (0 broken).
- All JSON-LD blocks parse as valid JSON.
- Unique titles (≤ 65 chars) and unique meta descriptions (≤ 160 chars) on all indexable pages.
- No horizontal overflow at 390 px and 1280 px widths; no JavaScript errors.
- Copy scan for prohibited claims (certified, approved, recyclable, healthy, natural, organic, allergen-free, award, testimonial, in stock): none present.

**Still to run after deploy (needs a live URL):** Google Rich Results Test, Schema.org validator, PageSpeed Insights / CrUX, Lighthouse accessibility, Search Console URL inspection.

## Structured data
| Type | Pages | Notes |
|---|---|---|
| Organization, WebSite, WebPage | all | Linked by `@id`. Add `sameAs`, `contactPoint` when supplied. |
| Product | /, /hot-chocolate-can/ | **No `Offer`, `Review` or `AggregateRating`** — nothing is for sale and no reviews exist. Google's product snippets require one of these, so no product rich result is expected pre-launch. This is intentional. |
| BreadcrumbList | inner pages | Matches visible breadcrumbs. |
| Article / BlogPosting | how-it-works, learn articles | Organisation as author until named experts exist. |
| FAQPage | /faq/ | Google removed FAQ rich results for all sites in May 2026; the markup type remains valid and mirrors visible Q&A, so it's kept for machine readability, not SERP features. |
| AboutPage, ContactPage, CollectionPage | about, contact, learn | — |
| HowTo | not used | Activation steps aren't final, and HowTo rich results are retired. |
| LocalBusiness / Service | not used | No physical location or service. |

## Crawl & index
- `robots.txt` allows all, blocks `/docs/`, references the sitemap. (Better still: don't deploy `/docs/` at all.)
- `sitemap.xml` lists the 10 indexable URLs with `lastmod`. Legal drafts and 404 are `noindex,follow` and excluded.
- No orphan pages: every indexable page is in main nav, footer or the learn hub.
- `llms.txt` at root: a supplementary summary for AI crawlers. Not a ranking factor and not a substitute for the HTML.

## Performance (Core Web Vitals)
- LCP element is the H1 text (no hero image), rendered with font fallback while web fonts load (`display=swap`).
- No render-blocking JS: `main.js` is `defer`, ~5 KB. One tiny inline script sets the `js` class before paint to prevent nav layout shift (CLS).
- CSS single file ~13 KB unminified. Minify and Brotli in production.
- SVG illustration is inline (no extra request) with a fixed viewBox, so it reserves space (no CLS).
- INP: only lightweight click handlers.
- Recommended: self-host fonts as WOFF2 and preload Mukta 400; long-cache versioned assets.

## Accessibility
Skip link; visible focus rings; 44–48 px touch targets; native `<details>` for FAQ (keyboard accessible); form labels, `aria-invalid`, live status region; `prefers-reduced-motion` disables animation; colour pairs meet WCAG AA (cocoa on milk, cocoa on ember, milk on cocoa); dark mode via `prefers-color-scheme`. The SVG has a title and long description. Run axe/Lighthouse after deploy.

## Security
HTTPS + HSTS at host; CSP and other headers per README; no secrets in frontend; form posts only to a configured HTTPS endpoint; server must validate and rate-limit.
