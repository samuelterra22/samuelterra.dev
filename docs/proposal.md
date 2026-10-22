# Novo site samuelterra.dev — proposta completa

22 de outubro de 2026 · Samuel Terra Vieira

## Diagnóstico

O site atual faz uma coisa só (chamar para conversar) e não deixa rastro de nada do que você sabe. O novo precisa fazer quatro coisas que o atual não faz: provar competência técnica, servir de material de estudo, sustentar a candidatura à docência e dar destino ao que você aprende aqui e some.

Decisão de base: samuelterra.dev é a pessoa (carreira, estudo, pesquisa, docência); a Volpa continua sendo a empresa (venda, propostas, produtos). O site pessoal aponta para a Volpa quando o assunto é contratar, e a Volpa aponta para o site pessoal quando o assunto é quem está por trás.

Públicos e o que cada um precisa encontrar em menos de um minuto:

| Público | O que procura | Onde o site responde |
| --- | --- | --- |
| Banca da Fagammon, recrutador acadêmico | Formação, publicações, experiência real, didática | Sobre, Pesquisa, artigos de nível introdutório |
| Dev, par técnico, cliente de software house | Profundidade, decisões de arquitetura, código | Artigos avançados, projetos, pacotes open source |
| Aluno, curioso, pessoa leiga | Explicação clara e um caminho para estudar | Trilhas, artigos "do zero", notas curtas |
| Cliente potencial em Lavras | Confiança e um jeito de falar com você | Projetos entregues e contato; a venda fica na Volpa |

O que já existe e não aparece em lugar nenhum: bacharelado no IFMG, mestrado na UFLA, 4 publicações, 2 pós, 9 anos de carreira (Célula Web, Delta Global, Stefanini), liderança técnica no SICVO (IA processando dossiês de crédito da Caixa), pacotes Laravel publicados, o workshop na UFLA, o Sopro, os fluxos em n8n, o `~/.claude` versionado com skills e agentes, a rotina de melhoria contínua sobre os próprios prompts, o stack de monitoramento no Swarm. É material de meses de artigos parado.

Restrição que molda tudo: nada de vida pessoal. O site fala de trabalho, estudo e método.

## Nome da seção: Artigos

Decidido em 22/10/2026: a seção se chama **Artigos**, em samuelterra.dev/artigos, sem nome próprio. Dentro dela os tipos têm nomes comuns: artigos, notas e trilhas. É a palavra que o leigo entende na hora e a que o Google associa ao que a página é.

O que a rodada de perguntas mostrou: um nome inventado ou poético cobra explicação toda vez que alguém chega, e a marca aqui é a pessoa, não o repositório. O nome que importa é Samuel Terra Vieira; a seção só precisa dizer o que contém.

| Candidato | Por que caiu |
| --- | --- |
| Lavra | Parece erro de digitação de Lavras, poético demais, não diz o que é, e você não gostou da palavra |
| Bancada, Garimpo, Caderno | Nome próprio para uma seção que não precisa de nome; cada um pede explicação |
| Estudos, Notas, Escritos | Dizem o que é, mas Artigos é o termo que a pessoa procura e o que o LinkedIn chama de artigo |

Vocabulário fixo a partir daqui: Artigos é a seção e o item do menu; artigo, nota e trilha são os tipos; uma série é uma série; o glossário fica em /artigos/glossario. Nenhuma metáfora de mina, terra ou ouro aparece no site.

O que o conceito resolve continua o mesmo: o site não é um blog com posts soltos, é um acervo com três portas de entrada (por tema, por nível e por tipo), onde o mesmo texto serve a quem domina e a quem está começando. A próxima seção mostra como.

## Arquitetura do site

Seis seções no menu e três tipos de conteúdo dentro de Artigos. URLs curtas, em português, sem data no caminho, para que um link publicado hoje continue valendo em cinco anos.

(mapa do site: Home → Sobre, Artigos, Projetos, Agora, Pesquisa, Contato; Artigos → artigos, notas, trilhas; Pesquisa → publicações, dissertação, aulas)

Só Artigos e Pesquisa têm subníveis; o resto é página fixa. A Pesquisa separada do Sobre é proposital: a banca da Fagammon chega por ali e encontra publicações, dissertação e material de aula sem procurar.

| Página (rótulo na tela) | URL | O que entrega | Para quem pesa mais |
| --- | --- | --- | --- |
| Home | / | Quem você é em uma linha, o que está estudando agora, últimos artigos, projetos escolhidos, link para a Pesquisa | Todos |
| Sobre | /about | Linha do tempo (IFMG 2013, Célula Web 2017, UFLA 2019, Delta Global 2022, Stefanini 2023, independente 2026), stack, princípios, docência | Banca, recrutador |
| Artigos | /articles | Índice com filtros por tema, nível e tipo, e busca | Dev, aluno |
| Projetos | /projects | Estudos de caso: o problema, as decisões, o resultado, o que faria diferente | Dev, cliente |
| Pesquisa | /research | Publicações com DOI, dissertação, interesses de pesquisa, material de aula (workshop da UFLA) | Banca |
| Agora | /now | O que está estudando e construindo neste mês, atualizado todo mês | Todos |
| Contato | /contact | E-mail, LinkedIn, GitHub, WhatsApp; projeto comercial aponta para a Volpa | Cliente |

