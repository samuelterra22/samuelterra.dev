// Geracao da imagem de compartilhamento 1200x630 na build, com satori e resvg.
// Reproduz o layout de src/assets/brand/og-template.svg (so tema claro):
// rotulo, titulo em serifa, frase-resumo, linha hairline, nivel e o nome embaixo.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { levelDots, levelLabels, kindLabels, site, type Level, type Kind } from './labels';

const fontsDir = join(process.cwd(), 'public', 'fonts');
const serif = readFileSync(join(fontsDir, 'source-serif-4-latin-opsz-normal.woff2'));
const sans = readFileSync(join(fontsDir, 'source-sans-3-latin-wght-normal.woff2'));
const mono = readFileSync(join(fontsDir, 'source-code-pro-latin-wght-normal.woff2'));

// Cores do tema claro (tokens.css), fixas: a imagem nao segue tema.
const paper = '#faf8f3';
const ink = '#1f1d1a';
const inkMuted = '#5f5a52';
const hairline = '#dad6ce';
const signal = '#4f7f4c';

type Node = { type: string; props: Record<string, unknown> };
const el = (type: string, props: Record<string, unknown>): Node => ({ type, props });

const dot = (filled: boolean) =>
  el('div', {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9,
      ...(filled
        ? { backgroundColor: signal }
        : { border: `1.5px solid ${inkMuted}` }),
    },
  });

interface OgInput {
  kind?: Kind;
  title: string;
  description: string;
  level?: Level;
}

const template = ({ kind, title, description, level }: OgInput): Node =>
  el('div', {
    style: {
      // satori usa content-box: o padding fica nos filhos, nao na raiz, senao o conteudo
      // passa de 630 e o rodape sai do quadro. O spacer empurra o rodape para baixo.
      width: 1200,
      height: 630,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: paper,
      fontFamily: 'Source Sans 3',
    },
    children: [
      // Bloco de topo: rotulo, titulo, frase-resumo.
      el('div', {
        style: { display: 'flex', flexDirection: 'column', padding: '80px 80px 0' },
        children: [
          el('div', {
            style: {
              fontFamily: 'Source Code Pro',
              fontSize: 26,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: inkMuted,
            },
            children: kind ? kindLabels[kind] : site.domain,
          }),
          el('div', {
            style: {
              fontFamily: 'Source Serif 4',
              fontSize: 60,
              lineHeight: 1.1,
              color: ink,
              marginTop: 28,
              maxWidth: 1040,
            },
            children: title,
          }),
          el('div', {
            style: {
              fontSize: 30,
              lineHeight: 1.4,
              color: inkMuted,
              marginTop: 28,
              maxWidth: 1040,
            },
            children: description,
          }),
        ],
      }),
      // Spacer: come o espaco livre e empurra o rodape para a base do quadro.
      el('div', { style: { display: 'flex', flexGrow: 1 } }),
      // Bloco de baixo: linha hairline, nivel a esquerda, nome a direita.
      el('div', {
        style: { display: 'flex', flexDirection: 'column', padding: '0 80px 80px' },
        children: [
          el('div', { style: { height: 1, backgroundColor: hairline, marginBottom: 28 } }),
          el('div', {
            style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
            children: [
              level
                ? el('div', {
                    style: { display: 'flex', alignItems: 'center', gap: 10 },
                    children: [
                      el('div', {
                        style: { display: 'flex', gap: 6 },
                        children: [1, 2, 3].map((i) => dot(i <= levelDots[level])),
                      }),
                      el('div', {
                        style: { fontFamily: 'Source Code Pro', fontSize: 24, color: inkMuted },
                        children: levelLabels[level],
                      }),
                    ],
                  })
                : el('div', {
                    style: { fontFamily: 'Source Code Pro', fontSize: 24, color: inkMuted },
                    children: site.tagline,
                  }),
              el('div', {
                style: { fontFamily: 'Source Serif 4', fontSize: 34, color: ink },
                children: site.name,
              }),
            ],
          }),
        ],
      }),
    ],
  });

export async function renderOg(input: OgInput): Promise<Buffer> {
  const svg = await satori(template(input) as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Source Serif 4', data: serif, weight: 400, style: 'normal' },
      { name: 'Source Sans 3', data: sans, weight: 400, style: 'normal' },
      { name: 'Source Code Pro', data: mono, weight: 400, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return Buffer.from(png);
}
