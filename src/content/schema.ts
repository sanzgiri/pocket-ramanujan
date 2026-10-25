import { z } from 'zod';

const applicationSchema = z.object({
  label: z.string().min(1),
  text: z.string().min(1),
});

const exploreLinkSchema = z.object({
  type: z.enum(['video', 'explainer', 'lecture', 'original-paper', 'scholarly-reference', 'application']),
  title: z.string().min(1),
  description: z.string().min(1),
  url: z.url(),
  difficulty: z.enum(['introductory', 'intermediate', 'advanced']),
});

const sourceSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  type: z.enum(['primary', 'secondary', 'online-archive', 'video', 'explainer']),
  url: z.url(),
  locator: z.string().optional(),
});

const formulaSchema = z.object({
  label: z.string().min(1),
  latex: z.string().min(1),
  description: z.string().min(1),
});

export const discoverySchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  period: z.string().min(1),
  difficulty: z.enum(['introductory', 'intermediate', 'advanced']),
  resultType: z.enum(['theorem', 'identity', 'conjecture', 'method', 'approximation', 'concept']),
  attribution: z.enum(['discovered', 'conjectured', 'collaborative', 'proved-later', 'later-inspired']),
  intuition: z.string().min(1),
  notation: z.string().min(1),
  example: z.string().min(1),
  significance: z.string().min(1),
  applications: z.array(applicationSchema).default([]),
  exploreFurther: z.array(exploreLinkSchema).min(1),
  sources: z.array(sourceSchema).min(1),
  related: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).default([]),
  formulas: z.array(formulaSchema).min(1),
}).superRefine((value, context) => {
  if (value.slug === '1729' || value.title.trim() === '1729') {
    context.addIssue({ code: 'custom', path: ['slug'], message: 'The 1729 anecdote is excluded from the collection.' });
  }
});

export type Discovery = z.infer<typeof discoverySchema>;
export type ExploreLink = z.infer<typeof exploreLinkSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type Formula = z.infer<typeof formulaSchema>;
