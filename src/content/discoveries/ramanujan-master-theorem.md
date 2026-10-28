---
slug: ramanujan-master-theorem
title: Ramanujan's Master Theorem
summary: A theorem that turns certain power-series coefficients into a Mellin transform.
category: Analysis and special functions
period: 'early twentieth century'
difficulty: advanced
resultType: theorem
attribution: discovered
intuition: Under suitable analytic conditions, the theorem turns values of a coefficient function at whole numbers into a formula for an integral transform.
notation: The Mellin transform integrates f(x) against x^(s−1); Γ(s) is the gamma function, and φ(−s) means evaluate the coefficient function at the negative argument −s.
example: When φ(z)=1/(a+z), the series becomes an elementary integral whose Mellin transform is Γ(s)/(a−s) for 0<Re(s)<a.
significance: The theorem links series, analytic continuation, gamma functions, and Mellin transforms, while illustrating why precise convergence hypotheses matter.
applications:
  - label: Analytic technique
    text: The theorem and its variants provide a route to evaluate some Mellin transforms and definite integrals when the coefficient function has suitable analytic behavior.
  - label: Mathematical influence
    text: It remains a subject of modern work on transform identities and extensions; those variants require their own hypotheses and are not automatic consequences of the classical statement.
exploreFurther:
  - type: scholarly-reference
    title: Ramanujan's Notebooks, Part I
    description: Bruce C. Berndt's scholarly edition and analysis of Ramanujan's notebook mathematics.
    url: https://doi.org/10.1007/978-1-4612-1088-7
    difficulty: advanced
  - type: scholarly-reference
    title: On Ramanujan Master Theorem
    description: A short modern derivation and discussion of extensions of the theorem.
    url: https://arxiv.org/abs/1103.3947
    difficulty: advanced
  - type: scholarly-reference
    title: NIST Digital Library of Mathematical Functions, Mellin Transform Methods
    description: Reference material on Mellin transforms and their use in asymptotic analysis.
    url: https://dlmf.nist.gov/2.5
    difficulty: advanced
sources:
  - title: Ramanujan's Notebooks, Part I
    author: Bruce C. Berndt
    type: secondary
    url: https://doi.org/10.1007/978-1-4612-1088-7
    locator: Springer, 1985.
  - title: On Ramanujan Master Theorem
    author: D. Babusci and G. Dattoli
    type: secondary
    url: https://arxiv.org/abs/1103.3947
    locator: arXiv:1103.3947 [math-ph], 2011.
  - title: 'NIST Digital Library of Mathematical Functions, Chapter 2: Asymptotic Approximations'
    author: Frank W. J. Olver et al., editors
    type: secondary
    url: https://dlmf.nist.gov/2.5
    locator: Section 2.5, Mellin transform methods.
related: [gamma-function-approximations]
formulas:
  - label: Ramanujan Master Theorem, schematic form
    latex: 'f(x)=\sum_{n=0}^{\infty}\frac{(-1)^n\phi(n)}{n!}x^n,\qquad \int_0^{\infty}x^{s-1}f(x)\,dx=\Gamma(s)\phi(-s)'
    description: When a function has this power series and the needed convergence and analytic-continuation conditions hold, its Mellin transform equals the gamma function times the coefficient function evaluated at negative s.
  - label: A coefficient function with a worked integral form
    latex: 'f_a(x)=\sum_{n=0}^{\infty}\frac{(-1)^n x^n}{n!(n+a)}=\int_0^1 t^{a-1}e^{-xt}\,dt,\qquad a>0'
    description: For positive a, the coefficients 1/(n+a) have an integral representation that lets the series be summed as an exponential on the interval from zero to one.
  - label: Mellin transform in the worked example
    latex: '\int_0^{\infty}x^{s-1}f_a(x)\,dx=\frac{\Gamma(s)}{a-s},\qquad 0<\operatorname{Re}(s)<a'
    description: The worked integral equals gamma of s divided by a minus s when the real part of s lies strictly between zero and a.
---

## What does the theorem connect?

A power series stores information in its coefficients. A Mellin transform stores information about a function by integrating it against powers of x. Ramanujan's Master Theorem connects those two descriptions: in an appropriate setting, knowing a function φ at nonnegative integers lets us express the Mellin transform using φ at a negative argument.

The theorem is often written compactly, which can make it look like one may simply integrate each term of a series from zero to infinity. That is generally invalid: the integral of an individual power term may diverge, and interchanging an infinite sum with an integral requires justification. We will use a family where each step can be checked directly.

