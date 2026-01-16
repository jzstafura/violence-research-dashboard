# V-Project Requirements Document

## Project Information

**Project Name**: Violence Research Dashboard (V-Project)  
**Version**: 1.0  
**Date**: January 2026  
**Maintainer**: Joseph Z. Stafura, PhD  
**Repository**: https://github.com/jzstafura/violence-research-dashboard

## Executive Summary

The V-Project is an interactive research dashboard that synthesizes multi-domain evidence on violence mechanisms, risk factors, and structural determinants. The system provides a comprehensive, empirically-grounded understanding of violence as a complex biopsychosocial phenomenon by integrating findings from cognitive neuroscience, social psychology, criminology, structural sociology, environmental science, and digital communication research.

## System Overview

### Purpose
- Provide researchers with a comprehensive literature synthesis on violence
- Enable evidence-based policy decisions through accessible risk factor data
- Support educational use with interactive theoretical frameworks
- Facilitate cross-domain integration in violence research

### Scope
**In Scope**:
- Interactive web-based dashboard
- Structured citation database (JSON)
- Real-time search and filtering
- Export functionality (TXT, BibTeX)
- Data visualization (charts, statistics)
- Responsive design for desktop and mobile

**Out of Scope**:
- User authentication/accounts
- Database backend (currently JSON file-based)
- Real-time collaboration features
- Automated citation import from external APIs
- Machine learning predictions (future consideration)

## System Architecture

### Technology Stack

**Frontend**:
- HTML5 (semantic markup)
- CSS Framework: Tailwind CSS v3.x (CDN)
- JavaScript: ES6+ (no framework dependencies)
- Visualization: Chart.js v4.x (CDN)

**Data Layer**:
- Format: JSON (structured document database)
- Location: `/data/citations.json`
- Schema: Custom citation object with metadata

**Deployment**:
- Platform: GitHub Pages (static hosting)
- Version Control: Git/GitHub
- CI/CD: GitHub Actions (optional validation)

**Development Tools**:
- Code Editor: Any (VS Code recommended)
- Local Server: Python SimpleHTTPServer or Live Server
- Validation: JSONLint, browser DevTools

### Architecture Pattern

**Three-Layer Architecture**:

1. **Data Layer** (`data/citations.json`)
   - Single source of truth for all citations
   - Structured JSON with comprehensive metadata
   - Version controlled in Git

2. **Logic Layer** (`assets/js/data-loader.js`)
   - CitationManager class for data operations
   - UIHelpers class for rendering
   - Pure JavaScript (no framework dependencies)

3. **Presentation Layer** (`index.html`)
   - Semantic HTML5 structure
   - Tailwind CSS for styling
   - Dynamic content loading
   - Event-driven interactions

## Functional Requirements

### FR-1: Citation Database Management

**FR-1.1**: Store Citations in Structured Format
- System SHALL store citations in JSON format
- Each citation SHALL include: id, authors, year, title, source, domain, synthesis
- Citations MAY include: DOI, volume, issue, pages, keywords, effect size, study type
- System SHALL maintain version metadata (version, lastUpdated, totalCitations)

**FR-1.2**: Citation Metadata
- Citations SHALL be categorized by domain (Theory, Structural, Bio, Psych, Comm, History)
- Citations SHALL include evidence quality rating (1-5 scale)
- Citations SHALL include synthesis statement (1-2 sentences, own words)
- Citations SHOULD include 3-8 relevant keywords

**FR-1.3**: Data Integrity
- JSON SHALL be valid and parseable
- All citation IDs SHALL be unique
- Required fields SHALL not be null/empty
- DOIs/URLs SHALL be functional (verified)

### FR-2: Search and Discovery

**FR-2.1**: Real-Time Search
- System SHALL provide search box for text queries
- Search SHALL filter across: title, authors, synthesis, keywords
- Search SHALL update results dynamically (no page reload)
- Search SHALL be case-insensitive

