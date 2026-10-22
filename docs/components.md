# Componentes do design system

Regras de uso de cada componente, copiadas do design system "Samuel Terra Vieira". Os previews HTML de referência estão no artefato; aqui ficam as regras que o código precisa cumprir.

## Level

Marca de nível de leitura: três bolinhas, as preenchidas em `signal` e as vazias em `ink-muted`, seguidas do rótulo por extenso em `meta`.

Você fornece: o nível (`1` iniciante, `2` intermediário, `3` avançado). O componente preenche as bolinhas e escreve o rótulo.

- Use dentro de `MetaBar`, `ArticleCard` e `PostCover`; nunca solto no meio do texto.
- As bolinhas são decorativas (`aria-hidden`); o rótulo é o que o leitor de tela lê e o que vale sem cor.
- Sempre três bolinhas, para o leitor ver a escala inteira: ●○○, ●●○, ●●●.
- Nunca mostre as bolinhas sem o rótulo, nem o rótulo em outra cor que não `ink-muted`.
- Não existe nível zero nem quatro. Nota curta recebe o nível do assunto, não "sem nível".

## MetaBar

Barra de metadados do artigo, em `meta` entre duas linhas `hairline`: nível, tempo de leitura, data e temas.

Você fornece: nível, minutos de leitura, data de publicação (ISO) e a lista de temas com link para a página de cada um. A barra monta a linha na ordem fixa: nível, tempo, data, temas.

- Fica logo abaixo da frase-resumo no topo do artigo. No rodapé do artigo a mesma barra troca a data de publicação por "publicado AAAA-MM-DD · atualizado AAAA-MM-DD".
- Separador é o ponto médio em `hairline`, nunca barra ou vírgula.
- Data sempre no formato AAAA-MM-DD, dentro de `time` com `datetime`.
- Tema é link em `signal-text`; o sublinhado em `signal` só aparece ao passar o mouse.
- No celular a barra quebra em duas linhas; não reduza a fonte abaixo de 13px.

## ArticleCard

Item de lista da página Artigos e da Home: tipo em `label`, título em `display-sm`, frase-resumo em `body-sm` e metadados em `meta`, separado por `hairline`.

Você fornece: tipo (artigo, nota, trilha, projeto), série opcional, título, frase-resumo, nível, minutos e data. O card não recebe imagem.

- É lista, não grade: os cards empilham com `hairline` entre eles e nunca ficam lado a lado, nem no desktop. Artigo se escolhe pelo título, e o título precisa da largura inteira.
- O título inteiro é o link. Ao passar o mouse aparece o sublinhado em `signal` a 4px; nada mais muda.
- Frase-resumo em uma linha, no máximo duas. Se não cabe, o problema é a frase.
- Na Home mostre três itens e o link "Todos os artigos" abaixo, em `Button` de texto. Na página Artigos a lista é completa, com os filtros acima.
- Rascunho (`draft: true` no frontmatter) nunca entra na lista, nem em desenvolvimento.

## ForBeginners

A caixa de abertura "Para quem está começando": três a cinco linhas em linguagem comum sobre `paper-raised` com borda `hairline`, e o rótulo em `label` na cor `signal-text`.

Você fornece: o texto, em um ou dois parágrafos curtos. O rótulo é fixo.

- Uma por artigo, logo depois da `MetaBar` e antes do primeiro h2. Nunca no meio do corpo; para isso existe `PlainWords`.
- Diga o que é, por que importa e onde aparece na vida real. Nenhum termo técnico sem explicação; se precisar de um, ele vira uma `PlainWords` mais adiante.
- Quem já sabe passa reto: a caixa não esconde nada que o corpo não diga de novo.
- O rótulo em `signal-text` é o único uso de cor da caixa. Sem fundo colorido, sem barra lateral.
- No MDX é o componente `<ForBeginners>`; renderiza como `aside` com `aria-label`.
- Não use a caixa em nota curta; nota é curta justamente para não precisar dela.

## PlainWords

A caixa recolhida "Em palavras simples": um termo pesado explicado em duas frases, dentro do corpo do artigo, com `details` nativo e zero JavaScript.

Você fornece: o termo (`term="estado compartilhado"`) e o texto de uma ou duas frases. O rótulo "Em palavras simples:" é fixo; o termo aparece em `body-strong`.

- Coloque a caixa logo depois do parágrafo em que o termo aparece pela primeira vez, nunca antes.
- Um termo por caixa, duas frases no máximo. Se precisa de mais, o termo merece um artigo de nível iniciante.
- Nasce recolhida. No preview a segunda está aberta só para mostrar o estado.
- Defina o termo uma vez no glossário (/articles/glossary) e reaproveite o texto; a caixa e o glossário não podem divergir.
- O triângulo em `ink-muted` é o único marcador; sem cor, sem ícone de interrogação ou lâmpada.

## CodeBlock

Bloco de código sobre `paper-sunken`, com nome do arquivo e linguagem no cabeçalho, botão de copiar e linha destacada em `signal-tint`.

Você fornece: o código, a linguagem, o nome do arquivo (opcional) e as linhas a destacar (opcional). No site o bloco é gerado pelo expressive-code com este tema; o preview mostra a aparência alvo.

