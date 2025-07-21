// Comparador JavaScript Functions

let selectedPolicies = [];
let allPolicies = [];

// Policy data structure
const policyDetails = {
    'auto-premium-bcp': {
        name: 'Seguro Auto Premium',
        company: 'BCP Seguros',
        type: 'Automotriz',
        price: 45000,
        rating: 4.8,
        coverage: 'Premium',
        features: {
            'Cobertura de daños': true,
            'Asistencia 24/7': true,
            'Auto de reemplazo': true,
            'Cristales incluidos': true,
            'Gastos médicos': true,
            'Responsabilidad civil': true,
            'Robo e incendio': true,
            'Fenómenos naturales': true
        },
        details: {
            deducible: '$150.000',
            coberturaTerritorial: 'Nacional e Internacional',
            limitePorSiniestro: 'Hasta el valor comercial del vehículo',
            gastosMedicos: 'Hasta $2.000.000'
        }
    },
    'auto-intermediate-euro': {
        name: 'Seguro Auto Intermedio',
        company: 'EuroAmérica',
        type: 'Automotriz',
        price: 28000,
        rating: 4.5,
        coverage: 'Intermedia',
        features: {
            'Cobertura de daños': true,
            'Asistencia 24/7': true,
            'Auto de reemplazo': false,
            'Cristales incluidos': false,
            'Gastos médicos': true,
            'Responsabilidad civil': true,
            'Robo e incendio': true,
            'Fenómenos naturales': false
        },
        details: {
            deducible: '$200.000',
            coberturaTerritorial: 'Nacional',
            limitePorSiniestro: 'Hasta el 80% del valor comercial',
            gastosMedicos: 'Hasta $1.000.000'
        }
    },
    'home-complete-bcp': {
        name: 'Seguro Hogar Completo',
        company: 'BCP Seguros',
        type: 'Hogar',
        price: 35000,
        rating: 4.9,
        coverage: 'Completa',
        features: {
            'Estructura y contenido': true,
            'Responsabilidad civil': true,
            'Fenómenos naturales': true,
            'Gastos adicionales': true,
            'Robo y hurto': true,
            'Daños eléctricos': true,
            'Cristales y sanitarios': true,
            'Asistencia hogar': true
        },
        details: {
            coberturaContinente: 'Hasta $50.000.000',
            coberturaContenido: 'Hasta $20.000.000',
            responsabilidadCivil: 'Hasta $5.000.000',
            gastosAdicionales: 'Hasta $2.000.000'
        }
    },
    'life-premium-bice': {
        name: 'Seguro de Vida Premium',
        company: 'Bice Vida',
        type: 'Vida',
        price: 55000,
        rating: 4.7,
        coverage: 'Premium',
        features: {
            'Muerte natural': true,
            'Muerte accidental': true,
            'Invalidez total': true,
            'Invalidez parcial': true,
            'Enfermedades graves': true,
            'Renta de invalidez': true,
            'Beneficio ahorro': true,
            'Exención de pago': true
        },
        details: {
            capitalMuerteNatural: '$100.000.000',
            capitalMuerteAccidental: '$200.000.000',
            capitalInvalidez: '$100.000.000',
            enfermedadesGraves: '32 enfermedades cubiertas'
        }
    },
    'health-intermediate-bnp': {
        name: 'Seguro de Salud Integral',
        company: 'BNP Paribas',
        type: 'Salud',
        price: 42000,
        rating: 4.6,
        coverage: 'Intermedia',
        features: {
            'Hospitalización': true,
            'Cirugías ambulatorias': true,
            'Medicina preventiva': true,
            'Urgencia dental': true,
            'Medicamentos': false,
            'Psicología': true,
            'Maternidad': false,
            'Red internacional': false
        },
        details: {
            limitePorAno: '$10.000.000',
            hospitalizacion: 'Habitación privada',
            red: 'Red nacional de prestadores',
            copagoConsultas: '20%'
        }
    },
    'travel-basic-penta': {
        name: 'Seguro de Viaje Básico',
        company: 'Penta Security',
        type: 'Viaje',
        price: 15000,
        rating: 4.4,
        coverage: 'Básica',
        features: {
            'Gastos médicos': true,
            'Equipaje': true,
            'Cancelación viaje': true,
            'Repatriación': true,
            'Deportes extremos': false,
            'Enfermedades preexistentes': false,
            'Extensión automática': false,
            'Asistencia legal': true
        },
        details: {
            gastosMedicos: 'USD $30.000',
            equipaje: 'USD $1.000',
            cancelacion: 'USD $2.000',
            territorial: 'Mundial'
        }
    }
};

