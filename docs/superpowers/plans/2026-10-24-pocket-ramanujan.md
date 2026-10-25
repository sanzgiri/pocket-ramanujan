# Pocket Ramanujan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and deploy a responsive static-first web app that explains selected Ramanujan discoveries one per page, with correct accessible math rendering, curated sources, applications, browsing, and search.

**Architecture:** Astro generates a static site from typed Markdown/MDX content collections. KaTeX renders authored LaTeX with HTML and MathML output; Pagefind provides static search. There is no backend, database, authentication, or LLM in v1.

**Tech Stack:** Astro, TypeScript, MDX/Markdown, Zod content schemas, KaTeX via `remark-math`/`rehype-katex`, Pagefind, Vitest where useful, Playwright for browser smoke checks, Vercel static deployment.

**Spec:** `docs/superpowers/specs/2026-10-24-pocket-ramanujan-design.md`

## Global Constraints

- The collection explicitly excludes 1729.
- Pages must distinguish discovered, conjectured, collaborative, later-proved, and later-inspired results.
- Formula content must be source-authored LaTeX, not rasterized images.
- The v1 experience is read-first; interactive calculators, quizzes, accounts, personalization, comments, and gamification are out of scope.
- The site must be responsive and mobile-first.
- Every discovery needs sources, attribution status, and required explanatory sections.
- Math must render with HTML plus MathML where supported and include readable descriptions for important formulas.
- Static deployment is required; no backend or API keys are needed.
- External links must be curated, labeled, and checked where practical.

## Review Focus

- Invalid or unsupported LaTeX must fail the build rather than silently render incorrectly; test in Task 2.
- Missing citations, attribution status, or required page sections must fail content validation; test in Task 2.
- Mobile display equations must remain readable without clipping the page; verify in Task 4 and Task 6.
- Attribution must not conflate later proofs or applications with Ramanujan's authorship; review pilot content in Task 3.
- Search and browse must expose statically generated discovery pages without relying on a client-only infinite list; verify in Tasks 5 and 6.

---

### Task 1: Initialize the Astro project and development workflow

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/`, `public/`, `tests/`, `.gitignore`, `README.md`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/pages/index.astro`
- Create: `src/styles/global.css`
- Modify: `docs/superpowers/specs/2026-10-24-pocket-ramanujan-design.md` only if implementation decisions require clarification

**Interfaces:**
- Produces an Astro site that runs with `npm run dev`, builds with `npm run build`, and previews with `npm run preview`.
- Defines the base layout contract: page title, description, canonical URL, semantic header/main/footer, and global stylesheet.

- [ ] **Step 1: Initialize Git if the project directory is not already a repository**

Run: `git init`
Expected: `.git/` exists and `git status` reports an initialized repository.

- [ ] **Step 2: Scaffold the minimal Astro TypeScript project**

Create the package scripts `dev`, `build`, `preview`, `check`, and `test`; configure strict TypeScript and the Astro integration needed for MDX.

- [ ] **Step 3: Add the base document shell and initial home placeholder**

Implement `BaseLayout.astro` with semantic landmarks, responsive viewport metadata, title/description props, and a placeholder home page that identifies the collection without claiming content is complete.

- [ ] **Step 4: Add the base reading styles**

Define color tokens, typography, readable line lengths, responsive spacing, focus styles, formula overflow behavior, and reduced-motion handling in `src/styles/global.css`.

- [ ] **Step 5: Run the initial checks**

Run: `npm run check && npm run build`
Expected: both commands pass and produce a static `dist/` directory.

- [ ] **Step 6: Commit the project foundation**

```bash
git add package.json astro.config.mjs tsconfig.json src public tests .gitignore README.md
git commit -m "chore: initialize Astro app"
```

