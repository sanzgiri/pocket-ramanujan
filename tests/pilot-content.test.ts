import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pilotSlugs } from '../src/content/discoveries/index';

const contentRoot = resolve(process.cwd(), 'src/content/discoveries');
const requiredMarkers = ['summary:', 'intuition:', 'example:', 'significance:', 'exploreFurther:', 'sources:', 'formulas:'];

describe('pilot discovery collection', () => {
  it('contains exactly the three initial discoveries in order', () => {
    expect(pilotSlugs).toEqual(['partition-congruences', 'pi-series', 'highly-composite-numbers']);
    expect(pilotSlugs).not.toContain('1729');
  });

  it('gives every pilot page the required editorial sections', () => {
    for (const slug of pilotSlugs) {
      const source = readFileSync(resolve(contentRoot, `${slug}.md`), 'utf8');
      for (const marker of requiredMarkers) expect(source).toContain(marker);
      expect(source).not.toMatch(/title:\s*['"]?1729['"]?/i);
    }
  });
});
