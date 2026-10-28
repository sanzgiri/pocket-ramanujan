# Expand Pocket Ramanujan Collection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand Pocket Ramanujan from three lessons to 13 detailed, sourced mathematical lessons, with stable learning-order navigation and a verified production deployment.

**Architecture:** Preserve the existing Astro static site, Markdown content collection, Zod schema, KaTeX/MathML rendering, and Pagefind. Add ten deeply instructional Markdown lessons in four reviewed batches, plus a canonical ordered slug manifest consumed by home and previous/next navigation.

**Tech Stack:** Astro, TypeScript, Markdown, Zod, KaTeX with MathML, Vitest, Playwright, Pagefind, Vercel.

**Spec:** `docs/superpowers/specs/2026-10-27-expand-ramanujan-collection-design.md`

## Global Constraints

- Publish 10 remaining planned lessons, bringing the total to 13.
- AI tutoring is explicitly deferred; add no backend or AI feature.
- The 1729 anecdote remains excluded.
- Use primary papers, collected papers, annotated notebook editions, and scholarly expositions as core sources where available.
- Every lesson should include at least two worked examples or explain why the subject calls for a different kind of demonstration.
- Every lesson must include a substantive `The main equation in plain language` section translating the key formula, defining its variables and conditions, and connecting it to a worked example. Explain separate formulas separately when one paraphrase would be insufficient; do not conceal hard steps behind vague proof disclaimers.
- Every displayed formula must have an accurate accessible description and be interpreted in prose.
- Clearly distinguish original results, conjectures, collaborations, later proofs, and later influence.
- Separate direct application from influence on a later field; do not claim modern practical use without a source.
- Keep Astro static generation, the Markdown content collection, Zod validation, KaTeX, MathML, and Pagefind.
- Run the full verification suite before deployment; commit each batch; push `main` to the configured GitHub repository.

## Review Focus

- A theorem may be false outside its hypotheses or convergence domain; add scope/condition checks to each batch's content test and manually verify claims against scholarly sources.
- Attribution may conflate prior work, collaboration, Ramanujan's conjectures, and later proofs; include attribution metadata checks and source-backed editorial review per lesson.
- Divergent-series regularization may be mistaken for ordinary convergence; Task 5 must test that the lesson explicitly distinguishes the two.
- The added content may exist but be unreachable or ordered alphabetically; Task 1 tests all 13 slugs and asserts manifest-based previous/next order.
- KaTeX can silently expose malformed or inaccessible formulas; every batch runs production build and representative browser checks for MathML and formula descriptions.
- Dense equations can discourage readers even when they render correctly; test for a substantive plain-language walkthrough, symbol definitions, step-by-step examples, and explicit proof scope, not merely the presence of formulas.

## User-approved editorial refinement

During implementation, the user asked for simpler explanations of complex equations without glossing over reasoning, and approved applying that standard to all 13 lessons, including six already authored. The `The main equation in plain language` section is now required. A separate editorial revision commit updates the first six added pages and the original three pilot pages before batch 3; batches 3 and 4 follow the same standard. Keep the exact mathematics and conditions, but layer it from intuitive translation to symbols to worked calculation, and state exactly what a proof sketch omits.

- [x] Revise the nine existing lessons and add a test plus browser coverage for substantive plain-language walkthroughs.

---

### Task 1: Establish editorial rules and canonical discovery ordering

**Files:**
- Create: `docs/content-authoring-guidelines.md`
- Modify: `src/content/discoveries/index.ts`
- Modify: `src/pages/discoveries/[slug].astro`
- Modify: `src/pages/discoveries/index.astro`
- Modify: `src/pages/index.astro`
- Modify: `tests/pilot-content.test.ts`
- Create: `tests/discovery-order.test.ts`

**Interfaces:**
- `discoveryOrder` in `src/content/discoveries/index.ts` is the canonical readonly slug sequence:
  `partition-congruences`, `pi-series`, `highly-composite-numbers`, `hardy-ramanujan-circle-method`, `rogers-ramanujan-identities`, `ramanujan-tau-function`, `continued-fractions`, `modular-equations`, `mock-theta-functions`, `gamma-function-approximations`, `ramanujan-master-theorem`, `ramanujan-summation`, `further-pi-series`.
