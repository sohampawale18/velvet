# Velvet Ember — pre-launch website (static HTML/CSS/JS)

Plain HTML5, CSS3 and vanilla JavaScript. No framework, no build step required to run.

## Run locally
```
cd velvet-ember
python3 -m http.server 8000      # then open http://localhost:8000
```
Use a local server rather than double-clicking files: links are root-relative (`/faq/`), which need a server.

## Structure
```
index.html                      Home
hot-chocolate-can/              Product detail: specs, price status, product FAQ
how-it-works/                   Mechanism explainer
faq/                            Full FAQ (FAQPage JSON-LD)
about/                          Brand story + live "project status" ledger (#status)
contact/                        Launch-updates form + contact placeholders
learn/                          Knowledge hub
learn/what-is-a-self-heating-can/
learn/hot-chocolate-on-the-go/  Comparison
learn/glossary/
privacy/, terms/                DRAFTS, noindex until legal review
404.html
assets/css/styles.css           Design system (tokens at top)
assets/js/main.js               Nav toggle, heating illustration, form, dataLayer events
assets/img/                     favicon.svg, logo.svg (placeholder), og-velvet-ember.png (placeholder)
robots.txt, sitemap.xml, llms.txt
docs/                           Strategy, SEO, AEO, validation and measurement documents
```

## Before deploying (find and replace)
1. Domain: replace `https://velvetember.example` everywhere (HTML canonicals/OG/JSON-LD, sitemap.xml, robots.txt, llms.txt).
2. Search for `OWNER INPUT` comments in HTML and fill them.
3. Replace placeholder logo and OG image with approved brand assets (keep 1200×630 for OG).
4. Resolve every item in `docs/OWNER-INPUTS-REQUIRED.md`, then update the `pending` tags in the HTML.
5. Have `privacy/` and `terms/` written by a legal advisor; then change their `robots` meta to `index,follow` and add them to `sitemap.xml`.

## Integration points (server-side needed, not simulated)
- **Launch-updates form:** set `CONFIG.FORM_ENDPOINT` in `assets/js/main.js` to an HTTPS endpoint that accepts JSON POST (your email platform's API via a serverless function, or a form provider). While empty, the form validates input and tells the visitor that nothing was sent. Store the consent text and timestamp server-side. Add server-side validation, rate limiting and spam protection; the honeypot field is a minimal client-side filter only.
- **Checkout:** deliberately absent. The "Buy" button is disabled. Add commerce only after payment gateway, inventory, shipping, returns, GST invoicing and regulatory clearances are approved; then add `Offer` to the Product JSON-LD.
- **Analytics:** paste the GTM container snippet where the `ANALYTICS` comment sits in each page head, behind a consent mechanism. `main.js` already pushes events to `dataLayer` (see docs/05).

## Hosting & deployment
Any static host works (Netlify, Cloudflare Pages, Vercel static, GitHub Pages, S3 + CloudFront). Configure:
- HTTPS with HSTS; redirect `http://` → `https://` and the non-preferred host (www/apex) → preferred, both 301.
- `404.html` as the not-found page with a real 404 status.
- Trailing-slash URLs are canonical (`/faq/`); 301 `/faq` and `/faq/index.html` to `/faq/`.
- Cache: `assets/*` long-lived (`max-age=31536000, immutable`) once you add filename versioning; HTML `no-cache`.
- Compression (Brotli/gzip) on HTML, CSS, JS, SVG.
- Recommended headers: `Content-Security-Policy` (allow fonts.googleapis.com / fonts.gstatic.com and your GTM/analytics hosts), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Editing shared header/footer
Header and footer are repeated in each page so every page is fully crawlable without JavaScript. When you change navigation, update all pages (or move to a static-site generator/CMS later; content is plain HTML and migrates easily).

## Fonts
Rozha One (display) and Mukta (body) from Google Fonts, both with Devanagari support for future Hindi/Marathi pages. For best performance and privacy, self-host the WOFF2 files and preload the body font.
