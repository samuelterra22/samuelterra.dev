// Consultas de conteudo com a trava de rascunho em um lugar so.
// Rascunho (draft: true) nunca aparece, nem em dev, a menos que SHOW_DRAFTS=true.
import { getCollection, type CollectionEntry } from 'astro:content';
import { readingMinutes, type Kind } from './labels';

const showDrafts = process.env.SHOW_DRAFTS === 'true';
const isPublished = (e: { data: { draft?: boolean } }) => showDrafts || !e.data.draft;

const byNewest = (
  a: { data: { pubDate: Date } },
  b: { data: { pubDate: Date } },
) => b.data.pubDate.getTime() - a.data.pubDate.getTime();

export const articleHref = (slug: string) => `/articles/${slug}`;
export const noteHref = (slug: string) => `/articles/notes/${slug}`;
export const pathHref = (slug: string) => `/articles/paths/${slug}`;
export const projectHref = (slug: string) => `/projects/${slug}`;

export const getArticles = async () =>
  (await getCollection('articles')).filter(isPublished).sort(byNewest);

export const getNotes = async () =>
  (await getCollection('notes')).filter(isPublished).sort(byNewest);

export const getPaths = async () =>
  (await getCollection('paths')).filter(isPublished).sort(byNewest);

export const getProjects = async () =>
  (await getCollection('projects'))
    .filter(isPublished)
    .sort((a, b) => Number(b.data.featured) - Number(a.data.featured) || b.data.year - a.data.year);

// Publicacoes nao tem rascunho; ordena da mais recente para a mais antiga.
export const getPublications = async () =>
  (await getCollection('publications')).sort((a, b) => b.data.year - a.data.year);

// Forma unificada para as listas (Home, Artigos, temas, niveis).
export interface ReadingItem {
  kind: Kind;
  href: string;
  title: string;
  description: string;
  level: CollectionEntry<'articles'>['data']['level'];
  topics: CollectionEntry<'articles'>['data']['topic'];
  minutes: number;
  date: Date;
  series?: string;
}

const toItem = (kind: Kind, href: (s: string) => string) => (
  e: CollectionEntry<'articles' | 'notes' | 'paths'>,
): ReadingItem => ({
  kind,
  href: href(e.id),
  title: e.data.title,
  description: e.data.description,
  level: e.data.level,
  topics: e.data.topic,
  minutes: readingMinutes(e.body ?? ''),
  date: e.data.pubDate,
  series: 'series' in e.data ? e.data.series : undefined,
});

// Todo o conteudo de leitura (artigos, notas, trilhas) num array so, do mais novo ao mais antigo.
export const getReading = async (): Promise<ReadingItem[]> => {
  const [articles, notes, paths] = await Promise.all([getArticles(), getNotes(), getPaths()]);
  return [
    ...articles.map(toItem('article', articleHref)),
    ...notes.map(toItem('note', noteHref)),
    ...paths.map(toItem('path', pathHref)),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());
};
