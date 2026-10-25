---
slug: partition-congruences
title: Partition Congruences
summary: Ramanujan found that a simple counting function hides exact divisibility patterns.
category: Partition theory
period: '1919'
difficulty: introductory
resultType: theorem
attribution: discovered
intuition: A partition writes a whole number as a sum where order does not matter. Ramanujan noticed that these counts line up in unexpectedly regular ways when viewed modulo small numbers.
notation: The partition function p(n) counts the number of unordered ways to write n as a sum of positive integers.
example: The five partitions of 4 are 4, 3+1, 2+2, 2+1+1, and 1+1+1+1, so p(4)=5.
significance: These congruences connect an elementary counting problem to modular forms and deep arithmetic structure.
applications:
  - label: Later influence
    text: Partition congruences became a gateway into modular forms, q-series, and the study of arithmetic patterns.
exploreFurther:
  - type: explainer
    title: Partition function
    description: A visual introduction to counting partitions and the patterns they create.
    url: https://en.wikipedia.org/wiki/Partition_function_(number_theory)
    difficulty: introductory
  - type: scholarly-reference
    title: Ramanujan's notebooks
    description: An annotated route into the notebook results behind the congruences.
    url: https://www.imsc.res.in/~rao/ramanujan/NotebookFirst.htm
    difficulty: advanced
sources:
  - title: Srinivasa Aiyangar Ramanujan
    author: MacTutor History of Mathematics
    type: explainer
    url: https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/
  - title: Ramanujan's Notebooks
    author: Bruce C. Berndt
    type: secondary
    url: https://archive.org/details/ramanujansnotebo0000rama
related: []
formulas:
  - label: Ramanujan's three famous congruences
    latex: p(5n+4) \\equiv 0 \\pmod{5},\\quad p(7n+5) \\equiv 0 \\pmod{7},\\quad p(11n+6) \\equiv 0 \\pmod{11}
    description: For every nonnegative integer n, the corresponding partition count is divisible by 5, 7, or 11.
---

## The idea

The function p(n) grows quickly, but it is not random. The formulas above say that three infinite families of partition counts are always divisible by a fixed small number.

## A small check

For n=0, the first congruence says p(4) is divisible by 5. Since p(4)=5, the first case works exactly.

## Why it matters

The surprise is not just the divisibility. It is that a problem about arranging whole numbers is connected to the analytic machinery of modular forms.
