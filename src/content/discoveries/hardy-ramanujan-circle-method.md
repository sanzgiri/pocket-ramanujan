---
slug: hardy-ramanujan-circle-method
title: Hardy–Ramanujan Circle Method
summary: How a contour around the unit circle reveals the growth of partition numbers.
category: Analytic number theory
period: '1918'
difficulty: intermediate
resultType: method
attribution: collaborative
intuition: Extracting one coefficient from a generating function can be done by averaging around a circle; the strongest contributions come from arcs near roots of unity.
notation: The partition number p(n) counts unordered sums of n, and its generating function is the infinite product 1/((1-q)(1-q²)(1-q³)⋯), valid as a convergent product for |q|<1.
example: The partitions of 5 are 5, 4+1, 3+2, 3+1+1, 2+2+1, 2+1+1+1, and 1+1+1+1+1, so p(5)=7.
significance: Hardy and Ramanujan's asymptotic formula made the scale of partition growth precise and helped establish a powerful method in analytic number theory.
applications:
  - label: Later development
    text: Rademacher refined the circle-method analysis to obtain an exact convergent series for p(n); this is a later result, not the original Hardy–Ramanujan asymptotic formula.
exploreFurther:
  - type: original-paper
    title: Asymptotic Formulae in Combinatory Analysis
    description: Hardy and Ramanujan's original partition asymptotic paper, published in 1918.
    url: https://archive.org/details/hardy-ramanujan-1918-asymptotic-formulaae-in-combinatory-analysis
    difficulty: advanced
  - type: scholarly-reference
    title: A Convergent Series for the Partition Function p(n)
    description: Rademacher's later exact convergent series for the partition function.
    url: https://www.pnas.org/doi/10.1073/pnas.23.2.78
    difficulty: advanced
sources:
  - title: Asymptotic Formulae in Combinatory Analysis
    author: G. H. Hardy and S. Ramanujan
    type: primary
    url: https://archive.org/details/hardy-ramanujan-1918-asymptotic-formulaae-in-combinatory-analysis
    locator: Proceedings of the London Mathematical Society, series 2, volume 17 (1918), pages 75–115.
  - title: A Convergent Series for the Partition Function p(n)
    author: Hans Rademacher
    type: primary
    url: https://www.pnas.org/doi/10.1073/pnas.23.2.78
    locator: Proceedings of the National Academy of Sciences 23, no. 2 (1937), pages 78–84.
  - title: Rademacher's Series for the Partition Function
    author: Bruce C. Berndt
    type: secondary
    url: https://link.springer.com/content/pdf/10.1007/978-1-4612-0999-7_5.pdf
    locator: Chapter 5, exposition of Rademacher's exact formula.
related: [partition-congruences]
formulas:
  - label: Hardy–Ramanujan partition asymptotic
    latex: 'p(n) \sim \frac{1}{4n\sqrt{3}}\exp\!\left(\pi\sqrt{\frac{2n}{3}}\right)'
    description: As n grows without bound, the ratio of p(n) to the displayed expression tends to one; this estimates growth and is not an exact formula for each n.
  - label: Coefficient extraction on a circle
    latex: 'p(n)=\frac{1}{2\pi i}\oint_{|q|=r}\frac{\prod_{m=1}^{\infty}(1-q^m)^{-1}}{q^{n+1}}\,dq,\qquad 0<r<1'
    description: Cauchy's coefficient formula extracts the coefficient p(n) by integrating the partition generating function around any circle of radius r strictly between zero and one.
---

## The question: how fast does partition counting grow?

The partition numbers begin 1, 1, 2, 3, 5, 7, 11, 15, 22, 30, 42, and then rise quickly. The definition is elementary, but predicting the size of p(n) for a very large n is not. In 1918 G. H. Hardy and Srinivasa Ramanujan found a striking asymptotic formula for that growth. Their method is now known as the circle method.

“Asymptotic” has a precise meaning here: the proposed expression becomes a better relative approximation as n tends to infinity. It does not say that the expression equals p(n) for each finite n.

