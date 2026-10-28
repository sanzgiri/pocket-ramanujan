export const pilotSlugs = [
  'partition-congruences',
  'pi-series',
  'highly-composite-numbers',
] as const;

export const discoveryOrder = [
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

const discoveryPosition = new Map<string, number>(
  discoveryOrder.map((slug, index) => [slug, index]),
);

export function orderDiscoveries<T extends { data: { slug: string } }>(entries: readonly T[]): T[] {
  return entries
    .map((entry) => {
      const position = discoveryPosition.get(entry.data.slug);
      if (position === undefined) {
        throw new Error(`Unknown discovery slug: ${entry.data.slug}`);
      }
      return { entry, position };
    })
    .sort((left, right) => left.position - right.position)
    .map(({ entry }) => entry);
}