// Initialize comparador when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeComparador();
});

function initializeComparador() {
    // Store all policy cards
    allPolicies = Array.from(document.querySelectorAll('.policy-card'));
    
    // Add event listeners to checkboxes
    const checkboxes = document.querySelectorAll('.policy-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handlePolicySelection);
    });
    
    // Initialize modals
    initializeModals();
    
    // Update comparison button state
    updateComparisonButton();
}

function handlePolicySelection(event) {
    const checkbox = event.target;
    const policyId = checkbox.dataset.id;
    const policyCard = checkbox.closest('.policy-card');
    
    if (checkbox.checked) {
        if (selectedPolicies.length < 3) {
            selectedPolicies.push(policyId);
            policyCard.classList.add('selected');
        } else {
            checkbox.checked = false;
            showAlert('Puedes comparar máximo 3 pólizas a la vez', 'warning');
        }
    } else {
        selectedPolicies = selectedPolicies.filter(id => id !== policyId);
        policyCard.classList.remove('selected');
    }
    
    updateComparisonButton();
}

function updateComparisonButton() {
    const countElement = document.getElementById('selectedCount');
    const compareButton = document.querySelector('.btn-compare');
    
    if (countElement) {
        countElement.textContent = selectedPolicies.length;
    }
    
    if (compareButton) {
        compareButton.disabled = selectedPolicies.length < 2;
    }
}

