---
slug: mock-theta-functions
title: Ramanujan's Mock Theta Functions
summary: Intriguing q-series that imitate theta functions—and the later theory that explained their modular behavior.
category: q-series and modular forms
period: '1920 onward'
difficulty: advanced
resultType: concept
attribution: discovered
intuition: Ramanujan found q-series whose behavior near roots of unity resembled theta functions, yet no ordinary theta function explained them all.
notation: For |q|<1, q is a complex variable and (1+q)(1+q²)⋯(1+qⁿ) denotes the finite product in the denominator of the example series.
example: One third-order example begins 1+q−2q²+3q³−3q⁴+…; at q=1/2 its value is approximately 1.24044.
significance: Ramanujan's examples led to the modern theory of mock modular forms, which became part of the broader study of modular and harmonic Maass forms.
applications:
  - label: Later influence
    text: Zwegers's completion theory placed Ramanujan's mock theta examples among holomorphic parts of harmonic Maass forms. This reshaped modern number theory; no direct practical application is claimed here.
exploreFurther:
  - type: original-paper
    title: 'The Final Problem: An Account of the Mock Theta Functions'
    description: G. N. Watson's 1936 study of the functions Ramanujan described in his final letter to Hardy.
    url: https://doi.org/10.1112/jlms/s1-11.1.55
    difficulty: advanced
  - type: scholarly-reference
    title: Mock Theta Functions
    description: Sander Zwegers's doctoral thesis establishing a modern completion framework.
    url: https://dspace.library.uu.nl/items/37523bf5-a9cb-4c35-b424-5eb2b3ed42f6
    difficulty: advanced
sources:
  - title: 'The Final Problem: An Account of the Mock Theta Functions'
    author: G. N. Watson
    type: secondary
    url: https://doi.org/10.1112/jlms/s1-11.1.55
    locator: Journal of the London Mathematical Society 11, no. 1 (1936), pages 55–80.
  - title: Mock Theta Functions
    author: Sander Zwegers
    type: secondary
    url: https://dspace.library.uu.nl/items/37523bf5-a9cb-4c35-b424-5eb2b3ed42f6
    locator: PhD thesis, Utrecht University, 2002.
  - title: On Ramanujan's Definition of Mock Theta Function
    author: Robert C. Rhoades
    type: secondary
    url: https://doi.org/10.1073/pnas.1301046110
    locator: Proceedings of the National Academy of Sciences 110, no. 19 (2013), pages 7592–7594.
related: [rogers-ramanujan-identities, modular-equations]
formulas:
  - label: A third-order mock theta function
    latex: 'f(q)=1+\sum_{n=1}^{\infty}\frac{q^{n^2}}{\prod_{j=1}^{n}(1+q^j)^2},\qquad |q|<1'
    description: For complex q inside the unit disk, this series adds one term for each positive n, with q to n squared divided by the squared product of one plus each power from q through q to n.
  - label: Initial coefficient expansion
    latex: 'f(q)=1+q-2q^2+3q^3-3q^4+O(q^5)'
    description: Near q equal to zero, the first coefficients of the mock theta series are one, one, negative two, three, and negative three.
---

## A series that looked almost modular

In his final letter to G. H. Hardy in January 1920, Ramanujan listed seventeen q-series that he called “mock theta functions.” Near roots of unity, their behavior resembled that of theta functions, but no single ordinary theta function accounted for all their properties. Ramanujan did not provide a modern definition in the language now used for mock modular forms; the letter describes observed transformation-like behavior and examples.

A q-series is a power series whose coefficients are organized by powers of q. The example displayed above is one of Ramanujan's third-order mock theta functions. Its denominator uses a finite product: for each n, multiply (1+q^j)² for j from 1 through n. The condition |q|<1 ensures the series converges.

## The main equation in plain language

