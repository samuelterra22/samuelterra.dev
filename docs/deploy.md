# Publicacao

O site e estatico (Astro 6/7, `output: 'static'`) e vai para o Cloudflare Pages. O site antigo
nao tinha configuracao de deploy versionada (nem Vercel, Netlify, Cloudflare ou GitHub Actions),
entao o projeto foi preparado para o Cloudflare Pages do zero.

## Build

- Comando de build: `npm run build`
- Diretorio de saida: `dist`
- Node: 22 (fixado em `.nvmrc`)
- O `postbuild` roda o Pagefind (`pagefind --site dist`) e gera o indice de busca em `dist/pagefind`.
- As imagens de compartilhamento (`/og/<slug>.png`) e o `sitemap-index.xml` saem na build.

## O que fazer no painel do Cloudflare Pages

1. Cloudflare Dashboard, Workers & Pages, Create, Pages, Connect to Git.
2. Selecione o repositorio `samuelterra22/samuelterra.dev` e a branch de producao (`master`).
3. Framework preset: Astro. Confirme build command `npm run build` e output `dist`.
4. Variavel de ambiente (Settings, Environment variables): `NODE_VERSION = 22`. Nao defina
   `SHOW_DRAFTS` em producao; sem ela, nenhum rascunho e publicado.
5. Save and Deploy.

## Dominio e DNS

1. No projeto do Pages, Custom domains, Set up a custom domain, `samuelterra.dev` (e `www` se quiser).
2. Se o DNS de `samuelterra.dev` ja esta na Cloudflare, o registro e criado automaticamente.
   Se esta em outro provedor, aponte conforme as instrucoes do painel (CNAME para o subdominio
   `*.pages.dev`, ou mova o DNS para a Cloudflare).
3. O `site` em `astro.config.mjs` ja e `https://samuelterra.dev`, entao canonical, sitemap e
   Open Graph saem com o dominio certo.

## Depois do primeiro deploy

- Google Search Console: adicione a propriedade `samuelterra.dev`, verifique e envie
  `https://samuelterra.dev/sitemap-index.xml`.
- Bing Webmaster Tools: mesma coisa, e habilite o IndexNow.
- `robots.txt` ja libera tudo e aponta o sitemap.

> Deploy e push sao feitos por voce; este repositorio nao dispara deploy sozinho.
