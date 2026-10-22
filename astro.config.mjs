// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import tailwindcss from '@tailwindcss/vite';

// Site estático. Nenhum adapter de servidor: tudo vira HTML na build.
export default defineConfig({
  site: 'https://samuelterra.dev',
  output: 'static',
  trailingSlash: 'never',

  // As três famílias vêm do Fontsource, baixadas na build e servidas do próprio domínio.
  // As variáveis --font-display, --font-sans e --font-mono são criadas aqui; tokens.css só as usa.
  fonts: [
    { name: 'Source Serif 4', cssVariable: '--font-display', provider: fontProviders.fontsource() },
    { name: 'Source Sans 3', cssVariable: '--font-sans', provider: fontProviders.fontsource() },
    { name: 'Source Code Pro', cssVariable: '--font-mono', provider: fontProviders.fontsource() },
  ],

  integrations: [
    // expressive-code precisa vir antes do mdx.
    expressiveCode({
      // Tema de três cores da marca: ink, ink-muted e signal-text. Nada de arco-íris.
      themes: ['github-light', 'github-dark'],
      styleOverrides: {
        borderRadius: 'var(--radius-md)',
        borderColor: 'var(--hairline)',
        codeFontFamily: 'var(--font-mono)',
        codeFontSize: '14px',
        codeLineHeight: '1.6',
        uiFontFamily: 'var(--font-mono)',
        frames: {
          editorBackground: 'var(--paper-sunken)',
          terminalBackground: 'var(--paper-sunken)',
          editorTabBarBackground: 'var(--paper-sunken)',
          editorActiveTabBackground: 'var(--paper-sunken)',
          editorActiveTabForeground: 'var(--ink)',
          editorTabBarBorderBottomColor: 'var(--hairline)',
          shadowColor: 'transparent',
        },
        textMarkers: {
          markBackground: 'var(--signal-tint)',
          markBorderColor: 'var(--signal-tint)',
        },
      },
      // O botão de copiar fica; as ligaduras são desligadas em tokens.css (.code).
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[data-theme="${theme.type}"]`,
    }),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  markdown: {
    smartypants: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // Content Security Policy nativa do Astro 6. Ligue depois que o site estiver estável,
  // conferindo o botão de tema, a busca e o botão de copiar código no navegador.
  // security: { csp: true },
});