### Task 2: Add typed discovery content and accessible math rendering

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/discoveries/` with a content collection convention
- Create: `src/components/MathBlock.astro`
- Create: `src/components/MathInline.astro`
- Create: `src/components/SourceList.astro`
- Create: `src/components/ExploreLinks.astro`
- Create: `tests/content-schema.test.ts`
- Modify: `astro.config.mjs`, `package.json`

**Interfaces:**
- Discovery records expose validated fields for `slug`, `title`, `summary`, `category`, `period`, `difficulty`, `resultType`, `attribution`, `intuition`, `notation`, `example`, `significance`, `applications`, `exploreFurther`, `sources`, `related`, and formula content.
- `MathBlock.astro` accepts authored LaTeX and an accessible description; `MathInline.astro` accepts authored inline LaTeX.
- `SourceList.astro` renders source title, author, type, URL, and optional locator.
- `ExploreLinks.astro` renders labeled external resource cards.

- [ ] **Step 1: Write failing schema tests**

Test that a valid discovery parses; missing title, missing attribution, missing source, duplicate/forbidden slug `1729`, and malformed required fields fail validation.

- [ ] **Step 2: Run the schema tests to verify they fail**

Run: `npm test -- tests/content-schema.test.ts`
Expected: FAIL because the schema and content fixtures do not yet exist.

- [ ] **Step 3: Implement the Zod-backed Astro content collection**

Define exact enums for difficulty, result type, attribution status, explore-link type, and source type. Add a content-level rule preventing a `1729` slug or title from entering the discovery collection.

- [ ] **Step 4: Configure Markdown math processing**

Add `remark-math` and `rehype-katex`, configure HTML plus MathML output, and import KaTeX CSS through the global stylesheet or layout. Ensure unsupported math syntax raises a build error.

- [ ] **Step 5: Implement formula and source components**

Render display and inline formulas without using images. Include accessible descriptions and preserve readable overflow behavior on narrow screens.

- [ ] **Step 6: Add a valid fixture discovery and invalid schema fixtures**

Use a small partition-congruence fixture for schema tests; do not publish it as final editorial content yet.

- [ ] **Step 7: Run checks**

Run: `npm test -- tests/content-schema.test.ts && npm run check && npm run build`
Expected: PASS; malformed fixtures fail only when explicitly tested, while the valid fixture builds.

- [ ] **Step 8: Commit content infrastructure**

```bash
git add src/content src/components/MathBlock.astro src/components/MathInline.astro src/components/SourceList.astro src/components/ExploreLinks.astro tests package.json astro.config.mjs
git commit -m "feat: add typed discovery content and math rendering"
```

### Task 3: Author the three pilot discoveries

**Files:**
- Create: `src/content/discoveries/partition-congruences.md`
- Create: `src/content/discoveries/pi-series.md`
- Create: `src/content/discoveries/highly-composite-numbers.md`
- Create: `src/content/discoveries/index.ts` or equivalent guided-path metadata
- Create: `tests/pilot-content.test.ts`

**Interfaces:**
- Each pilot record satisfies the Task 2 discovery schema and includes all required page sections, at least one formula, one worked example, attribution, sources, and an Explore Further section.
- Guided-path metadata exposes the ordered pilot slugs and rejects `1729`.

- [ ] **Step 1: Write content acceptance tests**

Assert that exactly the three pilot slugs are present, each has non-empty required sections and sources, each has at least one formula, and none contains the excluded 1729 discovery.

- [ ] **Step 2: Run the tests to verify the incomplete content fails**

Run: `npm test -- tests/pilot-content.test.ts`
Expected: FAIL until all three records are complete.

- [ ] **Step 3: Write the partition-congruences page**

Explain the partition function, the congruences modulo 5, 7, and 11, a small numerical example, significance, attribution, applications/influence, and curated links.

- [ ] **Step 4: Write the pi-series page**

Explain a selected Ramanujan rapidly convergent series for pi, define notation, show a small approximation example, describe computational significance accurately, and cite authoritative sources.

- [ ] **Step 5: Write the highly-composite-numbers page**

Explain divisor-count records, provide a small example, describe the number-theoretic relevance, avoid overstating modern applications, and cite sources.

- [ ] **Step 6: Run content checks**

Run: `npm test -- tests/pilot-content.test.ts && npm run check && npm run build`
Expected: PASS with no attribution, link, or math-schema errors.

- [ ] **Step 7: Commit pilot content**

```bash
git add src/content/discoveries src/content/index.ts tests/pilot-content.test.ts
git commit -m "content: add three pilot Ramanujan discoveries"
```

### Task 4: Build discovery pages and core navigation

**Files:**
- Create: `src/pages/discoveries/[slug].astro`
- Create: `src/components/SiteHeader.astro`
- Create: `src/components/SiteFooter.astro`
- Create: `src/components/DiscoveryPage.astro`
- Create: `src/components/DiscoveryMeta.astro`
- Create: `src/components/DiscoveryNavigation.astro`
- Create: `src/components/RelatedDiscoveries.astro`
- Modify: `src/pages/index.astro`, `src/styles/global.css`
- Create: `tests/discovery-pages.spec.ts`

**Interfaces:**
- `getStaticPaths()` generates one static page for every valid discovery.
- `DiscoveryPage.astro` consumes the typed record and renders the agreed ten-section page structure.
- Navigation resolves previous/next/related slugs only through validated content records.

- [ ] **Step 1: Write the browser smoke test**

Test that `/discoveries/partition-congruences/` returns a page containing the title, accessible math region, “Why it matters,” “Explore further,” sources, and previous/next navigation; test that a nonexistent slug returns 404.

- [ ] **Step 2: Run the smoke test to verify it fails**

Run: `npx playwright test tests/discovery-pages.spec.ts`
Expected: FAIL because discovery routes and components do not exist.

- [ ] **Step 3: Implement the static discovery route**

Use Astro content APIs in `getStaticPaths()`, render typed frontmatter and MDX body, and keep all pages statically generated.

- [ ] **Step 4: Implement the shared shell and discovery components**

Add header navigation to Home, Start Here, Browse, and Search; render the page sections, attribution labels, formula blocks, sources, Explore Further cards, related pages, and navigation.

- [ ] **Step 5: Implement the home page and guided Start Here path**

Show the collection purpose, exclude 1729, feature the first pilot page, and render the ordered pilot path with real links.

- [ ] **Step 6: Run checks and browser tests**

Run: `npm run check && npm run build && npx playwright test tests/discovery-pages.spec.ts`
Expected: PASS; all pilot discovery pages are present in `dist/`.

- [ ] **Step 7: Commit the reading experience**

```bash
git add src/pages src/components src/styles tests/discovery-pages.spec.ts
git commit -m "feat: add discovery reading experience"
```

### Task 5: Add browse, filtering, and static search

**Files:**
- Create: `src/pages/discoveries/index.astro`
- Create: `src/pages/search.astro`
- Create: `src/components/DiscoveryCard.astro`
- Create: `src/components/FilterBar.astro`
- Create: `src/pages/404.astro`
- Modify: `package.json`, `src/components/SiteHeader.astro`, `src/styles/global.css`
- Create: `tests/browse-search.spec.ts`

**Interfaces:**
- Browse renders a crawlable list of static discovery links with topic, difficulty, result type, and application/influence metadata.
- Search integrates Pagefind against generated HTML and provides a keyboard-accessible search field and result links.
- Filters progressively enhance browse; the initial page remains meaningful without client-side JavaScript.

- [ ] **Step 1: Write browser tests**

Test that browse exposes the three pilot pages as real links, filter controls are labeled, search can find “partition,” and the 404 page is useful.

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx playwright test tests/browse-search.spec.ts`
Expected: FAIL because browse, search, and Pagefind integration do not exist.

