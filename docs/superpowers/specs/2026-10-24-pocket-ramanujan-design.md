# Pocket Ramanujan Web App Design

## Status

Design approved in conversation; implementation has not started.

## Product brief

Build a responsive, static-first web app that makes important and well-known mathematical ideas associated with Srinivasa Ramanujan accessible one discovery at a time. The collection explicitly excludes the familiar 1729 anecdote. It should mention applications, practical uses, or later theoretical influence whenever that connection is genuine and clearly labeled.

The working experience is a calm mathematical field guide rather than a textbook, quiz app, or gamified product.

## Audience and learning model

The initial audience is broad: curious readers, students, and mathematically interested adults. Pages use layered explanations:

1. Plain-language idea
2. Intuition
3. Correctly rendered mathematics
4. Small worked example
5. Why it matters
6. Applications or later influence
7. Further resources and sources

The v1 experience is read-first. Interactive calculators, visualizations, quizzes, accounts, personalization, comments, and gamification are out of scope unless a later discovery shows that an interaction is essential to understanding it.

## Initial content direction

Start with the most important and widely recognized results, not only obscure results. A possible opening sequence is:

1. Partition congruences
2. Hardy–Ramanujan circle method
3. Rogers–Ramanujan identities
4. Infinite series for pi
5. Highly composite numbers
6. Ramanujan's tau function
7. Mock theta functions
8. Continued fractions
9. Modular equations
10. Gamma-function approximations

This is an editorial starting point, not a claim that the list is exhaustive or final. The content must distinguish among:

- Results discovered by Ramanujan
- Conjectures made by Ramanujan
- Collaborative results
- Results proved or interpreted later
- Later mathematics influenced by Ramanujan

No later development should be presented as Ramanujan's personal discovery without an attribution note. 1729 should be excluded from the collection and navigation.

## Information architecture

### Home

- Short introduction to Ramanujan and the collection
- Start Here guided path
- Featured discovery
- Links to Browse and Search

### Guided path

An ordered progression through selected discoveries, with previous/next navigation. The order should generally move from concrete and accessible ideas toward more advanced topics.

### Browse

Filter and browse by:

- Topic
- Difficulty
- Result type: theorem, identity, conjecture, method, approximation, or concept
- Application/influence availability

### Search

Search discovery titles, topics, formulas, explanatory text, applications, and related concepts.

### Discovery page

1. The idea in one sentence
2. Intuition
3. The mathematics
4. Definitions and notation
5. Small worked example
6. Why it matters
7. Applications and influence
8. Explore further
9. Sources and attribution notes
10. Previous, next, and related discoveries

### Explore further

Every page may contain curated external links labeled by type and difficulty:

- Video
- Accessible explainer
- Lecture or course
- Original paper
- Scholarly reference
- Application or modern context

Links must be manually curated, descriptive, and checked for availability. The app should not imply endorsement beyond the specific resource description.

## Content model

Each discovery is a structured content record with at least:

- Stable slug
- Title
- Short summary
- Topic/category
- Historical date or period
- Difficulty
- Result type
- Attribution status
- Intuition text
- Formula blocks authored in LaTeX
- Symbol definitions
- Worked example
- Significance text
- Application/influence entries
- Related discovery slugs
- Explore-further links with type, title, URL, description, and difficulty
- Primary and secondary source records
- Editorial notes

Formula content must be stored as source-authored LaTeX, not rasterized images. The content schema should allow inline and display equations, aligned derivations, matrices, and named formula references without requiring arbitrary raw HTML.

## Technical architecture

Use a static-first Astro web app:

- Astro for routing, page generation, and responsive web delivery
- Markdown/MDX content files for discovery records
- A typed content collection validated with Zod
- KaTeX for rendering formulas, configured for HTML plus MathML output where supported
- Pagefind for client-side static search
- Version-controlled content and source revisions
- Static deployment with no backend in v1

The architecture should leave room for a future CMS without requiring one now. No database or user account system is needed for the first release.

## Mathematical rendering and accessibility

- Build-time validation must fail on invalid or unsupported LaTeX.
- Use semantic headings and landmarks.
- Render formulas with MathML output or an equivalent accessible representation in addition to visual math.
- Provide readable descriptions for important formulas and diagrams.
- Do not use images as the only representation of an equation.
- Ensure formulas work on small screens with horizontal overflow handled gracefully.
- Include accessible labels for formula regions, navigation controls, search, and external links.
- Test keyboard navigation and screen-reader behavior for representative pages.

## Validation and quality controls

Build-time or CI checks should detect:

- Invalid LaTeX
- Missing required content sections
- Missing citations or attribution status
- Duplicate slugs
- Broken internal links
- Missing related-page references
- Invalid external URLs where practical
- Missing formula descriptions for designated important equations

Editorial review should verify mathematical correctness, attribution, historical wording, and the accuracy of any claimed application. Application labels should distinguish direct practical use from later theoretical influence or educational relevance.

## Visual direction

The visual language should be calm, readable, and scholarly but welcoming. Prioritize:

- Excellent typography and line length for reading
- Strong contrast and generous spacing
- Formula cards that remain legible on mobile
- Clear difficulty and attribution labels
- Lightweight navigation between discoveries
- Responsive layout from phone to desktop
- Minimal ornamentation that does not compete with the mathematics

## Out of scope for v1

- Native mobile applications
- Accounts, saved progress, or synchronization
- Comments or community editing
- AI-generated explanations published without editorial review
- Full transcription of all notebooks
- Claiming an exhaustive catalog of every Ramanujan-related result
- Gamification, streaks, badges, or quizzes
- Dynamic CMS administration
- 1729 content as a discovery page

## Success criteria

The first release is successful if a new reader can:

1. Open the site on a phone and understand what the collection is.
2. Start a guided path without prior mathematical expertise.
3. Read a discovery explanation without formula rendering errors.
4. Follow the notation and a small example.
5. Understand why the idea matters and whether an application is direct or indirect.
6. Continue to a reliable video, explainer, or scholarly source.
7. Search for a concept and reach the correct discovery page quickly.

## Suggested first milestone

Build the shell and content pipeline with three fully edited discovery pages before expanding the collection. Recommended pilot topics:

- Partition congruences
- Infinite series for pi
- Highly composite numbers

The pilot should validate page structure, mathematical rendering, mobile readability, source presentation, and the editorial workflow before adding the remaining initial sequence.
