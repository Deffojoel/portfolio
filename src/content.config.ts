import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Structure d'un projet. Un champ absent ou mal écrit fait échouer le build, au lieu de casser le site. */
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    icon: z.string(),
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    outcome: z.string(),
    stack: z.array(z.string()),
    attack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    context: z.string(),
    goal: z.string(),
    did: z.array(z.string()),
    learned: z.string().optional(),
    results: z
      .array(z.object({ label: z.string(), items: z.array(z.string()) }))
      .optional(),
  }),
});

export const collections = { projects };
