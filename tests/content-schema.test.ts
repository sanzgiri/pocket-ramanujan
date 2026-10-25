import { describe, expect, it } from 'vitest';
import { discoverySchema } from '../src/content/schema';

const validDiscovery = {
  slug: 'partition-congruences',
  title: 'Partition Congruences',
  summary: 'Hidden regularity in the ways integers can be partitioned.',
  category: 'Partition theory',
  period: '1919',
  difficulty: 'introductory',
  resultType: 'theorem',
  attribution: 'discovered',
  intuition: 'Some counting patterns become visible only when viewed modulo a number.',
  notation: 'The partition function p(n) counts unordered sums of positive integers.',
  example: 'p(4) = 5 because 4 has five partitions.',
  significance: 'The congruences connect combinatorics to number theory.',
  applications: [{ label: 'Later influence', text: 'A foundation for later work in modular forms.' }],
  exploreFurther: [{ type: 'video', title: 'A lecture', description: 'A gentle lecture.', url: 'https://example.com/video', difficulty: 'intermediate' }],
  sources: [{ title: 'Collected Papers', author: 'S. Ramanujan', type: 'primary', url: 'https://example.com/paper' }],
  related: [],
  formulas: [{ label: 'A congruence', latex: 'p(5n+4) \\equiv 0 \\pmod{5}', description: 'The partition count is divisible by five.' }],
};

describe('discoverySchema', () => {
  it('accepts a complete discovery record', () => {
    expect(discoverySchema.safeParse(validDiscovery).success).toBe(true);
  });

  it.each([
    ['missing title', { title: undefined }],
    ['missing attribution', { attribution: undefined }],
    ['missing sources', { sources: [] }],
    ['forbidden 1729 slug', { slug: '1729' }],
    ['malformed difficulty', { difficulty: 'expert-ish' }],
  ])('rejects %s', (_label, override) => {
    const result = discoverySchema.safeParse({ ...validDiscovery, ...override });
    expect(result.success).toBe(false);
  });
});
