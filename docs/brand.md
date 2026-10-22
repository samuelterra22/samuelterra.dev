Marca pessoal de Samuel Terra Vieira, engenheiro de software e mestre em Ciência da Computação. Vale para o site samuelterra.dev e sua seção Artigos, para posts e carrosséis no LinkedIn, para o Instagram, para documentos (currículo, material de aula, pesquisa) e para slides. É a marca da pessoa; a Volpa é a marca da empresa e tem sistema próprio, separado.

## Princípios

- Sóbrio, técnico e didático: uma página que se lê como um bom livro técnico, com título em serifa, texto em sans e número em mono.
- Cinza quase sempre. Há um único sinal de cor, o `signal` verde-terra, e ele ocupa menos de 1% de qualquer peça.
- Bordas, não sombras. Profundidade vem de `hairline` e de `paper-raised`, nunca de sombra ou gradiente.
- O mesmo texto serve a quem domina e a quem está começando: as camadas `ForBeginners` e `PlainWords` existem por isso.
- Nada parece feito por máquina: sem ilustração genérica, sem foto de banco, sem frase mecânica.

## Conteúdo

- Escreva em português do Brasil, com "eu" quando é experiência de Samuel e "você" quando é instrução. Nunca "nós" para falar dele.
- Títulos em caixa de frase ("O que eu faria diferente"), nunca em Title Case. Rótulos curtos em caixa alta ficam só no estilo `label`.
- Números sempre com unidade: "6 GB de VRAM", "9 min", "99,5%". Datas no formato AAAA-MM-DD em metadados e por extenso no corpo ("3 de novembro de 2026").
- Sem travessão longo na prosa, sem emoji, sem exclamação, sem paralelismo de três itens por reflexo. Parágrafos de até três frases. Exemplo concreto antes da abstração.
- Todo artigo abre com a frase-resumo no estilo `lead`, precedida de "Em uma frase." em `body-strong`. Exemplo real: "Em uma frase. O modo worker tira o custo de bootstrap de cada requisição e cobra em estado compartilhado."
- Todo artigo tem a seção "O que eu faria diferente". É a parte que diz que foi alguém que fez, não alguém que leu.
- O nome é sempre "Samuel Terra Vieira", completo, em assinatura, autoria e cabeçalho. Onde não cabe, use o domínio "samuelterra.dev" em `meta` ou as iniciais "STV" em `display`.
- Revise cada texto antes de publicar para tirar vício de IA: frase genérica, redundância, tom robótico. É regra, não sugestão.
- O que não entra: vida pessoal, nome de cliente sem autorização, valor de contrato, dado de sistema de terceiro, regionalismo.

## Cor

- Use `paper` como fundo de tudo e `ink` como tinta de tudo. O tema segue `prefers-color-scheme`; o botão do rodapé troca o atributo `data-theme` em `html` e grava a escolha.
- Use `paper-raised` com borda `hairline` de 1px para card, caixa, cabeçalho fixo e sumário. Nunca sombra.
- Use `paper-sunken` para bloco de código e código inline; o texto do código é `ink`, a linha destacada é `signal-tint`.
- Use `signal` só como marca: a bolinha preenchida do nível, o sublinhado do link ao passar o mouse e o anel de foco. Ele nunca é fundo, nunca é texto pequeno no claro e nunca vira botão.
- Use `signal-text` para link no corpo e para o rótulo da caixa `ForBeginners`. No escuro ele é o próprio `signal`.
- Use `signal-tint` só na seleção de texto e na linha destacada de código.
- Use `ink-muted` para metadado, legenda, rótulo, bolinha vazia do nível e tagline. Nunca para o corpo do texto.
- Anel de foco: 2px sólidos em `signal`, deslocado 2px da borda, em todo elemento focável. É o único traço de 2px.
- Não existe verde de sucesso nem vermelho de erro. O site não tem formulário além do de busca e do de contato, e os dois mostram estado com texto.

## Tipografia

- Uma superfamília, a Source, em três papéis: `display` (Source Serif 4) para títulos e o nome; `sans` (Source Sans 3) para todo texto corrido; `mono` (Source Code Pro) para metadado, data, rótulo e código.
- As fontes são variáveis e vêm nos arquivos de `fonts/` (licença OFL). No site elas são servidas do próprio domínio pela Fonts API do Astro 6 com o provedor Fontsource, pacotes `@fontsource-variable/source-serif-4`, `source-sans-3` e `source-code-pro`. Em documento, Canva e slides, instale as mesmas; nunca substitua por Georgia, Inter ou Arial numa peça publicada.
- Source Serif 4 tem eixo óptico: títulos usam opsz 60 (`display-xl`, `display-lg`), seções 36 e 24, e o `font-optical-sizing: auto` cuida do resto. Peso 400 nos títulos; 600 só em `body-strong`.
- Hierarquia do artigo: `display-lg` no h1, `display-md` no h2, `display-sm` no h3, `lead` na frase-resumo, `body` no corpo, `meta` na barra de metadados, `caption` nas legendas. Não pule níveis.
- Coluna de leitura de `measure` (68 caracteres). No celular o corpo desce para 17px e o `display-lg` para 36px; o resto fica.
- Código com ligaduras desligadas (`font-variant-ligatures: none`), para o aluno ler o caractere que vai digitar.

## Espaço, bordas e raios

