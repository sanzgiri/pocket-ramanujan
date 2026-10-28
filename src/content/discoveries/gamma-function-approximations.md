---
slug: gamma-function-approximations
title: Ramanujan's Approximation for the Gamma Function
summary: A refined factorial estimate that explains its own connection to Stirling's formula.
category: Analysis and special functions
period: 'early twentieth century'
difficulty: intermediate
resultType: approximation
attribution: discovered
intuition: Ramanujan reshaped Stirling's familiar factorial estimate so that a small polynomial correction captures much more of the finite-size error.
notation: The gamma function extends factorials, with Γ(n+1)=n! for positive integers n; the approximation below is stated for positive integer n.
example: At n=5, Ramanujan's expression gives about 120.000147, close to the exact 5!=120 and more accurate than the leading Stirling estimate.
significance: The formula shows how a carefully chosen correction can greatly improve an asymptotic approximation without changing its leading growth.
applications:
  - label: Later influence
    text: Ramanujan's approximation has been analyzed and refined in later work on the gamma function. It is a useful example in asymptotic analysis, not a universally best replacement for modern numerical libraries.
exploreFurther:
  - type: scholarly-reference
    title: On the Asymptotic Representation of the Euler Gamma Function by Ramanujan
    description: A mathematical analysis of Ramanujan's approximation and its asymptotic behavior.
    url: https://doi.org/10.1016/S0377-0427(00)00586-0
    difficulty: advanced
  - type: scholarly-reference
    title: NIST Digital Library of Mathematical Functions, Gamma Function
    description: Standard gamma-function definitions and Stirling-type asymptotic expansions.
    url: https://dlmf.nist.gov/5.11
    difficulty: intermediate
sources:
  - title: On the Asymptotic Representation of the Euler Gamma Function by Ramanujan
    author: A. A. Karatsuba
    type: secondary
    url: https://doi.org/10.1016/S0377-0427(00)00586-0
    locator: Journal of Computational and Applied Mathematics 135 (2001), pages 225–240.
  - title: Ramanujan Formula for the Generalized Stirling Approximation
    author: Cristinel Mortici
    type: secondary
    url: https://doi.org/10.1016/j.amc.2010.07.070
    locator: Applied Mathematics and Computation 217, no. 6 (2010), pages 2579–2585.
  - title: 'NIST Digital Library of Mathematical Functions, Chapter 5: Gamma Function'
    author: Frank W. J. Olver et al., editors
    type: secondary
    url: https://dlmf.nist.gov/5.11
    locator: Section 5.11, asymptotic expansions.
related: [ramanujan-master-theorem]
formulas:
  - label: Gamma function and factorials
    latex: '\Gamma(z)=\int_0^{\infty}t^{z-1}e^{-t}\,dt,\qquad \Gamma(n+1)=n!'
    description: For positive real part z, the gamma integral defines a function that agrees with factorials at positive integers shifted by one.
  - label: Ramanujan's factorial approximation
    latex: 'n!\approx \sqrt{\pi}\left(\frac{n}{e}\right)^n\left(8n^3+4n^2+n+\frac{1}{30}\right)^{1/6},\qquad n=1,2,3,\ldots'
    description: For positive integer n, this approximation estimates n factorial using a leading exponential factor and a sixth root of a polynomial correction; it is asymptotically equivalent to n factorial as n grows.
  - label: Stirling's leading approximation
    latex: 'n!\sim \sqrt{2\pi n}\left(\frac{n}{e}\right)^n'
    description: Stirling's formula says the ratio of n factorial to this simpler expression tends to one as n grows.
---

## What does the gamma function extend?

For a positive integer n, the factorial n! multiplies every whole number from 1 through n. The gamma function extends that pattern beyond whole numbers: Γ(n+1)=n!. Its integral definition converges when the real part of z is positive. This lesson focuses on the integer case, where the approximation is easiest to compare with exact factorials.

Stirling's formula already estimates large factorials very well. Ramanujan's version rearranges the correction into a sixth root of a cubic polynomial. That extra structure makes the approximation remarkably accurate even for small n. “Approximation” still matters: the expression is not exactly n! and the formula is not claimed here for arbitrary complex z.

## The main equation in plain language

The letter n is a positive whole number; n! is the exact answer we want to estimate. The factor (n/e)^n supplies the main rapid growth. The square root of π and the sixth root of the polynomial adjust its scale. For large n, the polynomial is dominated by 8n³; its sixth root is √2 times √n. Multiplying that by √π gives √(2πn), exactly the leading factor in Stirling's formula. The smaller terms 4n², n, and 1/30 refine the estimate for finite n. Thus Ramanujan's formula contains Stirling's leading approximation plus a carefully designed correction, rather than replacing the underlying asymptotic behavior.

## Example 1: n=1

The exact value is 1!=1. Ramanujan's expression becomes √π·(1/e)·(8+4+1+1/30)^(1/6), which is approximately 1.000283. Its relative error is about 0.0283 percent. The leading Stirling expression gives about 0.922137, roughly 7.79 percent below the exact answer.

This small case shows how the correction helps before n is large. It does not prove the approximation is best for every n or every numerical purpose.

## Example 2: n=5

The exact value is 5!=120. Substituting 5 into the Ramanujan expression gives about 120.000147, an error of roughly 0.000123 percent. The leading Stirling approximation gives about 118.0192, about 1.65 percent low. The sixth-root correction changes the result by just enough to account for much of the finite-n error.

All decimals here are rounded for readability. The comparison concerns these inputs; it is not a universal error bound. For a formal accuracy guarantee one needs a remainder estimate, and practical software may instead use a method optimized for its input range and precision.

## Why the formula approaches Stirling's scale

Factor 8n³ out of the polynomial: the remaining factor tends to 1 as n grows, because the lower-degree terms become small relative to n³. Taking its sixth root therefore tends to 1 as well. What remains from the polynomial's sixth root is (8n³)^(1/6)=√2√n. The full approximation consequently has the same leading form as Stirling's formula.

This explains the asymptotic behavior without pretending that a leading-term argument gives the exact error at each n. Karatsuba and later authors study the approximation more precisely; the cited analyses provide a route to the omitted remainder details.

## When to use it—and when not to

The formula is useful for understanding how asymptotic approximations can be improved by choosing correction terms carefully. It can estimate factorials by hand or serve as a comparison in an analysis lesson. It is not automatically superior for every n, and the exact factorial is preferable when n is small enough to compute directly. For very large n, one must also consider overflow, precision, and a rigorous error target.

## Attribution and scope

This approximation is attributed to Ramanujan and is studied in modern analyses of his gamma-function formulas. The leading comparison is Stirling's classical asymptotic formula; the correction polynomial is the distinctive feature discussed here. We state the approximation for positive integers n and the gamma integral for Re(z)>0. No claim is made that the displayed approximation gives a certified error bound without further analysis.

## Explore further

Karatsuba's paper studies Ramanujan's asymptotic representation in detail. The NIST Digital Library of Mathematical Functions gives a standard reference for the gamma function and Stirling-type expansions.
