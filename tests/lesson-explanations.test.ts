import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const contentRoot = resolve(process.cwd(), 'src/content/discoveries');
const slugs = [
  'partition-congruences',
  'pi-series',
  'highly-composite-numbers',
  'hardy-ramanujan-circle-method',
  'rogers-ramanujan-identities',
  'ramanujan-tau-function',
  'continued-fractions',
  'modular-equations',
  'mock-theta-functions',
  'gamma-function-approximations',
  'ramanujan-master-theorem',
];

function plainLanguageWalkthrough(body: string) {
  const start = body.indexOf('## The main equation in plain language');
  if (start < 0) return '';
  const nextHeading = body.indexOf('\n## ', start + 1);
  return body.slice(start, nextHeading < 0 ? body.length : nextHeading);
}

describe('plain-language mathematics walkthroughs', () => {
  it('gives each existing lesson a substantive translation of its main equation', () => {
    for (const slug of slugs) {
      const source = readFileSync(resolve(contentRoot, `${slug}.md`), 'utf8');
      const body = source.split('---').slice(2).join('---');
      const walkthrough = plainLanguageWalkthrough(body);
      const words = walkthrough.split(/\s+/).filter(Boolean);

      expect(walkthrough, `${slug} needs a plain-language equation walkthrough`).not.toBe('');
      expect(words.length, `${slug} walkthrough should explain, not merely label`).toBeGreaterThanOrEqual(80);
    }
  });
});
