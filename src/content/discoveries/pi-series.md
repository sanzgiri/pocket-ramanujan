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
    url: https://archive.org/details/collectedpaperso00rama
related: []
formulas:
  - label: Ramanujan's rapidly convergent pi series
    latex: \frac{1}{\pi}=\frac{2\sqrt{2}}{9801}\sum_{k=0}^{\infty}\frac{(4k)!(1103+26390k)}{(k!)^4 396^{4k}}
    description: The reciprocal of pi equals a constant times a rapidly convergent infinite series.
---

## The idea

Most formulas for π are too slow to use term by term. Ramanujan's formula is different: the factorials and the enormous power of 396 force the terms to become tiny almost immediately.

## A small check

When k=0, the summand is 1103. The first correction, k=1, is already very small compared with the leading term, which explains why the approximation improves so rapidly.

## Why it matters

This is a clean example of pure mathematics becoming computationally useful. The formula is not a shortcut that avoids mathematics; it is a compact expression of deep structure in elliptic and modular functions.
