import { describe, expect, it } from 'vitest';
import { discoveryOrder, orderDiscoveries } from '../src/content/discoveries';

const expectedOrder = [
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
  'ramanujan-summation',
  'further-pi-series',
] as const;

describe('discovery order', () => {
  it('defines the exact stable 13-topic learning path', () => {
    expect(discoveryOrder).toEqual(expectedOrder);
    expect(new Set(discoveryOrder).size).toBe(discoveryOrder.length);
    expect(discoveryOrder).not.toContain('1729');
  });

  it('orders supplied discoveries by the manifest and tolerates planned entries', () => {
    const entries = [
      { data: { slug: 'highly-composite-numbers' } },
      { data: { slug: 'partition-congruences' } },
      { data: { slug: 'pi-series' } },
    ];

    expect(orderDiscoveries(entries).map(({ data }) => data.slug)).toEqual([
      'partition-congruences',
      'pi-series',
      'highly-composite-numbers',
    ]);
  });

  it('rejects supplied slugs that are absent from the manifest', () => {
    expect(() => orderDiscoveries([{ data: { slug: 'not-a-discovery' } }])).toThrow(
      'Unknown discovery slug: not-a-discovery',
    );
  });
});
