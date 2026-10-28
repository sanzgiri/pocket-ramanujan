---
slug: ramanujan-summation
title: Ramanujan Summation and Divergent Series
summary: A carefully defined regularized value is not the ordinary limit of partial sums.
category: Infinite series
period: 'early twentieth century'
difficulty: advanced
resultType: method
attribution: discovered
intuition: Euler–Maclaurin corrections can assign a useful constant to some divergent series, but that constant must not be mistaken for an ordinary sum.
notation: The superscript R₀ labels the C₀ Euler–Maclaurin convention used here; B₂=1/6 is the second Bernoulli number, and f′ is the derivative of f.
example: Under this convention, the constant for 1+2+3+… is −1/12, even though its ordinary partial sums grow without bound.
significance: The topic demonstrates how a named summation method can extract structured finite parts while requiring precise definitions and strong warnings about what the result means.
applications:
  - label: Analytic technique
    text: Ramanujan summation is studied alongside Euler–Maclaurin methods for assigning regularized values and constants; such values depend on the method and do not replace ordinary convergence.
  - label: Historical influence
    text: Ramanujan's notebook work on divergent series motivated later analyses and extensions, which distinguish several normalization conventions.
exploreFurther:
  - type: scholarly-reference
    title: Ramanujan's Notebooks, Part I
    description: Bruce C. Berndt's scholarly edition, including Ramanujan's theory of divergent series.
    url: https://doi.org/10.1007/978-1-4612-1088-7
    difficulty: advanced
  - type: scholarly-reference
    title: The Euler–Maclaurin Formula, Bernoulli Numbers, the Zeta Function, and Real-Variable Analytic Continuation
    description: Terence Tao's exposition of Euler–Maclaurin summation and regularized values.
    url: https://terrytao.wordpress.com/2010/04/10/the-euler-maclaurin-formula-bernoulli-numbers-the-zeta-function-and-real-variable-analytic-continuation/
    difficulty: advanced
  - type: scholarly-reference
    title: NIST Digital Library of Mathematical Functions, Euler–Maclaurin Formula
    description: A reference for Euler–Maclaurin summation and its remainder terms.
    url: https://dlmf.nist.gov/2.10
    difficulty: advanced
sources:
  - title: Ramanujan's Notebooks, Part I
    author: Bruce C. Berndt
    type: secondary
    url: https://doi.org/10.1007/978-1-4612-1088-7
    locator: Chapter 2, “Ramanujan's Theory of Divergent Series,” pages 133–149.
  - title: The Euler–Maclaurin Formula, Bernoulli Numbers, the Zeta Function, and Real-Variable Analytic Continuation
    author: Terence Tao
    type: secondary
    url: https://terrytao.wordpress.com/2010/04/10/the-euler-maclaurin-formula-bernoulli-numbers-the-zeta-function-and-real-variable-analytic-continuation/
    locator: 10 April 2010.
  - title: 'NIST Digital Library of Mathematical Functions, Chapter 2: Asymptotic Approximations'
    author: Frank W. J. Olver et al., editors
    type: secondary
    url: https://dlmf.nist.gov/2.10
    locator: Section 2.10, Euler–Maclaurin formula.
related: [ramanujan-master-theorem]
formulas:
  - label: C₀ Euler–Maclaurin regularization for a polynomial
    latex: '\sum_{n=1}^{\infty\,(R_0)} f(n):=C_0(f)=-\frac{f(0)}{2}-\sum_{m=1}^{\infty}\frac{B_{2m}}{(2m)!}f^{(2m-1)}(0)'
    description: This lesson defines one Ramanujan summation convention by a correction constant at zero; for polynomials, only finitely many derivatives are nonzero.
  - label: Ramanujan-regularized value of the positive integers
    latex: '1+2+3+\cdots\; (R_0)=-\frac{B_2}{2!}=-\frac{1}{12},\qquad B_2=\frac16'
    description: Under the specified C0 convention, the regularized value is negative one twelfth; ordinary partial sums still diverge to positive infinity.
  - label: Ordinary partial sums of positive integers
    latex: 'S_N=1+2+\cdots+N=\frac{N(N+1)}{2}\longrightarrow +\infty'
    description: The usual finite partial sums grow without bound, so the original series has no finite ordinary sum.
---

## The question behind divergent series

The series 1+2+3+4+… is familiar, but adding its positive terms never settles near a finite number. Its first N terms sum to N(N+1)/2, which grows without bound. In ordinary analysis, the series diverges; it does not equal a negative number.

