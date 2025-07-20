// =========================
// SISTEMA DE NAVEGACIÓN COMPLETO Y FUNCIONAL
// =========================

let navbarLoaded = false;

document.addEventListener("DOMContentLoaded", function () {
    // Sistema de navegación inicializado
    loadNavbar();
});

function loadNavbar() {
    const container = document.getElementById("nav-container");
    
    if (!container) {
        console.error("❌ No se encontró #nav-container");
        return;
    }

    const currentPath = window.location.pathname;
    
    // Lógica simple: si estamos en una subcarpeta, usar ../
    let navbarPath;
    if (currentPath.includes('/pages/') || currentPath.includes('/blog/')) {
        navbarPath = '../components/navbar-working.html';
    } else {
        navbarPath = 'components/navbar-working.html';
    }
    
    // Cargando navbar desde la ruta correcta

    fetch(navbarPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
            
            // Esperar un momento para que el DOM se actualice
            setTimeout(() => {
                setupNavigation();
                navbarLoaded = true;
            }, 50);
        })
        .catch(error => {
            console.error("❌ Error cargando navbar:", error);
            container.innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-dark" style="background: #2d6a4f;">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">Luis Vicente Guzmán</a>
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link" href="index.html">Inicio</a>
                            <a class="nav-link" href="pages/about.html">Sobre Mí</a>
                        </div>
                    </div>
                </nav>
            `;
        });
}

function setupNavigation() {
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/pages/') || currentPath.includes('/blog/');
    
    // Configurar logo
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.href = isInSubfolder ? '../index.html' : './index.html';
    }
    
    // Configurar enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-item-btn[data-page]');
    
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        let targetUrl;
        
        if (page === 'index') {
            targetUrl = isInSubfolder ? '../index.html' : './index.html';
        } else {
            targetUrl = isInSubfolder ? `../pages/${page}.html` : `./pages/${page}.html`;
        }
        
        link.href = targetUrl;
    });
    
    // Destacar página actual
    highlightCurrentPage();
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    let currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';
    
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index';
    }
    
    // Limpiar estados activos
    const allNavLinks = document.querySelectorAll('.nav-item-btn');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Marcar página actual
    const currentLink = document.querySelector(`.nav-item-btn[data-page="${currentPage}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// Función para llamar desde otros scripts si es necesario
window.refreshNavigation = function() {
    if (navbarLoaded) {
        setupNavigation();
    }
};