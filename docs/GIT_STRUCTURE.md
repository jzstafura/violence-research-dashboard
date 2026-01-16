# Recommended Git Repository Structure for V-Project

## Overview
This document outlines the recommended directory structure for the Violence Research Dashboard repository, designed for scalability, maintainability, and collaborative development.

## Directory Tree

```
violence-research-dashboard/
│
├── README.md                      # Main project documentation
├── LICENSE                        # Project license (recommend MIT or CC BY 4.0)
├── .gitignore                     # Git ignore rules
├── CONTRIBUTING.md                # Guidelines for contributors
├── CHANGELOG.md                   # Version history and changes
│
├── index.html                     # Main dashboard page (current version)
├── favicon.ico                    # Site favicon
│
├── assets/                        # Static assets
│   ├── css/                       # Stylesheets
│   │   ├── main.css              # Main styles (if extracting from inline)
│   │   ├── themes/               # Alternative color themes
│   │   │   ├── dark.css
│   │   │   └── high-contrast.css
│   │   └── print.css             # Print-specific styles
│   │
│   ├── js/                        # JavaScript files
│   │   ├── main.js               # Main application logic
│   │   ├── data-loader.js        # JSON data loading and parsing
│   │   ├── filters.js            # Filter and search functionality
│   │   ├── charts.js             # Chart rendering (Chart.js wrapper)
│   │   ├── export.js             # Export functionality
│   │   └── utils.js              # Utility functions
│   │
│   └── img/                       # Images and graphics
│       ├── logo.png
│       ├── og-image.png          # Open Graph image for social sharing
│       └── screenshots/          # Dashboard screenshots for README
│
├── data/                          # Data files
│   ├── citations.json            # Main citation database (VERSION CONTROLLED)
│   ├── schemas/                  # JSON schemas for validation
│   │   └── citation-schema.json
│   ├── exports/                  # User-generated exports (NOT version controlled)
│   └── backups/                  # Timestamped backups (NOT version controlled)
│
├── docs/                          # Extended documentation
│   ├── theoretical-framework.md  # Detailed theory explanations
│   ├── methodology.md            # Research methodology
│   ├── data-dictionary.md        # JSON field definitions
│   ├── user-guide.md             # User instructions
│   ├── developer-guide.md        # Development documentation
│   └── api-reference.md          # If building API in future
│
├── scripts/                       # Utility scripts
│   ├── validate-citations.js     # Validate JSON against schema
│   ├── check-dois.js             # Verify DOI links are valid
│   ├── backup-data.sh            # Backup citation database
│   ├── generate-sitemap.js       # Generate sitemap.xml
│   └── import/                   # Import scripts from other formats
│       ├── bibtex-to-json.py
│       └── csv-to-json.py
│
├── tools/                         # Development and admin tools
│   ├── citation-editor/          # Web-based citation editor
│   │   ├── index.html
│   │   └── editor.js
│   ├── quality-checker/          # Evidence quality assessment tool
│   └── network-visualizer/       # Concept network visualization
│
├── analysis/                      # Data analysis scripts (future)
│   ├── R/                        # R scripts for statistical analysis
│   │   ├── meta-analysis.R
│   │   └── visualization.R
│   ├── python/                   # Python scripts for data processing
│   │   ├── topic_modeling.py
│   │   └── citation_network.py
│   └── notebooks/                # Jupyter notebooks
│       └── exploratory-analysis.ipynb
│
├── tests/                         # Testing files
│   ├── test-data-loader.js
│   ├── test-filters.js
│   └── test-citations.json       # Sample data for testing
│
├── .github/                       # GitHub-specific files
│   ├── workflows/                # GitHub Actions
│   │   ├── validate-pr.yml      # Validate PRs before merge
│   │   └── deploy.yml           # Auto-deploy to GitHub Pages
│   ├── ISSUE_TEMPLATE/           # Issue templates
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── citation_submission.md
│   └── pull_request_template.md
│
└── archive/                       # Archived versions (NOT in .gitignore)
    ├── v1.0/                     # Version snapshots
    └── deprecated/               # Deprecated code/files
```

## File Purposes and Guidelines

### Root Level Files

