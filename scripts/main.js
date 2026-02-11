// JavaScript principal para BCP Corredora de Seguros

// Menú móvil
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
}

// Funcionalidad del carousel del hero
function initHeroCarousel() {
    const heroData = [
        {
            title: "Cuida al regalón de la casa con el seguro de mascotas BCP",
            price: "$3.890",
            promotion: "1 mes gratis"
        },
        {
            title: "Protege tu auto con el seguro automotriz BCP",
            price: "$15.990",
            promotion: "20% descuento"
        },
        {
            title: "Seguridad total para tu hogar con BCP",
            price: "$8.500",
            promotion: "2 meses gratis"
        },
        {
            title: "Viaja tranquilo con el seguro de viaje BCP",
            price: "$12.900",
            promotion: "Cobertura mundial"
        }
    ];
    
    let currentSlide = 0;
    const heroTitle = document.querySelector('.hero-text h1');
    const heroPrice = document.querySelector('.price');
    const heroPromo = document.querySelector('.promo-highlight');
    const prevBtn = document.querySelector('.hero-nav.prev');
    const nextBtn = document.querySelector('.hero-nav.next');
    
    function updateHero(index) {
        const data = heroData[index];
        if (heroTitle) heroTitle.textContent = data.title;
        if (heroPrice) heroPrice.textContent = data.price;
        if (heroPromo) heroPromo.textContent = data.promotion;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroData.length;
        updateHero(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + heroData.length) % heroData.length;
        updateHero(currentSlide);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Auto-avance del carousel
    setInterval(nextSlide, 8000);
}

// Calculadora de cotizaciones
function initQuoteCalculator() {
    const quoteButtons = document.querySelectorAll('.btn-buy, .btn-primary');
    
    quoteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirigir al cotizador
            window.location.href = 'pages/cotizador.html';
        });
    });
}

// Funcionalidad del chat widget (ahora gestionada por chatbot.js)
function initChatWidget() {
    // El chatbot profesional se carga desde scripts/chatbot.js
    // Esta función se mantiene por compatibilidad
}

// Funcionalidad de búsqueda
function initSearch() {
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', openSearchModal);
    }
}

function openSearchModal() {
    const searchModal = document.createElement('div');
    searchModal.className = 'search-modal';
    searchModal.innerHTML = `
        <div class="search-content">
            <div class="search-header">
                <input type="text" class="search-input" placeholder="¿Qué estás buscando?" autofocus>
                <button class="close-search">&times;</button>
            </div>
            <div class="search-results">
                <div class="search-suggestions">
                    <h4>Búsquedas populares:</h4>
                    <div class="suggestions">
                        <span class="suggestion">Seguro automotriz</span>
                        <span class="suggestion">SOAP 2025</span>
                        <span class="suggestion">Seguro hogar</span>
                        <span class="suggestion">Seguro mascotas</span>
                        <span class="suggestion">Denuncia siniestro</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(searchModal);
    
    // Cerrar búsqueda
    const closeBtn = searchModal.querySelector('.close-search');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(searchModal);
    });
    
    // Cerrar con escape
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            if (document.querySelector('.search-modal')) {
                document.body.removeChild(searchModal);
            }
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remover después de 5 segundos
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 5000);
    
    // Cierre manual
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    });
}

// Scroll suave para enlaces de anclaje
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer para animaciones
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const animateElements = document.querySelectorAll('.service-card, .assistance-card, .claims-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroCarousel();
    initQuoteCalculator();
    initChatWidget();
    initSearch();
    initSmoothScrolling();
    initScrollAnimations();
    
    console.log('BCP Corredora de Seguros - Sistema inicializado');
});

// Registro del service worker para capacidades PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registro falló: ', registrationError);
            });
    });
}