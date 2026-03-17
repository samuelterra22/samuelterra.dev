# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal landing page for Samuel Terra Vieira (samuelterra.dev). Positioned as a client-facing site for an independent software engineer — NOT a developer portfolio. Target audience is non-technical business owners who need software solutions, AI automations, and integrations. No build system, bundler, or framework — just plain HTML and CSS served directly.

## Architecture

- `index.html` — Single-page site with hero, capabilities, about, WhatsApp CTA, and social links. Contains all SEO meta tags (Open Graph, Twitter Cards, JSON-LD structured data).
- `styles.css` — Dark theme styling using Inter font (Google Fonts), flexbox layout, CSS animations, glass-morphism effects. Responsive design with mobile-first approach.
- `avatar.png` — Profile photo (copied from "Foto Perfil - Samuel.png").
- `manifest.json` — PWA web app manifest.
- Supporting assets: `favicon.ico`, `logo192.png`, `logo512.png`.
- `sitemap.xml`, `robots.txt`, `humans.txt` — SEO and crawling configuration.

## Development

No build or install step. Open `index.html` in a browser or serve with any static file server:

```
python3 -m http.server 8000
```

## Content & Positioning Rules

- **Target audience**: Non-technical business owners, NOT developers.
- **Language**: Portuguese (pt-BR). Avoid technical jargon (no "React", "Docker", "Clean Architecture" on the page).
- **Tone**: Professional authority. Sell without selling (Luana Carolina's approach).
- **Services framed as outcomes**: "Automação com IA", "Chatbots inteligentes", "Sistemas sob medida" — NOT technology names.
- **No employer mention**: Samuel is positioning as independent. Do NOT add company names.
- **No geographic limitation**: Do NOT show city/state. Scope is Brazil and international.
- **CTA goes to WhatsApp**: `wa.me/5537998469545` with pre-filled message.
- **Authority signals**: M.Sc. in Computer Science (UFLA), 10+ years experience — mentioned subtly in the about text, never as badges.
- **Social links order**: LinkedIn first (B2B), then Instagram, GitHub, Telegram, Email.

## Technical Notes

- Google Analytics tracking ID: `G-JGZ7YDLZTS`.
- Icons are inline SVGs (no Font Awesome CDN — eliminated ~80KB).
- Google Fonts loaded via `<link>` with preconnect (NOT CSS `@import`).
- Avatar has animated conic-gradient ring with glow effect.
- Accessibility: WCAG-compliant focus states, `aria-labels`, `prefers-reduced-motion` support, 44px minimum tap targets on mobile.
- SEO: JSON-LD Person + WebSite schemas, canonical URL, absolute OG image URLs, `fetchpriority="high"` on avatar.
