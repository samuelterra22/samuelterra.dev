// Código em inglês, tela em português: este arquivo é a única ponte entre os dois.
import type { levels, topics } from '../content.config';

export type Level = (typeof levels)[number];
export type Topic = (typeof topics)[number];
export type Kind = 'article' | 'note' | 'path' | 'project';

export const levelLabels: Record<Level, string> = {
  beginner: 'iniciante',
  intermediate: 'intermediário',
  advanced: 'avançado',
};

// Quantas bolinhas preenchidas, de três.
export const levelDots: Record<Level, 1 | 2 | 3> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

export const topicLabels: Record<Topic, string> = {
  'applied-ai': 'IA aplicada',
  'laravel-filament': 'Laravel e Filament',
  architecture: 'Arquitetura',
  infra: 'Infra',
  'career-method': 'Carreira e método',
  hardware: 'Hardware',
  academia: 'Academia',
};

export const kindLabels: Record<Kind, string> = {
  article: 'Artigo',
  note: 'Nota',
  path: 'Trilha',
  project: 'Projeto',
};

export type PublicationType = 'journal' | 'conference' | 'thesis' | 'other';

export const publicationTypeLabels: Record<PublicationType, string> = {
  journal: 'Periódico',
  conference: 'Conferência',
  thesis: 'Monografia',
  other: 'Outro',
};

export const navLabels = {
  '/articles': 'Artigos',
  '/projects': 'Projetos',
  '/research': 'Pesquisa',
  '/about': 'Sobre',
  '/now': 'Agora',
  '/contact': 'Contato',
} as const;

export const site = {
  name: 'Samuel Terra Vieira',
  domain: 'samuelterra.dev',
  url: 'https://samuelterra.dev',
  tagline: 'Artigos sobre engenharia de software e IA.',
  // Frase da Home; confira contra docs/bio.md antes de mudar.
  intro: 'Engenheiro de software e mestre em Ciência da Computação. Construo sistemas com Laravel e IA.',
  linkedin: 'https://www.linkedin.com/in/samuelterra22/',
  github: 'https://github.com/samuelterra22',
  instagram: 'https://www.instagram.com/samuelterrav/',
  // Preencher quando os perfis existirem: lattes, orcid, scholar.
  sameAs: [] as string[],
} as const;

// Datas em metadados sempre no formato AAAA-MM-DD; por extenso só no corpo.
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const readingMinutes = (text: string) => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));
