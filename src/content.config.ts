import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    externalUrl: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const gakusai = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gakusai' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    university: z.string().optional(),
    festivalName: z.string().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    noteUrl: z.string().optional(),
  }),
});

export const collections = { news, gakusai };
