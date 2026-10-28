# Pocket Ramanujan — Next Steps

_Last updated: 2026-10-27_

## Current state

The first 13-topic collection milestone is complete. The app remains a static Astro site, deployed at the canonical URL:

Live site: https://ramanujan-beta.vercel.app/

Published lessons:

1. Partition Congruences
2. A Rapid Series for π
3. Highly Composite Numbers
4. Hardy–Ramanujan Circle Method
5. The Rogers–Ramanujan Identities
6. Ramanujan's Tau Function
7. Continued Fractions and the Rogers–Ramanujan Fraction
8. Ramanujan's Modular Equations
9. Ramanujan's Mock Theta Functions
10. Ramanujan's Approximation for the Gamma Function
11. Ramanujan's Master Theorem
12. Ramanujan Summation and Divergent Series
13. A Second Ramanujan Series for 1/π

Current capabilities:

- One discovery per page
- Thirteen detailed authored lessons in Markdown
- KaTeX with MathML output and described formulas
- Plain-language equation walkthroughs, worked examples, sources, and attribution notes
- Browse page with filters
- Search page and generated Pagefind index
- Curated Explore Further links
- Responsive layout
- Sitemap, robots.txt, canonical metadata, and Vercel deployment
- Automated schema, content, browser, accessibility, and link checks

## Product direction

Continue building a carefully sourced, accessible collection of important Ramanujan-related mathematics. Do not optimize for an exhaustive dump of formulas. Optimize for lessons that help a reader understand what the idea means, how to work with it, why it was surprising, and where it leads.

The 1729 anecdote remains intentionally excluded.

## Phase 1 — Editorial system and content quality

### 1. Define the standard lesson template

For every discovery, require:

1. The question or puzzle
2. Prerequisite ideas
3. Plain-language intuition
4. Definitions and notation
5. Small examples before the main result
6. The main theorem, identity, or method
7. A worked calculation
8. Proof strategy or proof sketch
9. Historical attribution
10. Applications, influence, or an honest statement that there is no direct application
11. Further resources
12. Sources and suggested next lessons

### 2. Expand the pilot lessons further

Review each pilot with a mathematician/editorial checklist:

- Are every symbol and term defined before use?
- Does the reader see at least two concrete examples?
- Is the main formula interpreted in words?
- Is the proof sketch accurate without pretending to be a full proof?
- Are direct applications separated from later influence?
- Are historical claims sourced?
- Are links still live and appropriate for the stated difficulty?

### 3. Establish source tiers

Use a visible source label:

- Primary source
- Annotated notebook or collected paper
- Scholarly exposition
- Institutional explainer
- General-audience explainer
- Video lecture

Do not publish an application claim without a source or an editorial note explaining that it is broad influence rather than direct use.

## Completed milestone — build the initial collection

All ten planned additions are published alongside the three pilots. Each lesson follows the shared source, attribution, equation-walkthrough, worked-example, and verification standards. The exact topic order and completion evidence are recorded in `docs/superpowers/plans/2026-10-27-expand-ramanujan-collection.md`.

For future content, retain the research-first workflow: create a source packet, outline the mathematics, write the accessible lesson, add described formulas and examples, then run content and browser tests.

Suggested content workflow:

1. Research and source verification
2. Mathematical outline
3. Beginner explanation
4. Intermediate “go deeper” material
5. Formula rendering and examples
6. Editorial review
7. Browser and accessibility verification

## Phase 3 — Improve learning navigation

Add:

- Difficulty progression from introductory to advanced
- Prerequisite links between discoveries
- “If you understood this, try…” recommendations
- Topic landing pages
- A guided Start Here curriculum longer than three pages
- Related concepts glossary
- Optional “proof depth” labels: intuition, proof idea, full proof reference

Keep the first version read-first. Add interactive visualizations only when they clarify a specific idea.

## Phase 4 — Improve search and discovery

The current search has a lightweight client-side experience and a generated Pagefind index. Next:

- Wire the visible search UI directly to Pagefind results
- Add topic and difficulty filters to search results
- Index formula labels and application text deliberately
- Add search empty states and suggested queries
- Add crawlable category pages for major topics
- Keep all content reachable through ordinary links, not only JavaScript

## Phase 5 — Accessibility and visual refinement

Verify with keyboard and screen readers:

- Formula descriptions
- MathML output
- Heading hierarchy
- Focus visibility
- Link purpose
- Mobile equation overflow
- Color contrast
- Reduced motion

Then refine typography and illustrations without letting visual decoration compete with formulas.

## Phase 6 — Production and community readiness

Before adding accounts or a CMS:

- Add a contributor/editorial guide
- Add a content review checklist to the repository
- Add external-link freshness checks that do not make builds flaky
- Add a changelog for mathematical corrections
- Add a correction/reporting link
- Connect the GitHub repository to Vercel for automatic production deploys
- Verify the final canonical domain in Google Search Console
- Submit the sitemap and monitor indexing

A CMS, accounts, saved progress, quizzes, and personalization should wait until the content library has enough depth to justify them.

## Definition of done for the next milestone

The next milestone is complete when:

- At least 10 discovery lessons are published
- Every lesson follows the standard template
- Every lesson has at least two worked examples or an explicit reason why two are inappropriate
- Every formula has accessible rendered math and a plain-language explanation
- Every application/influence claim has an appropriate source or label
- Search uses Pagefind visibly
- Topic and difficulty navigation work without requiring client-side JavaScript
- The production browser suite passes
- The sitemap and canonical metadata reflect the expanded collection

## Paused-state checklist

When resuming:

1. Check `git status` and `git log`.
2. Read this file and `docs/superpowers/specs/2026-10-24-pocket-ramanujan-design.md`.
3. Verify https://ramanujan-beta.vercel.app/.
4. Run `npm install`.
5. Run `npm run check && npm test && npm run build && npm run check:links && npx playwright test`.
6. The initial 13-topic collection is complete; choose a new product milestone from the remaining roadmap rather than repeating the completed content-expansion plan. Google Search Console ownership verification, if desired, remains a one-time manual step.