**FR-2.2**: Domain Filtering
- System SHALL provide dropdown filter for 6 domains
- Filter SHALL include "All Domains" option
- Filter SHALL work in combination with search
- Filter SHALL update result count

**FR-2.3**: Year Filtering
- System SHALL provide dropdown filter for publication years
- Filter SHALL include "All Years" option
- Filter SHALL work in combination with search and domain filters
- Filter SHALL display only years present in database

**FR-2.4**: Result Display
- System SHALL display filtered result count
- System SHALL maintain result count accuracy
- System SHALL show "0 sources" when no matches found

### FR-3: Citation Display

**FR-3.1**: Table View
- Citations SHALL display in sortable table format
- Table SHALL include columns: Citation, Domain, Synthesis
- Citations SHALL be formatted in APA 7th edition
- Domain tags SHALL be color-coded by category

**FR-3.2**: Citation Links
- Each citation SHALL include clickable link to source
- Links SHALL open in new tab/window (target="_blank")
- Links SHALL include rel="noopener" for security
- Links SHALL display source label (journal/publisher name)

**FR-3.3**: Responsive Display
- Table SHALL be responsive on mobile devices
- Table SHALL scroll horizontally on small screens
- Text SHALL remain readable at all breakpoints
- Interactive elements SHALL remain accessible

### FR-4: Export Functionality

**FR-4.1**: Text Export
- System SHALL export filtered citations to plain text
- Export SHALL include: citation, domain, synthesis, link
- Export SHALL include generation date
- Export SHALL trigger browser download

**FR-4.2**: BibTeX Export
- System SHALL export filtered citations to BibTeX format
- Export SHALL use appropriate entry types (@article, @misc)
- Export SHALL include all available bibliographic fields
- Export SHALL generate valid BibTeX syntax

**FR-4.3**: Export File Naming
- Files SHALL include "v-project-citations" prefix
- Files SHALL include current date (YYYY-MM-DD)
- Files SHALL have appropriate extension (.txt, .bib)

### FR-5: Data Visualization

**FR-5.1**: Risk Factors Chart
- System SHALL display horizontal bar chart of risk factors
- Chart SHALL show: Temperature, ACEs, Substance Misuse, Political Exclusion, Trait Anger
- Chart SHALL display effect sizes/magnitudes
- Chart SHALL be responsive to screen size

**FR-5.2**: GAM Internal State Chart
- System SHALL display radar chart of GAM components
- Chart SHALL show: Cognition, Affect, Arousal, Trait/History, Situation
- Chart SHALL use relative weighting (0-100 scale)
- Chart SHALL be interactive (tooltips on hover)

**FR-5.3**: Chart Rendering
- Charts SHALL render using Chart.js library
- Charts SHALL load after data is available
- Charts SHALL be responsive to window resize
- Charts SHALL maintain aspect ratio

### FR-6: Statistics Dashboard

**FR-6.1**: Aggregate Statistics
- System SHALL display total citation count
- System SHALL display count of citations with effect sizes
- System SHALL display average evidence quality
- System SHALL display number of domains

**FR-6.2**: Statistics Updates
- Statistics SHALL update dynamically with filters
- Statistics SHALL reflect currently visible citations
- Statistics SHALL calculate in real-time

### FR-7: Theoretical Framework Display

**FR-7.1**: Perspective Toggling
- System SHALL provide buttons for 4 theoretical perspectives (GAM, GST, Path Dependence, HI)
- System SHALL display active perspective with visual indicator
- System SHALL show detailed description when perspective selected
- Default perspective SHALL be GAM

**FR-7.2**: Perspective Content
- Each perspective SHALL include title and detailed explanation
- Content SHALL be formatted with appropriate emphasis
- Content SHALL be readable and accessible

### FR-8: Performance and Loading

**FR-8.1**: Initial Load
- System SHALL display loading indicator while data loads
- System SHALL hide loading indicator when ready
- System SHALL show error message if data load fails
- System SHALL load within 3 seconds on standard connection

