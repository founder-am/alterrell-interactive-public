import { defineCollection, z } from 'astro:content';

const pieces = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['live', 'coming-soon']),
    // category and stakes are optional so a piece whose source names neither
    // can ship without one being invented. HubCard in src/lib/hub.ts already
    // types both as optional for that reason; this makes the schema agree.
    // Where's Beyoncé is the piece that carries neither.
    category: z.enum(['industry', 'culture', 'govt', 'health']).optional(),
    format: z.enum(['interactive', 'series']),
    stakes: z.string().optional(),
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
