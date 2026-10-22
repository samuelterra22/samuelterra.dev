---
name: linkedin-post
description: Escreve o post do LinkedIn que divulga um artigo, nota ou trilha já publicada no site, em texto puro e na minha voz. Use quando eu pedir um post, um texto para o LinkedIn ou disser /linkedin-post com o slug.
---

# Post do LinkedIn

Leia `docs/voice.md` e o arquivo do conteúdo em `src/content` indicado pelo slug. Se o arquivo ainda estiver com `draft: true`, avise e pare.

## Formato

1. Gancho na primeira linha: uma frase concreta, com número ou situação real, que se sustente sozinha antes do "ver mais". Nunca "Fico feliz em compartilhar", nunca pergunta retórica.
2. Três ideias do texto, uma por parágrafo de uma ou duas frases, com uma linha em branco entre elas. A seção "O que eu faria diferente" costuma render a melhor delas.
3. Uma pergunta real para quem lê, que tenha resposta.
4. O link, na última linha: `https://samuelterra.dev/<rota>`.
5. Até três hashtags, só no fim, em minúsculas, sem acento.

Texto puro: sem markdown, sem negrito, sem emoji, sem travessão longo, sem lista com marcadores. Entre 600 e 1.100 caracteres.

## Entrega

Mostre o post pronto para copiar e, abaixo, uma variante com o link no primeiro comentário em vez do corpo, para o teste de alcance. Depois do post publicado, lembre de gravar a URL no campo `linkedin` do frontmatter.
