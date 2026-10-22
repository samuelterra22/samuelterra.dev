import type { APIRoute } from 'astro';
import { renderOg } from '@lib/og';
import { site } from '@lib/labels';

// Imagem de compartilhamento padrao, para as paginas que nao sao artigo nem nota.
export const GET: APIRoute = async () => {
  const png = await renderOg({ title: site.name, description: site.intro });
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
