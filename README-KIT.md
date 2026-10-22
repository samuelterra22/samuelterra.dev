# Kit do site samuelterra.dev

Descompacte este arquivo na raiz do repositório do site atual, abra o `claude` nessa pasta e cole o conteúdo de PROMPT.md. O Claude Code preserva o site antigo numa branch `legacy` antes de trocar.

O que vem aqui:

- `CLAUDE.md`: regras que toda sessão do Claude Code lê primeiro.
- `PROMPT.md`: o prompt único que executa as sete fases. Apague depois.
- `docs/`: brand.md (design system), components.md (regras de cada componente), voice.md (voz), bio.md (fatos da carreira; itens "a confirmar" não publicam), proposal.md (a proposta completa, com arquitetura e backlog).
- `.claude/skills/`: new-article e linkedin-post, que viram /new-article e /linkedin-post.
- `astro.config.mjs`, `tsconfig.json`: configuração do Astro 6 com Fonts API, MDX, sitemap, expressive-code e Tailwind v4.
- `src/styles/tokens.css` e `global.css`: os tokens do design system e a ponte com o Tailwind.
- `src/content.config.ts`: as cinco coleções e seus schemas; `src/lib/labels.ts`: rótulos em português para os valores em inglês.
- `src/content/articles/_template.mdx` e `src/content/publications/_template.json`: templates (o prefixo `_` tira da build).
- `src/assets/brand/`: assinatura, iniciais e modelo de imagem de compartilhamento em SVG; `public/favicon.svg`; `public/fonts/`: as três famílias Source em woff2 (licença OFL).
