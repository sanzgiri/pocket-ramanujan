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
    latex: n=\prod_{i=1}^{r}p_i^{a_i}\quad\Longrightarrow\quad d(n)=\prod_{i=1}^{r}(a_i+1)
    description: If n has prime factor exponents a_i, its number of positive divisors is the product of one more than each exponent.
---

## The idea

A positive integer has a finite list of divisors: numbers that divide it with no remainder. Some integers have more divisors than any smaller integer. Ramanujan called these record-holders highly composite numbers.

The word “highly” does not mean that the number itself is large. It means that its divisor count is unusually large compared with everything that came before it.

## Counting divisors

Write a number using its prime factorization. For example,

$$
12=2^2\cdot3^1.
$$

A divisor of 12 can use zero, one, or two copies of 2, and zero or one copy of 3. That gives $3\cdot2=6$ choices, so 12 has six positive divisors.

In general, if

$$
n=p_1^{a_1}p_2^{a_2}\cdots p_r^{a_r},
$$

then

$$
d(n)=(a_1+1)(a_2+1)\cdots(a_r+1).
$$

Each exponent contributes one more choice because a divisor may use between zero and $a_i$ copies of the corresponding prime.

## The first record-holders

The beginning of the sequence is:

| Number | Divisors | Divisor count |
| ---: | --- | ---: |
| 1 | $1$ | 1 |
| 2 | $1,2$ | 2 |
| 4 | $1,2,4$ | 3 |
| 6 | $1,2,3,6$ | 4 |
| 12 | $1,2,3,4,6,12$ | 6 |
| 24 | sixteen divisors | 8 |
| 36 | nine divisors | 9 |
| 48 | ten divisors | 10 |
| 60 | twelve divisors | 12 |

Notice that 18 is not highly composite: it has six divisors, but 12 is smaller and already has six. A new record must beat every earlier count, not merely have many divisors.

## Why the prime exponents matter

To maximize the number of divisors for a given size, it is efficient to put larger exponents on smaller primes. Compare $2^2\cdot3=12$ with $2\cdot3^2=18$. Both use two primes, but 12 reaches a divisor count of 6 while staying smaller.

This leads to a characteristic shape for highly composite numbers: their prime exponents usually decrease from left to right. A typical factorization looks like $2^a3^b5^c\cdots$ with $a\ge b\ge c\ge\cdots$.

That observation turns a list of examples into a structural theorem about how factors are arranged.

## What Ramanujan contributed

Ramanujan studied highly composite numbers systematically rather than treating them as curiosities. His work analyzed the relationship between the size of a number, its prime factors, and the number of divisors it can support.

The research is a good example of his style: begin with a concrete numerical pattern, then search for the general arithmetic mechanism behind the pattern. Later work refined and extended these ideas in multiplicative number theory.

## Why it matters

Highly composite numbers are mainly a theoretical subject. Their importance lies in the questions they teach us to ask: What makes a number extremal? How do local prime factors combine into a global record? What can be proved about the shape of an optimal factorization?

There is also a practical connection to factor-rich structures. Divisors matter in algorithms, combinatorics, and problems involving periodic subdivision, although the definition of a highly composite number itself is not a general-purpose optimization recipe.
