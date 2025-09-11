import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const documentation = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./documentation" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    version: z.string(),
  }),
});

export const collections = { documentation };
