---
slug: rogers-ramanujan-identities
title: The Rogers–Ramanujan Identities
summary: Two q-series that turn gap-restricted partitions into simple infinite products.
category: q-series and partitions
period: '1890s–1910s'
difficulty: intermediate
resultType: identity
attribution: collaborative
intuition: A sum that counts partitions with a spacing rule can equal a product that counts partitions using only part sizes in two residue classes.
notation: For |q|<1, (q;q)_n means the finite product (1-q)(1-q²)⋯(1-q^n), with (q;q)_0=1; the infinite products converge in this disk.
example: 'The first identity has coefficient 2 at q⁴: the two partitions are 4 and 1+1+1+1, matching the two partitions whose parts differ by at least two.'
significance: The identities connect q-series, partition enumeration, continued fractions, and modular forms, while illustrating how analytic formulas can encode combinatorial bijections.
applications:
  - label: Later influence
    text: These identities became central examples in q-series and partition theory and motivated broad families of related identities; this is mathematical influence, not a claim of direct modern engineering use.
exploreFurther:
  - type: scholarly-reference
    title: An Invitation to the Rogers–Ramanujan Identities
    description: A historical and mathematical introduction by George E. Andrews and Bruce C. Berndt.
    url: https://www.ams.org/notices/202001/rnoti-p68.pdf
    difficulty: intermediate
  - type: original-paper
    title: Second Memoir on the Expansion of Certain Infinite Products
    description: Leonard James Rogers's early published work on the product identities.
    url: https://academic.oup.com/plms/article-abstract/s1-25/1/318/1482205
    difficulty: advanced
sources:
  - title: Second Memoir on the Expansion of Certain Infinite Products
    author: Leonard James Rogers
    type: primary
    url: https://academic.oup.com/plms/article-abstract/s1-25/1/318/1482205
    locator: Proceedings of the London Mathematical Society, series 1, volume 25, pages 318–343.
  - title: An Invitation to the Rogers–Ramanujan Identities
    author: George E. Andrews and Bruce C. Berndt
    type: secondary
    url: https://www.ams.org/notices/202001/rnoti-p68.pdf
    locator: Notices of the American Mathematical Society, January 2020, pages 68–81.
  - title: Analytic and Combinatorial Generalizations of the Rogers–Ramanujan Identities
    author: George E. Andrews
    type: secondary
    url: https://bookstore.ams.org/view?ProductCode=MEMO/24/227
    locator: Memoirs of the American Mathematical Society, volume 24, number 227 (1980).
related: [continued-fractions, modular-equations]
formulas:
  - label: First Rogers–Ramanujan identity
    latex: '\displaystyle\sum_{n=0}^{\infty}\frac{q^{n^2}}{(q;q)_n}=\prod_{m=0}^{\infty}\frac{1}{(1-q^{5m+1})(1-q^{5m+4})},\qquad |q|<1'
    description: For complex q with modulus less than one, the sum of q to n squared divided by the finite q-product equals the product over positive part sizes congruent to 1 or 4 modulo 5.
  - label: Second Rogers–Ramanujan identity
    latex: '\displaystyle\sum_{n=0}^{\infty}\frac{q^{n(n+1)}}{(q;q)_n}=\prod_{m=0}^{\infty}\frac{1}{(1-q^{5m+2})(1-q^{5m+3})},\qquad |q|<1'
    description: For complex q with modulus less than one, the second q-series equals the product over positive part sizes congruent to 2 or 3 modulo 5.
---

## The puzzle: a sum equals a product

An infinite series and an infinite product usually organize information in different ways. The Rogers–Ramanujan identities say that two particular q-series equal strikingly simple products. In partition language, the same integer is counted by two rules that look unrelated: a minimum gap between parts on one side, and allowed residue classes for part sizes on the other.

Here q is a variable with |q|<1. For a positive integer n, the notation (q;q)_n is shorthand for (1-q)(1-q²)…(1-q^n); the empty product (q;q)_0 equals 1. The restriction |q|<1 ensures the infinite products and series converge analytically. One can also first read the statements as identities of formal power series, coefficient by coefficient.

## How products count partitions

