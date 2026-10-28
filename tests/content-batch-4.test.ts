import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { discoverySchema } from '../src/content/schema';

const contentRoot = resolve(process.cwd(), 'src/content/discoveries');
const slugs = ['ramanujan-summation', 'further-pi-series'];

function readLesson(slug: string) {
  const source = readFileSync(resolve(contentRoot, `${slug}.md`), 'utf8');
  const [, frontmatter, body] = source.split('---', 3);
  return { data: discoverySchema.parse(parse(frontmatter)), body };
}

describe('batch 4 lessons', () => {
  it('adds two attributed, sourced lessons with described formulas', () => {
    for (const slug of slugs) {
      const { data } = readLesson(slug);
      expect(data.slug).toBe(slug);
      expect(data.attribution).toBeTruthy();
      expect(data.sources.length).toBeGreaterThanOrEqual(2);
      expect(data.exploreFurther.length).toBeGreaterThan(0);
      expect(data.formulas.length).toBeGreaterThan(0);
      expect(data.formulas.every(({ description }) => description.trim().length > 0)).toBe(true);
    }
  });

  it('teaches both equations with examples and explicit hypotheses', () => {
    for (const slug of slugs) {
      const { body } = readLesson(slug);
      expect(body).toContain('## The main equation in plain language');
      expect(body.match(/^## /gm)?.length ?? 0).toBeGreaterThanOrEqual(6);
      expect(body.match(/^## .*\b(example|calculation|worked)\b.*$/gim)?.length ?? 0).toBeGreaterThanOrEqual(2);
      expect(body).toMatch(/condition|assumption|range|hypothes|converg/i);
      expect(body.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(600);
    }
  });

  it('clearly distinguishes Ramanujan summation from ordinary convergence', () => {
    const { body } = readLesson('ramanujan-summation');
    expect(body).toContain('## Ordinary convergence versus Ramanujan summation');
    expect(body).toContain('Euler–Maclaurin');
    expect(body).toContain('partial sums');
    expect(body).toMatch(/not an ordinary sum|does not converge in the ordinary sense/i);
    expect(body).toMatch(/C_0|C\\_0|C₀/);
  });
});