- [ ] **Step 3: Implement the crawlable browse page and filters**

Render all records in static HTML, add category/difficulty/result-type filters, and keep the unfiltered list usable without JavaScript.

- [ ] **Step 4: Add Pagefind indexing and search UI**

Generate the Pagefind index during the production build and provide a search page with accessible loading, empty, and result states.

- [ ] **Step 5: Add 404 page and verify links**

Create a branded 404 page with links back to Home, Browse, and Search.

- [ ] **Step 6: Run checks and browser tests**

Run: `npm run check && npm run build && npx playwright test tests/browse-search.spec.ts`
Expected: PASS; search and browse work from the generated site.

- [ ] **Step 7: Commit discovery navigation**

```bash
git add src/pages/discoveries src/pages/search.astro src/pages/404.astro src/components package.json tests/browse-search.spec.ts
git commit -m "feat: add browse and static search"
```

### Task 6: Add SEO, accessibility, link checks, and deployment configuration

**Files:**
- Create: `public/robots.txt`
- Create: `public/favicon.svg`
- Create: `src/pages/sitemap.xml.ts`
- Create: `tests/accessibility.spec.ts`
- Create: `vercel.json` only if required by the final Astro output
- Modify: `src/layouts/BaseLayout.astro`, `src/components/SiteFooter.astro`, `src/styles/global.css`, `package.json`, `README.md`