## The generating function packages every count

For each possible part size m, the geometric series 1+q^m+q^(2m)+⋯ records choosing zero, one, two, or more parts of size m. Multiplying these choices for m=1,2,3,… records every partition. The coefficient of q^n is p(n).

This product converges for complex q with |q|<1. Cauchy's coefficient formula says that the coefficient can be extracted by integrating the function around a circle |q|=r inside that disk; the formula is included above. The circle is not just a picture: it is a contour in the complex plane on which the generating function can be analyzed.

## The main equation in plain language

The symbol p(n) means “the number of partitions of n.” The formula with the wavy equals sign says: as n gets very large, p(n) is close to the expression on the right, in the sense that their ratio approaches 1. It is not an exact count for small n. The exponential factor is the source of the rapid growth; the square root and 4n√3 scale that growth to a closer estimate. For n=100, substituting 100 gives about 199 million, compared with the exact 190,569,292. The contour equation answers a different question: it tells how to extract the coefficient p(n) from the generating product. The factor q to the power −n−1 selects degree n. To see why the integral selects it, write q=r e^(iθ) and imagine expanding the generating function as p(0)+p(1)q+p(2)q²+…. As θ runs once around the circle, the unwanted powers rotate and average to zero; only the term with power n survives the integral. Any radius r strictly between zero and one works because the product converges throughout that disk.

## Example 1: a small partition count

For n=5, the seven partitions are 5; 4+1; 3+2; 3+1+1; 2+2+1; 2+1+1+1; and 1+1+1+1+1. Thus p(5)=7. In the generating product, the term q^5 receives one contribution from each of those choices of parts.

This finite example checks the meaning of the coefficient, but it cannot explain the large-n growth. For that, the contour integral is more useful than listing partitions.

## Example 2: what the asymptotic predicts

At n=100, the leading Hardy–Ramanujan expression is approximately 199,280,893, while the exact value is p(100)=190,569,292. It overestimates by about 4.6 percent. At n=5 the expression is about 8.94, whereas p(5)=7, a larger relative error. Asymptotic formulas describe the trend as the input grows, not every small case equally well.

## Why roots of unity matter

The product has special behavior near points on the unit circle where q is a root of unity. Near q=1, many factors become small together; other roots of unity also create structured contributions. When the integration circle is divided into short arcs, neighborhoods of those roots are the major arcs. The remaining portions are minor arcs, whose combined contribution can be bounded.

The word “circle” refers to integrating around a contour, then organizing the contour into arcs associated with rational angles. Near a root of unity, the generating function can be approximated in a form that makes the coefficient integral tractable. The dominant arc supplies the leading exponential growth; the other arcs and the error estimates refine the result. A full proof requires careful estimates, so this is an outline rather than a substitute for the original analysis.

## Historical attribution and later refinement

Hardy and Ramanujan jointly established the asymptotic formula. It should not be described as a result by Ramanujan alone: Hardy contributed to the analytic method and proof, and their collaboration is central to the history of the paper.

Hans Rademacher later sharpened the circle-method approach and, in 1937, derived an exact convergent series for p(n). “Exact” here means the infinite series sums to the integer partition number; its convergence is different from the asymptotic equivalence above. Rademacher's theorem is a later refinement, not the statement Hardy and Ramanujan originally proved.

## Significance and limits

The method gave number theorists a way to turn a generating function into quantitative information about its coefficients. Hardy and Ramanujan's result is a foundational example of combining complex analysis with arithmetic structure. The lesson is broader than partitions: a generating function may have singular behavior concentrated near special boundary points, and those points can control coefficient growth.

This page states the classical partition asymptotic for positive integers n tending to infinity. The integral representation requires 0<r<1, where the product is analytic. The major/minor arc explanation conveys the mechanism, but precise error bounds and Rademacher's series require the technical details in the cited papers.

## Explore further

Start with Hardy and Ramanujan's 1918 paper for the original argument. Rademacher's paper and Berndt's exposition explain the later convergent series and its relation to the circle method.