The index n tells us which term to add. For each n, take q to the power n squared, then divide by the square of every factor from (1+q) through (1+q^n). Add all those terms to the initial 1. Because the exponent n² grows quickly, later terms shrink rapidly when |q|<1. At q=1/2, the first added term is 2/9≈0.22222; the next is about 0.01778; the following one is about 0.000439. That is why a few terms already give approximately 1.24044. The coefficient formula near q=0 is another way to summarize the same function: O(q^5) means terms whose powers are at least five have been left off, not that the function is exactly the four displayed terms.

## Example 1: expand the first few coefficients

For n=1, the summand is q/(1+q)². Its expansion near zero is q−2q²+3q³−4q⁴+…. The n=2 term begins with q⁴, and all later terms begin at still higher powers. Therefore f(q) starts 1+q−2q²+3q³−3q⁴+…. This coefficient calculation agrees with the series shown in the formula panel.

The initial coefficients are not all positive, even though the function is defined by a sum of terms. The denominator expansions introduce alternating signs. This is a reminder that a q-series can have complicated coefficient behavior even when its definition is compact.

## Example 2: estimate the value at q=1/2

At q=1/2, the first nonconstant term is (1/2)/(1+1/2)²=2/9≈0.22222. The n=2 term is (1/2)^4/[(1+1/2)²(1+1/4)²]≈0.01778. The n=3 term is about 0.000439. Adding these to 1 gives about 1.24044; subsequent terms are tiny. Direct summation of more terms gives the same value to the displayed precision.

This numerical example shows rapid convergence for this particular q. It is not a claim of uniform speed near the unit circle: as |q| approaches 1, convergence and asymptotic behavior require more delicate analysis.

## Why “mock” was an apt name

Ordinary theta functions have well-understood transformation laws under changes of their argument. Ramanujan's examples behaved similarly in some respects but did not fit the known theta-function framework. He described them as functions that “mocked” theta functions. The label captures the historical puzzle, not a precise modern classification invented by Ramanujan.

The original letter remains important because it records the phenomenon and examples before the later theory existed. A modern reader should not retroactively put the full harmonic-Maass-form definition into Ramanujan's mouth. That language belongs to subsequent mathematics.

## Watson's work and the later completion

In 1936, G. N. Watson published a detailed study of the mock theta functions, proving identities and transformations and clarifying several of Ramanujan's claims. His work advanced the subject, but it did not provide the complete modern framework for why the functions exhibited modular-like behavior.

Around 2002, Sander Zwegers showed how to add a non-holomorphic correction term to the relevant holomorphic q-series. The completed object transforms like a modular form; the original mock theta function appears as its holomorphic part. In modern language, Ramanujan's examples fit into the theory of harmonic Maass forms. This interpretation substantially resolved the transformation puzzle and connected the topic to a much larger theory.

The relationship between Ramanujan's original description and the modern definition is subtle. Robert Rhoades later showed that Ramanujan's own criterion is not equivalent to the modern definition. The historical and modern meanings overlap in the examples, but they should not be treated as identical definitions.

## Proof idea and scope

A complete proof of modular transformation laws requires theta functions, analytic continuation, and the correction term that cancels the failure of the holomorphic part to transform by itself. The conceptual outline is that the q-series alone is “missing” a non-holomorphic piece; after adding that piece, the modular symmetry becomes exact.

This lesson computes coefficients and one numerical value but does not prove the full transformation formula. Its formula is stated for |q|<1, where the q-series converges. Claims about behavior at roots of unity refer to limiting or asymptotic behavior and require separate hypotheses; they are not ordinary substitution into a power series at |q|=1.

## Significance and attribution

Ramanujan introduced the examples and the original “mock theta” language in his last letter. Watson supplied important later proofs and analysis; Zwegers provided the modern completion framework; subsequent work refined how the historical definition relates to modern mock modular forms. These are distinct contributions separated by decades.

The subject's importance is chiefly theoretical: it helped inspire and shape modern work on modular forms, q-series, and harmonic Maass forms. This page does not claim that Ramanujan himself formulated the modern theory or that these series have a direct engineering application.

## Explore further

Read Watson's 1936 paper for an early systematic study. Zwegers's thesis develops the completion theory, while Rhoades's article carefully compares Ramanujan's original criterion with the modern definition.
