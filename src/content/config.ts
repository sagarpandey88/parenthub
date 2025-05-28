import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Pre-Pregnancy', 'Pregnancy', 'Post-Pregnancy']),
    tags: z.array(z.string()),
    author: z.string(),
    publishedDate: z.string().transform((str) => new Date(str)),
    updatedDate: z.string().transform((str) => new Date(str)).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
