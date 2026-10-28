---
slug: ramanujan-tau-function
title: Ramanujan's Tau Function
summary: The coefficients of a modular form reveal deep arithmetic laws—and a conjecture proved decades later.
category: Number theory and modular forms
period: '1916'
difficulty: intermediate
resultType: concept
attribution: discovered
intuition: A coefficient sequence created by multiplying a simple infinite product unexpectedly behaves like a highly structured arithmetic function.
notation: For a complex number z with positive imaginary part, set q=e^(2πiz); then |q|<1, and the coefficients of q times the product of (1-q^n)^24 define Ramanujan's tau function.
example: Expanding the product begins q - 24q² + 252q³ - 1472q⁴ + 4830q⁵ + …, so tau(2)=-24 and tau(3)=252.
significance: The tau function became a central example linking Fourier coefficients, modular forms, prime arithmetic, and the later proof of Ramanujan's conjectural bound by Deligne.
applications:
  - label: Later influence
    text: The tau function helped shape the theory of Hecke eigenforms and the arithmetic study of modular-form coefficients. Ramanujan's prime-coefficient bound was later proved by Deligne using the Weil conjectures.
exploreFurther:
  - type: original-paper
    title: On Certain Arithmetical Functions
    description: Ramanujan's 1916 paper introducing properties of tau and related arithmetic functions.
    url: https://ramanujan.sirinudi.org/Volumes/published/ram18.html
    difficulty: advanced
  - type: scholarly-reference
    title: Ramanujan and Modular Forms
    description: William Duke surveys Ramanujan's modular-form work and later developments.
    url: https://www.math.ucla.edu/~wdduke/preprints/ramanujan.pdf
    difficulty: advanced
sources:
  - title: On Certain Arithmetical Functions
    author: Srinivasa Ramanujan
    type: primary
    url: https://ramanujan.sirinudi.org/Volumes/published/ram18.pdf
    locator: Transactions of the Cambridge Philosophical Society 22 (1916), pages 159–184.
  - title: Ramanujan and Modular Forms
    author: William Duke
    type: secondary
    url: https://www.math.ucla.edu/~wdduke/preprints/ramanujan.pdf
  - title: Ramanujan's Unpublished Manuscript on the Partition and Tau Functions with Proofs and Commentary
    author: Bruce C. Berndt and Ken Ono
    type: secondary
    url: https://doi.org/10.1007/978-3-642-56513-7_3
    locator: The Andrews Festschrift (2001), pages 39–110.
related: [hardy-ramanujan-circle-method, modular-equations]
formulas:
  - label: The modular discriminant and tau coefficients
    latex: '\Delta(z)=q\prod_{n=1}^{\infty}(1-q^n)^{24}=\sum_{n=1}^{\infty}\tau(n)q^n,\qquad q=e^{2\pi i z},\ \operatorname{Im}(z)>0'
    description: In the upper half-plane, the modular discriminant equals q times an infinite product and also its power series; tau(n) is the coefficient of q to the n.
  - label: Prime-power recurrence
    latex: '\tau(p^{r+1})=\tau(p)\tau(p^r)-p^{11}\tau(p^{r-1}),\qquad r\ge 1'
    description: For a prime p and integer r at least one, the next tau value at a power of p is determined by the previous two.
  - label: Ramanujan–Petersson bound for primes
    latex: '|\tau(p)|\le 2p^{11/2}'
    description: For every prime p, the absolute value of tau(p) is at most twice p to the power eleven halves; Ramanujan conjectured this bound and Deligne later proved it.
---

## From a product to an arithmetic function

The tau function begins with a product, not with a counting rule. Let z be a complex number in the upper half-plane, meaning its imaginary part is positive, and put q=e^(2πiz). Then |q|<1, so the following product converges. Its coefficients are the numbers Ramanujan called tau(n): the formula is displayed in the mathematics panel above.