**README.md**
- Primary project documentation
- Quick start guide
- Links to detailed docs
- Citation information
- Badges (build status, version, etc.)

**LICENSE**
- Recommended: MIT for code, CC BY 4.0 for content
- Clearly separates code license from content license

**CONTRIBUTING.md**
```markdown
# Contributing Guidelines
- How to submit citations
- Code style guidelines
- Pull request process
- Citation quality standards
```

**CHANGELOG.md**
```markdown
# Changelog
## [1.1.0] - 2026-02-15
### Added
- Search functionality
- Export feature
### Changed
- Improved mobile responsiveness
```

### Data Directory (`/data`)

**citations.json**
- **ALWAYS VERSION CONTROLLED**
- Single source of truth for all citations
- Follow semantic versioning in metadata
- Backup before major changes

**schemas/citation-schema.json**
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["id", "authors", "year", "title"],
  ...
}
```

### Scripts Directory (`/scripts`)

**Purpose**: Automate maintenance tasks

**validate-citations.js**
```javascript
// Validates citations.json against schema
// Checks for duplicate IDs
// Verifies required fields
// Run before committing changes
```

**check-dois.js**
```javascript
// Sends HEAD requests to all DOI URLs
// Reports broken links
// Suggests alternatives
// Run monthly via cron or GitHub Actions
```

### Documentation Directory (`/docs`)

**Structure for GitHub Pages**:
```
docs/
├── index.md           # Documentation home
├── _config.yml        # Jekyll configuration
└── ...
```

Enables: `https://jzstafura.github.io/violence-research-dashboard/docs/`

### Tools Directory (`/tools`)

