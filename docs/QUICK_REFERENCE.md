# Quick Reference Guide: JSON Structure & Git Workflow

## JSON Structure Quick Reference

### Adding a New Citation

```json
{
  "id": "smith2026",                    // Unique ID: authorYEAR
  "authors": "Smith, J., & Jones, M.",  // APA format
  "year": 2026,                         // Publication year
  "title": "Title of the work",         // Full title
  "source": "Journal Name",             // Journal/book/source
  "sourceType": "journal",              // journal|book|report|encyclopedia
  "volume": "15",                       // Optional
  "issue": "2",                         // Optional
  "pages": "123-145",                   // Optional
  "doi": "10.xxxx/xxxxx",              // DOI only (without https://)
  "url": "https://doi.org/10.xxxx/xxxxx", // Full URL
  "domain": "Theory",                   // Theory|Structural|Bio|Psych|Comm|History
  "keywords": [                         // Array of keywords
    "keyword1",
    "keyword2"
  ],
  "synthesis": "1-2 sentence summary", // Core findings
  "studyType": "meta-analysis",        // See options below
  "methodology": "systematic review",   // Optional, more specific
  "sampleSize": 5000,                  // Optional, if applicable
  "population": "clinical",            // Optional, study population
  "effectSize": 1.5,                   // Optional, numeric effect
  "effectSizeType": "Cohen's d",       // Optional, effect type
  "evidenceQuality": 5,                // 1-5 rating
  "notes": "Additional context"        // Optional notes
}
```

### Study Type Options
- `"theoretical"` - Theoretical framework
- `"meta-analysis"` - Meta-analysis
- `"meta-meta-analysis"` - Meta-analysis of meta-analyses
- `"review"` - Systematic review
- `"empirical"` - Original empirical research
- `"research synthesis"` - Qualitative synthesis
- `"report"` - Research report

### Domain Codes
- `"Theory"` - Integrative theoretical frameworks
- `"Structural"` - Social/structural determinants
- `"Bio"` - Biological/environmental factors
- `"Psych"` - Psychological/clinical
- `"Comm"` - Communication/digital
- `"History"` - Historical/institutional

## Git Commands Quick Reference

### Initial Setup (One-time)
```bash
# Clone your repository
git clone https://github.com/jzstafura/violence-research-dashboard.git
cd violence-research-dashboard

# Configure git (if not already done)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Daily Workflow

#### 1. Before Starting Work
```bash
# Make sure you're on main branch
git checkout main

# Get latest changes
git pull origin main

# Create a new branch for your work
git checkout -b content/add-new-citations
```

#### 2. Making Changes

**Adding Citations:**
```bash
# Edit data/citations.json
# Add your new citation(s)

# Test locally (open index-json-powered.html in browser)

# Stage changes
git add data/citations.json

# Commit with descriptive message
git commit -m "content(psych): Add 2 new ACEs studies from 2025"
```

**Multiple Related Changes:**
```bash
# Stage all changed files
git add .

# Or stage specific files
git add data/citations.json README.md

# Commit
git commit -m "feat: Add network visualization feature"
```

#### 3. Pushing Changes
```bash
# Push your branch to GitHub
git push origin content/add-new-citations

# Create Pull Request on GitHub
# (or use gh CLI: gh pr create)
```

#### 4. After PR is Merged
```bash
# Switch back to main
git checkout main

# Pull the merged changes
git pull origin main

# Delete your local branch (optional)
git branch -d content/add-new-citations
```

### Common Git Scenarios

#### Check Status
```bash
git status              # What's changed?
git diff                # Show exact changes
git log --oneline -5    # Recent commits
```

#### Undo Changes
```bash
# Undo unstaged changes
git checkout -- data/citations.json

# Undo staged changes
git reset HEAD data/citations.json

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) ⚠️ CAREFUL
git reset --hard HEAD~1
```

#### Branch Management
```bash
# List branches
git branch              # Local branches
git branch -r           # Remote branches
git branch -a           # All branches

# Switch branches
git checkout main
git checkout -b new-feature-branch

# Delete branch
git branch -d branch-name           # Safe delete
git branch -D branch-name           # Force delete
```

#### Stash Changes (Temporary Save)
```bash
# Save current work temporarily
git stash

# List stashes
git stash list

# Apply most recent stash
git stash pop

# Apply specific stash
git stash apply stash@{0}
```

## Validation Workflow

### Before Committing Citations

1. **Validate JSON syntax:**
```bash
# Using Python
python -m json.tool data/citations.json