Ramanujan summation is a different operation. It uses corrections related to the Euler–Maclaurin formula to assign a regularized constant to certain series. Because several conventions and later extensions exist, this lesson specifies one convention before giving any assigned value.

## The main equation in plain language

For a sufficiently smooth function f, the C₀ convention takes certain boundary corrections at zero: start with minus one half of f(0), then subtract Bernoulli-number multiples of its odd derivatives at zero. For a polynomial, only finitely many of these derivatives are nonzero, so the examples can be calculated exactly. The symbol (R₀) labels this regularized assignment; it is not an equals sign asserting that ordinary partial sums approach the displayed number. The method extracts the constant term prescribed by this Euler–Maclaurin normalization. Other definitions may choose different normalizations, so the method and convention must travel with the answer.

## Ordinary convergence versus Ramanujan summation

Ordinary convergence asks whether the partial sums approach a finite limit. For 1+2+3+…, the Nth partial sum is N(N+1)/2, so it grows without bound. The ordinary series therefore has no finite sum. The assigned −1/12 is a regularized value, not an ordinary sum.

By contrast, Ramanujan summation assigns a value through a rule involving the function being summed and its endpoint corrections. We write the assigned value with a superscript R₀ to keep the distinction visible. Saying “the R₀ value is −1/12” is accurate; saying “the positive integers add to −1/12” without qualification is misleading.

## The precise convention used here

For a polynomial f, define its C₀ correction by minus one half f(0), followed by the Bernoulli derivative corrections at zero. Here B₂=1/6, B₄=−1/30, and so on; f^(j)(0) means take j derivatives and evaluate at zero. Polynomials make this definition particularly transparent because derivatives eventually vanish. We use the resulting C₀ value as the Ramanujan-regularized assignment for the associated series, following the Euler–Maclaurin viewpoint discussed in Berndt's edition of Ramanujan's notebooks.

This is not the only convention called Ramanujan summation. Later treatments sometimes normalize the associated difference equation at a different point. The value and interpretation therefore depend on the declared convention. We use R₀ throughout this page and do not silently switch to zeta regularization or another summability method.

## Example 1: the constant series

Take f(x)=1. Its value at zero is 1, while every derivative of positive order is zero. The C₀ rule therefore gives −1/2. The ordinary partial sum of N terms is N, which grows without bound. Thus the assignment −1/2 is a regularized value under this rule, not the limit of 1+1+1+….

The example is useful because it isolates the endpoint correction: no higher Bernoulli terms contribute. It also shows why writing a label such as (R₀) matters; otherwise the notation can be mistaken for ordinary addition.

## Example 2: the positive integers

Now take f(x)=x. Since f(0)=0, the first correction vanishes. The first derivative is 1, and the next nonzero Bernoulli correction is B₂/2!=1/12. Every derivative of order three or higher is zero. Therefore the C₀ value is −1/12.

Meanwhile, adding the first N positive integers gives N(N+1)/2. At N=10 the partial sum is 55; at N=100 it is 5050; these values continue increasing. This concrete calculation confirms that the regularized constant is not a finite ordinary limit.

## Why Euler–Maclaurin appears

Euler–Maclaurin relates a finite sum to an integral, endpoint terms, and derivatives at the endpoints. In ordinary convergent problems, the remainder and boundary terms help estimate the difference between a sum and an integral. Ramanujan's divergent-series work studies the constant left by a related correction procedure.

For the two polynomials above, the derivative list terminates, so the C₀ calculation is finite. A general function may require additional smoothness, growth, and remainder assumptions. We do not extend the polynomial rule to arbitrary functions here; that would require stating and proving a more general theorem.

## Relation to zeta regularization

For positive powers, the C₀ assignments agree with values obtained by analytically continuing the Riemann zeta function; for example, ζ(−1)=−1/12. Agreement on this example does not make the definitions identical. This lesson defines its value through the Euler–Maclaurin C₀ correction, not by declaring the divergent series convergent and not by using analytic continuation as an unstated replacement.

## What the value is good for

Regularized values can organize correction terms and constants in analysis, but they answer a different question from “what limit do the partial sums approach?” Any calculation that uses such a value must name its method, specify its assumptions, and keep the regularization label attached. If the ordinary series converges, its usual sum remains the ordinary limit; regularization should not be used to obscure that simpler meaning.

## Attribution and scope

Ramanujan studied divergent series in his notebooks, and later editors and mathematicians clarified the surrounding summation theory. The C₀ notation here is an explicit modern teaching convention for the Euler–Maclaurin-style value; it is not presented as Ramanujan's own notation. The short polynomial examples are fully calculated. Broader extensions are intentionally omitted because their hypotheses and normalizations require a separate treatment.