A factor 1/(1-q^k)=1+q^k+q^(2k)+… records any number of parts equal to k. Multiplying such factors over selected k counts partitions whose part sizes are among those selected. Thus the first product permits parts congruent to 1 or 4 modulo 5; the second permits parts congruent to 2 or 3 modulo 5.

The series side has a different interpretation. The denominator (q;q)_n accounts for partitions with at most n parts (equivalently, after conjugation, parts of size at most n), while the powers q^(n²) and q^(n(n+1)) enforce the minimum-difference patterns. The resulting theorems say that the first series counts partitions whose parts differ by at least 2, and the second counts partitions with smallest part at least 2 and successive parts differing by at least 2.

## The main equation in plain language

In each sum, n is a counter: plug in n=0, then 1, then 2, and add the resulting terms. The finite product (q;q)_n is made from the first n factors, such as (1−q)(1−q²) when n=2. On the product side, m=0,1,2,… selects allowed part sizes. For the first identity those sizes are 1, 4, 6, 9, …—numbers leaving remainder 1 or 4 when divided by 5. The identity says both sides count the same objects in two different ways. For a quick check of the second identity, look at the coefficient of q⁴: its n=1 sum-term contributes one, while the product side allows only parts 2 and 3 up to 4, and the only partition is 2+2. The second identity shifts the exponents and the allowed remainders: it counts partitions with a minimum gap and smallest part at least 2, equivalently using sizes congruent to 2 or 3 modulo 5. The restriction |q|<1 makes these infinite sums and products converge; it is not an optional decoration.

## Example 1: coefficient of q⁴ in the first identity

In the product for residues 1 and 4 modulo 5, the allowed parts up to 4 are 1 and 4. Partitions of 4 using these parts are 4 and 1+1+1+1, so the coefficient is 2.

On the series side, the n=0 term contributes 1. The n=1 term is q/(1-q), which contributes one copy of q⁴. Terms with n≥2 start at q⁴; the n=2 term contributes one more q⁴. Therefore the coefficient is also 2. This finite check illustrates the identity but, by itself, cannot prove every coefficient agrees.

## Example 2: coefficient of q⁶ in the first identity

The residue-class product allows parts 1, 4, 6, 9, and so on. The partitions of 6 using only those sizes are 6; 4+1+1; and six 1s. There are three.

The gap condition gives the same count: 6; 5+1; and 4+2. In each case adjacent parts differ by at least two. This second example shows how the identity equates two distinct descriptions of the same number, not merely two similar formulas.

## Reading the exponent patterns

The exponent n² in the first sum and n(n+1) in the second are not decorative. They mark the smallest “staircase” partition with n parts and, in the second case, the shifted staircase required when the smallest part is at least 2. The remaining denominator factors add extra boxes to this basic shape. This is the intuitive source of the gap restrictions.

The product side is especially clear for coefficient extraction: once an allowed part size k is fixed, any multiplicity is possible. The series side groups partitions by the number of parts in a transformed diagram. Turning that intuition into a proof requires a precise bijection or an analytic q-series argument.

## Historical attribution

Leonard James Rogers published the identities and a proof in his work on infinite products in the 1890s. Ramanujan independently rediscovered them years later, without initially supplying a proof in the form Rogers had given. The identities came to the attention of G. H. Hardy through Ramanujan's early correspondence, which helped bring the formulas to wider attention. Schur also gave an independent proof and developed important related partition results.

The eponym should not erase Rogers's earlier publication, Ramanujan's independent rediscovery, or the later proofs. The combinatorial partition interpretations were developed in subsequent work, including contributions by MacMahon and Schur; they are not simply a verbatim statement from the original formula papers.

## Why it matters—and what not to overclaim

The identities became model examples of how q-series can encode both analytic structure and partition counting. They connect naturally to Rogers–Ramanujan continued fractions and modular equations, and later mathematicians found extensive families of generalizations. This is a major theoretical influence in number theory and combinatorics. The page does not claim the identities themselves are directly used in a modern device or algorithm.

The displayed identities are stated for |q|<1 as analytic equalities. For formal power series, each coefficient is still well-defined because only finitely many terms contribute to a fixed power. Keeping these two readings separate prevents convergence assumptions from being hidden inside the notation.

## Explore further

Andrews and Berndt's historical overview is a readable next step. Rogers's paper documents the earlier published identity; Andrews's monograph develops analytic and combinatorial generalizations in detail.
