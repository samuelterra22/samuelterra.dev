# samuelterra.dev

Site pessoal de Samuel Terra Vieira: Astro 6 estático, MDX, Tailwind v4, conteúdo em `src/content`, fontes Source servidas do próprio domínio. Substituiu uma página única em outubro de 2026; o site antigo está na branch `legacy`.

Antes de qualquer coisa, leia o que o pedido exige:

- `docs/brand.md` antes de tocar em qualquer coisa visual (tokens, componentes, layout, capas).
- `docs/components.md` antes de criar ou alterar um componente.
- `docs/voice.md` antes de escrever qualquer texto que a pessoa vai ler.
- `docs/bio.md` antes de citar carreira, formação, publicações ou projetos.
- `docs/proposal.md` para a arquitetura, as coleções, o formato de artigo e o backlog.

## Convenções

- Código em inglês: rotas, pastas, arquivos, componentes, classes, variáveis, tokens, coleções, campos de frontmatter, skills e mensagens de commit.
- Tela em português do Brasil: rótulos, títulos, conteúdo, textos de interface e comentários que explicam regra de negócio. A ponte entre os dois é `src/lib/labels.ts`; nunca escreva um rótulo em português fora dele.
- Commits no padrão conventional commits, em inglês, um assunto por commit. Nunca `git push --force`.
- Cores, fontes, espaços e raios só pelos tokens de `src/styles/tokens.css`, expostos ao Tailwind em `src/styles/global.css`. Nenhum valor solto em CSS de componente; nenhum `#hex` fora de `tokens.css`.
- Sem dependência nova sem perguntar. Sem framework de UI. Sem JavaScript no cliente além do botão de tema, da busca (Pagefind) e do botão de copiar código.
- Imagens pelo `astro:assets`, sempre com `width` e `height`. Nenhuma foto de banco, nenhuma ilustração gerada.
- Ícones da biblioteca Lucide em SVG inline, traço de 1,5px; nunca emoji.

## Conteúdo

- Coleções: `articles`, `notes`, `paths`, `projects`, `publications` (schemas em `src/content.config.ts`). Arquivos que começam com `_` são templates e não entram na build.
- Nunca crie, edite ou apague um arquivo de conteúdo em `src/content` sem pedido explícito. Artigo novo só pelo skill `new-article`.
- O formato fixo de artigo está em `src/content/articles/_template.mdx`; `<ForBeginners>` e `<PlainWords>` são obrigatórios nos artigos, opcionais nas notas.
- Nível (`beginner`, `intermediate`, `advanced`) e tema são obrigatórios em tudo que é leitura.

## Qualidade

- Antes de encerrar qualquer tarefa: `npm run build` e `npx astro check` sem erro nem aviso novo.
- Toda página: `lang="pt-BR"`, um único `h1`, `title` e `description` únicos, canonical, Open Graph e JSON-LD do tipo certo (`Person` na home e em `/about`, `TechArticle` em artigos e notas, `ScholarlyArticle` em publicações, `BreadcrumbList` em tudo).
- Contraste de texto de 4,5:1 nos dois temas; foco visível em todo elemento focável; nada se move no hover; `prefers-reduced-motion` respeitado.
- Lighthouse no celular acima de 95 nas quatro notas é a meta de cada página nova.
- Nada de regionalismo, vida pessoal, nome de cliente, valor de contrato ou dado de sistema de terceiro em texto algum.
