import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),   // e.g. /images/blog/my-post.jpg
    source: z.string().optional(),  // link to the original post (e.g. Facebook)
    video: z.string().optional(),   // link to a related video or reel
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
