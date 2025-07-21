// Cotizador JavaScript Functions

let currentStep = 1;
const totalSteps = 3;

// Initialize the form when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCotizador();
});

function initializeCotizador() {
    // Show first step
    showStep(1);
    
    // Add form submission handler
    const form = document.getElementById('quoteForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    
    // Add RUT formatting
    const rutInput = document.getElementById('rut');
    if (rutInput) {
        rutInput.addEventListener('input', formatRUT);
    }
    
    // Add phone formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhone);
    }
    
    // Initialize modal handlers
    initializeModals();
}

function showStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    const currentStepElement = document.querySelector(`[data-step="${stepNumber}"]`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
    
    currentStep = stepNumber;
}

function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            showStep(currentStep + 1);
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

function validateCurrentStep() {
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    const requiredFields = currentStepElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Este campo es obligatorio');
            isValid = false;
        } else {
            clearFieldError(field);
            
            // Additional validation
            if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, 'Ingresa un email válido');
                isValid = false;
            }
            
            if (field.id === 'rut' && !isValidRUT(field.value)) {
                showFieldError(field, 'Ingresa un RUT válido');
                isValid = false;
            }
            
            if (field.id === 'phone' && !isValidPhone(field.value)) {
                showFieldError(field, 'Ingresa un teléfono válido');
                isValid = false;
            }
        }
    });
    
    // Step 2 validation - insurance type selection
    if (currentStep === 2) {
        const insuranceType = document.querySelector('input[name="insuranceType"]:checked');
        if (!insuranceType) {
            showAlert('Por favor selecciona un tipo de seguro', 'warning');
            isValid = false;
        }
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#e74c3c';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '#e0e6ed';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    if (!validateCurrentStep()) {
        return;
    }
    
    // Collect form data
    const formData = new FormData(event.target);
    const quoteData = Object.fromEntries(formData.entries());
    
    // Add timestamp
    quoteData.timestamp = new Date().toISOString();
    
    // Simulate form submission
    submitQuote(quoteData);
}

function submitQuote(quoteData) {
    // Show loading state
    const submitButton = document.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Show success modal
        showSuccessModal();
        
        // Log data (in production, send to server)
        console.log('Quote submitted:', quoteData);
        
        // Send email notification (placeholder)
        sendEmailNotification(quoteData);
        
    }, 2000);
}

function sendEmailNotification(quoteData) {
    // In a real implementation, this would send data to your backend
    console.log('Email notification sent for quote:', quoteData);
    
    // You could integrate with services like EmailJS, Formspree, or your own backend
    // Example with EmailJS:
    /*
    emailjs.send('service_id', 'template_id', {
        to_email: 'cotizaciones@bcp.cl',
        from_name: quoteData.fullName,
        from_email: quoteData.email,
        message: generateEmailContent(quoteData)
    });
    */
}

function generateEmailContent(quoteData) {
    return `
Nueva solicitud de cotización:

Datos del Cliente:
- Nombre: ${quoteData.fullName}
- Email: ${quoteData.email}
- Teléfono: ${quoteData.phone}
- RUT: ${quoteData.rut}
- Edad: ${quoteData.age}

Seguro Solicitado:
- Tipo: ${getInsuranceTypeName(quoteData.insuranceType)}
- Cobertura: ${quoteData.coverage || 'No especificada'}
- Presupuesto: ${quoteData.budget || 'No especificado'}

Comentarios:
${quoteData.comments || 'Sin comentarios adicionales'}

Fecha: ${new Date().toLocaleString('es-CL')}
    `;
}

function getInsuranceTypeName(type) {
    const names = {
        'auto': 'Seguro Automotriz',
        'home': 'Seguro de Hogar',
        'life': 'Seguro de Vida',
        'health': 'Seguro de Salud',
        'travel': 'Seguro de Viaje',
        'pet': 'Seguro de Mascotas'
    };
    return names[type] || type;
}

// Utility Functions
function formatRUT(event) {
    let value = event.target.value.replace(/[^0-9kK]/g, '');
    
    if (value.length > 9) {
        value = value.slice(0, 9);
    }
    
    if (value.length > 1) {
        const dv = value.slice(-1);
        const number = value.slice(0, -1);
        const formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        value = formattedNumber + '-' + dv;
    }
    
    event.target.value = value;
}

function formatPhone(event) {
    let value = event.target.value.replace(/[^0-9]/g, '');
    
    if (value.length > 9) {
        value = value.slice(0, 9);
    }
    
    if (value.length > 0) {
        if (value.startsWith('9')) {
            // Mobile format: 9 XXXX XXXX
            if (value.length > 5) {
                value = value.replace(/(\d{1})(\d{4})(\d{4})/, '$1 $2 $3');
            } else if (value.length > 1) {
                value = value.replace(/(\d{1})(\d{4})/, '$1 $2');
            }
        } else if (value.startsWith('2')) {
            // Landline format: 2X XXX XXXX
            if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{3})/, '$1 $2');
            }
        }
    }
    
    event.target.value = value;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidRUT(rut) {
    const cleanRUT = rut.replace(/[^0-9kK]/g, '');
    
    if (cleanRUT.length < 8 || cleanRUT.length > 9) {
        return false;
    }
    
    const dv = cleanRUT.slice(-1).toUpperCase();
    const number = cleanRUT.slice(0, -1);
    
    return calculateRUTDV(number) === dv;
}

function calculateRUTDV(rut) {
    let sum = 0;
    let multiplier = 2;
    
    for (let i = rut.length - 1; i >= 0; i--) {
        sum += parseInt(rut[i]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const remainder = sum % 11;
    const dv = 11 - remainder;
    
    if (dv === 11) return '0';
    if (dv === 10) return 'K';
    return dv.toString();
}

function isValidPhone(phone) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    return cleanPhone.length >= 8 && cleanPhone.length <= 9;
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

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Auto-close after 10 seconds
        setTimeout(() => {
            modal.style.display = 'none';
        }, 10000);
    }
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
    
    .field-error {
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);