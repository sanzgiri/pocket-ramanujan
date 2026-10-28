---
slug: pi-series
title: A Rapid Series for π
summary: Ramanujan found an astonishingly fast-converging series for computing the digits of π.
category: Formulas for pi
period: '1914–1917'
difficulty: intermediate
resultType: approximation
attribution: discovered
intuition: Each new term in this series contributes a surprisingly large block of correct digits, turning an infinite sum into a practical high-precision calculation.
notation: The symbol k counts the terms in the sum, and the factorials and power of 396 make later terms shrink extremely quickly.
example: The k=0 term already gives a useful approximation; adding the k=1 term improves the result by roughly eight decimal digits.
significance: The series illustrates how Ramanujan combined combinatorial-looking formulas, special functions, and numerical precision.
applications:
  - label: Direct computational use
    text: Ramanujan-type series have been used as efficient building blocks in high-precision computations of pi.
  - label: Later influence
    text: The formulas helped motivate modern work on rapidly convergent series and modular equations.
exploreFurther:
  - type: explainer
    title: Ramanujan's easiest formula
    description: A readable introduction to the ideas behind one of Ramanujan's pi formulas.
    url: https://math.ucr.edu/home/baez/ramanujan/ramanujan_web.pdf
    difficulty: intermediate
  - type: video
    title: Ramanujan Explained
    description: Lectures and notes exploring Ramanujan's formulas and identities.
    url: https://ramanujanexplained.org/
    difficulty: intermediate
sources:
  - title: Srinivasa Aiyangar Ramanujan
    author: MacTutor History of Mathematics
    type: explainer
    url: https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/
  - title: Collected Papers of Srinivasa Ramanujan
    author: S. Ramanujan
    type: primary
    url: https://archive.org/details/collectedpaperso0000rama
related: []
formulas:
  - label: Ramanujan's rapidly convergent pi series
    latex: \frac{1}{\pi}=\frac{2\sqrt{2}}{9801}\sum_{k=0}^{\infty}\frac{(4k)!(1103+26390k)}{(k!)^4 396^{4k}}
    description: The reciprocal of pi equals a constant times a rapidly convergent infinite series.
---

## The idea

The number π is easy to define geometrically but surprisingly difficult to calculate to many digits. A useful formula must do more than converge eventually: it must produce accurate digits quickly enough that a computer does not spend most of its time adding negligible corrections.

Ramanujan found a family of formulas with exactly this property. The series on this page is so rapidly convergent that each additional term contributes roughly eight more correct decimal digits of $1/\pi$.

## What is an infinite series?

An infinite series is a sum with more and more terms:

$$
a_0+a_1+a_2+a_3+\cdots.
$$

We cannot literally add infinitely many terms one by one. Instead, we calculate partial sums and ask whether they approach a fixed value. A series is especially useful computationally when the error after a small number of terms is easy to bound.

In Ramanujan's series, the factorial $(4k)!$ grows, but the denominator contains $(k!)^4$ and the huge factor $396^{4k}$. The denominator wins decisively as $k$ increases, so the terms shrink at extraordinary speed.

## Reading the formula

The index $k$ tells us which term we are adding. At $k=0$, the factorials are simple and the linear factor is $1103$. At $k=1$, the term contains $396^4$ in the denominator, making it much smaller than the first term. At $k=2$, the suppression is stronger still.

The factor $1103+26390k$ grows only linearly in $k$. The factorials and the power of $396$ grow much faster, which is why this linear factor does not prevent convergence.

## The main equation in plain language

The left side is one divided by π, not π itself. On the right, start with the constant 2√2/9801, then add one term for each whole-number k beginning at zero. For each term, (4k)! means multiply the integers from 1 through 4k; (k!)⁴ is four copies of k! multiplied together; and 396^(4k) makes the denominator grow extremely fast. The small k=0 term gives 1/π≈0.3183098784, whose reciprocal is π≈3.1415927300. Adding the k=1 term changes the estimate to about 3.1415926535897939. So one additional term improves the approximation dramatically. These are rounded calculations; a rigorous digit claim also needs a bound on the remaining tail and control of rounding.

## Example 1: keep only the k=0 term

If we keep only the $k=0$ term, we obtain an approximation from

$$
\frac{1}{\pi}\approx\frac{2\sqrt2}{9801}\cdot1103.
$$

## Example 2: add the k=1 term

Adding the $k=1$ term changes the result by a very small amount but corrects a large block of decimal digits. This is the practical meaning of rapid convergence: precision improves in chunks, not one reluctant digit at a time.

A real implementation would also track rounding error and use enough working precision to ensure that the last displayed digit is trustworthy. The formula gives a fast mathematical method, but numerical software still needs careful error control.

## Where did it come from?

The formula is not an isolated numerical trick. It comes from identities involving elliptic functions and modular equations. Those subjects study transformations that preserve deep structure while changing the way a function is represented.

Ramanujan was able to turn that structure into a series whose coefficients are unusually well matched to computation. The connection explains both the beauty of the formula and its speed.

## Why it matters

This is a clear example of pure mathematics becoming computationally useful without being designed as an engineering algorithm. A theorem about special functions produces a practical method for calculating a famous constant.

The broader lesson is to look for representations adapted to the task. The definition of π is ideal for geometry; Ramanujan's series is much better suited to high-precision arithmetic.
