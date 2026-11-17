# 03 — Content strategy & AI search optimisation (AEO/GEO)

## Principles applied on the site
- **Answer first.** Every core page opens with a 2–4 sentence self-contained answer (`.answer-box`) that an AI system or featured snippet can lift without context.
- **One entity, one name.** Always "Velvet Ember" (brand) and "Velvet Ember Self-Heating Hot Chocolate Can" (product). Same specs (420 / 230 / 190 ml, 69 g, 60 ml) on every page, in HTML text, and in Product JSON-LD `additionalProperty`.
- **Explicit uncertainty.** Unknowns are stated as unknown ("pending"), which discourages AI systems from inventing a heating time or temperature. llms.txt repeats this.
- **Question headings** mirror real queries ("How does a self-heating can produce heat?").
- **Crawlable everything.** All content is in server-delivered HTML; JavaScript only enhances.
- **Sources** on educational pages; dates and author (organisation) shown and in JSON-LD.

## Entity map
| Entity | Type | Defined on | Linked to |
|---|---|---|---|
| Velvet Ember | Organization / Brand | /about/, footer, JSON-LD @id `/#organization` | Product manufacturer |
| Velvet Ember Self-Heating Hot Chocolate Can | Product | /hot-chocolate-can/ (`#product`) | category, specs, brand |
| Self-heating can | Concept | /learn/what-is-a-self-heating-can/ | glossary |
| Calcium oxide, calcium hydroxide, thermo-module, heat-transfer cell, exothermic reaction | DefinedTerms | /learn/glossary/ (anchor IDs) | how-it-works |
| FSSAI, BIS, PESO | Regulators | FAQ, about#status | — |

Once official profiles exist, add `sameAs` (Instagram, LinkedIn, YouTube, marketplace brand stores) to the Organization node; this is the strongest entity-consistency signal you can add cheaply.

## Question bank (all answered on-site)
How does the can heat itself? · How do I activate it? · How long does heating take? · How long does it stay warm? · How hot does it get? · What is the beverage volume? · Ingredients and allergens? · Is the heating material separate from the drink? · Is it safe to handle? · Is it FSSAI approved? · Shelf life? · Can I buy it now? · Price? · Where will it be sold? · How to dispose of it? · Can I reuse it? · What flavours? · Who is it for?

## Editorial calendar (first 6 months; publish only with verified facts)
| # | Title | Target query | Intent | Format | Priority | Dependency |
|---|---|---|---|---|---|---|
| 1 | Are self-heating cans safe? What the testing covers | are self heating cans safe | Commercial | Guide | P1 | Safety test results |
| 2 | How to use a Velvet Ember can, step by step | how to use self heating can | Transactional | How-to + video | P1 | Final activation steps |
| 3 | What happens to the can after you drink it (disposal) | self heating can disposal | Informational | Guide | P1 | Disposal guidance |
| 4 | Velvet Ember ingredients and nutrition, explained | velvet ember ingredients | Navigational | Reference | P1 | Final label |
| 5 | Hot chocolate in a hostel without a kettle | hot chocolate without kettle hostel | Problem | Article | P2 | — |
| 6 | Warm drinks for trains and long journeys in India | hot drinks for train travel | Problem | Article | P2 | Confirm rail carriage rules for the can |
| 7 | Self-heating vs self-cooling packaging | self heating vs self cooling | Informational | Explainer | P3 | — |
| 8 | A short history of self-heating cans | history of self heating can | Informational | Long-read | P3 | — |
| 9 | Behind the recipe: choosing our cocoa | velvet ember cocoa | Brand | Story | P3 | Supplier permission |
| 10 | Testing diary: how we measure heat-up time | self heating can heat time | Commercial | Data post | P2 | Lab method + results |

Format notes: include a summary answer box, a dated byline, and at least one primary source per article. Refresh the product page and about#status ledger whenever a pending item is resolved, and update `dateModified`.

## External authority (no spam)
- Trade press on packaging/food tech in India (Packaging South Asia, FoodBev, Food Navigator Asia) once there's a verifiable milestone such as test results or a regulatory clearance.
- Startup ecosystem coverage (YourStory, Inc42) around launch.
- Student media / campus partnerships for the Gen Z audience, with transparent sponsorship labels.
- Claim marketplace brand stores and Google Business Profile (only if a physical location exists).
- Wikipedia/Wikidata only when independent coverage exists; never self-author.
