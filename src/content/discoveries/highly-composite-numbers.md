---
slug: highly-composite-numbers
title: Highly Composite Numbers
summary: Ramanujan studied the integers that have more divisors than every smaller positive integer.
category: Number theory
period: '1915'
difficulty: introductory
resultType: concept
attribution: discovered
intuition: Some numbers are unusually rich in factors. A highly composite number sets a new record for the number of divisors among all numbers below it.
notation: The divisor-count function d(n) or tau(n) counts the positive divisors of n.
example: 1, 2, 4, 6, 12, 24, and 36 are early highly composite numbers because each has more divisors than every smaller positive integer.
significance: Ramanujan turned a list of curious examples into a systematic study of how prime factors should be arranged to maximize divisors.
applications:
  - label: Number-theoretic influence
    text: The ideas provide a structured way to study divisor-rich integers and extremal behavior in multiplicative number theory.
  - label: Practical connection
    text: Divisor-rich patterns appear in questions about highly factorable quantities, although this definition itself is primarily theoretical.
exploreFurther:
  - type: explainer
    title: Highly composite number
    description: A concise introduction to divisor records and the first examples.
    url: https://en.wikipedia.org/wiki/Highly_composite_number
    difficulty: introductory
  - type: scholarly-reference
    title: Ramanujan's highly composite numbers
    description: Historical and mathematical context for Ramanujan's work.
    url: https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/
    difficulty: advanced
sources:
  - title: Highly composite numbers
    author: S. Ramanujan
    type: primary
    url: https://archive.org/details/collectedpaperso00rama
  - title: Srinivasa Aiyangar Ramanujan
    author: MacTutor History of Mathematics
    type: explainer
    url: https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/
related: []
formulas:
  - label: Divisor count from prime factors
    latex: n=\\prod_{i=1}^{r}p_i^{a_i}\\quad\\Longrightarrow\\quad d(n)=\\prod_{i=1}^{r}(a_i+1)
    description: If n has prime factor exponents a_i, its number of positive divisors is the product of one more than each exponent.
---

## The idea

A number becomes highly composite when it beats every smaller number at the divisor-count game. The records are not simply the biggest numbers; they are numbers whose prime factors are arranged efficiently.

## A small check

The number 12 has divisors 1, 2, 3, 4, 6, and 12, so d(12)=6. No positive integer below 12 has six or more divisors, making 12 a record-holder.

## Why it matters

The subject turns a simple question—how many factors does a number have?—into an optimization problem involving the structure of primes.
