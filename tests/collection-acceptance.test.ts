import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';
import { describe, expect, it } from 'vitest';
import { discoveryOrder } from '../src/content/discoveries';
import { discoverySchema } from '../src/content/schema';

const contentRoot = resolve(process.cwd(), 'src/content/discoveries');
const markdownSlugs = readdirSync(contentRoot)
  .filter((file) => file.endsWith('.md'))
  .map((file) => file.slice(0, -3))
  .sort();

function readLesson(slug: string) {
  const source = readFileSync(resolve(contentRoot, `${slug}.md`), 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`${slug} has malformed YAML frontmatter`);
  const [, frontmatter, body] = match;
  return { source, data: discoverySchema.parse(parse(frontmatter)), body };
}

describe('complete 13-topic collection', () => {
  it('has exactly the manifest topics, with no extra or omitted lesson files', () => {
    expect(discoveryOrder).toHaveLength(13);
    expect(new Set(discoveryOrder).size).toBe(13);
    expect([...discoveryOrder].sort()).toEqual(markdownSlugs);
    expect(discoveryOrder).not.toContain('1729');
  });

  it('gives every lesson sourced formulas, a substantive walkthrough, and worked examples', () => {
    for (const slug of discoveryOrder) {
      const { source, data, body } = readLesson(slug);
      expect(data.slug, `${slug} frontmatter slug`).toBe(slug);
      expect(data.attribution, `${slug} attribution`).toBeTruthy();
      expect(data.sources.length, `${slug} sources`).toBeGreaterThanOrEqual(2);
      expect(data.formulas.length, `${slug} formulas`).toBeGreaterThan(0);
      expect(
        data.formulas.every(({ description }) => description.trim().length > 0),
        `${slug} formula descriptions`,
      ).toBe(true);
      expect(source, `${slug} must not contain the excluded anecdote`).not.toMatch(/1729/);

      expect(body, `${slug} plain-language section`).toContain('## The main equation in plain language');
      const walkthrough = body.split('## The main equation in plain language')[1]?.split(/^## /m)[0] ?? '';
      expect(walkthrough.split(/\s+/).filter(Boolean).length, `${slug} walkthrough length`).toBeGreaterThanOrEqual(80);
      expect(body.match(/^## /gm)?.length ?? 0, `${slug} instructional sections`).toBeGreaterThanOrEqual(6);
      expect(body.split(/\s+/).filter(Boolean).length, `${slug} lesson length`).toBeGreaterThanOrEqual(600);
      expect(
        body.match(/^## .*\b(example|calculation|worked|coefficient check)\b.*$/gim)?.length ?? 0,
        `${slug} worked-example sections`,
      ).toBeGreaterThanOrEqual(2);
    }
  });
});
