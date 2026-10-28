# Expand the Pocket Ramanujan Collection — Design

## Status

Conversational design approved. This document is pending user review. No implementation has begun for this expansion.

## Intent

Expand Pocket Ramanujan from its current three lessons to the full planned collection of 13 topics. The app should help curious readers understand each mathematical idea rather than merely display formulas. Lessons should explain notation, build intuition with examples, describe the proof idea at an appropriate level, and carefully distinguish direct applications from later mathematical influence.

AI tutoring is explicitly deferred to a later project. The 1729 anecdote remains excluded.

## Current state

The deployed app at `https://ramanujan-beta.vercel.app/` is a static Astro site. Discovery records are authored as Markdown in `src/content/discoveries/`, validated by a Zod-backed Astro content collection, and rendered with KaTeX configured for HTML and MathML. Current content is:

- Partition Congruences
- A Rapid Series for π
- Highly Composite Numbers

The discovery route provides structured metadata and renders the Markdown lesson body. Browse and search are static pages. Previous/next discovery navigation is currently based on collection iteration, and the home page's Start Here list is manually specified for the three pilots.

## Goals

- Publish the 10 remaining planned lessons, bringing the total to 13.
- Research and verify mathematical and historical claims against credible sources before publication.
- Make every lesson substantial enough to teach: define terms, interpret notation, provide examples and calculations, explain why the result works or clearly scope a proof sketch, and discuss significance.
- Clearly distinguish Ramanujan's original results, conjectures, collaborations, later proofs, and later influence.
- Mention applications when supported; otherwise say plainly that the result's importance is primarily theoretical.
- Maintain accessible mathematical rendering, responsive layout, crawlable pages, and the existing static architecture.
- Make the guided path and previous/next navigation follow an intentional, stable learning sequence.
- Commit each reviewed content batch, run the complete verification suite, deploy to Vercel, and push all commits to GitHub.

## Non-goals

- AI tutoring or model-generated answers
- A backend, user accounts, saved progress, CMS, comments, quizzes, or personalization
- An exhaustive transcription of Ramanujan's notebooks
- New visualizations unless essential to explain a particular result
- Including the 1729 anecdote as a discovery page

## Collection scope

The existing three lessons remain, followed by these 10 additions:

1. Hardy–Ramanujan circle method
2. Rogers–Ramanujan identities
3. Ramanujan's tau function
4. Continued fractions
5. Modular equations
6. Mock theta functions
7. Gamma-function approximations
8. Ramanujan's Master Theorem
9. Ramanujan summation of divergent series
10. Further rapidly convergent series for π

Titles, slugs, exact mathematical scope, and sequence may be refined during source research, but changes must preserve the 13-topic goal and attribution safeguards. In particular, the Rogers–Ramanujan identities and related work require care about earlier discoveries and independent rediscovery; divergent-series summation requires explicit explanation that regularization is not ordinary convergence; modern applications must not be attributed directly to Ramanujan unless evidence supports that claim.

## Lesson standard

Every lesson uses the existing structured discovery fields and a detailed Markdown body. The body should normally include:

1. The motivating question or puzzle
2. Prerequisite ideas in accessible language
3. Plain-language intuition
4. Definitions and notation before use
5. Concrete examples before or alongside the main result
6. The central theorem, identity, method, or approximation
7. A worked calculation with intermediate steps
8. An explanation of why the result is surprising or useful
9. A proof strategy, proof sketch, or explicit note explaining why a full proof is out of scope
10. Historical context and precise attribution
11. Applications and later influence, clearly distinguished; or a note that no direct application is claimed
12. Explore-further resources and source list

A lesson should include at least two worked examples or explain why the subject calls for a different kind of demonstration. Every displayed formula must have an accurate accessible description and be interpreted in prose. The lesson should not rely on undefined notation or formula-only exposition.

## Source and attribution policy

Use primary papers, collected papers, annotated notebook editions, and scholarly expositions as the core sources where available. General-audience explainers and videos may supplement, not substitute for, sources supporting mathematical and historical claims.

