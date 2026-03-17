# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio/landing page for Samuel Terra Vieira (samuelterra.dev). No build system, bundler, or framework — just plain HTML and CSS served directly.

## Architecture

- `index.html` — Single-page site with name, title, and social links. Contains all SEO meta tags (Open Graph, Twitter Cards, structured data).
- `styles.css` — Styling using Montserrat font, centered layout via `display: table`.
- `manifest.json` — PWA web app manifest.
- Supporting assets: `favicon.ico`, `logo192.png`, `logo512.png`.
- `sitemap.xml`, `robots.txt`, `humans.txt` — SEO and crawling configuration.

## Development

No build or install step. Open `index.html` in a browser or serve with any static file server:

```
python3 -m http.server 8000
```

## Notes

- Language is Portuguese (pt-BR).
- Google Analytics tracking ID: `G-0WSF0B0Z83`.
- Icons from Font Awesome 5.15.2 loaded via CDN.
