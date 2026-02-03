# Violence Evidence Dashboard

An interactive research synthesis platform that integrates evidence across multiple disciplines to understand violence through a multi-level ecological framework. The dashboard organizes 54+ studies spanning cognitive neuroscience, social psychology, criminology, structural sociology, environmental science, and digital communication research.

**Live Dashboard:** [https://jzstafura.github.io/violence-research-dashboard/](https://jzstafura.github.io/violence-research-dashboard/)

## Overview

The Violence Evidence Dashboard presents violence as a complex biopsychosocial phenomenon, organizing research findings across four ecological levels:

- **Societal Level**: Structural factors, political systems, historical legacies
- **Community Level**: Neighborhood characteristics, collective efficacy, resource distribution
- **Relational Level**: Interpersonal dynamics, social networks, peer influences
- **Individual Level**: Cognitive processes, biological factors, psychological traits

### Current Metrics (v1.0 - January 2026)

- **54+ Studies** synthesized across ecological levels
- **23 Meta-Analyses** with quantified effect sizes
- **12 Key Constructs** from theory to implementation
- **4 Ecological Levels** providing comprehensive coverage
- **6 Research Domains**: Theory, Structural, Bio/Environmental, Psychological, Communication, Historical

## Features

### Interactive Ecological Model
- **Concentric Rings Visualization**: Navigate between Societal, Community, Relational, and Individual levels through an interactive diagram
- **Level-Specific Pages**: Dedicated sections for each ecological level with relevant research findings
- **Cross-Level Integration**: Explore how phenomena like online radicalization span multiple levels

### Advanced Citation Browser
The dashboard includes a comprehensive research database with:
- **Real-time Search**: Filter across titles, authors, keywords, and abstracts
- **Type Filtering**: View all citations or filter by Databases, Empirical studies, or Reviews
- **Multi-Sort Options**: Sort by year, author, title, or study type
- **Export Functionality**: Download citations as CSV or copy individual BibTeX entries
- **Rich Metadata**: Each citation includes DOI links, keywords, and ecological level tags

### Key Research Findings Dashboard
- **Effect Size Cards**: Visual presentation of meta-analytic findings with color-coded ecological levels
- **Quantified Evidence**: Direct access to specific effect magnitudes and prevalence rates
- **Source Attribution**: DOI links to original publications for verification

### Navigation & UX
- **Sticky Navigation Bar**: Quick access to all ecological levels
- **Fixed Section Navigator**: Jump between major content areas
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Smooth Scrolling**: Enhanced user experience across sections

## Theoretical Framework

### Ecological Model (Primary Framework)
Organizes evidence across nested levels of influence, from broad societal structures to individual-level factors. This framework emphasizes that violence results from complex interactions across multiple systems.

### Complementary Theories

The dashboard integrates multiple theoretical perspectives:

1. **General Aggression Model (GAM)** - Cognitive-affective processing framework
   - Person × Situation inputs → Internal state (cognition, affect, arousal) → Behavioral outcomes
   - Explains episodic aggression through iterative decision cycles

2. **General Strain Theory (GST)** - Structural-functional framework
   - Violence as maladaptive coping response to negative stimuli
   - Focus on blocked pain-avoidance and escape attempts from strain

3. **Historical Path Dependence** - Institutional legacy framework
   - Colonial administrative structures create durable group boundaries
   - Historical imprints predict contemporary ethnic violence patterns

4. **Horizontal Inequality (HI)** - Group-based conflict framework
   - Political exclusion as primary catalyst for civil violence
   - Distinction between economic inequality and power asymmetries

### The "Viral Infection" Analogy

Violence operates through a mechanism analogous to viral infection:
- **Baseline vulnerability**: Individual-level risk factors (trauma history, substance misuse, trait anger)
- **Environmental catalysts**: Structural determinants (inequality, segregation, political exclusion)
- **Transmission vectors**: Social/digital networks that amplify aggressive scripts
- **Climatic multipliers**: Heat stress and resource scarcity as proximate triggers

## Key Research Findings

The dashboard synthesizes evidence including:

### Risk Factor Magnitudes (Approximate Effect Sizes)
- **Temperature**: +1°C → 1.64% increase in violent events (meta-analysis)
- **ACEs Prevalence**: 87% among justice-involved youth
- **Substance Misuse**: 72% correlation with violence risk
- **Political Exclusion**: 65% stronger predictor than economic inequality
- **Trait Anger**: 45% individual variance explained

### Critical Distinctions
- Violence is **multiply determined**, not reducible to single causes
- **Group-level political exclusion** > economic inequality for civil violence
- **Substance misuse + mental illness** creates higher absolute risk than either alone
- **Heat effects** specific to interpersonal violence, not property crime
- **Historical legacies** remain statistically significant controlling for current conditions

## Getting Started

### Exploring the Dashboard

1. **Navigate by Level**: Use the top navigation bar to jump to Societal, Community, Relational, or Individual sections
2. **Browse Research**: Scroll through key findings cards organized by ecological level
3. **Search Citations**: Use the citation browser to find specific topics, authors, or study types
4. **Filter Evidence**: Apply type filters (Databases/Empirical/Reviews) and sort options
5. **Export Data**: Download citations as CSV or copy individual BibTeX entries

### For Developers

The dashboard uses a modular architecture:
- **Data Layer**: Structured JSON database with comprehensive metadata (`data/citations.json`)
- **Logic Layer**: JavaScript modules (`CitationManager`, `UIHelpers` classes)
- **Presentation Layer**: HTML5 with Tailwind CSS styling
- **Visualization**: Chart.js for interactive graphics
- **Deployment**: GitHub Pages for public accessibility

**Local Testing**:
```bash
python -m http.server 8000
```

Review `docs/GIT_STRUCTURE.md` and `docs/QUICK_REFERENCE.md` for technical documentation.

## Contributing

We welcome contributions of peer-reviewed research across all ecological levels. Priority areas include:

- **Societal Level**: Structural inequality, policy impacts, historical analysis
- **Community Level**: Neighborhood effects, collective efficacy, resource distribution
- **Relational Level**: Peer influences, family dynamics, social network effects
- **Individual Level**: Neuroscience, developmental factors, psychological mechanisms

### Contribution Guidelines

**Citation Requirements:**
- Peer-reviewed publication with stable DOI or URL
- Clear classification by ecological level and study type (Database/Empirical/Review)
- 1-2 sentence synthesis in your own words
- Evidence quality rating (1-5 scale)
- Relevant keywords and metadata

**Submission Process:**
1. Fork the repository
2. Add citation to `data/citations.json` following the JSON template structure
3. Include ecological level, study type, and comprehensive metadata
4. Update `metadata.totalCitations` count
5. Test locally to ensure valid JSON
6. Submit pull request with clear description of contribution

**Current Priorities:**
- Meta-analyses with quantified effect sizes
- Recent publications (2020-2025) with robust methodology
- Cross-level integration studies
- Expansion of Community and Relational level evidence

### JSON Template

```json
{
  "id": "unique-identifier",
  "authors": "Author, A., & Author, B.",
  "year": 2024,
  "title": "Study Title",
  "source": "Journal Name, Volume(Issue), Pages",
  "doi": "https://doi.org/10.xxxx/xxxxx",
  "level": "Societal|Community|Relational|Individual",
  "type": "Database|Empirical|Review",
  "keywords": ["keyword1", "keyword2"],
  "synthesis": "Brief 1-2 sentence summary",
  "quality": 4
}
```

### Technical Contributions

Beyond citations, we welcome:
- **Feature Enhancements**: Network visualization, advanced filtering, timeline charts
- **Validation Scripts**: JSON schema validation, DOI link checking
- **Documentation**: Tutorial improvements, translation support
- **Bug Fixes**: Any issues found in the dashboard

See [GIT_STRUCTURE.md](docs/GIT_STRUCTURE.md) for branch strategy and [QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md) for development workflow.

## Repository Structure

```
violence-research-dashboard/
├── index.html                  # Main dashboard with ecological model
├── societal.html              # Societal level evidence page
├── community.html             # Community level evidence page
├── relational.html            # Relational level evidence page
├── individual.html            # Individual level evidence page
├── data/
│   └── citations.json         # Research database (54+ citations)
├── assets/
│   └── js/
│       └── data-loader.js     # Citation management and UI logic
└── docs/
    ├── GIT_STRUCTURE.md       # Technical documentation
    ├── QUICK_REFERENCE.md     # Developer reference
    └── SUGGESTIONS.md         # Enhancement roadmap
```

## Research Applications

### For Researchers
- Comprehensive literature mapping across traditional disciplinary boundaries
- Effect size benchmarks for comparative analysis
- Theoretical integration framework for multi-level studies

### For Policymakers
- Evidence-based risk factor prioritization
- Multi-domain intervention targets (individual, structural, environmental)
- Distinction between prevention and intervention strategies

### For Educators
- Teaching resource for violence theory integration
- Interactive demonstration of biopsychosocial frameworks
- Empirical grounding for complex social phenomena

## Roadmap

### Immediate (1-2 Months)
- Expand to 75+ high-quality citations across all levels
- Add automated JSON validation
- Implement year-range slider filtering
- Enhanced ecological level visualizations

### Short-term (3-6 Months)
- Network visualization showing cross-level theoretical relationships
- Effect-size forest plots for meta-analyses
- Citation detail modals with full abstracts
- Advanced statistical aggregation tools

### Long-term Vision (6-12 Months)
- Integration with external research databases (PubMed, PsycINFO)
- Machine learning-assisted citation categorization
- Interactive causal pathway mapping
- Collaborative annotation features for researchers
- Educational modules with guided tours
- Policy translation tools (evidence briefs)

## Citation

If you use this dashboard in your research or teaching, please cite:

```
Stafura, J. Z. (2026). Violence Research Dashboard: Multi-Domain Evidence Synthesis.
GitHub repository. https://github.com/jzstafura/violence-research-dashboard
```

## Contact

**Joseph Z. Stafura, PhD**
- LinkedIn: [linkedin.com/in/jzstafura](https://www.linkedin.com/in/jzstafura)
- Google Scholar: [Publications](https://scholar.google.com/citations?user=F6LcYIoAAAAJ&hl=en)
- GitHub Issues: [Report bugs or suggest features](https://github.com/jzstafura/violence-research-dashboard/issues)

## License

This project is available for educational and research purposes. All cited sources remain under their original copyright and licensing terms.

## Acknowledgments

This synthesis draws on the foundational work of researchers across cognitive psychology, criminology, sociology, environmental science, and communication studies. The dashboard represents an attempt to bridge disciplinary silos in violence research.

---

**Last Updated**: January 2026
**Version**: 1.0
**Status**: Active Development

**Note**: This dashboard synthesizes published research for educational purposes. All findings should be verified against original sources via provided DOI links.