- `orderDiscoveries<T extends { data: { slug: string } }>(entries: readonly T[]): T[]` orders supplied Astro collection entries by `discoveryOrder`; it tolerates not-yet-authored manifest entries but throws for a supplied slug missing from the manifest.
- Static discovery routes and browse cards use `orderDiscoveries(entries)`, not filesystem order.
- The home page keeps its short “Start Here” introduction and first three cards but sources those entries from the canonical manifest/content collection instead of duplicated literals.
- The editorial guide defines lesson sections, source tiers, attribution terms, formula/accessibility rules, and a batch review checklist.

- [x] **Step 1: Write failing tests for the canonical manifest and ordering helper**

Assert the manifest equals the exact 13-slug list above, has no duplicates, and excludes `1729`. Test `orderDiscoveries(entries)` with synthetic entries supplied out of order and assert that it returns only those entries in manifest order while rejecting a slug absent from the manifest. The helper must tolerate planned-but-not-yet-authored slugs during the four content batches.

- [x] **Step 2: Run the focused tests to verify they fail because the manifest/helper is missing**

Run: `npm test -- tests/discovery-order.test.ts`
Expected: FAIL because `discoveryOrder` and `orderDiscoveries` are not yet implemented.

- [x] **Step 3: Add editorial authoring and review guidelines**

Document the lesson sequence: motivating question, prerequisites, intuition, definitions, examples, main result, worked calculation, significance, proof strategy/scope, historical attribution, applications versus influence, further resources, and sources. Require at least two examples or a stated reason they are unsuitable. Require sourced conditions, accurate descriptions for displayed formulas, and the 1729 exclusion.

- [x] **Step 4: Expand the manifest and make navigation consume it**

Export `discoveryOrder` as a readonly tuple. Sort route entries and browse records by its index. Build the home page's first three cards from the manifest and the content entries. Fail the static build with a descriptive error if the manifest references a missing discovery or content exists outside the manifest.

- [x] **Step 5: Update pilot assertions and verify manifest behavior**

Keep pilot-specific assertions for the existing three slugs and add exact manifest sequence, uniqueness, unknown-slug rejection, and 1729 exclusion assertions. Defer the test equating all content files with the 13 manifest entries to Task 6 so intermediate batches can build.

- [x] **Step 6: Run checks and commit the editorial/navigation foundation**

Run: `npm test -- tests/discovery-order.test.ts tests/pilot-content.test.ts && npm run check && npm run build`
Expected: PASS for current corpus, helper ordering, schema, and pilot tests; build succeeds with planned slugs not yet authored.

Commit: `feat: define lesson standard and discovery order`.

### Task 2: Add batch 1 — circle method, Rogers–Ramanujan identities, tau function

**Files:**
- Create: `src/content/discoveries/hardy-ramanujan-circle-method.md`
- Create: `src/content/discoveries/rogers-ramanujan-identities.md`
- Create: `src/content/discoveries/ramanujan-tau-function.md`
- Modify: `tests/pilot-content.test.ts` or create `tests/content-batch-1.test.ts`

**Interfaces:**
- Each frontmatter record satisfies `discoverySchema` in `src/content/schema.ts`.
- Each body follows `docs/content-authoring-guidelines.md`, contains enough worked examples/calculations to teach the topic, and records source-backed attribution and further reading.
- Slugs and titles match `discoveryOrder` exactly.

- [x] **Step 1: Add failing batch acceptance tests**

Assert the three batch slugs exist; each has sources, attribution, formulas with descriptions, the required instructional headings, and at least two example/calculation sections (or an explicit editorial exception).

- [x] **Step 2: Run tests and verify they fail because batch pages are missing**

Run: `npm test -- tests/content-batch-1.test.ts`
Expected: FAIL on missing lesson files.

- [x] **Step 3: Research the circle method and write its lesson**

Use scholarly sources to explain the partition asymptotic, what the “circle” refers to at an intuitive level, a small partition-count example, the role of roots of unity/major and minor arcs at an appropriate depth, scope of the Hardy–Ramanujan result, and how Rademacher later obtained a convergent series. Distinguish their contributions.

- [x] **Step 4: Research the Rogers–Ramanujan identities and write their lesson**

