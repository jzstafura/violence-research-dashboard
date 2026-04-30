# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML/CSS/JavaScript research synthesis platform** hosted on GitHub Pages. It visualizes multi-disciplinary research on violence through a four-level ecological framework (Societal → Community → Relational → Individual). No build tools, no npm, no framework — pure vanilla JS with CDN-loaded libraries.

## Development Commands

```bash
# Serve locally
python -m http.server 8000
# Then open http://localhost:8000

# Validate JSON data files
python -m json.tool data/citations.json
python -m json.tool data/citations_complete.json

# Check for duplicate citation IDs
grep '"id":' data/citations.json | sort | uniq -d
```

## Architecture

### File-Based Routing
Five static HTML pages map directly to ecological levels:
- `index.html` — Main dashboard with concentric-ring ecological model visualization
- `societal.html`, `community.html`, `relational.html`, `individual.html` — Level-specific evidence pages with study cards
- `databases.html` — Citation browser interface

### JavaScript Module (`assets/js/data-loader.js`)
Two classes provide all JS logic shared across pages:

- **`CitationManager`** — Fetches and manages citation data. Key methods: `loadData(jsonPath)`, `searchCitations(query)`, `getCitationsByDomain()`, `exportToText()`, `exportToBibTeX()`, `formatAPACitation()`, `getStatistics()`
- **`UIHelpers`** — Static rendering utilities: `renderCitationsTable()`, `getDomainColorClasses()`, `renderCharts()` (Chart.js integration)

Each HTML page also has inline `<script>` blocks with page-specific state (`allCitations[]`, `filteredCitations[]`, `currentFilter`, `searchQuery`) and event listeners for search/filter/export interactions.

### Data Layer (`data/`)
- `citations_complete.json` — Primary source (33 citations). Loaded by most pages.
- `citations.json` — Legacy smaller set (15 citations), preserved for backward compatibility.

**Citation schema fields**: `id`, `authors`, `year`, `title`, `source`, `sourceType`, `doi`, `url`, `ecologicalLevel`, `keywords[]`, `synthesis`, `studyType`, `effectSize`, `effectSizeType`, `evidenceQuality` (1–5)

### Styling Conventions
- **Tailwind CSS v3** via CDN — utility classes only, no config file
- CSS custom properties for ecological level colors:
  - `--color-societal: #ef4444` (red), `--color-community: #f59e0b` (orange), `--color-relational: #10b981` (green), `--color-individual: #3b82f6` (blue), `--color-cross-level: #8b5cf6` (purple)
- Each level page sets `--color-accent` to match its theme
- Three-font system: Source Serif 4 (headings), IBM Plex Sans (body), IBM Plex Mono (data/citations)

## Adding Citations

Follow the template in `data/citations_complete.json`. Required fields: `id` (format: `authorYYYY`), `authors` (APA format), `year`, `title`, `source`, `ecologicalLevel`, `synthesis` (1–2 sentences), `evidenceQuality` (1–5), `keywords` (3–8 items). `doi` or `url` required; `effectSize` when available.

After editing JSON, validate with `python -m json.tool data/citations_complete.json` before committing.

## External Dependencies (CDN only)
- Chart.js v4 — bar/radar charts in the citation browser
- Google Fonts — Source Serif 4, IBM Plex Sans, IBM Plex Mono
