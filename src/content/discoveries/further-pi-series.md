---
slug: further-pi-series
title: A Second Ramanujan Series for 1/π
summary: A binomial-coefficient series shows another route from modular equations to π.
category: Formulas for pi
period: '1914'
difficulty: intermediate
resultType: identity
attribution: discovered
intuition: A different pattern of central binomial coefficients also sums exactly to one divided by π, though it converges more slowly than Ramanujan's famous 1103 series.
notation: The index k begins at zero, and the central binomial coefficient (2k choose k) counts ways to choose k objects from 2k.
example: The first term estimates π as about 2.8284; adding the next term moves it to about 3.1758, and further alternating terms rapidly improve the value.
significance: This second formula shows that Ramanujan's work contained a family of structurally different pi series, not a single isolated computational trick.
applications:
  - label: Historical result
    text: The formula is one of Ramanujan's rapidly convergent series for 1/π, arising from his work on modular equations.
  - label: Computational comparison
    text: It is valuable for studying series and modular forms, but this particular series converges more slowly than the celebrated 1103 formula already featured in the collection.
exploreFurther:
  - type: original-paper
    title: Modular Equations and Approximations to π
    description: Ramanujan's 1914 paper containing formulas for pi derived from modular equations.
    url: https://archive.org/details/collectedpaperso0000rama
    difficulty: advanced
  - type: scholarly-reference
    title: Ramanujan, Modular Equations, and Approximations to Pi
    description: A scholarly account of Ramanujan's modular equations and their use in rapid pi computation.
    url: https://doi.org/10.1080/00029890.1989.11972169
    difficulty: advanced
  - type: explainer
    title: A History of Pi
    description: MacTutor's historical account of formulas and methods for approximating pi.
    url: https://mathshistory.st-andrews.ac.uk/HistTopics/Pi_through_the_ages/
    difficulty: intermediate
sources:
  - title: Modular Equations and Approximations to π
    author: S. Ramanujan
    type: primary
    url: https://archive.org/details/collectedpaperso0000rama
    locator: Collected Papers of Srinivasa Ramanujan, 1927; original article in Quarterly Journal of Mathematics, volume 45 (1914), pages 350–372.
  - title: Ramanujan, Modular Equations, and Approximations to Pi; Or How to Compute One Billion Digits of Pi
    author: J. M. Borwein, P. B. Borwein, and D. H. Bailey
    type: secondary
    url: https://doi.org/10.1080/00029890.1989.11972169
    locator: The American Mathematical Monthly 96, no. 3 (1989), pages 201–219.
  - title: A History of Pi
    author: J. J. O'Connor and E. F. Robertson
    type: explainer
    url: https://mathshistory.st-andrews.ac.uk/HistTopics/Pi_through_the_ages/
related: [pi-series, modular-equations]
formulas:
  - label: Ramanujan's binomial series for 1/π
    latex: '\frac{1}{\pi}=\frac{1}{2\sqrt{2}}\sum_{k=0}^{\infty}\binom{2k}{k}^{3}(6k+1)\frac{(-1)^k}{2^{9k}}'
    description: The reciprocal of pi is an alternating infinite series whose terms combine the cube of a central binomial coefficient with a linear factor and a power of 512 in the denominator.
  - label: Ratio of successive term magnitudes
    latex: '\left|\frac{t_{k+1}}{t_k}\right|=\frac{1}{512}\left(\frac{2(2k+1)}{k+1}\right)^3\frac{6k+7}{6k+1}\longrightarrow\frac18'
    description: The ratio of successive absolute term sizes approaches one eighth, so the ratio test proves absolute convergence.
  - label: First two partial sums
    latex: '\frac{1}{2\sqrt{2}}\left(1-\frac{56}{512}+\cdots\right)=0.3148834885\ldots\quad\Longrightarrow\quad \pi\approx3.1757778243\ldots'
    description: Keeping the k equals zero and k equals one terms gives a partial estimate for one over pi; taking its reciprocal gives an early, still rough estimate for pi.
---

## A second way to calculate 1/π

Ramanujan's best-known series for 1/π adds roughly eight correct digits with each term. This lesson presents a different formula from his work on modular equations. It uses cubes of central binomial coefficients and alternates in sign. The series is mathematically distinctive and converges absolutely, but it is slower than the famous 1103 formula; comparing them makes convergence speed concrete rather than treating every exact formula as equally practical.

