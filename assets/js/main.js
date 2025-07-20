// =========================
// APLICACIÓN PRINCIPAL - TODAS LAS FUNCIONALIDADES CENTRALIZADAS
// =========================

// Configuración global y cache de elementos DOM
const AppConfig = {
    selectors: {
        preloader: '#preloader',
        contactForm: '#contact-form',
        successMessage: '#success-message',
        navContainer: '#nav-container',
        footerContainer: '#footer-container'
    },
    cache: new Map(),
    
    // Método para cachear elementos DOM
    getElement(selector) {
        if (!this.cache.has(selector)) {
            this.cache.set(selector, document.querySelector(selector));
        }
        return this.cache.get(selector);
    }
};

// =========================
// MODO OSCURO OPTIMIZADO
// =========================
const DarkMode = {
    init() {
        this.createToggleButton();
        this.loadSavedPreference();
    },
    
    createToggleButton() {
        if (document.getElementById("dark-mode-toggle")) return;
        
        const darkModeBtn = document.createElement("button");
        darkModeBtn.id = "dark-mode-toggle";
        darkModeBtn.className = "dark-mode-btn";
        darkModeBtn.innerHTML = "🌍";
        darkModeBtn.setAttribute('aria-label', 'Alternar modo oscuro');
        
        document.body.appendChild(darkModeBtn);
        darkModeBtn.addEventListener("click", () => this.toggle());
    },
    
    toggle() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    },
    
    loadSavedPreference() {
        if (localStorage.getItem("dark-mode") === "true") {
            document.body.classList.add("dark-mode");
        }
    }
};

// =========================
// FORMULARIO DE CONTACTO OPTIMIZADO
// =========================
const ContactForm = {
    form: null,
    successMessage: null,
    
    init() {
        this.form = AppConfig.getElement(AppConfig.selectors.contactForm);
        this.successMessage = AppConfig.getElement(AppConfig.selectors.successMessage);
        
        if (!this.form) return;
        
        this.bindEvents();
        this.setupValidation();
    },
    
    bindEvents() {
        // Remover eventos previos y añadir nuevo
        this.form.removeEventListener("submit", this.handleSubmit.bind(this));
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    },
    
    setupValidation() {
        const inputs = this.form.querySelectorAll("input, textarea");
        inputs.forEach(input => {
            input.addEventListener("blur", () => {
                if (!input.checkValidity()) {
                    input.classList.add("is-invalid");
                    input.setAttribute('aria-invalid', 'true');
                } else {
                    input.classList.remove("is-invalid");
                    input.setAttribute('aria-invalid', 'false');
                }
            });
        });
    },
    
    handleSubmit(event) {
        event.preventDefault();
        
        if (!this.form || !this.successMessage) {
            console.warn("⚠️ Elementos del formulario no encontrados.");
            return;
        }
        
        if (!this.form.checkValidity()) {
            event.stopPropagation();
            this.form.classList.add("was-validated");
            return;
        }
        
        this.showSuccessMessage();
        this.resetForm();
    },
    
    showSuccessMessage() {
        this.successMessage.style.display = "block";
        this.successMessage.style.opacity = "1";
        this.successMessage.setAttribute('aria-live', 'polite');
        
        setTimeout(() => {
            this.successMessage.style.opacity = "0";
            setTimeout(() => {
                this.successMessage.style.display = "none";
            }, 500);
        }, 5000);
    },
    
    resetForm() {
        setTimeout(() => {
            this.form.reset();
            this.form.classList.remove("was-validated");
            this.form.querySelectorAll(".is-invalid").forEach(input => {
                input.classList.remove("is-invalid");
                input.setAttribute('aria-invalid', 'false');
            });
        }, 300);
    }
};






// =========================
// PRELOADER OPTIMIZADO
// =========================
const Preloader = {
    element: null,
    
    init() {
        this.element = AppConfig.getElement(AppConfig.selectors.preloader);
        if (this.element) {
            this.hide(500);
        }
    },
    
    show() {
        if (this.element) {
            this.element.style.display = "flex";
            this.element.style.opacity = "1";
            this.element.setAttribute('aria-hidden', 'false');
        }
    },
    
    hide(delay = 0) {
        if (!this.element) return;
        
        setTimeout(() => {
            this.element.style.opacity = "0";
            setTimeout(() => {
                this.element.style.display = "none";
                this.element.setAttribute('aria-hidden', 'true');
            }, 500);
        }, delay);
    }
};

// =========================
// NAVEGACIÓN OPTIMIZADA
// =========================
const Navigation = {
    init() {
        // Navegación completamente manejada por navbar-fixed.js
    }
};

// =========================
// UTILIDADES Y FUNCIONES AUXILIARES
// =========================
const Utils = {
    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });
        }
    },
    
    // Lazy loading para imágenes
    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        if (images.length === 0) return;
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
};

// =========================
// INICIALIZACIÓN PRINCIPAL DE LA APLICACIÓN
// =========================
const App = {
    init() {
        // Inicializar todos los módulos
        DarkMode.init();
        ContactForm.init();
        Preloader.init();
        Navigation.init();
        Utils.initAOS();
        Utils.initLazyLoading();
    },
    
    reinitialize() {
        Utils.initAOS();
    }
};

// =========================
// EVENT LISTENERS CENTRALIZADOS
// =========================
document.addEventListener("DOMContentLoaded", () => {
    App.init();
    
    // Desregistrar Service Worker problemático
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration.unregister();
            }
        });
    }
});

window.addEventListener("load", () => {
    Preloader.hide(300);
});

window.addEventListener("popstate", () => {
    setTimeout(() => App.reinitialize(), 500);
});

// Compatibilidad hacia atrás para funciones legacy
function showPreloader() { Preloader.show(); }
function hidePreloader() { Preloader.hide(); }
function initContactForm() { ContactForm.init(); }