**FR-8.2**: Interaction Performance
- Search SHALL filter results within 100ms
- Filter changes SHALL apply within 100ms
- Export SHALL complete within 1 second
- Charts SHALL render within 500ms

### FR-9: Accessibility

**FR-9.1**: Semantic HTML
- System SHALL use semantic HTML5 elements
- System SHALL include ARIA labels where appropriate
- System SHALL maintain logical heading hierarchy
- System SHALL support keyboard navigation

**FR-9.2**: Visual Accessibility
- System SHALL maintain WCAG 2.1 AA contrast ratios
- System SHALL allow text resize without breaking layout
- System SHALL not rely solely on color for information
- System SHALL provide text alternatives for visual content

**FR-9.3**: Screen Reader Support
- Interactive elements SHALL have descriptive labels
- Dynamic content changes SHALL be announced (aria-live)
- Form controls SHALL have associated labels

## Non-Functional Requirements

### NFR-1: Usability

**NFR-1.1**: Ease of Use
- System SHALL be usable without training for researchers
- Common tasks SHALL require ≤3 clicks
- Interface SHALL follow web conventions
- Error messages SHALL be clear and actionable

**NFR-1.2**: Learnability
- Dashboard layout SHALL be intuitive
- Functions SHALL be self-explanatory
- Documentation SHALL be accessible from dashboard

### NFR-2: Reliability

**NFR-2.1**: Availability
- System SHALL be available 99.5% uptime (GitHub Pages SLA)
- System SHALL handle JSON parsing errors gracefully
- System SHALL continue functioning if charts fail to load

**NFR-2.2**: Data Integrity
- JSON data SHALL be validated before commit
- Broken links SHALL be detected and flagged
- Data backups SHALL be maintained

### NFR-3: Performance

**NFR-3.1**: Response Time
- Page load SHALL complete within 3 seconds
- Search filter SHALL respond within 100ms
- Export SHALL complete within 1 second
- Chart rendering SHALL complete within 500ms

**NFR-3.2**: Scalability
- System SHALL support up to 100 citations without performance degradation
- Search SHALL remain performant with 100+ citations
- Filters SHALL remain performant with 100+ citations

### NFR-4: Maintainability

**NFR-4.1**: Code Quality
- Code SHALL follow JavaScript best practices
- Functions SHALL be documented with comments
- Code SHALL be modular and reusable
- Code SHALL be version controlled

**NFR-4.2**: Data Management
- Citations SHALL be editable via JSON file only
- JSON structure SHALL be documented
- Changes SHALL be trackable via Git
- Validation scripts SHALL be available

### NFR-5: Compatibility

**NFR-5.1**: Browser Support
- System SHALL support Chrome/Edge (last 2 versions)
- System SHALL support Firefox (last 2 versions)
- System SHALL support Safari (last 2 versions)
- System SHALL support mobile browsers (iOS Safari, Chrome Android)

**NFR-5.2**: Device Support
- System SHALL be responsive on desktop (≥1024px)
- System SHALL be responsive on tablet (768px-1023px)
- System SHALL be responsive on mobile (320px-767px)
- System SHALL support touch interactions

### NFR-6: Security

**NFR-6.1**: Data Security
- System SHALL not collect user data
- System SHALL not use cookies or local storage
- External links SHALL use rel="noopener" for security
- System SHALL serve over HTTPS (GitHub Pages)

**NFR-6.2**: Content Security
- System SHALL not execute user-provided code
- System SHALL sanitize any user input
- System SHALL validate JSON structure before loading

### NFR-7: Documentation

**NFR-7.1**: User Documentation
- README SHALL explain project purpose and features
- README SHALL provide getting started instructions
- README SHALL include citation guide
- README SHALL link to detailed documentation

**NFR-7.2**: Developer Documentation
- Code SHALL include inline comments
- Architecture SHALL be documented (GIT_STRUCTURE.md)
- API SHALL be documented (data-loader.js)
- Contribution guide SHALL be provided

