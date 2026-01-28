# Violence Research Dashboard

## Overview

The Violence Project Dashboard is an interactive research dashboard synthesizing multi-domain evidence on the mechanisms, risk factors, and structural determinants of violence. This project integrates findings from cognitive neuroscience, social psychology, criminology, structural sociology, environmental science, and digital communication research to provide a comprehensive, empirically-grounded understanding of violence as a complex biopsychosocial phenomenon.

**Live Dashboard**: [View the interactive dashboard](https://jzstafura.github.io/violence-research-dashboard/)

**Repository**: [GitHub](https://github.com/jzstafura/violence-research-dashboard)

## Current Status (v1.0 - January 2026)

The V-Project has recently undergone a major architectural upgrade:

- **13 Citations**: Fully structured in JSON with comprehensive metadata
- **Dynamic Interface**: Real-time search and filtering capabilities
- **Export Functions**: Download citations in TXT or BibTeX format
- **Statistics Dashboard**: Automated metrics and domain distribution
- **Modular Architecture**: Separated data, logic, and presentation layers
- **Version Controlled**: Git-based workflow for collaborative development

**Current Database Coverage**:
- Theory (2 citations) - GAM, GST frameworks
- Structural (3 citations) - Collective efficacy, horizontal inequality
- Bio/Environmental (2 citations) - Temperature effects, substance misuse
- Psychological (2 citations) - ACEs, mental illness risk
- Communication (3 citations) - Algorithmic polarization, online hate
- Historical (1 citation) - Colonial legacy and violence

**Immediate Goals**: Expand to 30 high-quality citations by end of February 2026.

## Getting Started

### For Users
1. Visit the [live dashboard](https://jzstafura.github.io/violence-research-dashboard/)
2. Use search to find specific topics or authors
3. Filter by domain or publication year
4. Export citations for your research or teaching

### For Contributors
1. Review [GIT_STRUCTURE.md](docs/GIT_STRUCTURE.md) for repository organization
2. See [QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md) for daily workflow
3. Submit citations following the quality checklist
4. Create pull requests for new features

### For Developers
1. Clone the repository
2. Review `data/citations.json` for data structure
3. Examine `assets/js/data-loader.js` for implementation
4. Test locally: `python -m http.server 8000`

## Theoretical Framework

### Core Integration Model

The dashboard synthesizes four complementary theoretical perspectives:

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

## Evidence Domains

### 1. Cognitive-Neuroscience Domain
- General Aggression Model empirical validation
- Hostile attribution bias and schema activation
- Affect-as-information processing in aggression decisions

### 2. Structural-Social Domain
- Social disorganization and collective efficacy
- Horizontal inequalities and group-based grievances
- Economic deprivation and neighborhood violence disparities

### 3. Bio-Environmental Domain
- Temperature-violence relationship (meta-analytic evidence)
- Substance misuse as violence risk multiplier
- Neurodevelopmental impacts of adverse childhood experiences

### 4. Psychological-Clinical Domain
- Adverse Childhood Experiences (ACEs) prevalence in justice-involved populations
- Mental illness and violence: relative vs. absolute risk
- Trauma-informed understanding of aggression

### 5. Communication-Digital Domain
- Algorithmic polarization and recommendation amplification
- Online dehumanization and "fun" as violence catalyst
- Meme culture and collective aggression

### 6. Historical-Institutional Domain
- Colonial legacy effects on civil violence patterns
- Path-dependent institutional imprints
- Administrative style and contemporary conflict

## Methodology

### Literature Selection Criteria
- Peer-reviewed empirical studies and systematic reviews
- Meta-analyses where available for effect size estimation
- Recent publications (2017-2025) prioritized for currency
- Cross-domain integration to avoid siloed understanding

### Evidence Standards
- All citations include DOI or stable URLs for verification
- Effect sizes reported where available (e.g., +1°C = 1.64% violence increase)
- Prevalence data from systematic reviews (e.g., 87% ACEs in justice-involved youth)
- Distinction between correlation and causal mechanisms noted

### Synthesis Approach
- Multi-level analysis: individual → community → societal
- Interactive visualization of risk factor magnitudes
- Domain filtering for targeted literature exploration
- Theoretical perspective toggling for conceptual clarity

## Dashboard Features

### Architecture (v1.0)

**Data Management**:
- Structured JSON database (`data/citations.json`)
- 13 fully-structured citations with comprehensive metadata
- Version control and update tracking
- Modular JavaScript architecture (`assets/js/data-loader.js`)

**Dynamic Interface**:
- Citations loaded dynamically from JSON (no hardcoded content)
- Real-time search across all fields (title, authors, synthesis, keywords)
- Advanced filtering (domain + year)
- Export to TXT and BibTeX formats
- Live statistics dashboard

### Interactive Components

1. **Mechanisms of Action Panel**
   - Toggle between GAM, GST, Path Dependence, and HI frameworks
   - Dynamic content explaining each theoretical lens
   
2. **Master Evidence Library**
   - Full APA 7th edition citations with verified links
   - Domain-based filtering (Theory, Structural, Bio, Psych, Comm, History)
   - Year-based filtering (individual years)
   - Real-time search functionality
   - Export filtered results to TXT or BibTeX
   - Synthesis of core findings for each source
   
3. **Visual Analytics**
   - Bar chart: Comparative effect sizes of major risk factors
   - Radar chart: Internal state dynamics from GAM framework

4. **Statistics Dashboard**
   - Total citation count
   - Citations with quantified effect sizes
   - Average evidence quality rating
   - Domain distribution

### Domain Tags
- **Theory** (Blue): Integrative theoretical frameworks
- **Structural** (Indigo): Social organization and inequality
- **Bio** (Orange): Environmental and biological factors
- **Psych** (Purple): Clinical and developmental psychology
- **Comm** (Green): Digital communication and media
- **History** (Red): Historical and institutional legacy

## Key Findings Summary

### Risk Factor Magnitudes (Approximate Effect Sizes)
- **Temperature**: +1°C → 1.64% increase in violent events
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

## Technical Stack

**Architecture** (v1.0):
- **Data Layer**: Structured JSON database with comprehensive metadata
- **Logic Layer**: JavaScript modules (CitationManager, UIHelpers)
- **Presentation Layer**: HTML5 with Tailwind CSS for responsive design
- **Visualization**: Chart.js for interactive data visualization
- **Deployment**: GitHub Pages for public accessibility
- **Version Control**: Git with semantic versioning
- **Citation Management**: APA 7th edition with DOI linking

**Key Features**:
- Separation of data, logic, and presentation
- Dynamic loading (no hardcoded citations)
- Modular, reusable code
- Easy to maintain and extend
- Scalable to 100+ citations

## Future Development

### Recently Completed (v1.0 - January 2026)
- ✅ JSON data structure with comprehensive metadata
- ✅ Dynamic loading and real-time search
- ✅ Domain and year filtering
- ✅ Export to TXT and BibTeX formats
- ✅ Statistics dashboard
- ✅ Modular JavaScript architecture

### Immediate Priorities (Next 1-2 Months)
- [ ] Expand to 30 citations across all domains
- [ ] Implement automated validation (JSON schema, DOI checking)
- [ ] Add year range slider for better temporal filtering
- [ ] Study type filter (meta-analysis, empirical, review)
- [ ] Timeline visualization showing research trends by year

### Short-Term Enhancements (3-6 Months)
- [ ] Network visualization of theoretical concept relationships
- [ ] Keyword tag filtering with co-occurrence mapping
- [ ] Enhanced effect size forest plots
- [ ] Citation detail modal with full metadata display
- [ ] Reach 50+ verified sources across all domains

### Long-Term Vision (6-12 Months)
- [ ] Interactive theory builder (parameter adjustment)
- [ ] Educational modules with guided tours
- [ ] Policy translation tools (evidence briefs)
- [ ] Integration with external databases (PubMed API)
- [ ] Collaborative features (community contributions)
- [ ] Geographic heat maps of violence patterns

### Data Integration Goals
- [ ] Integration with public datasets (CDC, FBI UCR, WHO)
- [ ] Meta-analytic effect size database
- [ ] Interactive parameter adjustment for risk modeling

## Repository Structure

```
violence-research-dashboard/
├── index.html                    # Main dashboard (deploy index-json-powered.html here)
├── README.md                     # This file
├── data/
│   └── citations.json           # Main citation database (13 citations)
├── assets/
│   └── js/
│       └── data-loader.js       # JavaScript module for data management
├── docs/                        # Extended documentation
│   ├── GIT_STRUCTURE.md        # Repository organization guide
│   ├── QUICK_REFERENCE.md      # Daily workflow reference
│   └── SUGGESTIONS.md          # Enhancement roadmap
└── scripts/                     # Validation and maintenance scripts (future)
```

**Key Files**:
- `data/citations.json`: Structured database with all citations and metadata
- `assets/js/data-loader.js`: CitationManager and UIHelpers classes
- `index.html`: Dynamic dashboard (loads from JSON)
- `docs/`: Comprehensive documentation for users and developers

## Contributing

This is a research synthesis project maintained by [jzstafura](https://www.linkedin.com/in/jzstafura). Contributions are welcome! The project uses a structured JSON database that makes adding citations straightforward.

### How to Contribute Citations

**Quick Process**:
1. Fork the repository
2. Add your citation to `data/citations.json` following the template
3. Update `metadata.totalCitations` count
4. Test locally to ensure valid JSON
5. Submit a pull request

**Citation Template**:
```json
{
  "id": "authorYEAR",
  "authors": "Author, A., & Author, B.",
  "year": 2025,
  "title": "Title of the work",
  "source": "Journal Name",
  "sourceType": "journal",
  "doi": "10.xxxx/xxxxx",
  "url": "https://doi.org/10.xxxx/xxxxx",
  "domain": "Theory|Structural|Bio|Psych|Comm|History",
  "keywords": ["keyword1", "keyword2"],
  "synthesis": "1-2 sentence summary of core findings",
  "studyType": "meta-analysis|empirical|review|theoretical",
  "evidenceQuality": 1-5
}
```

### Contribution Guidelines

**Quality Standards**:
- Sources must be peer-reviewed or from reputable research institutions
- Must include stable URL/DOI for verification
- Should advance multi-domain integration (avoid redundant single-domain sources)
- Synthesis statement must be in your own words (1-2 sentences)
- Evidence quality rating should be justified

**What We're Looking For**:
- High-impact meta-analyses and systematic reviews
- Recent publications (2020-2025) across all domains
- Cross-domain integrative studies
- Foundational theoretical works
- Methodologically rigorous empirical studies

**Current Priorities** (see [SUGGESTIONS.md](docs/SUGGESTIONS.md)):
- Structural domain expansion (social disorganization, collective efficacy)
- Bio/environmental domain (lead exposure, air quality, nutrition)
- Psychological domain (executive function, emotion regulation, PTSD)
- Communication domain (deplatforming, counter-narratives)
- Historical domain (slavery legacy, Jim Crow persistence)

### Technical Contributions

Beyond citations, we welcome:
- **Feature Enhancements**: Network visualization, advanced filtering, timeline charts
- **Validation Scripts**: JSON schema validation, DOI link checking
- **Documentation**: Tutorial improvements, translation support
- **Bug Fixes**: Any issues found in the dashboard

See [GIT_STRUCTURE.md](docs/GIT_STRUCTURE.md) for branch strategy and [QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md) for development workflow.

### Questions or Suggestions?

- **Citations**: Open a GitHub issue with "Citation Submission" label
- **Features**: Open a GitHub issue with "Enhancement" label  
- **Bugs**: Open a GitHub issue with "Bug" label
- **General**: Email via LinkedIn profile

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

## License

This project is available for educational and research purposes. All cited sources remain under their original copyright and licensing terms.

## Acknowledgments

This synthesis draws on the foundational work of researchers across cognitive psychology, criminology, sociology, environmental science, and communication studies. The dashboard represents an attempt to bridge disciplinary silos in violence research.

---

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: Active Development