Tipos de conteúdo, cada um uma collection do Astro com schema próprio:

| Tipo | URL e coleção | Tamanho e forma | Exemplo do backlog |
| --- | --- | --- | --- |
| Artigo | /articles/\[slug\], coleção `articles` | 1.200 a 3.000 palavras, com código, decisões e trade-offs | PHP-FPM vs Octane sobre FrankenPHP |
| Nota | /articles/notes/\[slug\], coleção `notes` | 150 a 500 palavras, uma coisa aprendida, datada | HNSW no lugar de ivfflat no pgvector |
| Trilha | /articles/paths/\[slug\], coleção `paths` | Sequência ordenada de artigos e notas, com leitura externa, para quem quer estudar | IA local do zero com 6 GB de VRAM |
| Projeto | /projects/\[slug\], coleção `projects` | Estudo de caso de 400 a 800 palavras | Sopro, ditado por voz |
| Publicação | /research, coleção `publications` | Título, veículo, ano, DOI, resumo de uma frase | As 4 publicações |

Páginas de apoio: /articles/topic/\[topic\] para os sete temas (IA aplicada, Laravel e Filament, Arquitetura, Infra, Carreira e método, Hardware, Academia), /articles/level/\[level\], /articles/glossary, /rss.xml, /sitemap-index.xml e /404. Versão em inglês (/en) fica para uma segunda fase, só se o alcance pedir.

O schema de um artigo exige: título, descrição de até 155 caracteres, data de publicação, data de atualização, tema, nível (iniciante, intermediário, avançado), tags, série opcional, imagem de capa opcional, link do post no LinkedIn (a discussão acontece lá, o site não precisa de comentários) e a marca de rascunho.

## Formato do artigo: técnico e leigo no mesmo texto

Um texto só, com camadas, em vez de duas versões. Quem domina lê o corpo e o código; quem está começando lê o topo e as caixas de explicação. Ninguém precisa pular o que não é para ele, e o Google indexa uma página só por assunto.

Estrutura fixa de um artigo:

1. Título direto, com a palavra que a pessoa digitaria no Google, sem clickbait.
2. **Em uma frase**: o artigo inteiro numa linha. Vira a descrição para o Google e o resumo para quem só quer saber do que se trata.
3. Barra de metadados em fonte mono: nível, tempo de leitura, data, tema. O mesmo recurso dos números em mono das suas propostas.
4. **Para quem está começando**: três a cinco linhas em linguagem comum. O que é, por que importa, onde aparece na vida real. Quem já sabe passa reto.
5. Corpo: contexto, decisão, código, trade-offs, resultado medido. Tom de quem fez, não de quem leu a respeito.
6. Caixas **em palavras simples** no meio do corpo: quando entra um termo pesado (HNSW, modo worker, multi-tenancy), uma caixa recolhida explica em duas frases. No MDX é o componente `<PlainWords term="…">`; o termo é definido uma vez no glossário (/articles/glossary) e reaproveitado.
7. **O que eu faria diferente**: a seção de honestidade. É o que separa um artigo seu de um tutorial genérico, e é o trecho que mais rende no LinkedIn.
8. **Para estudar mais**: três a cinco referências, cada uma com uma linha dizendo por que entrou.
9. Rodapé: publicado em, atualizado em, série, artigos relacionados e o link do post no LinkedIn, onde fica a discussão.

Esqueleto de um artigo em MDX:

```markdown
---
title: "PHP-FPM ou Octane sobre FrankenPHP: o que muda no modo worker"
description: "Quando vale manter a aplicação residente em memória e o que isso cobra em troca."
pubDate: 2026-11-03
tema: [laravel, infra]
nivel: intermediario
serie: runtime-php
linkedin: https://www.linkedin.com/posts/...
---

**Em uma frase.** O modo worker tira o custo de bootstrap de cada requisição e cobra em estado compartilhado.

<ParaComecar>
Um servidor PHP tradicional monta a aplicação do zero a cada acesso, como ligar o carro para andar um quarteirão...
</ParaComecar>

## O modelo clássico
...

<Simples termo="estado compartilhado">
Quando o programa fica ligado entre uma visita e outra, o que sobrou da anterior pode vazar para a próxima.
</Simples>

## O que eu faria diferente
...
```

Regras de escrita, as mesmas das propostas: sem travessão longo, sem frase mecânica, sem paralelismo de IA; parágrafos de até três frases; exemplo concreto antes da abstração; número com unidade; "eu" quando é experiência sua, "você" quando é instrução. Todo texto passa pela revisão anti-IA antes de subir.

Trilha: uma página que ordena artigos e notas já publicados, com um parágrafo de ligação entre cada um e a marca "pare aqui se só quer o básico". É a porta do aluno e o material que você leva para a sala de aula na Fagammon.

## Layout e identidade visual

Direção decidida em 22/10/2026, depois de três rodadas de perguntas: sóbria, técnica e didática. Base de cinzas, títulos em serifa, texto em sans, metadados e código em mono, e um único sinal de cor em dose mínima. Sem símbolo: a marca é o nome completo, Samuel Terra Vieira, em tipografia. Referência de harmonia que você apontou: a Full Cycle (fundo escuro, uma cor só).

