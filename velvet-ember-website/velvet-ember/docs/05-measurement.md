# 05 — Analytics & measurement framework

## Stack
GA4 via Google Tag Manager, Google Search Console, Bing Webmaster Tools. Load tags only after consent (Consent Mode v2 or a CMP), and document it in the privacy policy.

## Events already pushed to `dataLayer` by main.js
| Event | Parameters | Use |
|---|---|---|
| `cta_click` | cta_id, cta_text, page_path | CTA performance by placement (hero_discover, hero_how, nav_updates, band_updates, product_updates, price_updates, form_submit…) |
| `heat_demo_play` | page_path | Engagement with the mechanism illustration |
| `faq_open` | question | Which objections matter most, a direct input to content priorities |
| `outbound_click` | link_url | Source-link engagement |
| `updates_form_submit_attempt` | endpoint_configured | Funnel step |
| `updates_signup` | — | **Primary conversion** (fires only on a real 2xx response) |

In GTM: create Custom Event triggers for each, map to GA4 events, and mark `updates_signup` as a key event. Add `add_to_cart` / `purchase` only when commerce exists.

## SEO KPIs
Indexed pages (GSC) · impressions and clicks by page and query · CTR on brand vs non-brand · average position for P1 keywords · organic sign-ups · referring domains (GSC links / a backlink tool).

## AI search visibility
- **Referral traffic:** GA4 exploration filtered on session source matching `chatgpt.com|chat.openai.com|perplexity.ai|gemini.google.com|copilot.microsoft.com|claude.ai`. Create a custom channel group "AI assistants". Note: many AI answers send no referrer or no click at all, so this undercounts.
- **Landing pages and conversions** from that channel group.
- **Mention & citation tracking (manual or tool-assisted):** a fixed monthly prompt set ("what is a self-heating hot chocolate can in India", "how do self-heating cans work", "Velvet Ember heating time"), run in each assistant, logging: mentioned? cited URL? facts accurate? Inaccurate facts (e.g. an invented heating time) indicate where on-site content needs to be clearer.
- Google AI Overviews: track via GSC impressions on question queries; no dedicated report exists.

## Engagement
Engaged sessions rate, average engagement time on /how-it-works/ and learn articles, pages per session, scroll depth (GA4 enhanced measurement), CTA click-through rate, sign-up conversion rate.

## Reporting cadence
Weekly: sign-ups, top CTAs. Monthly: GSC queries, AI prompt audit, FAQ-open ranking. Quarterly: content calendar re-prioritisation.