## What is a central binomial coefficient?

The binomial coefficient (2k choose k) counts the ways to choose k objects from 2k. For k=0, it is 1; for k=1, it is 2; for k=2, it is 6. Ramanujan's series cubes this quantity, multiplies by 6k+1, and divides by 512^k. The sign alternates because of the factor (−1)^k.

The index k takes the values 0,1,2,… . The series produces 1/π, so after forming a partial sum we take its reciprocal to obtain an approximation of π. This inversion step matters: a partial sum of the series is not itself an approximation of π.

## The main equation in plain language

Start with 1/(2√2). For each nonnegative integer k, calculate the central binomial coefficient (2k choose k), cube it, multiply by 6k+1, and divide by 2^(9k), which is 512^k. Alternate the signs and add all terms. The result is exactly 1/π. The first term is positive, the next negative, then positive again. The central binomial coefficients grow, but the denominator's power of 512 grows faster; a ratio test shows that the absolute terms eventually shrink by a factor approaching 1/8. Thus the series converges absolutely. The equation states an exact infinite sum, not that a short partial sum is already accurate.

## Worked example 1: the first term

At k=0, the binomial coefficient is 1, the linear factor is 1, and 512^0=1. Keeping only this term gives 1/π≈1/(2√2)≈0.3535533906. Taking the reciprocal gives π≈2√2≈2.8284271247. This is a valid first estimate, but it is not yet close to the familiar value 3.14159….

This calculation also checks the scale of the formula. Because the series represents 1/π, the first partial sum is around 0.35, not around 3.

## Worked example 2: add the k=1 term

For k=1, (2 choose 1)=2, so its cube is 8; the factor 6k+1 is 7; and the denominator is 512. Including the negative sign, the new term is −56/(512·2√2)=−7/(128√2), approximately −0.0386699021. The first two terms sum to about 0.3148834885. Taking the reciprocal now gives π≈3.1757778243.

The estimate has moved past π in the opposite direction. The next term is positive, about 0.0037871472; after adding it, the reciprocal is about 3.1380362290. Alternation makes successive estimates move from one side to the other while the terms shrink.

## Why the series converges

Let t_k be the kth term, including the constant factor. The central-binomial ratio is (2k+2 choose k+1)/(2k choose k)=2(2k+1)/(k+1). Cubing this ratio, multiplying by (6k+7)/(6k+1), and dividing by 512 gives the ratio of successive term magnitudes. As k grows, the first ratio tends to 4; its cube tends to 64; the linear-factor ratio tends to 1. The full limit is therefore 64/512=1/8, which is less than 1. The ratio test proves absolute convergence.

This argument explains convergence, not the identity's value. The equality to 1/π comes from deeper mathematics involving modular equations and elliptic functions. A full derivation is beyond this page; the cited primary paper and scholarly treatment provide the route for readers who want it.

## How fast is it?

The ratio limit 1/8 means late terms are roughly one eighth the size of the previous term. That is about one decimal digit of improvement per term, although the exact error also depends on the partial sum and the reciprocal step. In contrast, the 1103 series on the first pi page gains roughly eight digits per term because its denominator contains the enormous factor 396^(4k).

The comparison is not a criticism of the second identity. It shows that exact formulas can have very different numerical efficiency. The series here is a useful demonstration of central binomial coefficients, alternating terms, and modular-form connections; the faster formula is the more practical choice when the goal is high-precision computation.

## Historical attribution and later use

Ramanujan published a collection of formulas connecting modular equations with approximations to π in 1914. The formula here is one member of that family, presented in a modern binomial-coefficient form. Later authors analyzed how modular equations can yield rapidly convergent pi series and how those series support high-precision algorithms. Those later analyses and algorithms should not be retroactively attributed to Ramanujan.

## Scope and further reading

The displayed identity is stated for the infinite sum over nonnegative integers, and the ratio test establishes absolute convergence. The worked decimal values are rounded and are not certified error bounds. We do not derive the modular equation that proves the identity; that proof step is intentionally omitted because it requires elliptic-function theory beyond the prerequisites of this lesson. Ramanujan's 1914 paper and the scholarly discussion by Borwein, Borwein, and Bailey are starting points for the derivation and computational history.
