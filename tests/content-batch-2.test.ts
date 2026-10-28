import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { discoverySchema } from '../src/content/schema';

const contentRoot = resolve(process.cwd(), 'src/content/discoveries');
const slugs = ['continued-fractions', 'modular-equations', 'mock-theta-functions'];

function readLesson(slug: string) {
  const source = readFileSync(resolve(contentRoot, `${slug}.md`), 'utf8');
  const [, frontmatter, body] = source.split('---', 3);
  return { data: discoverySchema.parse(parse(frontmatter)), body };
}

describe('batch 2 lessons', () => {
  it('adds every planned batch slug with valid sources and described formulas', () => {
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

  it('gives each lesson instructional sections, two worked examples, and sufficient substance', () => {
    for (const slug of slugs) {
      const { body } = readLesson(slug);
      expect(body.match(/^## /gm)?.length ?? 0).toBeGreaterThanOrEqual(6);
      expect(body.match(/^## .*\b(example|calculation|convergent|coefficient check)\b.*$/gim)?.length ?? 0).toBeGreaterThanOrEqual(2);
      expect(body.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(600);
    }
  });
});
