import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getArticles, getNotes, articleHref, noteHref } from '@lib/content';
import { site } from '@lib/labels';

export async function GET(context: APIContext) {
  const [articles, notes] = await Promise.all([getArticles(), getNotes()]);
  const items = [
    ...articles.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.pubDate,
      link: articleHref(e.id),
    })),
    ...notes.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      pubDate: e.data.pubDate,
      link: noteHref(e.id),
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: site.name,
    description: site.tagline,
    site: context.site ?? site.url,
    items,
  });
}
