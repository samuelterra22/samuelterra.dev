import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Valores em inglês no código; os rótulos em português estão em src/lib/labels.ts.
export const levels = ['beginner', 'intermediate', 'advanced'] as const;
export const topics = [
  'applied-ai',
  'laravel-filament',
  'architecture',
  'infra',
  'career-method',
  'hardware',
  'academia',
] as const;

const level = z.enum(levels);
const topic = z.enum(topics);

// Arquivos que começam com "_" (o template, por exemplo) nunca entram na coleção.
const mdx = (dir: string) => glob({ pattern: '**/[^_]*.mdx', base: `./src/content/${dir}` });

const readingBase = {
  title: z.string().min(10).max(90),
  // Vira a meta description e o resumo nos cards; o Google corta acima de 155.
  description: z.string().min(40).max(155),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  topic: z.array(topic).min(1).max(2),
  level,
  tags: z.array(z.string()).default([]),
  // URL do post no LinkedIn; a discussão acontece lá.
  linkedin: z.string().url().optional(),
  draft: z.boolean().default(false),
};

const articles = defineCollection({
  loader: mdx('articles'),
  schema: ({ image }) =>
    z.object({
      ...readingBase,
      series: z.string().optional(),
      cover: image().optional(),
    }),
});

const notes = defineCollection({
  loader: mdx('notes'),
  schema: z.object(readingBase),
});

// Uma trilha ordena artigos e notas já publicados, com um parágrafo de ligação entre cada um.
const paths = defineCollection({
  loader: mdx('paths'),
  schema: z.object({
    ...readingBase,
    steps: z
      .array(
        z.object({
          article: reference('articles').optional(),
          note: reference('notes').optional(),
          external: z.string().url().optional(),
          // O parágrafo de ligação: por que este passo vem aqui e o que levar dele.
          why: z.string().min(20),
          // "Pare aqui se só quer o básico."
          stopHere: z.boolean().default(false),
        }),
      )
      .min(2),
  }),
});

const projects = defineCollection({
  loader: mdx('projects'),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string().max(155),
      year: z.number().int().min(2017),
      status: z.enum(['active', 'done', 'paused']).default('active'),
      stack: z.array(z.string()).min(1),
      repo: z.string().url().optional(),
      url: z.string().url().optional(),
      cover: image().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

// Publicações acadêmicas: dados estruturados em JSON, uma entrada por publicação.
const publications = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(['journal', 'conference', 'bachelor-thesis', 'master-thesis', 'other']),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    // Resumo de uma frase, em linguagem comum.
    summary: z.string().max(240),
  }),
});

export const collections = { articles, notes, paths, projects, publications };
