// Construtores de JSON-LD. Codigo em ingles; nenhum texto de tela aqui.
import { site } from './labels';

const personId = `${site.url}/#person`;

// Perfis que provam a identidade do autor para o Google (sameAs do Person).
const sameAs = [site.github, site.linkedin, site.lattes, site.orcid, site.scholar, site.packagist];

// Person: a entidade que liga todos os textos ao autor. Usada na home e em /about.
export const person = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  url: site.url,
  jobTitle: 'Engenheiro de software',
  sameAs,
});

// BreadcrumbList: em toda pagina. items na ordem, do raiz ate a atual.
export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: new URL(item.path, site.url).href,
  })),
});

interface ArticleData {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate?: Date;
  image?: string;
}

// TechArticle: artigos e notas. author referencia a mesma Person.
export const techArticle = (a: ArticleData) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: a.title,
  description: a.description,
  url: new URL(a.path, site.url).href,
  datePublished: a.pubDate.toISOString().slice(0, 10),
  dateModified: (a.updatedDate ?? a.pubDate).toISOString().slice(0, 10),
  ...(a.image ? { image: a.image } : {}),
  author: { '@id': personId },
  publisher: { '@id': personId },
});

interface PublicationData {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
}

// ScholarlyArticle: publicacoes academicas. sameAs e identifier apontam para o DOI quando houver.
export const scholarlyArticle = (p: PublicationData) => ({
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: p.title,
  author: p.authors.map((name) => ({ '@type': 'Person', name })),
  datePublished: String(p.year),
  isPartOf: { '@type': 'Periodical', name: p.venue },
  ...(p.doi
    ? {
        sameAs: `https://doi.org/${p.doi}`,
        identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: p.doi },
      }
    : {}),
  ...(p.url ? { url: p.url } : {}),
});