A cor foi escolhida por uma razão, não por gosto: as "terras" são a família de pigmentos tirados do chão (ocre, siena, verde-terra), e o sobrenome é Terra. Dentre elas, o verde-terra é o mais sóbrio e carrega uma segunda razão, as cores do IFMG e da UFLA. A razão fica no design system; o site não conta a história. Nada da Volpa entra aqui: nem Flame, nem jade, nem Bricolage.

| Elemento | Decisão | Valores |
| --- | --- | --- |
| Fundo | Levemente quente no claro, neutro no escuro; tema segue o sistema, com botão no rodapé | paper #FAF8F3 / #141414; cards #FFFFFF / #1C1C1C; código #F1EEE7 / #0D0D0D |
| Tinta | Quase preto e quase branco, nunca puros | ink #1F1D1A / #EBE9E4; ink-muted #5F5A52 / #A7A39B; hairline #DAD6CE / #2E2E2E |
| Sinal | Verde-terra, só em link ao passar o mouse, foco e bolinha preenchida do nível; nunca fundo, nunca botão | marca #4F7F4C / #8CBF86; texto #3C6B3A / #8CBF86; tint #E8EFE6 / #1B2619 |
| Títulos | Source Serif 4, peso 400, eixo óptico 60 nos grandes | display-xl 64, display-lg 44, display-md 30, display-sm 23 |
| Texto | Source Sans 3 | lead 21, body 18/1.65, body-sm 16, caption 14 |
| Mono | Source Code Pro | meta 13, code 14, label 12 em caixa alta |
| Marca | O nome completo em serifa; iniciais STV em quadrado para avatar; só o S no favicon | signature-light.svg, initials-light.svg, favicon.svg |
| Nível | Três bolinhas e a palavra: ●○○ iniciante, ●●○ intermediário, ●●● avançado | preenchida em sinal, vazia em ink-muted |
| Raios | Discretos | 4px em código inline e chips, 6px em card, caixa e botão, pílula nos filtros |

As três fontes são variáveis, licença OFL, servidas do próprio domínio pela Fonts API do Astro 6 com o provedor Fontsource (pacotes `@fontsource-variable/source-serif-4`, `source-sans-3` e `source-code-pro`), sem chamada ao Google. Todos os pares texto/fundo passam de 4,5:1 nos dois temas; o sinal passa de 4,4:1 como marca e de 5,3:1 como texto. O design system completo, com tokens, previews e os arquivos de marca, está no artefato "Samuel Terra Vieira".

(wireframe: Home com nome e frase, bloco Agora, três artigos, três projetos, dois botões; página de artigo com título, Em uma frase, barra de metadados, caixa Para quem está começando, corpo com código, caixas Em palavras simples, O que eu faria diferente, rodapé com datas e discussão no LinkedIn)

A Home é curta de propósito: nome e frase, o que você está estudando agora, três artigos, três projetos, dois botões. O artigo abre com a frase-resumo e a caixa para quem está começando antes de qualquer código. O wireframe abaixo é de estrutura; cores e fontes reais estão no design system.

O que cada página tem de próprio:

- Sobre: linha do tempo vertical com ano em mono, grade de stack por camada (linguagens, frameworks, dados, infra, IA), princípios em três frases (ser o primeiro cliente do que vende, UX desde o primeiro dia, nada de overengineering), bloco de docência com o que você ensina e para quem.
- Artigos: filtros como chips (tema, nível, tipo), busca local com Pagefind, lista com data em mono, tempo de leitura e marca de nível. Lista, não grade: artigo se escolhe pelo título.
- Artigo: coluna de 68 caracteres, sumário fixo à esquerda no desktop, código com botão de copiar e nome do arquivo, caixas recolhidas em palavras simples, rodapé com datas e discussão no LinkedIn.
- Pesquisa: publicações em lista com DOI e resumo de uma frase, dissertação com resumo em linguagem comum, interesses, material de aula para download.
- Projetos: card com problema, decisões, stack e resultado; link para repositório quando for público.
- Celular: uma coluna, menu compacto com o domínio no lugar do nome completo, cards viram lista, sumário do artigo vira botão flutuante.

Direção aprovada. O passo seguinte é o mockup de alta fidelidade da Home e do artigo no Claude Design, com os tokens e as fontes do design system, para ajustar antes de codar.

## Stack técnica e SEO

