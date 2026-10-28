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
    latex: 'p(5n+4) \equiv 0 \pmod{5},\quad p(7n+5) \equiv 0 \pmod{7},\quad p(11n+6) \equiv 0 \pmod{11}'
    description: For every nonnegative integer n, the corresponding partition count is divisible by 5, 7, or 11.
---

## The idea

The partition function looks innocent: count the ways to add positive whole numbers to make $n$. But its values quickly become large and irregular. Ramanujan discovered that, beneath that irregularity, there are exact arithmetic patterns.

For every nonnegative integer $n$, three families of values are divisible by a matching modulus:

- $p(5n+4)$ is divisible by $5$.
- $p(7n+5)$ is divisible by $7$.
- $p(11n+6)$ is divisible by $11$.

These are not approximations, statistical tendencies, or patterns that stop after a large number. Each statement describes an infinite sequence of exact equalities modulo a number.

## What is a partition?

A partition of a positive integer is a way of writing it as a sum of positive integers where order does not matter. The order in $3+1$ is not different from $1+3$, so they represent the same partition.

For example, the partitions of $4$ are:

1. $4$
2. $3+1$
3. $2+2$
4. $2+1+1$
5. $1+1+1+1$

Therefore $p(4)=5$. By convention, $p(0)=1$: there is one way to make zero, namely using no parts at all.

The first few values are:

| $n$ | $p(n)$ | What this means |
| ---: | ---: | --- |
| 0 | 1 | the empty sum |
| 1 | 1 | $1$ |
| 2 | 2 | $2$, $1+1$ |
| 3 | 3 | $3$, $2+1$, $1+1+1$ |
| 4 | 5 | the five partitions listed above |
| 5 | 7 | seven unordered sums |
| 6 | 11 | eleven unordered sums |
| 7 | 15 | fifteen unordered sums |
| 8 | 22 | twenty-two unordered sums |
| 9 | 30 | thirty unordered sums |
| 10 | 42 | forty-two unordered sums |

Already, the sequence grows in a way that is difficult to guess from the definition alone.

## Reading the congruence notation

The expression $5n+4$ selects the numbers $4,9,14,19,24,\ldots$ as n runs through the nonnegative integers. The congruence claims that the partition count at each selected input has remainder zero after division by 5. The equation's plain-language walkthrough comes first; the following examples check small cases without confusing evidence with proof.

## The main equation in plain language

In $p(5n+4)\equiv0\pmod 5$, n can be any whole number starting at zero. First calculate 5n+4; then count its partitions; the result is always divisible by 5. The symbol ≡0 mod 5 means “has remainder zero when divided by 5.” For n=2, the input is 5·2+4=14, and p(14)=135=5·27, so the claim checks in this case. The statement is not that every p(n) is a multiple of 5, nor that checking a few values proves the rule. The other two formulas make the same kind of promise on different progressions: 7n+5 gives a multiple of 7, and 11n+6 gives a multiple of 11. A proof must explain why each infinite family continues forever.

## Example 1: check the first progression

For $n=0$, the input is $5\cdot0+4=4$, and $p(4)=5=5\cdot1$. For $n=1$, the input is 9 and $p(9)=30=5\cdot6$. For $n=2$, the input is 14 and $p(14)=135=5\cdot27$. Each example has remainder zero after division by 5, as the theorem predicts; these checks illustrate the rule but do not prove all cases.

## Example 2: check the other progressions

At $n=0$, the second rule uses $7\cdot0+5=5$, and $p(5)=7$ is divisible by 7. The third uses $11\cdot0+6=6$, and $p(6)=11$ is divisible by 11. At $n=1$, the corresponding counts are $p(12)=77=7\cdot11$ and $p(17)=297=11\cdot27$. These calculations show how each progression chooses its input and its own modulus.

## Why use congruences?

The notation $a\equiv b\pmod m$ means that $a$ and $b$ have the same remainder after division by $m$. Saying $p(5n+4)\equiv0\pmod5$ is a compact way of saying:

> Divide $p(5n+4)$ by $5$; the remainder is always zero.

Congruences let us ignore the enormous size of a number and focus on a small piece of its arithmetic behavior. That makes hidden regularity visible. In this case, the partition numbers are complicated over the integers but remarkably organized modulo $5$, $7$, and $11$.

## A generating-function viewpoint

There is a compact way to package every partition number at once:

$$
\sum_{n=0}^{\infty}p(n)q^n=\prod_{k=1}^{\infty}\frac{1}{1-q^k}.
$$

Why does this product count partitions? For each possible part size $k$, the factor

$$
1+q^k+q^{2k}+q^{3k}+\cdots=\frac{1}{1-q^k}
$$

records whether we use zero copies of $k$, one copy, two copies, and so on. When we multiply all the factors, choosing a term from each factor specifies exactly how many copies of each part size we used. The exponent of $q$ records the total sum.

This viewpoint turns a counting problem into a problem about infinite products and power series. It is one reason partition theory became connected to q-series and modular forms.

## What did Ramanujan actually prove?

Ramanujan communicated these congruences in his work on partitions and gave proofs using the tools available to him, including generating functions and identities related to elliptic and modular functions. The original notebook style is extremely compressed, so modern readers usually encounter the results through later edited and expanded treatments.

A complete proof is not short enough to fit naturally in an introductory page. The important proof idea is that the generating function has much more symmetry than its counting definition suggests. When that symmetry is examined modulo small primes, the coefficients in these arithmetic progressions are forced to vanish modulo the corresponding prime.

Later mathematics made this structure more systematic. Modular forms provide a framework in which the generating function can be transformed and compared with other functions whose coefficients have controlled arithmetic behavior.

## Why it matters

The striking part is the bridge between three levels of mathematics:

1. **Combinatorics:** count unordered sums.
2. **Algebra and arithmetic:** study the counts modulo a prime.
3. **Analysis:** use infinite products, q-series, and modular forms to explain the pattern.

A reader can discover the first few values of $p(n)$ with pencil and paper, but the reason the congruences continue indefinitely belongs to a much deeper theory. Ramanujan saw that connection unusually early and expressed it with remarkable precision.

## Applications and influence

The congruences are primarily a theoretical result rather than an engineering formula used directly in a device. Their influence is mathematical: they helped establish partition theory as a meeting place for combinatorics, number theory, q-series, and modular forms.

They also provide a model for a recurring strategy in mathematics: when a sequence is too complicated to understand exactly, study it modulo carefully chosen numbers. A difficult global object may reveal clean local patterns.
