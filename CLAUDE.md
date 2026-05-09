# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JavaScript research synthesis platform hosted on GitHub Pages. Visualizes multi-disciplinary research on violence through a four-level ecological framework (Societal → Community → Relational → Individual). No build tools, no npm, no framework — pure vanilla JS with CSS custom properties.

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

### Pages
Six active HTML pages:
- `index.html` — Main dashboard with concentric-ring ecological model visualization; fetches `data/citations_complete.json` directly via `fetch()` in an inline script
- `societal.html`, `relational.html`, `individual.html` — Level-specific evidence pages with **hardcoded** study cards (no JSON fetch)
- `community.html` — Community level page; **currently has unresolved git merge conflicts** (`<<<<<<< HEAD` markers)
- `databases.html` — Static listing of external conflict/violence databases with **hardcoded** content

Two experimental/prototype files that are not the deployed pages:
- `index-json-powered.html` — Uses `CitationManager` from `data-loader.js` and Tailwind CDN
- `index_enhanced.html` — Another prototype variant

### Data Layer (`data/`)
Two JSON files with **different schemas**:

**`citations.json`** (v2.1.0, 22 citations) — Flat array format:
```json
{ "metadata": {...}, "citations": [...], "ecologicalLevelDescriptions": {...} }
```
Citation fields: `id`, `authors`, `year`, `title`, `source`, `sourceType`, `doi`, `url`, `ecologicalLevel`, `theme`, `synthesis`, `studyType`, `evidenceQuality` (1–5), `keywords[]`

**`citations_complete.json`** (v3.0.0, 34 items) — Sectioned format with no top-level `citations` array:
```json
{ "metadata": {...}, "databases": [...], "empirical": [...], "theoretical": [...] }
```
This is what `index.html` fetches and parses directly in its inline script.

### JavaScript Module (`assets/js/data-loader.js`)
Only used by the experimental `index-json-powered.html`. The main site pages do **not** use it. Contains two classes:
- **`CitationManager`** — Expects the `citations.json` flat-array schema. Methods: `loadData()`, `searchCitations()`, `getCitationsByDomain()`, `exportToText()`, `exportToBibTeX()`, `formatAPACitation()`, `getStatistics()`
- **`UIHelpers`** — Static rendering: `renderCitationsTable()`, `getDomainColorClasses()`, `renderCharts()` (Chart.js bar/radar)

### Styling
All main pages use **vanilla CSS with custom properties** (no Tailwind). Tailwind CDN is only in the prototype files.

CSS custom properties for ecological level colors (defined in each page's `<style>` block):
- `--color-societal: #ef4444`, `--color-community: #f59e0b`, `--color-relational: #10b981`, `--color-individual: #3b82f6`, `--color-cross-level: #8b5cf6`
- Each level page sets `--color-accent` and `--color-accent-bg` to its theme color
- Dark-mode-first: `--color-bg: #0f1419`, `--color-surface: #1a2332`, `--color-surface-elevated: #232f42`

Three-font system loaded via Google Fonts: Source Serif 4 (headings), IBM Plex Sans (body), IBM Plex Mono (data/citations).

## Known Issues
- `community.html` has unresolved git merge conflicts — must be resolved before serving
- Multiple root-level planning/documentation files (`START_HERE.md`, `SUGGESTIONS.md`, `DEPLOYMENT_CHECKLIST.md`, `QUICK_REFERENCE.md`, etc.) are untracked leftovers from a prior workflow and are not part of the site
- `gitignore` file in root is misnamed (should be `.gitignore`) — the actual `.gitignore` exists separately

## Adding Citations

For `citations.json` (ecological level pages), add to the `citations[]` array. Required fields: `id` (format: `authorYYYY`), `authors` (APA format), `year`, `title`, `source`, `ecologicalLevel`, `synthesis` (1–2 sentences), `evidenceQuality` (1–5), `keywords[]` (3–8 items). Either `doi` or `url` required.

For `citations_complete.json`, add to the appropriate section (`databases`, `empirical`, or `theoretical`) matching its schema.

After editing either JSON, validate: `python -m json.tool data/<file>.json`

## External Dependencies (CDN only)
- Chart.js v4 — used only in `data-loader.js` / experimental pages
- Google Fonts — Source Serif 4, IBM Plex Sans, IBM Plex Mono