**citation-editor/**
- Simple web interface for adding/editing citations
- Validates input
- Generates proper JSON
- Accessible via: `your-repo/tools/citation-editor/`

**Example usage**:
```bash
# Local development
cd tools/citation-editor
python -m http.server 8000
# Visit: http://localhost:8000
```

### GitHub Actions (`/.github/workflows`)

**validate-pr.yml**
```yaml
name: Validate Pull Request
on: [pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate JSON
        run: node scripts/validate-citations.js
      - name: Check DOIs
        run: node scripts/check-dois.js
```

**deploy.yml**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
```

## Branch Strategy

### Main Branches
- `main` - Production-ready code, always deployable
- `develop` - Integration branch for features

### Supporting Branches
- `feature/*` - New features (e.g., `feature/network-viz`)
- `fix/*` - Bug fixes (e.g., `fix/broken-doi-links`)
- `content/*` - Citation additions (e.g., `content/add-bio-domain-papers`)
- `docs/*` - Documentation updates

### Workflow
```bash
# Create feature branch
git checkout -b feature/search-functionality develop

# Work on feature
git add .
git commit -m "Add search box and filtering logic"

# Push and create PR
git push origin feature/search-functionality
# Create PR: feature/search-functionality -> develop

# After review, merge to develop
# Periodically merge develop -> main for releases
```

## Commit Message Guidelines

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks
- `content`: Citation additions/updates

### Examples
```bash
git commit -m "feat(filters): Add year range slider for citation filtering"
git commit -m "content(psych): Add 3 new trauma-violence papers from 2025"
git commit -m "fix(charts): Correct temperature effect size display"
git commit -m "docs(readme): Update installation instructions"
```

## Tagging and Releases

### Semantic Versioning
- **MAJOR**: Incompatible changes (2.0.0)
- **MINOR**: New features, backward compatible (1.1.0)
- **PATCH**: Bug fixes, backward compatible (1.0.1)

### Creating Releases
```bash
# Tag version
git tag -a v1.1.0 -m "Version 1.1.0: Add search and export features"
git push origin v1.1.0

# Create GitHub release
# Use GitHub UI or gh CLI:
gh release create v1.1.0 --title "v1.1.0" --notes "Release notes here"
```

## File Naming Conventions

### General Rules
- Use lowercase with hyphens: `citation-editor.js` (NOT `CitationEditor.js`)
- Be descriptive: `temperature-violence-meta-analysis.md` (NOT `paper1.md`)
- Date format: `YYYY-MM-DD-description.md` for time-based files

### Data Files
- `citations.json` - Main database
- `citations-backup-2026-01-15.json` - Timestamped backups
- `citations-v1.0.0.json` - Version snapshots

### Scripts
- Action verb + noun: `validate-citations.js`, `check-dois.js`
- Import scripts: `bibtex-to-json.py`, `csv-to-json.py`

## Size Management

### What to Track
✅ Source code (HTML, CSS, JS)
✅ Data files (JSON)
✅ Documentation (MD files)
✅ Configuration files

### What NOT to Track (in .gitignore)
❌ Build outputs (`dist/`, `*.min.js`)
❌ Dependencies (`node_modules/`)
❌ User exports (`data/exports/`)
❌ Editor files (`.vscode/`, `.idea/`)
❌ Large binary files (use Git LFS if needed)

## GitHub Pages Setup

### Option 1: Root Directory
- Set source to: `main` branch / `/ (root)`
- Access at: `https://jzstafura.github.io/violence-research-dashboard/`

### Option 2: Docs Directory
- Set source to: `main` branch / `/docs`
- Move index.html to docs/
- Access documentation separately

### Recommended: Root for Dashboard
```
Repository settings → Pages → Source: main branch, / (root)
```

## Collaboration Workflow

### For Contributors
1. Fork repository
2. Create feature branch from `develop`
3. Make changes
4. Run validation scripts
5. Submit pull request
6. Respond to review feedback
7. Merge after approval

### For Maintainers
1. Review PR for:
   - Citation quality (peer-reviewed?)
   - JSON validation (proper format?)
   - No broken links
   - Appropriate synthesis
2. Request changes if needed
3. Merge to `develop`
4. Periodically release to `main`

## Backup Strategy

### Automated Backups
```bash
# Add to cron job (daily at 2 AM)
0 2 * * * /path/to/scripts/backup-data.sh

# backup-data.sh
#!/bin/bash
DATE=$(date +%Y-%m-%d)
cp data/citations.json data/backups/citations-$DATE.json
git add data/backups/citations-$DATE.json
git commit -m "chore: Daily backup $DATE"
git push origin main
```

### Manual Snapshots
Before major changes:
```bash
cp data/citations.json data/citations-pre-refactor-$(date +%Y-%m-%d).json
```

## Migration Path

### From Current State → Full Structure

**Phase 1: Immediate** (Week 1)
```bash
mkdir -p data assets/{css,js,img} docs scripts
mv index.html .
# Keep current inline styles/scripts initially
git add .
git commit -m "chore: Initialize directory structure"
```

**Phase 2: Data Extraction** (Week 2)
```bash
# Move citations to JSON (already created)
mv citations.json data/
# Update index.html to load from data/citations.json
```

**Phase 3: Code Modularization** (Weeks 3-4)
```bash
# Extract CSS to assets/css/main.css
# Extract JS to assets/js/*.js
# Update references in index.html
```

**Phase 4: Documentation** (Ongoing)
```bash
# Move README.md content to docs/
# Create specialized docs
```

## Best Practices

### Commits
- Commit related changes together
- Write meaningful commit messages
- Reference issues: `fix: Broken DOI link (#42)`
- Don't commit broken code to `main`

### Pull Requests
- One feature per PR
- Include tests if applicable
- Update documentation
- Request review from maintainer

### Issues
- Use templates for consistency
- Label appropriately (bug, enhancement, citation)
- Link to relevant PRs
- Close with keywords: `Closes #42`

### Documentation
- Keep README current
- Document breaking changes
- Update CHANGELOG.md
- Version documentation with releases

## Next Steps

1. **Implement structure**:
   ```bash
   cd violence-research-dashboard
   # Copy structure files from above
   git add .
   git commit -m "chore: Implement recommended repository structure"
   git push origin main
   ```

2. **Set up GitHub Pages**:
   - Settings → Pages → Source: main branch, / (root)

3. **Create first release**:
   ```bash
   git tag -a v1.0.0 -m "Initial release with JSON structure"
   git push origin v1.0.0
   ```

4. **Add GitHub Actions**:
   - Create `.github/workflows/deploy.yml`
   - Enable automatic deployment

5. **Invite collaborators** (if desired):
   - Settings → Collaborators → Add people