For every lesson:

- Verify the main formula and its conditions (such as convergence, range, and variable assumptions).
- Record source author/title and a stable URL; include volume/page/section locators when verifiable.
- Label whether the entry is a discovery, conjecture, collaboration, later proof, or later development inspired by Ramanujan.
- Separate direct application from influence on a later field.
- Avoid making a claim of modern practical use without a source.
- Label unresolved bibliographic uncertainty rather than inventing a locator.

## Batch plan

Publish in four sequential batches:

- **Batch 1 (3):** Hardy–Ramanujan circle method; Rogers–Ramanujan identities; Ramanujan's tau function.
- **Batch 2 (3):** Continued fractions; modular equations; mock theta functions.
- **Batch 3 (2):** Gamma-function approximations; Ramanujan's Master Theorem.
- **Batch 4 (2):** Ramanujan summation of divergent series; further rapidly convergent series for π.

The batch order is an initial proposal. Research may recommend moving topics for prerequisite flow, but the 10 additions remain in scope. Each batch receives source review, build/math verification, and a commit. A full test run and production deployment happen after the collection and navigation changes are complete.

## Technical approach

- Keep Astro static generation and the existing Markdown content collection.
- Keep Zod validation, KaTeX rendering, MathML output, and Pagefind.
- Add a single ordered collection manifest containing all 13 stable slugs. Use it for Start Here and previous/next navigation, rather than relying on filesystem/collection ordering.
- Add or adjust tests to ensure the manifest has exactly the expected 13 topics, all referenced entries exist, no slug/title represents 1729, and the order is stable.
- Add content-structure checks that catch missing instructional sections, insufficient worked examples, missing citations, and formula descriptions without making arbitrary prose-length the only measure of quality.
- Add browser checks for navigation sequence and representative expanded lesson rendering.
- Do not add dependencies or services unless implementation work demonstrates a concrete need.

## Verification

For each content batch:

- Validate YAML/frontmatter and required collection metadata.
- Run the Astro check and production build so invalid KaTeX or malformed content is caught.
- Check internal links and review the cited external sources.
- Inspect representative pages in browser tests, including responsive formula rendering and accessible MathML descriptions.

Before deployment:

- Run `npm run check`, `npm test`, `npm run build`, `npm run check:links`, and `npx playwright test`.
- Confirm all 13 discovery routes are present in generated output and sitemap.
- Confirm the ordered path and previous/next links match the collection manifest.
- Smoke-test the production site, canonical URLs, sitemap, robots, and formula output.
- Commit all changes and push `main` to the configured GitHub repository.

## Risks and mitigations

- **Attribution ambiguity:** Some results were known earlier, developed collaboratively, or proved later. Mitigate with source-backed attribution labels and careful wording.
- **Superficial lessons:** A fixed template can still produce shallow prose. Mitigate with required examples/calculations, editorial review, and representative browser review of full lesson bodies.
- **Incorrect or overgeneralized formulas:** Conditions can be mathematically essential. Verify convergence, domain, and hypotheses against scholarly sources; encode caveats in prose.
- **Overstated applications:** The connection may be influence rather than direct practical use. State which kind of relevance is being claimed and cite it.
- **Large scope and context loss:** Ten lessons are substantial content work. Use four committed batches, track completed topics, and run checks at each batch boundary.
- **External resources change:** Curated links can become stale. Check at authoring time and avoid making every build depend on network availability.

## Success criteria

The expansion is complete when:

1. All 13 planned lessons exist as static routes and are present in the sitemap.
2. Each lesson meets the instructional and attribution standard above.
3. The ordered learning path and previous/next navigation are stable and intentional.
4. All math renders correctly with accessible MathML output.
5. Content, unit, browser, link, and build checks pass.
6. The full collection is deployed at the existing canonical Vercel URL.
7. The final code and content are committed and pushed to GitHub.
