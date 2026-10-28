# Discovery lesson authoring guidelines

Use this checklist for every Pocket Ramanujan lesson. The goal is a guided explanation, not a formula gallery or a biography.

## Lesson structure

Build the explanation in a reader-friendly order, using descriptive Markdown headings:

1. **Motivating question:** What problem or pattern does the result address?
2. **Prerequisites and intuition:** Introduce the needed ideas in plain language before relying on them.
3. **Definitions and notation:** Define every symbol, variable, and specialized term before or as it first appears.
4. **Examples:** Work through at least two concrete examples or calculations. If the topic is not naturally computational, explain why and use two suitable demonstrations (such as coefficient checks, a diagrammatic argument, or contrasting cases).
5. **Main result:** State the identity, theorem, method, or approximation precisely, including its domain, assumptions, convergence conditions, and error qualifications where applicable.
6. **Worked calculation:** Show intermediate steps and explain what the result means; do not jump from inputs to an unexplained answer.
7. **Why it matters:** Explain the mathematical significance. Distinguish direct applications from later influence, and say when the importance is primarily theoretical.
8. **Proof idea and scope:** Give a useful proof strategy or sketch at an appropriate level, or say explicitly why a full proof is beyond the lesson's scope. Never use intuition as a substitute for hypotheses.
9. **Historical attribution:** Separate Ramanujan's original results and conjectures from collaborations, prior work, later proofs, and later theories inspired by his work.
10. **Explore further and sources:** Offer useful next steps and trace important mathematical and historical claims to verifiable sources.

A lesson normally has at least six meaningful instructional sections and should be substantial enough to teach the topic. Length alone is not evidence of quality; every section should do explanatory work.

## Sources and attribution

- Prefer primary papers, collected works, annotated notebook editions, and scholarly expositions for core claims. General-audience material may supplement these sources.
- For each source, provide author or institution, title, stable URL, and a volume/page/section locator when verifiable. Do not invent missing bibliographic details.
- Check formulas against a source and record essential conditions, including variables, ranges, convergence, and error terms.
- Use precise attribution: “proved,” “conjectured,” “discovered independently,” “developed jointly,” and “later generalized” are not interchangeable.
- Do not claim a modern application is a direct application of Ramanujan's work unless a reliable source establishes that connection. Label later influence as influence.

## Formula accessibility

- Render mathematics using the site's existing KaTeX-compatible Markdown conventions.
- Give every displayed formula an accurate, concise accessible description using the repository's formula metadata/component convention.
- Explain each formula in nearby prose, including what the variables mean and what the equation asserts.
- Keep equations readable on narrow screens; split long expressions when that improves comprehension. Do not rely on color or visual position alone to convey meaning.

## Editorial safeguards and batch review

- The 1729 anecdote is out of scope; do not add it as a lesson, title, example, or promotional hook.
- Do not imply a divergent series ordinarily converges to a regularized value. Name the summation method and distinguish it from limits of partial sums.
- Do not state a theorem outside its hypotheses or an approximation without its relevant range/error behavior.
- Before committing a batch, review every frontmatter field, formula condition, attribution statement, cited source, internal link, displayed-math description, and worked example. Run the planned content tests, Astro check/build, link check, and representative browser checks.
