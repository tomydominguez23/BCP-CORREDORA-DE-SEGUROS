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

// Funcionalidad del chat widget
function initChatWidget() {
    const chatButton = document.querySelector('.chat-button');
    
    if (chatButton) {
        chatButton.addEventListener('click', openChatWindow);
    }
}

function openChatWindow() {
    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window';
    chatWindow.innerHTML = `
        <div class="chat-header">
            <h3>Asistencia BCP</h3>
            <button class="close-chat">&times;</button>
        </div>
        <div class="chat-messages">
            <div class="message bot-message">
                <div class="message-content">
                    ¡Hola! Soy el asistente virtual de BCP. ¿En qué puedo ayudarte hoy?
                </div>
                <div class="message-time">${new Date().toLocaleTimeString()}</div>
            </div>
        </div>
        <div class="chat-input-container">
            <input type="text" class="chat-input" placeholder="Escribe tu mensaje...">
            <button class="send-message"><i class="fas fa-paper-plane"></i></button>
        </div>
    `;
    
    document.body.appendChild(chatWindow);
    
    // Cerrar chat
    const closeBtn = chatWindow.querySelector('.close-chat');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(chatWindow);
    });
    
    // Enviar mensaje
    const sendBtn = chatWindow.querySelector('.send-message');
    const input = chatWindow.querySelector('.chat-input');
    const messagesContainer = chatWindow.querySelector('.chat-messages');
    
    function sendMessage() {
        const message = input.value.trim();
        if (message) {
            addMessage(message, 'user');
            input.value = '';
            
            // Simular respuesta del bot
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response, 'bot');
            }, 1000);
        }
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">${text}</div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        `;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    input.focus();
}

function getBotResponse(message) {
    const responses = {
        'seguro auto': 'Nuestro seguro automotriz incluye cobertura total, asistencia 24/7 y talleres especializados. ¿Te interesa cotizar?',
        'seguro hogar': 'El seguro de hogar protege tu propiedad contra incendios, robos y desastres naturales. ¿Qué cobertura necesitas?',
        'seguro vida': 'Ofrecemos seguros de vida con diferentes coberturas. ¿Quieres información sobre nuestros planes?',
        'mascotas': 'Nuestro seguro de mascotas cubre gastos veterinarios y emergencias. ¡Desde $3.890 mensuales!',
        'cotizar': 'Perfecto! Puedo ayudarte a cotizar. ¿Qué tipo de seguro te interesa?',
        'precio': 'Los precios varían según el tipo de seguro y cobertura. ¿Qué seguro específico te interesa?',
        'contacto': 'Puedes contactarnos al 600 6000 292 o visitarnos en bcpseguros.cl',
        'horario': 'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hrs.',
        'denuncia': 'Para denunciar un siniestro llama al 600 6000 292 o ingresa a bcpseguros.cl'
    };
    
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return 'Gracias por tu consulta. Un ejecutivo te contactará pronto para brindarte información personalizada.';
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

// Inicializar Galería de Imágenes
function initGalleryCarousel() {
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.gallery-next');
    const prevButton = document.querySelector('.gallery-prev');
    const dotsNav = document.querySelector('.gallery-dots');
    
    if (!track || slides.length === 0) return;

    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active-dot');
        dot.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide') || slides[0];
            const targetSlide = slides[index];
            moveToSlide(track, currentSlide, targetSlide);
            updateDots(index);
        });
        dotsNav.appendChild(dot);
    });
    
    // Initial state
    slides[0].classList.add('current-slide');
    
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };
    
    const updateDots = (targetIndex) => {
        const currentDot = dotsNav.querySelector('.active-dot');
        const targetDot = dotsNav.children[targetIndex];
        if (currentDot) currentDot.classList.remove('active-dot');
        if (targetDot) targetDot.classList.add('active-dot');
    };
    
    // Next Button
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        let nextIndex = slides.indexOf(nextSlide);
        
        if (!nextSlide) {
            nextSlide = slides[0];
            nextIndex = 0;
        }
        
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(nextIndex);
    });
    
    // Prev Button
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;
        let prevIndex = slides.indexOf(prevSlide);
        
        if (!prevSlide) {
            prevSlide = slides[slides.length - 1];
            prevIndex = slides.length - 1;
        }
        
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(prevIndex);
    });
    
    // Auto Play
    let autoPlayInterval = setInterval(() => {
        if (document.querySelector('.gallery-next')) {
            document.querySelector('.gallery-next').click();
        }
    }, 5000);
    
    // Pause on hover
    const galleryContainer = document.querySelector('.gallery-wrapper');
    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    galleryContainer.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => {
            if (document.querySelector('.gallery-next')) {
                document.querySelector('.gallery-next').click();
            }
        }, 5000);
    });
    
    // Update slide position on resize
    window.addEventListener('resize', () => {
        const newSlideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach((slide, index) => {
            slide.style.left = newSlideWidth * index + 'px';
        });
        const currentSlide = track.querySelector('.current-slide');
        moveToSlide(track, currentSlide, currentSlide);
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
    initGalleryCarousel(); // Nueva función
    
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