**NFR-7.3**: Data Documentation
- JSON schema SHALL be documented
- Citation fields SHALL be defined
- Domain descriptions SHALL be explained

## Data Requirements

### DR-1: Citation Object Schema

**Required Fields**:
```json
{
  "id": "string (unique, format: authorYEAR)",
  "authors": "string (APA format)",
  "year": "integer (1900-2030)",
  "title": "string (full title)",
  "source": "string (journal/book/publisher)",
  "sourceType": "enum (journal|book|report|encyclopedia|misc)",
  "url": "string (valid URL)",
  "domain": "enum (Theory|Structural|Bio|Psych|Comm|History)",
  "synthesis": "string (1-2 sentences, 50-500 chars)",
  "keywords": "array of strings (3-8 keywords)"
}
```

**Optional Fields**:
```json
{
  "doi": "string (DOI without https://doi.org/)",
  "volume": "string",
  "issue": "string",
  "pages": "string (format: 123-145)",
  "studyType": "string (meta-analysis|empirical|review|theoretical)",
  "methodology": "string",
  "sampleSize": "integer or null",
  "population": "string",
  "effectSize": "number or null",
  "effectSizeType": "string (Cohen's d, %, etc.)",
  "evidenceQuality": "integer (1-5)",
  "notes": "string"
}
```

### DR-2: Metadata Schema

```json
{
  "metadata": {
    "version": "string (semver format)",
    "lastUpdated": "string (ISO date YYYY-MM-DD)",
    "totalCitations": "integer",
    "domains": "array of strings"
  }
}
```

### DR-3: Domain Descriptions Schema

```json
{
  "domainDescriptions": {
    "DomainCode": {
      "name": "string (full name)",
      "color": "string (color name)",
      "description": "string"
    }
  }
}
```

### DR-4: Risk Factors Schema

```json
{
  "riskFactors": [
    {
      "id": "string (unique identifier)",
      "name": "string (display name)",
      "magnitude": "number",
      "unit": "string (%, increase, etc.)",
      "citationIds": "array of strings (citation IDs)",
      "domain": "string (domain code)"
    }
  ]
}
```

## Interface Requirements

### UI-1: Layout Structure

**Header**:
- Project title (h1)
- Subtitle/description
- Navigation links (GitHub, LinkedIn)

**Main Content**:
- Theoretical framework section
- Literature library section (table)
- Visualization section (charts)
- Statistics section

**Footer**:
- Copyright/attribution
- Contact information
- Last updated date

### UI-2: Color Scheme

**Primary Colors**:
- Brand Blue: #1e3a8a (headers, buttons)
- Background: #f8fafc (slate-50)
- Text: #1e293b (slate-800)

