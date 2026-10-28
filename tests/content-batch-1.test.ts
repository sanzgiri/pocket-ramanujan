import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { discoverySchema } from '../src/content/schema';

const contentRoot = resolve(process.cwd(), 'src/content/discoveries');
const slugs = [
  'hardy-ramanujan-circle-method',
  'rogers-ramanujan-identities',
  'ramanujan-tau-function',
];

function readLesson(slug: string) {
  const source = readFileSync(resolve(contentRoot, `${slug}.md`), 'utf8');
  const [, frontmatter, body] = source.split('---', 3);
  return { data: discoverySchema.parse(parse(frontmatter)), body };
}

describe('batch 1 lessons', () => {
  it('adds every planned batch slug in valid, source-backed lesson records', () => {
    for (const slug of slugs) {
      const { data } = readLesson(slug);
      expect(data.slug).toBe(slug);
      expect(data.sources.length).toBeGreaterThan(0);
      expect(data.exploreFurther.length).toBeGreaterThan(0);
      expect(data.attribution).toBeTruthy();
      expect(data.formulas.length).toBeGreaterThan(0);
      expect(data.formulas.every(({ description }) => description.trim().length > 0)).toBe(true);
    }
  });

  it('gives each lesson multiple worked examples and explanatory sections', () => {
    for (const slug of slugs) {
      const { body } = readLesson(slug);
      expect(body.match(/^## /gm)?.length ?? 0).toBeGreaterThanOrEqual(6);
      expect(body.match(/^## .*\b(example|calculation|coefficient check)\b.*$/gim)?.length ?? 0).toBeGreaterThanOrEqual(2);
      expect(body.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(600);
    }
  });
});