## The main equation in plain language

The index n runs through 0,1,2,…, and φ(n) is the coefficient data sampled at those whole numbers. The factorial n! and alternating sign (−1)^n are part of the series pattern. The integral on the right is the Mellin transform: x is positive, s may be complex, and x^(s−1) weights the function differently at small and large x. The theorem says that this transform can be calculated as Γ(s) times φ(−s), but only when the series, integral, and analytic continuation behave well enough. In particular, φ must make sense at the negative argument, and growth and convergence conditions matter. The displayed identity is a useful schematic version, not a license to substitute any sequence of coefficients.

## What is the Mellin transform?

For a suitable function f, its Mellin transform is the integral of x^(s−1)f(x) from zero to infinity. The complex parameter s controls the weight: changing its real part changes how strongly the integral emphasizes large or small x. In our example, the transform converges only in a vertical strip, described by an inequality on Re(s).

The gamma function appears naturally because the basic exponential integral of x^(s−1)e^(−x) is Γ(s). If the exponential is e^(−tx), a change of variable contributes a factor t^(−s). These two facts are the engine of the example below.

## Worked example: coefficients 1/(n+a)

Choose a positive real number a and set φ(z)=1/(a+z). The nth coefficient is then 1/(n+a). A useful elementary identity is 1/(n+a)=the integral of t^(n+a−1) from 0 to 1. Substitute that expression into the series. The terms involving x and t sum to the exponential series e^(−xt), giving f_a(x) as the integral of t^(a−1)e^(−xt) from 0 to 1.

Now take its Mellin transform. Because the integrand is nonnegative for positive real s, or absolutely integrable for complex s in the stated strip, we may change the order of integration. First integrate over x: the exponential integral gives Γ(s)t^(−s). Then integrate t^(a−s−1) from 0 to 1, which gives 1/(a−s). The result is Γ(s)/(a−s), provided 0<Re(s)<a. The lower bound ensures convergence near x=0; the upper bound ensures convergence of the remaining t-integral near t=0.

This derivation does more than verify a numerical instance: it exhibits exactly why the coefficient function must extend to negative arguments and why a convergence range must be stated.

## Example 2: the especially simple case a=1

When a=1, the series has coefficients 1/(n+1). Summing the exponential series gives f₁(x)=(1−e^(−x))/x. Near x=0, the numerator is approximately x, so f₁(x) stays finite; at large x it behaves like 1/x. Its Mellin transform therefore converges when 0<Re(s)<1, and the formula gives Γ(s)/(1−s).

For instance, at s=1/2 the value is Γ(1/2)/(1−1/2)=2√π. This checks the output using the familiar identity Γ(1/2)=√π. This example is a specialization of the previous derivation, not an independent proof of the theorem in full generality.

## What the theorem does not say

A formal coefficient pattern alone is not enough. One needs conditions that permit the series representation, ensure the Mellin integral exists, and justify continuation or exchanges of limiting operations. Different modern formulations use different hypotheses and may extend the classical result in different directions. We do not state a single maximal theorem here; the schematic formula and worked family are the part needed for this lesson.

A common trap is to integrate each power x^n separately over the whole positive axis. Those integrals do not converge, so that term-by-term operation cannot prove the theorem. The example avoids this trap by first representing each coefficient as a finite-interval integral, summing to an exponential, and then checking absolute convergence in the strip 0<Re(s)<a.

## Historical attribution and later treatment

Ramanujan recorded the theorem in his mathematical work; Bruce C. Berndt's edited notebooks provide a scholarly route into that material. Later authors have derived and extended the theorem in modern notation. The identity on this page is a standard illustrative form, while the exact assumptions belong to each stated version. Attribution to Ramanujan does not mean every later proof, extension, or application was his.

## Where it is useful

The theorem is useful when a coefficient sequence has a manageable analytic continuation and the target integral is a Mellin transform. In that situation, it can replace a difficult integral calculation with a value of Γ(s) and φ(−s). The method is especially valuable as a bridge between generating series and transform methods. Whether it is the best route depends on the function and on whether the needed hypotheses can actually be verified.

## Further reading

Berndt's edition gives historical and mathematical context for Ramanujan's notebooks. Babusci and Dattoli present a modern derivation and discuss extensions. The NIST Digital Library of Mathematical Functions provides background on Mellin transforms and their role in asymptotic methods.