- Fonte `code` (14px) com ligaduras desligadas, para o aluno ver o caractere que vai digitar.
- Cabeçalho só quando há nome de arquivo ou linguagem; um comando de uma linha fica sem cabeçalho e sem botão.
- Linha destacada em `signal-tint` sem borda lateral: nada de barra colorida à esquerda.
- Rolagem horizontal dentro do bloco; a página nunca rola na horizontal por causa do código.
- Realce de sintaxe em `ink` e `ink-muted`, com `signal-text` só para strings. Nada de arco-íris; o tema do expressive-code é feito a partir destes três valores.
- Código inline usa a classe `inline`: fundo `paper-sunken`, `radius-sm`, 0.9em do texto em volta, sem borda.

## Button

Três ações, do mais ao menos pesado: botão primário em `ink` sobre `paper`, botão secundário com contorno `hairline`, e link de texto em `signal-text`.

Você fornece: o texto, o destino e, se houver, a seta "→" como caractere ao final (nunca ícone). O componente não recebe cor; a hierarquia é fixa.

- Primário: um por tela, no máximo. Na Home é "Todos os artigos"; na página de contato é "Mandar mensagem".
- Secundário: ações de apoio ("Contato", "Baixar PDF"). Pode haver dois lado a lado.
- Link de texto: toda ação dentro de texto corrido e nos rodapés de seção ("4 publicações →"). O sublinhado em `signal` aparece ao passar o mouse; no corpo do artigo o sublinhado é permanente, em `hairline`, e vira `signal` no hover.
- Texto em caixa de frase, verbo no infinitivo ou substantivo; nunca "Clique aqui".
- Foco visível em `signal`, 2px, deslocado 2px. Hover muda só a cor; nada cresce ou se move.
- Não existe botão em `signal`. O sinal não vira ação.

## PostCover

Capa de post para LinkedIn e Instagram em três proporções (1:1 de 1080×1080, 4:5 de 1080×1350, 9:16 de 1080×1920), com rótulo, título, frase-resumo, uma linha `hairline`, nível e o nome.

Você fornece: o tipo (artigo, nota, trilha), o título, a frase-resumo, o nível com o complemento (minutos ou número de artigos) e a proporção. O preview mostra as três em escala 0,22; os valores abaixo são os reais.

- Margem de 96px em todos os lados. Rótulo em `mono` 28px caixa alta, título em `display` 104px com opsz 60 (120px no 9:16), frase-resumo em `sans` 40px em `ink-muted`, linha `hairline` de 2px acima do rodapé, nível em `mono` 28px, nome em `display` 44px.
- Sem imagem, sem textura, sem símbolo. O que faz a capa ser sua é a serifa, a linha e o espaço.
- Título em até três linhas no 1:1 e no 4:5, quatro no 9:16. Se não cabe, encurte o título da capa, não a fonte.
- Fundo `paper` claro por padrão, para a grade do feed ficar uniforme. A versão escura (`paper` escuro, `ink` claro) é para o reel.
- Exporte em PNG 2x a partir do HTML (Playwright) ou reproduza no Canva com as mesmas medidas e as fontes Source instaladas; não recrie de olho.
- Carrossel: cada página é um 1:1 com uma ideia; a primeira é esta capa, a última leva o nome e o endereço do artigo em `mono`.

## DocumentHeader

Cabeçalho de documento: nome em `display-lg`, papel em `body-sm`, linha de contato em `meta`, fechado por uma linha `hairline`. Sem símbolo: o nome é a marca.

Você fornece: o papel em uma linha, até três itens de contato e o tipo do documento com a data (AAAA-MM). O nome é sempre "Samuel Terra Vieira".

- Use em currículo, material de aula, apostila, relatório de pesquisa e proposta acadêmica. A proposta comercial é da Volpa e não usa este cabeçalho.
- A linha de contato leva o domínio, o LinkedIn e a cidade; e-mail e telefone só em currículo.
- Abaixo do cabeçalho o documento segue em `body-sm` com títulos em `display-md` e `display-sm`, números em `mono` e uma linha `hairline` entre seções. Margens de 20mm.
- Documento não tem tema escuro: só os valores do tema claro.
- Exporte em PDF com as três fontes embutidas; sem fonte embutida o PDF não sai. Onde a fonte não pode ser embutida, use `signature-light.svg` no lugar do nome.

## EmailSignature

Assinatura de e-mail em HTML de tabela: uma linha `hairline` vertical à esquerda, o nome como imagem (`signature-light.svg` em PNG) de 26px de altura, papel em `caption` e três links em `signal-text`.

Você fornece: nada além de escolher entre a assinatura pessoal (esta) e a da Volpa; as duas nunca vão no mesmo e-mail.

- Use nos e-mails em nome próprio: universidade, pesquisa, convite para palestra, candidatura. Proposta e contrato saem com a assinatura da Volpa.
- Cliente de e-mail não carrega web font nem CSS externo: no HTML final troque `var()` pelos valores do tema claro (#1f1d1a, #5f5a52, #3c6b3a, #dad6ce) e a família por `"Source Sans 3", Helvetica, Arial, sans-serif`. Só o tema claro existe em e-mail.
- O nome vai como PNG de 52px de altura (2x) hospedado em samuelterra.dev, com `alt="Samuel Terra Vieira"`, para abrir no Outlook e ler sem imagem.
- Sem frase de efeito, sem "enviado do meu celular", sem ícone de rede social.