Explain q-series/product notation, give initial coefficient checks or a partition interpretation, state convergence assumptions, and discuss the historical work of Rogers, Ramanujan, and later proofs without erasing prior discovery or independent rediscovery.

- [x] **Step 5: Research Ramanujan's tau function and write its lesson**

Define the discriminant generating function and tau coefficients, show a concrete coefficient/example, distinguish Ramanujan's conjectures from later proofs, and explain the modular-form context and influence.

- [x] **Step 6: Run batch tests, build, link validation, and representative browser checks**

Run: `npm test -- tests/content-batch-1.test.ts && npm run check && npm run build && npm run check:links && npx playwright test tests/discovery-pages.spec.ts`
Expected: all three routes generated; KaTeX succeeds; math descriptions and lesson headings are present.

- [x] **Step 7: Commit batch 1**

Commit: `content: add circle method, Rogers-Ramanujan, and tau lessons`.

### Task 3: Add batch 2 — continued fractions, modular equations, mock theta functions

**Files:**
- Create: `src/content/discoveries/continued-fractions.md`
- Create: `src/content/discoveries/modular-equations.md`
- Create: `src/content/discoveries/mock-theta-functions.md`
- Create: `tests/content-batch-2.test.ts`

**Interfaces:**
- Consumes the canonical `discoveryOrder` and the lesson/source standards from Task 1.
- Each page satisfies the schema and authoring guide, with reliable source records and accessible formulas.

- [x] **Step 1: Write failing batch acceptance tests**

Assert all three records satisfy slug, attribution, sources, lesson sections, example/calculation, formula description, and Explore Further requirements.

- [x] **Step 2: Run the tests and verify missing-content failures**

Run: `npm test -- tests/content-batch-2.test.ts`
Expected: FAIL because the batch pages do not yet exist.

- [x] **Step 3: Research and write the continued-fractions lesson**

Define continued fractions from simple rational approximations, show convergents numerically, explain a Ramanujan-associated continued fraction with valid domain/convergence qualifications, and state attribution carefully for jointly or independently developed named forms.

- [x] **Step 4: Research and write the modular-equations lesson**

Explain modular equations through a progressively built example/analogy, define all parameters used in the chosen formula, describe the relation to elliptic functions and transformations, and separate Ramanujan's work from modern framework.

- [x] **Step 5: Research and write the mock-theta lesson**

Explain the q-series setting, the original “mock theta” context and uncertainty in Ramanujan's letter, a sample series/pattern, and how later work by Watson and Zwegers clarified the theory. Do not present the modern definition as Ramanujan's own formulation.

- [x] **Step 6: Verify batch 2**

Run: `npm test -- tests/content-batch-2.test.ts && npm run check && npm run build && npm run check:links && npx playwright test tests/discovery-pages.spec.ts`
Expected: all batch pages build and representative equations expose MathML.

- [x] **Step 7: Commit batch 2**

Commit: `content: add continued fractions, modular equations, and mock theta lessons`.

### Task 4: Add batch 3 — gamma approximations and Master Theorem

**Files:**
- Create: `src/content/discoveries/gamma-function-approximations.md`
- Create: `src/content/discoveries/ramanujan-master-theorem.md`
- Create: `tests/content-batch-3.test.ts`

**Interfaces:**
- Both lessons use the shared manifest, schema, authoring guide, formula components, and sources components.

- [x] **Step 1: Write failing batch acceptance tests**

Assert both slug records exist and contain conditions, attributed formulas, sourced material, instructional sections, worked examples, and a substantive `The main equation in plain language` walkthrough of at least 80 words.

- [x] **Step 2: Run tests and verify missing-content failures**

Run: `npm test -- tests/content-batch-3.test.ts`
Expected: FAIL because the batch pages do not yet exist.

- [x] **Step 3: Research and write gamma-function approximations**

Define the gamma function and factorial connection; translate the approximation term by term in plain language; demonstrate a numerical approximation against exact/small cases; state range and error behavior; and explain appropriate use without claiming universal superiority.

- [x] **Step 4: Research and write Ramanujan's Master Theorem**

Explain Mellin transforms and the theorem's input/output relationship in layers, translate each symbol and hypothesis, give a simple worked example with every step justified under explicit analytic assumptions, state that modern rigorous forms require hypotheses, and cite scholarly sources.

