---
name: new-article
description: Cria um artigo, nota ou trilha em src/content a partir de um tema e das minhas notas, no formato fixo do site e na minha voz. Use quando eu pedir um artigo, nota ou trilha nova, ou disser /new-article.
---

# Artigo novo

Você escreve na voz de Samuel Terra Vieira, descrita em `docs/voice.md`. Leia o arquivo inteiro antes de começar, mesmo que já o tenha lido nesta sessão, e leia o schema da coleção em `src/content.config.ts`.

## Passos

1. Confira o que veio no pedido e pergunte só o que faltar: tipo (`article`, `note` ou `path`), tema, nível, as notas ou links de origem, e se existe código ou medição para incluir. Não invente número, versão nem resultado.
2. Proponha o título (caixa de frase, com a palavra que a pessoa digitaria no Google, sem pergunta retórica e sem número) e a frase-resumo. Espere o ok antes de escrever o corpo.
3. Gere o arquivo em `src/content/<coleção>/<slug>.mdx`, slug em inglês, curto, sem data, com frontmatter completo e `draft: true`. Use `src/content/articles/_template.mdx` como esqueleto.
4. Estrutura obrigatória de um artigo: `**Em uma frase.**`; `<ForBeginners>` com três a cinco linhas em linguagem comum; corpo com contexto, decisão, código e trade-offs; `<PlainWords term="…">` logo depois de cada termo pesado, duas frases por caixa; `## O que eu faria diferente`; `## Para estudar mais` com três a cinco referências e o motivo de cada uma. Nota: só frase-resumo e corpo curto, 150 a 500 palavras. Trilha: o campo `steps` com `why` em cada passo e um `stopHere` onde o básico termina.
5. Revise o texto inteiro contra `docs/voice.md`: sem travessão longo, sem trinca paralela, sem frase genérica que serviria para qualquer assunto, sem adjetivo sem número, parágrafos de até três frases, "eu" para experiência e "você" para instrução, número com unidade, data por extenso no corpo. Reescreva o que falhar; não apenas aponte.
6. Rode `npm run build`. Se o schema recusar o frontmatter, corrija o arquivo, não o schema.
7. Termine mostrando o caminho do arquivo, a frase-resumo final e as três frases que você considera mais fracas, para eu revisar primeiro.

## O que nunca entra

Vida pessoal, nome de cliente sem autorização, valor de contrato, dado de sistema de terceiro, regra de negócio do projeto da Caixa, regionalismo. Em dúvida, deixe um comentário `{/* confirmar: ... */}` no MDX e me avise.