function filterPolicies() {
    const typeFilter = document.getElementById('insuranceTypeFilter').value;
    const coverageFilter = document.getElementById('coverageFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const companyFilter = document.getElementById('companyFilter').value;
    
    let visibleCount = 0;
    
    allPolicies.forEach(policy => {
        let shouldShow = true;
        
        // Type filter
        if (typeFilter && policy.dataset.type !== typeFilter) {
            shouldShow = false;
        }
        
        // Coverage filter
        if (coverageFilter && policy.dataset.coverage !== coverageFilter) {
            shouldShow = false;
        }
        
        // Price filter
        if (priceFilter) {
            const policyPrice = parseInt(policy.dataset.price);
            const [min, max] = priceFilter.split('-').map(p => p.replace('+', ''));
            
            if (max) {
                if (policyPrice < parseInt(min) || policyPrice > parseInt(max)) {
                    shouldShow = false;
                }
            } else {
                if (policyPrice < parseInt(min)) {
                    shouldShow = false;
                }
            }
        }
        
        // Company filter
        if (companyFilter && policy.dataset.company !== companyFilter) {
            shouldShow = false;
        }
        
        // Show/hide policy
        if (shouldShow) {
            policy.style.display = 'block';
            visibleCount++;
        } else {
            policy.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    const noResults = document.getElementById('noResults');
    const policiesGrid = document.getElementById('policiesGrid');
    
    if (visibleCount === 0) {
        noResults.style.display = 'block';
        policiesGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        policiesGrid.style.display = 'grid';
    }
}

function clearFilters() {
    // Reset all filter selects
    document.getElementById('insuranceTypeFilter').value = '';
    document.getElementById('coverageFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('companyFilter').value = '';
    
    // Show all policies
    allPolicies.forEach(policy => {
        policy.style.display = 'block';
    });
    
    // Hide no results message
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('policiesGrid').style.display = 'grid';
}

function sortPolicies() {
    const sortBy = document.getElementById('sortBy').value;
    const policiesGrid = document.getElementById('policiesGrid');
    const visiblePolicies = Array.from(allPolicies).filter(policy => 
        policy.style.display !== 'none'
    );
    
    visiblePolicies.sort((a, b) => {
        switch (sortBy) {
            case 'price-asc':
                return parseInt(a.dataset.price) - parseInt(b.dataset.price);
            case 'price-desc':
                return parseInt(b.dataset.price) - parseInt(a.dataset.price);
            case 'coverage-desc':
                const coverageOrder = { 'complete': 4, 'premium': 3, 'intermediate': 2, 'basic': 1 };
                return coverageOrder[b.dataset.coverage] - coverageOrder[a.dataset.coverage];
            case 'company':
                return a.dataset.company.localeCompare(b.dataset.company);
            case 'rating-desc':
                const aRating = parseFloat(a.querySelector('.rating').textContent);
                const bRating = parseFloat(b.querySelector('.rating').textContent);
                return bRating - aRating;
            default:
                return 0;
        }
    });
    
    // Remove all policies from grid
    visiblePolicies.forEach(policy => policy.remove());
    
    // Add sorted policies back
    visiblePolicies.forEach(policy => policiesGrid.appendChild(policy));
}

function showComparison() {
    if (selectedPolicies.length < 2) {
        showAlert('Selecciona al menos 2 pólizas para comparar', 'warning');
        return;
    }
    
    generateComparisonTable();
    
    const modal = document.getElementById('comparisonModal');
    modal.style.display = 'block';
}

function generateComparisonTable() {
    const tableContainer = document.getElementById('comparisonTable');
    
    // Get all unique features from selected policies
    const allFeatures = new Set();
    selectedPolicies.forEach(policyId => {
        const policy = policyDetails[policyId];
        if (policy) {
            Object.keys(policy.features).forEach(feature => allFeatures.add(feature));
        }
    });
    
    // Create comparison table
    let tableHTML = '<table class="comparison-table">';
    
    // Header row with policy names
    tableHTML += '<tr><th>Característica</th>';
    selectedPolicies.forEach(policyId => {
        const policy = policyDetails[policyId];
        tableHTML += `<th>${policy.name}<br><small>${policy.company}</small></th>`;
    });
    tableHTML += '</tr>';
    
    // Price row
    tableHTML += '<tr class="feature-row"><td><strong>Precio Mensual</strong></td>';
    selectedPolicies.forEach(policyId => {
        const policy = policyDetails[policyId];
        tableHTML += `<td><strong>$${policy.price.toLocaleString()}</strong></td>`;
    });
    tableHTML += '</tr>';
    
    // Rating row
    tableHTML += '<tr class="feature-row"><td><strong>Valoración</strong></td>';
    selectedPolicies.forEach(policyId => {
        const policy = policyDetails[policyId];
        tableHTML += `<td>${policy.rating} ★</td>`;
    });
    tableHTML += '</tr>';
    
    // Coverage row
    tableHTML += '<tr class="feature-row"><td><strong>Nivel de Cobertura</strong></td>';
    selectedPolicies.forEach(policyId => {
        const policy = policyDetails[policyId];
        tableHTML += `<td><span class="coverage-level ${policy.coverage.toLowerCase()}">${policy.coverage}</span></td>`;
    });
    tableHTML += '</tr>';
    
    // Feature rows
    Array.from(allFeatures).forEach(feature => {
        tableHTML += '<tr class="feature-row"><td>' + feature + '</td>';
        selectedPolicies.forEach(policyId => {
            const policy = policyDetails[policyId];
            const hasFeature = policy.features[feature];
            if (hasFeature === true) {
                tableHTML += '<td class="check">✓</td>';
            } else if (hasFeature === false) {
                tableHTML += '<td class="cross">✗</td>';
            } else {
                tableHTML += '<td>-</td>';
            }
        });
        tableHTML += '</tr>';
    });
    
    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
}

function showPolicyDetails(policyId) {
    const policy = policyDetails[policyId];
    if (!policy) return;
    
    const modal = document.getElementById('policyModal');
    const title = document.getElementById('policyModalTitle');
    const body = document.getElementById('policyModalBody');
    
    title.textContent = `${policy.name} - ${policy.company}`;
    
    let detailsHTML = `
        <div class="policy-details">
            <div class="detail-section">
                <h4>Información General</h4>
                <p><strong>Precio:</strong> $${policy.price.toLocaleString()} mensuales</p>
                <p><strong>Valoración:</strong> ${policy.rating} ★</p>
                <p><strong>Cobertura:</strong> ${policy.coverage}</p>
            </div>
            
            <div class="detail-section">
                <h4>Características Incluidas</h4>
                <ul>
    `;
    
    Object.entries(policy.features).forEach(([feature, included]) => {
        if (included) {
            detailsHTML += `<li><i class="fas fa-check"></i> ${feature}</li>`;
        }
    });
    
    detailsHTML += `
                </ul>
            </div>
            
            <div class="detail-section">
                <h4>Detalles Específicos</h4>
                <ul>
    `;
    
    Object.entries(policy.details).forEach(([key, value]) => {
        const label = formatDetailLabel(key);
        detailsHTML += `<li><strong>${label}:</strong> ${value}</li>`;
    });
    
    detailsHTML += `
                </ul>
            </div>
        </div>
    `;
    
    body.innerHTML = detailsHTML;
    modal.style.display = 'block';
}

function formatDetailLabel(key) {
    const labels = {
        'deducible': 'Deducible',
        'coberturaTerritorial': 'Cobertura Territorial',
        'limitePorSiniestro': 'Límite por Siniestro',
        'gastosMedicos': 'Gastos Médicos',
        'coberturaContinente': 'Cobertura Continente',
        'coberturaContenido': 'Cobertura Contenido',
        'responsabilidadCivil': 'Responsabilidad Civil',
        'gastosAdicionales': 'Gastos Adicionales',
        'capitalMuerteNatural': 'Capital Muerte Natural',
        'capitalMuerteAccidental': 'Capital Muerte Accidental',
        'capitalInvalidez': 'Capital Invalidez',
        'enfermedadesGraves': 'Enfermedades Graves',
        'limitePorAno': 'Límite por Año',
        'hospitalizacion': 'Hospitalización',
        'red': 'Red de Prestadores',
        'copagoConsultas': 'Copago Consultas',
        'equipaje': 'Equipaje',
        'cancelacion': 'Cancelación',
        'territorial': 'Territorial'
    };
    
    return labels[key] || key;
}

function requestQuote(policyId) {
    const policy = policyDetails[policyId];
    if (!policy) return;
    
    // Redirect to cotizador with pre-selected insurance type
    const typeMapping = {
        'Automotriz': 'auto',
        'Hogar': 'home',
        'Vida': 'life',
        'Salud': 'health',
        'Viaje': 'travel',
        'Mascotas': 'pet'
    };
    
    const insuranceType = typeMapping[policy.type];
    const url = `cotizador.html${insuranceType ? `?type=${insuranceType}` : ''}`;
    
    window.location.href = url;
}

function requestMultipleQuotes() {
    if (selectedPolicies.length === 0) {
        showAlert('Selecciona al menos una póliza para cotizar', 'warning');
        return;
    }
    
    // Create quote request data
    const quoteRequest = {
        policies: selectedPolicies.map(policyId => ({
            id: policyId,
            name: policyDetails[policyId].name,
            company: policyDetails[policyId].company,
            type: policyDetails[policyId].type
        })),
        timestamp: new Date().toISOString()
    };
    
    console.log('Multiple quote request:', quoteRequest);
    
    // Redirect to cotizador
    window.location.href = 'cotizador.html?multiple=true';
}

function contactAdviser() {
    // Open contact modal or redirect to contact page
    const phoneNumber = '+56600600292';
    const message = `Hola, me interesa recibir asesoría sobre las siguientes pólizas de seguro:\n\n${selectedPolicies.map(policyId => `- ${policyDetails[policyId].name} (${policyDetails[policyId].company})`).join('\n')}\n\n¿Podrían contactarme para más información?`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    
    // Try to open WhatsApp, fallback to phone call
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.open(whatsappUrl, '_blank');
    } else {
        window.open(`tel:${phoneNumber}`, '_blank');
    }
}

// Modal Functions
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'warning' ? '#fff3cd' : '#d4edda'};
        color: ${type === 'warning' ? '#856404' : '#155724'};
        border: 1px solid ${type === 'warning' ? '#ffeaa7' : '#c3e6cb'};
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 9999;
        max-width: 300px;
        font-weight: 500;
        animation: slideInRight 0.3s ease;
    `;
    alert.textContent = message;
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 10px;
        padding: 0;
        line-height: 1;
    `;
    closeBtn.onclick = () => alert.remove();
    alert.appendChild(closeBtn);
    
    document.body.appendChild(alert);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);