- [x] **Step 5: Verify and commit batch 3**

Run: `npm test -- tests/content-batch-3.test.ts && npm run check && npm run build && npm run check:links && npx playwright test tests/discovery-pages.spec.ts`
Expected: both routes build and formulas render.

Commit: `content: add gamma approximation and Master Theorem lessons`.

### Task 5: Add batch 4 — divergent-series summation and further π series

**Files:**
- Create: `src/content/discoveries/ramanujan-summation.md`
- Create: `src/content/discoveries/further-pi-series.md`
- Create: `tests/content-batch-4.test.ts`

**Interfaces:**
- Both lessons satisfy the authoring guide, Zod schema, canonical manifest, and attribution/source requirements.

- [x] **Step 1: Write failing batch acceptance tests**

Assert both lessons exist with formulas, source records, examples, and a section distinguishing ordinary convergence from any regularized assignment for the divergent-series topic, with substantive plain-language equation walkthroughs.

- [x] **Step 2: Run tests and verify missing-content failures**

Run: `npm test -- tests/content-batch-4.test.ts`
Expected: FAIL because the batch pages do not yet exist.

- [x] **Step 3: Research and write Ramanujan summation**

Explain a divergent series example, distinguish partial sums and ordinary convergence from regularized values, show exactly which summation method is being discussed, state assumptions/limitations, and avoid implying a divergent series literally converges to its assigned regularized value.

- [x] **Step 4: Research and write further π series**

Choose one mathematically distinct, sourced Ramanujan series not duplicating the existing π page. Define variables, state convergence, compare convergence numerically with a worked approximation, and describe its historical and computational relevance accurately.

- [x] **Step 5: Verify and commit batch 4**

Run: `npm test -- tests/content-batch-4.test.ts && npm run check && npm run build && npm run check:links && npx playwright test tests/discovery-pages.spec.ts`
Expected: both routes build and the divergent-series caution is visible.

Commit: `content: add Ramanujan summation and further pi series lessons`.

### Task 6: Final collection acceptance, production verification, and GitHub delivery

**Files:**
- Modify: `tests/discovery-order.test.ts`
- Modify: `tests/pilot-content.test.ts` and/or shared content tests
- Modify: `docs/NEXT-STEPS.md` to mark the 13-topic collection complete
- Modify: `.taskboard.json` to reflect completion

**Interfaces:**
- Every slug in `discoveryOrder` resolves to exactly one valid discovery record and static route.
- Sitemap includes all 13 topic routes.
- `main` remains the deployment branch and tracks `origin/main`.

- [x] **Step 1: Enable and run the all-13 collection acceptance test**

Assert exact count and sequence of the 13 topic slugs; all markdown slugs equal the manifest; every page has required metadata, formula descriptions, sources, attribution, the substantive plain-language equation walkthrough, at least six instructional Markdown sections, at least 600 body words, and at least two worked examples/calculations unless the content test records an explicit exception; 1729 is absent.

- [x] **Step 2: Verify static output and sitemap**

Run production build and inspect `dist/discoveries/` for all 13 routes; inspect `dist/sitemap.xml` to ensure all are listed.

- [x] **Step 3: Run the full local suite**

Run: `npm run check && npm test && npm run build && npm run check:links && npx playwright test`
Expected: zero diagnostics, all unit/content tests pass, all 13 routes build, no broken internal links, and all browser tests pass.

- [x] **Step 4: Review mathematical attribution and representative mobile rendering**

Review one lesson from each batch plus all content source notes; test narrow-screen formula overflow and MathML labels.

- [x] **Step 5: Commit final acceptance updates, deploy, and verify production**

Commit: `test: accept complete 13-topic collection`. Run `vercel --prod`; verify public HTTP 200 for Home, Browse, Search, one page per batch, `robots.txt`, and `sitemap.xml`; verify canonical URLs and math content.

- [x] **Step 6: Push all commits to GitHub**

Run: `git push origin main`, then verify `git ls-remote --heads origin main` matches `git rev-parse HEAD` and `git status --short` is clean.

- [x] **Step 7: Update roadmap and report delivery**

Record final topic list and live URL in `docs/NEXT-STEPS.md`; commit and push the update. Report all 13 page URLs or a topic index, verification results, and any remaining manual review needs.