**Domain Colors**:
- Theory: Blue (#3b82f6, #bfdbfe)
- Structural: Indigo (#6366f1, #c7d2fe)
- Bio: Orange (#f97316, #fed7aa)
- Psych: Purple (#a855f7, #e9d5ff)
- Comm: Green (#10b981, #a7f3d0)
- History: Red (#ef4444, #fecaca)

### UI-3: Typography

**Font Family**: System font stack (sans-serif)
**Font Sizes**:
- Headers: 24-48px (responsive)
- Body: 14-16px
- Small: 12px (labels, metadata)
- Tiny: 10px (tags)

**Font Weights**:
- Regular: 400 (body text)
- Semibold: 600 (emphasis)
- Bold: 700-800 (headers, tags)

### UI-4: Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Quality Assurance Requirements

### QA-1: Testing Requirements

**Functional Testing**:
- All search/filter combinations work correctly
- Export generates valid files
- Charts render correctly
- Statistics calculate accurately

**Browser Testing**:
- Test in Chrome, Firefox, Safari, Edge
- Test on mobile (iOS Safari, Chrome Android)
- Verify responsive behavior at all breakpoints

**Data Validation**:
- JSON validates against schema
- All DOIs/URLs return 200 status
- No duplicate citation IDs
- All required fields present

**Performance Testing**:
- Page load time < 3 seconds
- Filter response time < 100ms
- Test with 50+ citations for scalability

### QA-2: Validation Tools

- JSONLint for JSON validation
- W3C Validator for HTML validation
- Lighthouse for performance/accessibility
- Manual browser testing

### QA-3: Acceptance Criteria

**For New Citations**:
- [ ] Peer-reviewed or reputable source
- [ ] Valid DOI/URL verified
- [ ] APA citation format correct
- [ ] Synthesis in own words
- [ ] Appropriate domain assignment
- [ ] 3-8 relevant keywords
- [ ] Evidence quality justified

**For Code Changes**:
- [ ] No console errors
- [ ] Existing features still work
- [ ] Responsive on mobile
- [ ] Documented in comments
- [ ] Follows existing code style

**For Deployment**:
- [ ] All tests pass
- [ ] JSON validates
- [ ] Local testing complete
- [ ] Documentation updated
- [ ] Version number incremented

## Deployment Requirements

### DEP-1: Hosting

**Platform**: GitHub Pages
- Branch: main
- Source: / (root)
- Domain: username.github.io/repository-name
- HTTPS: Required (automatic)

### DEP-2: Build Process

**No Build Required**:
- Pure HTML/CSS/JS (no compilation)
- CDN dependencies (no bundling)
- Direct file serving

**Deployment Steps**:
1. Update files in repository
2. Commit changes to main branch
3. Push to GitHub
4. GitHub Pages auto-deploys
5. Verify at live URL

### DEP-3: Version Control

**Git Workflow**:
- Main branch: production-ready code
- Feature branches: new development
- Semantic versioning (MAJOR.MINOR.PATCH)
- Git tags for releases

## Constraints and Assumptions

### Constraints

**Technical**:
- No server-side processing (static site)
- No database (JSON file storage)
- No user authentication
- CDN dependencies (requires internet)

**Resource**:
- GitHub Pages free tier (bandwidth limits)
- Manual citation addition (no automation)
- Single maintainer currently

### Assumptions

**User**:
- Users have modern web browsers
- Users have internet connection
- Users understand basic research concepts
- Users can read APA format citations

**Technical**:
- GitHub Pages remains free and available
- CDN services (Tailwind, Chart.js) remain accessible
- JSON file size stays manageable (<5MB)

**Content**:
- Citations are accurate and verified
- Sources remain accessible at URLs
- Evidence quality ratings are objective

## Success Metrics

### User Metrics
- Dashboard visitors per month
- Average session duration
- Export downloads per month
- Most searched/filtered domains

### Technical Metrics
- Page load time < 3 seconds
- Zero console errors
- 99%+ uptime
- 100% valid JSON

### Content Metrics
- Total citations (goal: 50+ by end of 2026)
- Domain balance (minimum 5 per domain)
- Average evidence quality ≥4.0
- Citation recency (50%+ from last 5 years)

## Future Considerations

### Phase 2 Enhancements (3-6 months)
- Network visualization
- Timeline charts
- Advanced filtering (keywords, study type)
- Citation detail modals

### Phase 3 Enhancements (6-12 months)
- User contributions via forms
- Automated DOI validation
- PubMed API integration
- Interactive theory builder

### Long-Term Vision (12+ months)
- Backend database (if needed)
- User accounts for saved searches
- Collaborative features
- Machine learning topic modeling

---

## Document Control

**Version**: 1.0  
**Date**: January 15, 2026  
**Author**: Joseph Z. Stafura, PhD  
**Status**: Approved  
**Next Review**: July 2026  

**Revision History**:
- v1.0 (2026-01-15): Initial requirements document

**Approvals**:
- Project Lead: J. Stafura ✓
- Technical Lead: J. Stafura ✓
