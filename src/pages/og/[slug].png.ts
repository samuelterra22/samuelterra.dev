import type { APIRoute } from 'astro';
import { getArticles, getNotes } from '@lib/content';
import { renderOg } from '@lib/og';
import type { Level, Kind } from '@lib/labels';

export async function getStaticPaths() {
  const [articles, notes] = await Promise.all([getArticles(), getNotes()]);
  return [
    ...articles.map((e) => ({
      params: { slug: e.id },
      props: { kind: 'article', title: e.data.title, description: e.data.description, level: e.data.level },
    })),
    ...notes.map((e) => ({
      params: { slug: e.id },
      props: { kind: 'note', title: e.data.title, description: e.data.description, level: e.data.level },
    })),
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const { kind, title, description, level } = props as {
    kind: Kind;
    title: string;
    description: string;
    level: Level;
  };
  const png = await renderOg({ kind, title, description, level });
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