The first terms are q - 24q² + 252q³ - 1472q⁴ + 4830q⁵ + …. Thus tau(1)=1, tau(2)=-24, tau(3)=252, and tau(4)=-1472. The product is also the modular discriminant, a cusp form of weight 12 for the full modular group. “Cusp form” means, roughly, a modularly symmetric function that vanishes at the cusp; its Fourier coefficients carry rich arithmetic information.

## Example 1: expand enough to find tau(2)

To get the coefficient tau(2), only the first few factors matter. In (1-q)^24, the linear term is -24q. Every factor (1-q^n)^24 for n≥2 begins at degree q² or higher. Multiplying by the initial q therefore gives coefficient -24 for q². Hence tau(2)=-24.

This calculation illustrates how a coefficient can be read locally from an infinite product: factors whose first nonconstant term is too high cannot affect the coefficient being computed.

## Example 2: a recurrence predicts tau(4)

Ramanujan found recurrence relations for tau at prime powers. For p=2 and r=1, the recurrence says tau(4)=tau(2)^2-2^11 tau(1). Substituting tau(2)=-24 and tau(1)=1 gives 576-2048=-1472, agreeing with the coefficient obtained by expanding the product.

The same rule can be used for higher powers without expanding all 24th powers in the product. Its proof comes from the structure of the modular form and its Hecke operators; this page uses the recurrence as a calculation tool rather than deriving the full theory.

## Example 3: multiply at coprime inputs

Another property is multiplicativity at relatively prime arguments: if the greatest common divisor of m and n is 1, then tau(mn)=tau(m)tau(n). Since 2 and 3 are coprime, tau(6)=tau(2)tau(3)=(-24)(252)=-6048. This lets us calculate a coefficient at a composite number from two smaller ones.

The hypotheses matter. The simple product rule is stated here only for coprime inputs; prime powers instead obey the recurrence. Confusing those two cases would give incorrect arithmetic.

## What Ramanujan conjectured

Ramanujan's 1916 paper recorded several remarkable properties of tau, including its multiplicative behavior and a bound on its values at primes: the absolute value of tau(p) should be no larger than 2p^(11/2). This prime bound is part of what is now called the Ramanujan–Petersson conjecture for the weight-12 discriminant form.

The bound was not proved by Ramanujan. Mordell established key structural results about tau and its recurrence, while the prime bound was proved by Pierre Deligne in 1974 as a consequence of his work on the Weil conjectures. That proof uses powerful methods from algebraic geometry and is far beyond the elementary coefficient calculation above. The distinction between conjecture and later proof is essential to the history.

## Why a modular form appears

The product has a hidden symmetry under transformations of z. In modern language, the modular discriminant is a normalized eigenform: its coefficients interact systematically with arithmetic operations on integers. The recurrence and multiplicativity are manifestations of this structure, rather than coincidences visible from the first few coefficients.

This is one reason tau became a test case for the general theory of modular forms and Hecke operators. Ramanujan noticed strong coefficient laws before the modern framework was fully developed. Later mathematicians explained how his observations fit into that framework and generalized the ideas to other modular forms.

## Significance, attribution, and limits

The function itself was introduced by Ramanujan in his 1916 paper. Some properties were stated or investigated there, while proofs and a systematic theory arrived later. Deligne's theorem is a later proof of a conjectured bound, not a discovery by Ramanujan and not an experimental confirmation.

The results discussed here concern an exact arithmetic sequence and its role in number theory. They are mathematically influential; this lesson does not claim a direct engineering application. The generating product and Fourier expansion are valid for z in the upper half-plane, equivalently |q|<1. The prime bound applies to prime inputs, whereas the recurrence concerns prime powers.

## Explore further

Ramanujan's paper is the primary source for the original arithmetic observations. Duke's survey explains the modular-form setting and later developments; Berndt and Ono provide proofs and commentary on Ramanujan's unpublished manuscript.
