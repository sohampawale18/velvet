# 02 — Information architecture & on-page SEO

## Navigation
Main: The can · How it works · Learn · FAQ · About · [Get launch updates]. Footer repeats all indexable pages plus legal drafts. Breadcrumbs (visible + BreadcrumbList JSON-LD) on every inner page.

## Page map
| Page | URL | Primary keyword | Secondary | Intent | Objective | Primary CTA | Key internal links |
|---|---|---|---|---|---|---|---|
| Home | / | self heating hot chocolate | velvet ember, self heating drink india | Nav / commercial | Explain the product in 5 seconds; route to product & mechanism | Discover Velvet Ember | product, how-it-works, learn article, FAQ, about#status |
| The can | /hot-chocolate-can/ | self heating hot chocolate can | specs, price, availability | Commercial | Canonical product facts | Get launch updates (Buy disabled) | how-it-works, FAQ, contact |
| How it works | /how-it-works/ | how do self heating cans work | calcium oxide reaction, thermo-module | Informational | Build understanding and trust | How… → learn article; Get updates | learn article, product |
| FAQ | /faq/ | self heating can FAQ | are self heating cans safe, activation, price | Info / commercial | Direct answers incl. unknowns | Get launch updates | how-it-works, contact |
| About | /about/ | velvet ember | brand story, project status | Navigational | Credibility + transparency | Get launch updates | status ledger (#status) |
| Contact | /contact/ | velvet ember contact | launch updates | Transactional | Lead capture | Get launch updates | privacy |
| Learn hub | /learn/ | self heating drinks guide | — | Informational | Cluster hub | Article links | all articles |
| What is a self-heating can? | /learn/what-is-a-self-heating-can/ | what is a self heating can | history, trade-offs | Informational | Pillar, sourced | Read specs | product, how-it-works |
| Hot chocolate on the go | /learn/hot-chocolate-on-the-go/ | hot chocolate on the go | self heating can vs flask, without kettle | Commercial | Honest comparison | Get launch updates | product |
| Glossary | /learn/glossary/ | self heating glossary | calcium oxide, thermo-module | Informational | Entity definitions (AI-extractable) | — | articles |
| Privacy / Terms | /privacy/, /terms/ | — | — | — | Drafts, **noindex** | — | — |
| 404 | /404.html | — | — | — | Recovery | Home | key pages |

## Pages deliberately not built (and why)
Testimonials, Reviews, Case Studies: no genuine data — fabricating would breach the brief. Shipping & Returns: nothing is sold. Separate Pricing page: price is a single proposed figure, kept on the product page (#price). Features & Benefits / Product Overview / Use Cases: merged into Home and product page to avoid thin, overlapping pages competing for the same keyword. Add city pages only once launch cities are confirmed.

## Metadata (as implemented)
| URL | Title | Meta description |
|---|---|---|
| / | Velvet Ember \| Self-Heating Hot Chocolate Can (In Development) | Velvet Ember is a self-heating hot chocolate can in development in India: a 230 ml drink section warmed by a separately sealed calcium oxide heating chamber. |
| /hot-chocolate-can/ | Self-Heating Hot Chocolate Can: Specs and Status \| Velvet Ember | Specifications for the Velvet Ember self-heating hot chocolate can: 230 ml drink section, 190 ml sealed heating chamber, proposed ₹220 price. Pre-launch. |
| /how-it-works/ | How Does a Self-Heating Can Work? \| Velvet Ember | How Velvet Ember's self-heating can works: water meets calcium oxide in a sealed chamber, releasing heat that warms the hot chocolate through an aluminium wall. |
| /faq/ | Self-Heating Hot Chocolate Can FAQ \| Velvet Ember | Answers about Velvet Ember: how the can heats itself, activation, heating time, ingredients, safety, approvals, price, availability and disposal. |
| /about/ | About Velvet Ember \| Self-Heating Hot Chocolate, Made in the Open | Why Velvet Ember is building a self-heating hot chocolate can for India, and an up-to-date list of what is confirmed and what is still being validated. |
| /contact/ | Contact Velvet Ember and Get Launch Updates | Sign up for Velvet Ember launch updates, or find retail, distribution and press contact details for the self-heating hot chocolate can. |
| /learn/ | Learn: Self-Heating Cans and Hot Drinks on the Go \| Velvet Ember | Guides to self-heating cans and portable hot drinks… |
| /learn/what-is-a-self-heating-can/ | What Is a Self-Heating Can? How It Works, History and Trade-offs | A self-heating can has a built-in, sealed heater… |
| /learn/hot-chocolate-on-the-go/ | Hot Chocolate on the Go: Flask vs Sachet vs Self-Heating Can | Comparing ways to get hot chocolate away from home… |
| /learn/glossary/ | Self-Heating Drinks Glossary: Key Terms Explained \| Velvet Ember | Definitions of terms used in self-heating packaging… |

Every page has: one H1, logical H2/H3, self-referencing canonical, Open Graph + Twitter card tags, `en-IN` language, `og:locale en_IN`.

## Images & alt text
The can cutaway is inline SVG with `<title>` and `<desc>` (accessible name + full description). No raster product photos exist yet. When renders arrive, use descriptive alt text, e.g. "Velvet Ember can shown in cutaway, with the hot chocolate section above the sealed heating chamber"; serve AVIF/WebP with width/height attributes; lazy-load below the fold only.

## External references
Sourced links appear on /learn/what-is-a-self-heating-can/ (The Conversation, Daily Coffee News, Make:, Food Engineering).
