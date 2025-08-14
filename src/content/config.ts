import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    gallery: z.array(z.string()),
    image: z.string(),
    links: z.object({
      repository: z.string().url(),
      web: z.string().url().nullable(),
    }),
  }),
});

const studies = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    institution: z.string().optional().nullable(),
    author: z.string().optional().nullable(),
    type: z.string(),
    year: z.number(),
    startingMonth: z.number(),
    link: z.string().url(),
  }),
});

const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string().optional().nullable(),
    confidence: z.number(),
  })
})

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    description: z.string(),
    type: z.string(),
    location: z.string().optional().nullable(),
    startYear: z.number(),
    startMonth: z.number(),
    endYear: z.number(),
    endMonth: z.number(),
    link: z.string().url(),
    img: z.string().optional().nullable(),
  })
})

export const collections = { projects, studies, tools, experience };
