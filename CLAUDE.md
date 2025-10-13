# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Roberto Aguero (rcaguero.com), built with Next.js 15, React 19, and Tailwind CSS 4. The site is deployed via GitHub Pages using the custom domain `rcaguero.com`.

## Development Commands

```bash
# Start development server with Turbopack (port 3000)
npm run dev

# Build production bundle with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **React**: v19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: Strict mode enabled
- **Fonts**: Geist Sans and Geist Mono (via next/font)
- **Build Tool**: Turbopack (used for both dev and build)

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout with metadata and font configuration
    page.tsx          # Home page component
    globals.css       # Global Tailwind styles

public/
  assets/
    css/              # Legacy stylesheets (marked for deletion)
    fonts/            # Legacy fonts (marked for deletion)
    pdfs/             # PDF documents
    photos/           # Image assets
  *.svg               # Next.js default SVG icons

[deleted files]       # Several old HTML/CSS files removed in migration to Next.js
```

## Key Configuration

### TypeScript
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Strict mode enabled

### ESLint
- Extends: `next/core-web-vitals`, `next/typescript`
- Ignores: node_modules, .next, out, build directories

### Deployment
- Custom domain configured via CNAME file: `rcaguero.com`
- Hosted on GitHub Pages

## Architecture Notes

### Font Loading
The project uses Next.js Font Optimization with Google Fonts (Geist family). Fonts are loaded in [layout.tsx](src/app/layout.tsx:5-13) with CSS variables:
- `--font-geist-sans` for sans-serif text
- `--font-geist-mono` for monospace text

### Styling Approach
- Tailwind CSS with utility-first approach
- Dark mode support using Tailwind's dark: prefix
- Responsive design with mobile-first breakpoints (sm:, md:)

### Static Assets
Legacy assets in `public/assets/` are marked for deletion (visible in git status). The site is being migrated from a traditional HTML/CSS structure to Next.js.

## Recent Changes
Based on git history, the site underwent a major re-vamp migrating from static HTML/CSS files to Next.js with React components. Several legacy files (blog.html, photography.html, research.html, and old CSS/fonts) have been deleted but not yet committed.
