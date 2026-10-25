import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { discoverySchema } from './content/schema';

export const collections = {
  discoveries: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/discoveries' }),
    schema: discoverySchema,
  }),
};