Astro 6 em modo estático, conteúdo em MDX dentro de content collections, deploy por GitHub Actions. Tudo vira HTML na build: é a forma mais rápida de carregar e a mais fácil de o Google indexar, e não existe servidor para manter. O Astro 6 é a versão estável atual ([anúncio](https://astro.build/blog/astro-6/)): traz a Fonts API nativa, CSP pronto, Zod 4 importado de `astro/zod`, Shiki 4 e exige Node 22.

| Camada | Escolha | Observação |
| --- | --- | --- |
| Framework | Astro 6, `output: 'static'`, TypeScript | Sem adapter de servidor; nada de SSR por enquanto |
| Conteúdo | Content collections com Zod 4, MDX | Cinco coleções: artigos, notas, trilhas, projetos, publicacoes |
| Estilo | Tailwind v4 com `@theme` | Mesma forma de tokens que você usa na Volpa; os tokens do site viram um `tokens.css` |
| Código | expressive-code (Shiki) | Nome do arquivo, destaque de linha, botão de copiar |
| Busca | Pagefind | Índice estático gerado na build; roda no navegador |
| Imagens | `astro:assets` | WebP e AVIF, dimensões fixas, sem layout shift |
| Imagem de compartilhamento | satori ou astro-og-canvas | Uma imagem 1200×630 por artigo, gerada na build |
| Fontes | Fonts API do Astro 6 (provedor Fontsource) | Self-hosted, com preload e fallback gerados |
| Caixas recolhidas | `<details>` nativo | Zero JavaScript para o `<Simples>` e o `<ParaComecar>` |
| Feed e sitemap | @astrojs/rss, @astrojs/sitemap | Sitemap enviado ao Search Console e ao Bing |
| Analytics | Umami self-hosted no seu Swarm | Sem cookie, sem banner, LGPD tranquila; Plausible se não quiser hospedar |
| Hospedagem | Cloudflare Pages (primeira opção) ou Vercel | CDN global, custo zero, build por push; o Astro é da Cloudflare desde janeiro |
| Repositório | `samuelterra22/samuelterra.dev`, público | O código do site vira portfólio também |

Por que não o seu Swarm: funcionaria com um container Nginx atrás do Traefik, mas um site estático atrás de CDN carrega mais rápido no celular (nota do Core Web Vitals) e não ocupa o nó ARM que já sustenta os clientes. O Swarm continua sendo a casa do Umami.

JSON-LD por tipo de página, que é o que liga os textos a você como entidade e pesa na avaliação de autoridade do Google:

- Home e Sobre: `Person` com `sameAs` apontando para LinkedIn, GitHub, Lattes, ORCID e Google Scholar.
- Artigo e nota: `TechArticle` com `author` referenciando a mesma `Person`, `datePublished`, `dateModified`, `about`.
- Publicação: `ScholarlyArticle` com DOI.
- Trilha: `Course` ou `ItemList`.
- Todas: `BreadcrumbList`.

Estrutura do projeto:

```
src/
  content/
    articles/  notes/  paths/  projects/  publications/
  content.config.ts      schemas das cinco coleções
  components/
    Seo.astro  Level.astro  MetaBar.astro  ForBeginners.astro  PlainWords.astro  Toc.astro
  layouts/
    Base.astro  Article.astro
  pages/
    index.astro  about.astro  now.astro  research.astro  contact.astro
    articles/  projects/  rss.xml.ts  404.astro
  styles/tokens.css        gerado a partir do design system
public/fonts/              Source Serif 4, Sans 3, Code Pro (woff2)
scripts/og-images.ts
public/robots.txt
public/_redirects          301 das URLs do site atual
docs/                      brand.md, voice.md, bio.md, proposal.md
.claude/skills/            new-article, linkedin-post
CLAUDE.md
.github/workflows/deploy.yml
```

Checklist de indexação, para marcar conforme sobe:

- [ ] Google Search Console com o domínio verificado e o sitemap enviado
- [ ] Bing Webmaster Tools e IndexNow pingando o Bing a cada publicação
- [ ] robots.txt liberando tudo e apontando o sitemap
- [ ] Redirecionamentos 301 das URLs do site atual
- [ ] `lang="pt-BR"`, título e descrição únicos por página, um h1 por página
- [ ] JSON-LD `Person` com `sameAs` e `TechArticle` com `author` em todo artigo
- [ ] Imagem de compartilhamento gerada para cada artigo
- [ ] Lighthouse acima de 95 nas quatro notas, medido no celular
- [ ] Cada artigo linka 2 a 3 outros do site; cada trilha linka todos os seus
- [ ] Links de volta: LinkedIn, README do GitHub, Lattes, assinatura de e-mail, rodapé da Volpa
- [ ] RSS no rodapé e no `<head>`
- [ ] Páginas de tema e de nível indexáveis (são elas que ranqueiam para termos amplos)
- [ ] Data de atualização visível e no schema

O que faz um site novo aparecer no Google não é truque: página rápida, texto que responde a uma pergunta real, link de fora apontando para ele e constância. Os posts no LinkedIn com link são o começo dos links de fora.

## Levantamento: o que já pode virar artigo

São 56 temas com material já existente na memória e nas nossas conversas, sem contar o que vai nascer daqui para frente. Doze estão marcados para começar, escolhidos por três critérios: o material já está escrito em algum lugar (SDD, slides, código, decisão registrada), tem gente procurando isso no Google, e prova o que a Fagammon e o LinkedIn precisam ver.

Regras do backlog: nada de nome de cliente, valor ou dado de sistema sem autorização; do SICVO só o que é público (os prêmios, a arquitetura em alto nível), nunca regra de negócio da Caixa; do canal infantil só a engenharia, não o canal.

| # | Título provisório | Tema | Nível | De onde vem o material | Por que primeiro |
| --- | --- | --- | --- | --- | --- |
| 1 | LLM local com 6 GB de VRAM: o que cabe, quantização GGUF, Instruct ou base, LM Studio alcançável do Docker | IA aplicada | Iniciante | Conversas de fev e mai/2026 | Pergunta frequente; IA com hardware comum |
| 2 | PHP-FPM ou Octane sobre FrankenPHP: o que muda no modo worker e o que ele cobra | Laravel | Intermediário | Slides do workshop da UFLA, Dockerfile multi-stage | Material pronto; busca constante; sua regra de projeto novo |
| 3 | Memória de longo prazo num chatbot de WhatsApp com pgvector: HNSW no lugar de ivfflat e o filtro por wa\_id que evita vazar dado entre clientes | IA aplicada | Avançado | Projeto n8n (learnings) | Decisão medida e rara em português |
| 4 | Spec-Driven Development com CLAUDE.md: como eu entrego um SDD para implementação autônoma | Carreira e método | Avançado | Universos, Volpa Chat, metodologia | É o seu método; fala direto com a vaga de IA |
| 5 | Meu `~/.claude` versionado: skills, agentes, hooks e a rotina que lê sete dias de prompts e propõe skills novas | IA aplicada | Intermediário | Metodologia, hooks com Telegram | Ninguém escreve isso em português |
| 6 | Multi-tenancy nativo no Filament v4: o que você deixa de escrever | Laravel | Intermediário | SDD do Volpa Chat e do OmniFlow | Nicho com busca e pouca referência boa |
| 7 | Produção a custo zero: Oracle ARM, Docker Swarm, Portainer e Traefik | Infra | Iniciante | Metodologia, conversas de infra | Busca alta; operação real |
| 8 | Monitorando o Swarm: Prometheus, Alertmanager, cAdvisor, Grafana e alerta de exceção do Laravel no Telegram | Infra | Intermediário | Stack adotado em set/2026 | Continuação do 7; já roda |
| 9 | O erro do Basal: construir para um nicho e vender para outro, e o portão de três clientes | Carreira e método | Iniciante | Princípios da Volpa | Fracasso contado com honestidade rende no LinkedIn |
| 10 | Contrato de sustentação de software: as cláusulas que me protegem (disponibilidade, SLA, propriedade, dados, backup de hora em hora) | Carreira e método | Iniciante | Modelo de contrato | Dor de todo freelancer; sem citar cliente |
| 11 | Claude Code não usa RAG: como ele acha o código e o que isso ensina sobre contexto | IA aplicada | Iniciante | Conversa de fev/2026 | Curto, para aluno; desmonta um mito |
| 12 | Kids Studio: cânone, bíblia visual e portões humanos num pipeline de vídeo com IA local | IA aplicada | Avançado | Conversa de out/2026 | Consistência de personagem é assunto quente |

Os outros 44, por tema, com o nível entre parênteses:

**IA aplicada**

- Mensagens interativas (botões e listas) na Cloud API via n8n com marcadores `[BTN]` e `[LIST]` (intermediário)
- Classificar e extrair PDF, XLSX e texto dentro de um fluxo n8n ( quatro agentes especialistas e portões de aprovação no Telegram (intermediário)
- Ferramentas de agente com aprovação humana e trilha de auditoria: a arquitetura do Volpa Chat (avançado)
- Tipos de memória para agentes: episódica, semântica do tenant, procedural (intermediário)
- Multiagente e roteamento de intenção: quando vale e quando é só complexidade (intermediário)
- Embeddings com texto acima de 8.192 tokens: chunking, truncamento e amostragem (intermediário)
- Claude Code como provedor de LLM via `claude -p --json-schema` no lugar da API (intermediário)
- Geração de vídeo local com WanGP em 6 GB: perfis de memória e o que funciona (intermediário)
- Sopro: ditado por voz em tempo real no Windows com faster-whisper e RealtimeSTT (intermediário)
- OWASP Top 10 para aplicações agênticas aplicado a fluxos n8n (avançado)
- Revisão de aplicação PHP com agentes auditores especializados (avançado)
- Prompt para imagem: positivo, negativo e por que cada termo (iniciante)
- Hooks do Claude Code com notificação no Telegram e no ntfy (intermediário)
- Typebot versionado em Git com validação e CI (intermediário)

**Laravel, Filament e arquitetura**

- Dockerfile multi-stage para Laravel com FrankenPHP, e Sail com paridade de produção (intermediário)
- Spatie Media Library como regra: por que nunca guardar caminho de arquivo em coluna (iniciante)
- Prontuário append-only e isolamento por vínculo, não por papel (avançado)
- PostgreSQL EXCLUDE para impedir sobreposição de agenda (intermediário)
- Criptografia por coluna AES-256-GCM para dado clínico em Laravel (avançado)
- Um banco, cinco schemas: módulos com fronteira interna em vez de microsserviços (avançado)
- Como eu publico um pacote Laravel por trimestre: estrutura, Pest, ArchTests, CI (intermediário)
- ArchTests com Pest: travar a arquitetura em teste (intermediário)
- O que entra num starter: o laravel-filament-base (intermediário)
- A régua de UX: leis nomeadas, heurísticas e gate de qualidade antes da primeira linha (iniciante)
- Validar antes de atualizar: o padrão com o SDK do n8n (intermediário)
- Disciplina de escopo em números: 7 itens de menu, 3 cliques, 4 números, 0 gráficos (iniciante)

**Infra**

- Swarm ou Kubernetes para um dev solo: OKE Basic, k3s na Hetzner e DOKS comparados (intermediário)
- Backup de hora em hora: RPO de 1 h e RTO de 4 h como padrão de contrato e de infra (intermediário)
- Grafana atrás do Traefik com TLS automático (iniciante)
- LM Studio alcançável de dentro do Docker (iniciante)

**Carreira e método**

- Liderar um time num projeto de IA para a Caixa: o que aprendi, só com o que é público (intermediário)
- Como eu monto uma proposta que o cliente consegue aceitar: resumo executivo, cronograma físico-financeiro, sem expor a matemática (iniciante)
- Diagnóstico digital gratuito como porta de entrada (iniciante)
- Precificação: taxa de cartão, Pix e por que o desconto à vista tem de ser menor que a taxa (iniciante)
- Ser o primeiro cliente do que eu vendo (iniciante)
- Laravel para quem vem de Java: o workshop da UFLA (iniciante)
- Do CLT ao próprio: só se você quiser. Você recusou expor isso no Instagram e a mesma regra vale aqui (iniciante)

**Academia**

- A dissertação em linguagem comum: redes e sistemas embarcados (iniciante); preciso do resumo
- As quatro publicações, uma página cada (iniciante); preciso dos títulos e DOI
- Por que um mestre em redes foi parar em Laravel e IA (iniciante)

**Hardware**

- Montar máquina para IA local: VRAM é o gargalo; o que 6 GB fazem e o que 24 GB fazem (iniciante)
- Um notebook com RTX 3060 como estação de IA: o que roda e o que não roda (iniciante)

Três trilhas para abrir junto com o site, montadas só com artigos da lista:

| Trilha | Para quem | Artigos na ordem |
| --- | --- | --- |
| IA local do zero com 6 GB de VRAM | Aluno, curioso | 1, 11, LM Studio no Docker, WanGP em 6 GB, máquina para IA local |
| Laravel em produção sem gastar | Dev iniciante | 7, Dockerfile multi-stage, 2, 8, backup de hora em hora |
| Trabalhando com agentes de código | Dev, professor | 11, 5, hooks com Telegram, 4, revisão com auditores |

## Rotina de publicação e LinkedIn

Cadência que dá para sustentar: um artigo a cada duas semanas, notas conforme acontecem (uma ou duas por semana), uma trilha por trimestre, e a página Agora atualizada no primeiro dia útil do mês. Mais que isso vira dívida; menos que isso não cria hábito nem sinal para o Google.

Fluxo, da conversa até o LinkedIn:

1. Estudamos ou resolvemos algo aqui.
2. No fim da conversa eu aviso: "isso vira artigo" ou "isso vira nota", já com título provisório. Ficou gravado como regra minha a partir de hoje.
3. Rascunhamos juntos no formato da seção de artigo, com as caixas para quem está começando.
4. Você faz a revisão de voz: tira o que não soa como você, acrescenta o que só você sabe. Depois vem a revisão anti-IA, que vale para o site como vale para as propostas.
5. Commit no repositório; a build publica e avisa o Bing pelo IndexNow.
6. Post no LinkedIn no dia seguinte: gancho na primeira linha, três ideias do artigo em frases curtas, uma pergunta, o link. O LinkedIn entrega menos post com link externo, então por um mês testamos link no corpo contra link no primeiro comentário e ficamos com o que trouxer mais cliques no Search Console.
7. A URL do post entra no frontmatter como `linkedin`, e o artigo ganha o "Discussão no LinkedIn".
8. Uma vez por mês: impressões e cliques por artigo no Search Console; os dois melhores recebem uma atualização, porque data de atualização recente conta.

Um artigo rende mais de um formato:

| Formato | Quando | O que leva do artigo |
| --- | --- | --- |
| Post curto no LinkedIn com link | Sempre | Em uma frase, três ideias, pergunta |
| Carrossel em PDF | Tema visual ou com passos | As caixas "em palavras simples" viram slides |
| Artigo nativo do LinkedIn | Só nos doze primeiros, para puxar seguidores | Texto inteiro com link canônico para o site |
| Reel no @samuelterrav | Quando tem código ou tela para mostrar | Voz lendo o "Em uma frase" sobre gravação de tela, formato que você já aceita gravar |

Organização: um quadro no Trello chamado Artigos, com as listas Ideia, Rascunho, Revisão, Publicado e LinkedIn. Cada card leva título provisório, tema, nível e a seção de pré-requisitos que você já exige nos seus cards (dado que falta, print, autorização de cliente). Quando você aprovar a lista, eu crio os 56 cards.

Ferramenta: um skill `new-article` no repositório (`.claude/skills/new-article`), que recebe tema e notas e devolve o MDX no formato da casa, com frontmatter válido para o schema. Assim um artigo nasce igual seja escrito aqui, no Claude Code ou no celular. O esqueleto dele está no passo a passo, mais abaixo.

## Sequência de implantação

Quatro semanas para entrar no ar com conteúdo, não com um site vazio. A ordem protege o que mais importa: ter artigos publicados antes de divulgar.

| Semana | Entrega | O que depende de você |
| --- | --- | --- |
| 1 | Decisões abaixo fechadas; mockup de alta fidelidade da Home e do artigo no Claude Design; repositório com Astro 6, as cinco coleções, layouts, componente de SEO, deploy automático e Search Console | Aprovar nome, cores e a frase da Home |
| 2 | Sobre, Pesquisa, Projetos, Agora e Contato preenchidos; imagem de compartilhamento; busca; RSS; redirecionamentos do site atual | Publicações com DOI, resumo da dissertação, lista de repositórios públicos, links de Lattes, ORCID e Scholar, foto se quiser |
| 3 | Artigos 1, 2 e 9 escritos e revisados; seis notas; trilha "IA local do zero" | Revisão de voz de cada texto |
| 4 | Site no ar; série de quatro posts no LinkedIn (apresentação, artigo 1, artigo 9, trilha); quadro Lavra no Trello com os 56 cards | Gravar um reel, se quiser |

Decisões pendentes, uma resposta cada:

1. Nome: decidido em 22/10/2026, a seção se chama Artigos, sem nome próprio.
2. Identidade: decidida em 22/10/2026 em três rodadas de perguntas: cinzas com sinal verde-terra, família Source, nome completo em tipografia, sem símbolo. O design system "Samuel Terra Vieira" está refeito com esses valores.
3. Hospedagem: Cloudflare Pages ou Vercel?
4. Repositório do site público ou privado?
5. Artigo sobre a saída do CLT: entra ou fica de fora?
6. Versão em inglês: nunca, depois, ou já no esqueleto (i18n configurado, sem conteúdo)?

Nome e identidade fechados; o próximo passo é o mockup da Home e do artigo e, em paralelo, o esqueleto do repositório com os cinco schemas e um artigo de exemplo. As decisões 3 a 6 podem esperar o mockup.

## Convenção de nomes

Decidido em 22/10/2026: tudo que é código fica em inglês, e tudo que a pessoa lê fica em português. Em inglês: rotas, pastas, arquivos, componentes, classes, variáveis, tokens, nomes de coleção, campos do frontmatter, nomes de skill e mensagens de commit. Em português: rótulos do menu, títulos, conteúdo, textos de interface e os comentários que explicam regra de negócio. O custo é pequeno e conhecido: /articles diz menos ao Google em português do que /artigos, mas o título e o texto da página pesam muito mais que a URL.

| Na tela | No código |
| --- | --- |
| Artigos | /articles, coleção `articles`, `ArticleCard` |
| Notas | /articles/notes/\[slug\], coleção `notes` |
| Trilhas | /articles/paths/\[slug\], coleção `paths` |
| Projetos | /projects, coleção `projects` |
| Pesquisa | /research, coleção `publications` |
| Sobre, Agora, Contato | /about, /now, /contact |
| Glossário, tema, nível | /articles/glossary, /articles/topic/\[topic\], /articles/level/\[level\]; campos `topic` e `level` |
| Para quem está começando | `<ForBeginners>` |
| Em palavras simples | `<PlainWords term="…">` |
| Tokens | `--paper`, `--ink`, `--ink-muted`, `--hairline`, `--signal`, `--signal-text`, `--signal-tint` |

## Passo a passo com o Claude Code

A ordem protege o que importa: o repositório nasce com a base de conhecimento dentro, para que toda sessão do Claude Code comece sabendo quem você é, como você escreve e qual é a marca. Escrito para Cloudflare Pages; na Vercel só o passo 7 muda.

1. **Criar o projeto** (Node 22 ou mais novo):

```bash
npm create astro@latest samuelterra.dev -- --template minimal --git --install
cd samuelterra.dev
npx astro add mdx sitemap
npm install @astrojs/rss astro-expressive-code pagefind tailwindcss @tailwindcss/vite
```

2. **Levar a base de conhecimento para dentro do repositório.** Crie a pasta `docs/` e copie os quatro arquivos do Projeto: `brand.md` (MARCA-PESSOAL), `voice.md` (VOZ-PESSOAL), `bio.md` (TRAJETORIA) e `proposal.md` (este documento exportado em Markdown). Do design system, baixe `tokens.css` para `src/styles/tokens.css` e os cinco arquivos `.woff2` para `public/fonts/`. Eu entrego os dois quando você pedir.
3. **Escrever o `CLAUDE.md` na raiz.** É o que toda sessão lê antes de qualquer coisa:

```markdown
# samuelterra.dev

Site pessoal de Samuel Terra Vieira: Astro 6 estático, MDX, Tailwind v4, deploy no Cloudflare Pages.
Leia docs/brand.md antes de tocar em qualquer coisa visual, docs/voice.md antes de escrever
qualquer texto e docs/bio.md antes de citar carreira, formação ou publicações.

## Convenções
- Código, rotas, pastas, arquivos, componentes, classes, variáveis, tokens e commits em inglês.
- Texto visível, conteúdo em src/content e comentários de regra de negócio em português do Brasil.
- Commits no padrão conventional commits, em inglês, um assunto por commit.
- Cores, fontes e espaços só pelos tokens de src/styles/tokens.css; nenhum valor solto em CSS.
- Sem dependência nova sem me perguntar. Sem framework de UI. Sem JavaScript no cliente além
  do botão de tema, da busca (Pagefind) e do botão de copiar código.

## Conteúdo
- Coleções: articles, notes, paths, projects, publications (schemas em src/content.config.ts).
- Nunca crie, edite ou apague um arquivo em src/content sem pedido explícito.
- Artigo novo só pelo skill new-article.

## Qualidade
- Antes de encerrar: `npm run build` e `npx astro check` sem erro.
- Toda página: lang="pt-BR", um h1, title e description únicos, JSON-LD do tipo certo.
- Contraste de texto 4.5:1 nos dois temas; foco visível em todo elemento focável.
```

4. **Criar o skill de artigo** em `.claude/skills/new-article/SKILL.md`. Ele vira o comando `/new-article`:

```markdown
---
name: new-article
description: Cria um artigo, nota ou trilha em src/content a partir de um tema e das minhas notas, no formato da casa. Use quando eu pedir um artigo novo ou disser /new-article.
---

1. Leia docs/voice.md e o schema da coleção em src/content.config.ts.
2. Pergunte só o que faltar: tipo (article, note, path), tema, nível, notas ou links de origem.
3. Gere o arquivo em src/content/<coleção>/<slug>.mdx com frontmatter completo e draft: true.
4. Siga a estrutura fixa: título direto; **Em uma frase.**; <ForBeginners>; corpo com decisão,
   código e trade-offs; <PlainWords term="…"> depois de cada termo pesado; "## O que eu faria
   diferente"; "## Para estudar mais".
5. Revise o texto inteiro contra docs/voice.md: sem travessão longo, sem trinca paralela, sem
   frase genérica, parágrafos de até três frases, número com unidade. Reescreva o que falhar.
6. Rode `npm run build`. Mostre o caminho do arquivo e as três frases que você acha mais fracas.
```

Um segundo skill, `linkedin-post`, recebe o slug de um artigo publicado e devolve o post em texto puro com gancho, três ideias, pergunta e link. Mesmas regras de voz.

5. **Construir em sessões curtas, uma por assunto.** Abra o `claude` na pasta e use estes pedidos, nesta ordem, conferindo o resultado no navegador entre um e outro:

| Sessão | O que pedir |
| --- | --- |
| 1 | Configure Tailwind v4 com @tailwindcss/vite expondo os tokens de src/styles/tokens.css no bloco @theme; configure a Fonts API do Astro com o provedor Fontsource para Source Serif 4, Source Sans 3 e Source Code Pro; crie src/layouts/Base.astro com cabeçalho, rodapé, botão de tema (data-theme em html, guardado em localStorage) e a página inicial vazia |
| 2 | Crie src/content.config.ts com as cinco coleções e os schemas descritos em docs/proposal.md (Zod de astro/zod), mais um artigo de exemplo em articles e uma nota em notes, ambos draft: false, para testar |
| 3 | Crie os componentes Level, MetaBar, ArticleCard, ForBeginners, PlainWords, Toc e Seo seguindo docs/brand.md; configure o expressive-code com o tema de três cores da marca e botão de copiar |
| 4 | Crie as páginas: index, about (a partir de docs/bio.md), articles com filtros por tema, nível e tipo, articles/\[slug\], articles/notes/\[slug\], articles/paths/\[slug\], articles/topic/\[topic\], articles/level/\[level\], articles/glossary, projects, research, now, contact e 404 |
| 5 | SEO: componente Seo com title, description, canonical, Open Graph, JSON-LD (Person com sameAs na home e no about; TechArticle nos artigos; ScholarlyArticle nas publicações; BreadcrumbList em tudo); rss.xml; sitemap; robots.txt; geração de imagem 1200×630 por artigo com satori a partir do layout em docs/brand.md |
| 6 | Busca com Pagefind integrada à página articles; redirecionamentos 301 em public/\_redirects para as URLs do site atual; teste de prefers-reduced-motion |
| 7 | Deploy: conecte o repositório ao Cloudflare Pages (build `npm run build`, saída `dist`); aponte o domínio; depois cadastre o site no Google Search Console e no Bing Webmaster Tools e envie o sitemap |

6. **Conferir antes de divulgar.** Lighthouse no celular acima de 95 nas quatro notas; `npx astro check` limpo; cada página com um h1; o artigo de exemplo lido num celular de verdade.
7. **Rotina a partir daí.** `claude` na pasta, `/new-article` com o tema e as notas, revisão de voz sua, `draft: false`, commit e push. O Cloudflare publica em um ou dois minutos. No dia seguinte, `/linkedin-post` com o slug, post no LinkedIn, e a URL do post vai para o campo `linkedin` do frontmatter.

O que eu faço daqui: entrego `tokens.css` e as fontes quando você criar o repositório, escrevo o artigo de exemplo da sessão 2 junto com você, e crio os 56 cards no Trello quando a lista for aprovada.

Fontes: [Astro 6.0](https://astro.build/blog/astro-6/) para versão e recursos do framework; o restante vem da sua memória e das nossas conversas.