- Escala de 4px: use só os tokens de `space-1` a `space-24`, cada um com o uso que a nota diz.
- Toda borda tem `hairline-width` (1px) na cor `hairline`. Divisor entre seções é uma linha `hairline` de largura total, não um espaço maior.
- `radius-sm` em código inline e chips, `radius-md` (6px) em card, caixa, bloco de código, botão e figura, `radius-pill` nos chips de filtro. Cantos discretos: nada de 12px ou mais.
- Gutter lateral de `space-4` no celular e `space-8` no desktop. A página nunca rola na horizontal.

## Nível

- Todo artigo, nota e trilha tem um nível: iniciante, intermediário ou avançado. Mostre com três bolinhas, as preenchidas em `signal` e as vazias em `ink-muted` com traço de 1,25px, seguidas do rótulo por extenso em `meta`: ●○○ iniciante, ●●○ intermediário, ●●● avançado.
- As bolinhas são decorativas; o rótulo é o que vale sem cor e para o leitor de tela. Nunca mostre as bolinhas sem o rótulo.

## Marca

- Não há símbolo. A marca é o nome "Samuel Terra Vieira" em `display` regular, em `ink`, com o eixo óptico em 60. O arquivo `signature-light.svg` traz o nome já em caminhos, para uso onde a fonte não carrega (imagem de e-mail, PDF sem fonte, cabeçalho de vídeo).
- Em quadrado (avatar das redes, imagem de perfil) use `initials-light.svg` ou `initials-dark.svg`: "STV" em `display` sobre `paper`. O favicon é `favicon.svg`, só o "S", sobre `paper` escuro, para ler em qualquer aba.
- Em espaço estreito (cabeçalho no celular, rodapé de capa) use o domínio "samuelterra.dev" em `meta`.
- Nunca ponha a assinatura ao lado de uma marca da Volpa na mesma peça. Onde as duas precisam aparecer, a Volpa entra em texto corrido.

## Imagens e figuras

- Sem foto de banco de imagens e sem ilustração genérica de IA. Figura técnica é diagrama desenhado em SVG com `ink`, `ink-muted`, `hairline` e, quando precisa de destaque, um único `signal`.
- A foto de Samuel entra na página Sobre, no currículo e, se ele quiser, no avatar das redes, sempre a mesma, com canto `radius-md`.
- Sem textura de fundo. O respiro é o espaço em branco e a linha `hairline`.
- Imagem de compartilhamento (1200×630) gerada por artigo a partir de `og-1200x630.svg`: rótulo em `label`, título em `display`, frase-resumo em `sans`, uma linha `hairline`, nível e metadados em `meta`, o nome em `display` embaixo. Só o tema claro, sempre.

## Iconografia

- Ícones da biblioteca Lucide, em SVG inline, traço de 1,5px, 20px no texto e 16px em metadados, cor `ink-muted` (ou `ink` quando é ação). Nunca ícone preenchido, nunca emoji no lugar de ícone.
- Ícones com significado sozinho ganham `aria-label`; os decorativos ganham `aria-hidden`.
- Escolha feita neste sistema por falta de biblioteca anterior; troque só por outra com a mesma regra de traço.

## Movimento

- Transição de 150ms em cor e borda ao passar o mouse; nada se move de lugar. Caixas recolhidas abrem sem animação.
- Com `prefers-reduced-motion`, nenhuma transição.

## Componentes

- `Level`: as bolinhas com rótulo. Use dentro de `MetaBar`, `ArticleCard` e `PostCover`.
- `MetaBar`: a linha de metadados em `meta` abaixo do título e no rodapé do artigo.
- `ArticleCard`: item de lista da página Artigos e da Home. É lista, não grade: artigo se escolhe pelo título.
- `ForBeginners`: a caixa de abertura para quem está começando. Uma por artigo, antes do primeiro h2.
- `PlainWords`: a caixa recolhida "Em palavras simples" dentro do corpo, um termo por caixa, `details` nativo.
- `CodeBlock`: bloco de código com nome do arquivo, linguagem e botão de copiar.
- `Button`: botão primário (`ink` sobre `paper`), secundário (contorno `hairline`) e link de texto em `signal-text`.
- `PostCover`: capas 1:1, 4:5 e 9:16 para LinkedIn e Instagram.
- `DocumentHeader`: cabeçalho de currículo, material de aula e pesquisa.
- `EmailSignature`: assinatura de e-mail em HTML.

## Por canal

- Site: Astro 6 com Tailwind v4; os tokens entram em `tokens.css` como `--paper`, `--ink`, `--signal`, `--space-4`, `--font-display` e são expostos ao Tailwind no bloco `@theme`. Nada de valor solto em CSS de componente.
- LinkedIn: post em texto puro (sem markdown, sem emoji), capa 1:1 de `PostCover` quando o artigo tem imagem, carrossel em PDF 1:1 com uma ideia por página, a última com o nome e o endereço do artigo.
- Instagram (@samuelterrav): capa 4:5 no feed, 9:16 em reel e story; a gravação de tela leva a barra de metadados em `meta` no rodapé.
- Documentos (currículo, material de aula, pesquisa): `DocumentHeader` no topo, corpo em `body-sm`, títulos em `display-md` e `display-sm`, números em `mono`, uma linha `hairline` entre seções. A4, margens de 20mm, PDF com as fontes embutidas.
- Slides (aula, workshop): fundo `paper`, título em `display-lg`, texto em `body`, código em `CodeBlock`, uma ideia por slide; o nome só na capa e no fim.
- E-mail: `EmailSignature`; corpo de e-mail em texto puro.