# Using Node.js
node -e "console.log(JSON.stringify(require('./data/citations.json'), null, 2))"
```

2. **Check for duplicates:**
```bash
# Extract all IDs and check for duplicates
grep '"id":' data/citations.json | sort | uniq -d
```

3. **Verify DOI links:**
```bash
# Run DOI checker (if you've created this script)
node scripts/check-dois.js
```

4. **Test locally:**
```bash
# Open in browser
open index-json-powered.html
# or
python -m http.server 8000
# Then visit: http://localhost:8000
```

## Common Tasks

### Adding Multiple Citations

1. **Open `data/citations.json`**
2. **Find the `citations` array**
3. **Add new entries** (follow template above)
4. **Remember the comma** after previous entry
5. **Update metadata count:**
   ```json
   "metadata": {
     "totalCitations": 15  // Update this number
   }
   ```

### Updating README

```bash
# Edit README.md
git add README.md
git commit -m "docs: Update citation count in README"
git push origin main
```

### Creating a Release

```bash
# Make sure main is up to date
git checkout main
git pull origin main

# Create and push tag
git tag -a v1.1.0 -m "Release v1.1.0: Added 10 new citations"
git push origin v1.1.0

# Create release on GitHub
gh release create v1.1.0 --title "v1.1.0" --notes "Added 10 new citations across Bio and Psych domains"
```

## File Organization Checklist

```
✅ data/citations.json           # Main data file
✅ index.html or index-json-powered.html  # Dashboard
✅ README.md                      # Documentation
✅ assets/js/data-loader.js      # JavaScript module
✅ .gitignore                    # Git exclusions
✅ LICENSE                       # License file
```

## Backup Strategy

### Manual Backup Before Major Changes
```bash
# Create backup
cp data/citations.json data/citations-backup-$(date +%Y-%m-%d).json

# Verify backup
ls -lh data/
```

### Automated Daily Backup (Optional)
Create `scripts/backup-data.sh`:
```bash
#!/bin/bash
DATE=$(date +%Y-%m-%d)
cp data/citations.json data/backups/citations-$DATE.json
echo "Backup created: citations-$DATE.json"
```

Make executable and run:
```bash
chmod +x scripts/backup-data.sh
./scripts/backup-data.sh
```

## Troubleshooting

### JSON Syntax Error
```bash
# Error: Unexpected token
# Solution: Check for missing commas, brackets, quotes

# Use a JSON validator
jsonlint data/citations.json

# Or online: https://jsonlint.com/
```

### Git Conflicts
```bash
# If you get merge conflicts:
# 1. Open conflicting file
# 2. Look for conflict markers:
#    <<<<<<< HEAD
#    your changes
#    =======
#    their changes
#    >>>>>>> branch-name
# 3. Resolve manually
# 4. Stage and commit
git add data/citations.json
git commit -m "fix: Resolve merge conflict in citations"
```

### Accidentally Committed to Main
```bash
# Don't push! Instead:
git reset --soft HEAD~1  # Undo commit, keep changes
git checkout -b proper-branch-name  # Create proper branch
git add .
git commit -m "Your message"
git push origin proper-branch-name
```

## Code Snippets

### Load Citations in JavaScript
```javascript
const manager = new CitationManager();
await manager.loadData('data/citations.json');

// Get all citations
const all = manager.getAllCitations();

// Filter by domain
const psychCitations = manager.getCitationsByDomain('Psych');

// Search
const results = manager.searchCitations('trauma');

// Export
const text = manager.exportToText(results);
manager.downloadFile(text, 'export.txt');
```

### Add Citation via JavaScript
```javascript
// Read current data
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/citations.json', 'utf8'));

// Add new citation
data.citations.push({
  id: 'newid2026',
  // ... other fields
});

// Update count
data.metadata.totalCitations = data.citations.length;

// Write back
fs.writeFileSync(
  'data/citations.json', 
  JSON.stringify(data, null, 2)
);
```

## Resources

### JSON Tools
- **Validator**: https://jsonlint.com/
- **Schema Generator**: https://www.jsonschema.net/
- **Diff Tool**: https://jsondiff.com/

### Git Resources
- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **GitHub Docs**: https://docs.github.com/
- **Interactive Tutorial**: https://learngitbranching.js.org/

### APA Citation
- **APA Style**: https://apastyle.apa.org/
- **DOI Resolver**: https://doi.org/

## Quick Tips

💡 **Always validate JSON before committing**
💡 **Use descriptive commit messages**
💡 **Create branches for new features**
💡 **Back up before major changes**
💡 **Test locally before pushing**
💡 **Keep commits focused and atomic**
💡 **Document your changes in commit messages**

---

**Need help?**
- Check the main README.md
- Review GIT_STRUCTURE.md for full details
- Open an issue on GitHub