**Interfaces:**
- Every page has title, description, canonical URL, Open Graph metadata, and semantic structured markup where appropriate.
- Sitemap contains all static discovery URLs; robots references the canonical sitemap.
- The footer identifies the project and links to sources/about context without inventing creator information.

- [ ] **Step 1: Write accessibility and metadata tests**

Test landmark presence, heading order on a discovery page, keyboard-visible focus, formula accessible descriptions, canonical URLs, sitemap output, and robots output.

- [ ] **Step 2: Run tests to verify any missing requirements fail**

Run: `npx playwright test tests/accessibility.spec.ts`
Expected: FAIL for any missing metadata or accessibility behavior.

- [ ] **Step 3: Implement metadata, sitemap, robots, and favicon**

Use a configurable canonical base URL that defaults safely for local development and is set for production deployment.

- [ ] **Step 4: Improve responsive and accessible styling**

Verify contrast, focus states, reduced motion, mobile formula overflow, readable link labels, and touch target sizing.

- [ ] **Step 5: Add link validation and production build checks**

Add a script that checks internal links and reports malformed external URLs where practical without making the build dependent on flaky third-party uptime.

- [ ] **Step 6: Run the complete local verification suite**

Run: `npm run check && npm test && npm run build && npx playwright test`
Expected: all checks pass and `dist/` includes static pages, sitemap, robots, and Pagefind assets.

- [ ] **Step 7: Commit release hardening**

```bash
git add public src package.json README.md tests vercel.json
git commit -m "chore: harden accessibility and SEO"
```

### Task 7: Deploy to Vercel and verify production

**Files:**
- Modify: `.env.example` only if deployment configuration requires documented non-secret values
- Modify: `README.md` with deployment and canonical URL instructions

**Interfaces:**
- Production deployment serves the static Astro output from one canonical Vercel origin.
- No API keys or secrets are used or shipped.

- [ ] **Step 1: Confirm deployment tooling and authentication**

Run: `command -v vercel || npm install --global vercel` and `vercel whoami`.
Expected: Vercel CLI is available and authenticated; if authentication requires a browser, stop and request the user complete it.

- [ ] **Step 2: Link or create the Vercel project**

Run from the repository root: `vercel`.
Expected: the project is linked and a preview deployment URL is returned.

- [ ] **Step 3: Verify preview deployment**

Check the preview URL returns HTTP 200, discovery pages render formulas, search assets load, and no API keys appear in built assets.

- [ ] **Step 4: Configure the canonical production URL**

Use the assigned Vercel production domain unless the user supplies a custom domain. Set the production canonical base URL and deploy with `vercel --prod`.

- [ ] **Step 5: Verify production**

Check HTTP 200 for Home, Browse, Search, one discovery page, `robots.txt`, and `sitemap.xml`; confirm no deployment-protection redirect blocks the public URL.

- [ ] **Step 6: Update README with the live URL and deployment instructions**

Document local development, content authoring, build checks, and the canonical production URL.

- [ ] **Step 7: Commit deployment documentation and final code**

```bash
git add README.md
git commit -m "docs: add production deployment details"
```

### Task 8: Final review and delivery

**Files:**
- No new production files unless verification finds a defect.

- [ ] **Step 1: Inspect Git history and working tree**

Run: `git status --short && git log --oneline -8`
Expected: clean working tree with focused commits for foundation, content, UI, search, hardening, and deployment documentation.

- [ ] **Step 2: Run final verification**

Run: `npm run check && npm test && npm run build && npx playwright test`
Expected: all commands pass.

- [ ] **Step 3: Perform production smoke test**

Use the final canonical URL and verify the same key routes and math rendering in production.

- [ ] **Step 4: Report delivery**

Provide the repository path, commit summary, production URL, verification commands and results, and any manual Google Search Console verification still required.
