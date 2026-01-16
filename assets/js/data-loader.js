/**
 * Data Loader Module for V-Project
 * Loads citations from JSON and provides utility functions
 */

class CitationManager {
    constructor() {
        this.citations = [];
        this.metadata = null;
        this.domainDescriptions = null;
        this.riskFactors = [];
        this.loaded = false;
    }

    /**
     * Load citations from JSON file
     * @param {string} jsonPath - Path to citations.json
     */
    async loadData(jsonPath = 'data/citations.json') {
        try {
            const response = await fetch(jsonPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            this.citations = data.citations;
            this.metadata = data.metadata;
            this.domainDescriptions = data.domainDescriptions;
            this.riskFactors = data.riskFactors;
            this.loaded = true;
            
            console.log(`Loaded ${this.citations.length} citations successfully`);
            return data;
        } catch (error) {
            console.error('Error loading citation data:', error);
            throw error;
        }
    }

    /**
     * Get all citations
     */
    getAllCitations() {
        return this.citations;
    }

    /**
     * Get citations by domain
     * @param {string} domain - Domain filter (Theory, Structural, Bio, etc.)
     */
    getCitationsByDomain(domain) {
        if (domain === 'all') return this.citations;
        return this.citations.filter(c => c.domain === domain);
    }

    /**
     * Get citations by year range
     * @param {number} startYear - Start year (inclusive)
     * @param {number} endYear - End year (inclusive)
     */
    getCitationsByYearRange(startYear, endYear) {
        return this.citations.filter(c => c.year >= startYear && c.year <= endYear);
    }

    /**
     * Get citations by keyword
     * @param {string} keyword - Keyword to search
     */
    getCitationsByKeyword(keyword) {
        const lowerKeyword = keyword.toLowerCase();
        return this.citations.filter(c => 
            c.keywords.some(k => k.toLowerCase().includes(lowerKeyword))
        );
    }

    /**
     * Search citations (title, authors, synthesis, keywords)
     * @param {string} query - Search query
     */
    searchCitations(query) {
        const lowerQuery = query.toLowerCase();
        return this.citations.filter(c => {
            const searchText = `
                ${c.title} 
                ${c.authors} 
                ${c.synthesis} 
                ${c.keywords.join(' ')}
            `.toLowerCase();
            return searchText.includes(lowerQuery);
        });
    }

    /**
     * Get citations with effect sizes
     */
    getCitationsWithEffectSizes() {
        return this.citations.filter(c => c.effectSize !== null);
    }

    /**
     * Get citation by ID
     * @param {string} id - Citation ID
     */
    getCitationById(id) {
        return this.citations.find(c => c.id === id);
    }

    /**
     * Get citations by study type
     * @param {string} studyType - Study type (meta-analysis, empirical, etc.)
     */
    getCitationsByStudyType(studyType) {
        return this.citations.filter(c => c.studyType === studyType);
    }

    /**
     * Get unique years
     */
    getUniqueYears() {
        return [...new Set(this.citations.map(c => c.year))].sort();
    }

    /**
     * Get unique domains
     */
    getUniqueDomains() {
        return [...new Set(this.citations.map(c => c.domain))];
    }

    /**
     * Get domain description
     * @param {string} domain - Domain code
     */
    getDomainDescription(domain) {
        return this.domainDescriptions[domain];
    }

    /**
     * Get risk factors data for charts
     */
    getRiskFactors() {
        return this.riskFactors;
    }

    /**
     * Export citations to plain text
     * @param {Array} citationList - List of citations to export
     */
    exportToText(citationList = this.citations) {
        let output = 'V-PROJECT EVIDENCE LIBRARY EXPORT\n';
        output += `Generated: ${new Date().toLocaleDateString()}\n`;
        output += '='.repeat(80) + '\n\n';
        
        citationList.forEach((citation, index) => {
            output += `${index + 1}. ${this.formatAPACitation(citation)}\n`;
            output += `   Domain: ${citation.domain}\n`;
            output += `   Synthesis: ${citation.synthesis}\n`;
            if (citation.url) {
                output += `   Link: ${citation.url}\n`;
            }
            if (citation.effectSize) {
                output += `   Effect Size: ${citation.effectSize} ${citation.effectSizeType || ''}\n`;
            }
            output += '\n';
        });
        
        return output;
    }

    /**
     * Format APA citation
     * @param {Object} citation - Citation object
     */
    formatAPACitation(citation) {
        let apa = `${citation.authors} (${citation.year}). ${citation.title}`;
        
        if (citation.sourceType === 'journal') {
            apa += `. <em>${citation.source}</em>`;
            if (citation.volume) apa += `, ${citation.volume}`;
            if (citation.issue) apa += `(${citation.issue})`;
            if (citation.pages) apa += `, ${citation.pages}`;
        } else {
            apa += `. <em>${citation.source}</em>`;
        }
        
        if (citation.doi) {
            apa += `. https://doi.org/${citation.doi}`;
        }
        
        return apa;
    }

    /**
     * Export to BibTeX format
     * @param {Array} citationList - List of citations to export
     */
    exportToBibTeX(citationList = this.citations) {
        let bibtex = '';
        
        citationList.forEach(citation => {
            const type = citation.sourceType === 'journal' ? 'article' : 'misc';
            bibtex += `@${type}{${citation.id},\n`;
            bibtex += `  author = {${citation.authors}},\n`;
            bibtex += `  title = {${citation.title}},\n`;
            bibtex += `  year = {${citation.year}},\n`;
            
            if (citation.sourceType === 'journal') {
                bibtex += `  journal = {${citation.source}},\n`;
                if (citation.volume) bibtex += `  volume = {${citation.volume}},\n`;
                if (citation.issue) bibtex += `  number = {${citation.issue}},\n`;
                if (citation.pages) bibtex += `  pages = {${citation.pages}},\n`;
            }
            
            if (citation.doi) {
                bibtex += `  doi = {${citation.doi}},\n`;
            }
            
            bibtex += '}\n\n';
        });
        
        return bibtex;
    }

    /**
     * Download file to user's computer
     * @param {string} content - File content
     * @param {string} filename - File name
     * @param {string} mimeType - MIME type
     */
    downloadFile(content, filename, mimeType = 'text/plain') {
        const blob = new Blob([content], { type: mimeType });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    /**
     * Get statistics about the citation database
     */
    getStatistics() {
        return {
            totalCitations: this.citations.length,
            byDomain: this.getUniqueDomains().map(domain => ({
                domain,
                count: this.getCitationsByDomain(domain).length
            })),
            byYear: this.getUniqueYears().map(year => ({
                year,
                count: this.citations.filter(c => c.year === year).length
            })),
            withEffectSizes: this.getCitationsWithEffectSizes().length,
            byStudyType: [...new Set(this.citations.map(c => c.studyType))].map(type => ({
                type,
                count: this.getCitationsByStudyType(type).length
            })),
            avgEvidenceQuality: (
                this.citations.reduce((sum, c) => sum + (c.evidenceQuality || 0), 0) / 
                this.citations.filter(c => c.evidenceQuality).length
            ).toFixed(2)
        };
    }
}

/**
 * UI Helper Functions
 */
class UIHelpers {
    /**
     * Render citations to HTML table
     * @param {Array} citations - Array of citation objects
     * @param {string} containerId - ID of container element
     */
    static renderCitationsTable(citations, containerId = 'lit-body') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} not found`);
            return;
        }

        container.innerHTML = citations.map(citation => `
            <tr class="lit-row border-b" data-source="${citation.domain}" data-year="${citation.year}" data-id="${citation.id}">
                <td class="p-4">
                    <span class="block leading-snug citation-text">${this.formatAPACitation(citation)}</span>
                    <a href="${citation.url}" target="_blank" rel="noopener" class="apa-link">
                        View Full Article (${this.getSourceLabel(citation)})
                    </a>
                </td>
                <td class="p-4">
                    <span class="domain-tag ${this.getDomainColorClasses(citation.domain)}">
                        ${citation.domain}
                    </span>
                </td>
                <td class="p-4 text-xs synthesis-text">${citation.synthesis}</td>
            </tr>
        `).join('');
    }

    /**
     * Format APA citation for HTML
     */
    static formatAPACitation(citation) {
        let apa = `${citation.authors} (${citation.year}). ${citation.title}`;
        
        if (citation.sourceType === 'journal') {
            apa += `. <em>${citation.source}</em>`;
            if (citation.volume) apa += `, ${citation.volume}`;
            if (citation.issue) apa += `(${citation.issue})`;
            if (citation.pages) apa += `, ${citation.pages}`;
        } else {
            apa += `. <em>${citation.source}</em>`;
        }
        
        return apa;
    }

    /**
     * Get source label for link
     */
    static getSourceLabel(citation) {
        if (citation.sourceType === 'journal') {
            return citation.source.split(' ')[0]; // First word of journal name
        }
        return citation.source;
    }

    /**
     * Get domain color classes
     */
    static getDomainColorClasses(domain) {
        const colorMap = {
            'Theory': 'bg-blue-100 text-blue-800',
            'Structural': 'bg-indigo-100 text-indigo-800',
            'Bio': 'bg-orange-100 text-orange-800',
            'Psych': 'bg-purple-100 text-purple-800',
            'Comm': 'bg-green-100 text-green-800',
            'History': 'bg-red-100 text-red-800'
        };
        return colorMap[domain] || 'bg-gray-100 text-gray-800';
    }

    /**
     * Update result count display
     */
    static updateResultCount(count, elementId = 'result-count') {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = count;
        }
    }

    /**
     * Render charts using Chart.js
     */
    static renderCharts(riskFactors) {
        // Risk Factors Chart
        const multipliersCtx = document.getElementById('multipliersChart');
        if (multipliersCtx) {
            new Chart(multipliersCtx, {
                type: 'bar',
                data: {
                    labels: riskFactors.map(rf => rf.name),
                    datasets: [{
                        label: 'Magnitude',
                        data: riskFactors.map(rf => rf.magnitude),
                        backgroundColor: [
                            '#f97316', '#3b82f6', '#8b5cf6', '#ef4444', '#10b981'
                        ],
                        borderRadius: 5
                    }]
                },
                options: {
                    indexAxis: 'y',
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (context) => `${context.parsed.x} ${riskFactors[context.dataIndex].unit}`
                            }
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            title: { display: true, text: 'Effect Size / Prevalence' }
                        }
                    }
                }
            });
        }

        // GAM State Chart
        const stateCtx = document.getElementById('stateChart');
        if (stateCtx) {
            new Chart(stateCtx, {
                type: 'radar',
                data: {
                    labels: ['Cognition', 'Affect', 'Arousal', 'Trait/History', 'Situation'],
                    datasets: [{
                        label: 'Internal Aggression Weighting',
                        data: [80, 95, 70, 85, 90],
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderColor: '#3b82f6',
                        pointBackgroundColor: '#1e3a8a',
                        pointBorderColor: '#fff'
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } } },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CitationManager, UIHelpers };
}
