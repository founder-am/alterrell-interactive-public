import { defineCollection, z } from 'astro:content';

const pieces = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['live', 'coming-soon']),
    category: z.enum(['industry', 'culture', 'govt', 'health']),
    format: z.enum(['interactive', 'series']),
    stakes: z.string(),
    publishDate: z.coerce.date().optional(),
    hero: z.object({
      headline: z.string(),
      dek: z.string().optional(),
    }),
    journey: z.object({
      youtube: z.string().optional(),
      substack: z.string().optional(),
    }).optional(),
    tabs: z.array(z.object({
      id: z.string(),
      label: z.string(),
    })).optional(),
    // Share block (Overview tab)
    shareX: z.string().optional(),   // pre-encoded tweet text
    shareUrl: z.string().optional(), // canonical URL override
  }),
});

export const collections = { pieces };
