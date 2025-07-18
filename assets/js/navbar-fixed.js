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
    
    // Detectar si estamos en GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    const baseUrl = isGitHubPages ? '/luis_guzman_f' : '';
    
    // Ajustar ruta del componente
    let navbarPath;
    if (isGitHubPages) {
        // En GitHub Pages, usar ruta absoluta
        navbarPath = baseUrl + '/components/navbar-working.html';
    } else {
        // En local, usar ruta relativa
        navbarPath = 'components/navbar-working.html';
        if (currentPath.includes('/pages/') || currentPath.includes('/blog/')) {
            navbarPath = '../components/navbar-working.html';
        }
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
            // console.log("✅ Navbar HTML insertado");
            
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
    // console.log("🔧 Configurando navegación...");
    
    const currentPath = window.location.pathname;
    const isInPages = currentPath.includes('/pages/');
    const isInBlog = currentPath.includes('/blog/');
    
    // Detectar si estamos en GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    const baseUrl = isGitHubPages ? '/luis_guzman_f' : '';
    
    // Configurar logo
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        if (isGitHubPages) {
            logoLink.href = baseUrl + '/index.html';
        } else {
            logoLink.href = (isInPages || isInBlog) ? '../index.html' : './index.html';
        }
        logoLink.onclick = function(e) {
            // console.log(`🏠 Navegando a: ${this.href}`);
            // Permitir navegación normal
        };
    }
    
    // Configurar enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-item-btn[data-page]');
    // console.log(`🔗 Encontrados ${navLinks.length} enlaces de navegación`);
    
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        let targetUrl;
        
        if (isGitHubPages) {
            // En GitHub Pages, usar rutas absolutas
            if (page === 'index') {
                targetUrl = baseUrl + '/index.html';
            } else {
                targetUrl = baseUrl + `/pages/${page}.html`;
            }
        } else {
            // En local, usar rutas relativas
            if (page === 'index') {
                targetUrl = (isInPages || isInBlog) ? '../index.html' : './index.html';
            } else {
                // Desde blog o pages, ir a ../pages/pagina.html
                targetUrl = (isInPages || isInBlog) ? `../pages/${page}.html` : `./pages/${page}.html`;
            }
        }
        
        link.href = targetUrl;
        // console.log(`🔗 ${page} → ${targetUrl}`);
        
        // Configurar click event
        link.onclick = function(e) {
            // console.log(`👆 Click en ${page} → ${this.href}`);
            // Permitir navegación normal sin preventDefault
        };
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
    
    // console.log(`🎯 Página actual: ${currentPage}`);
    
    // Limpiar estados activos
    const allNavLinks = document.querySelectorAll('.nav-item-btn');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Marcar página actual
    const currentLink = document.querySelector(`.nav-item-btn[data-page="${currentPage}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
        // console.log(`✅ Marcado como activo: ${currentPage}`);
    } else {
        // console.log(`⚠️ No se encontró enlace para: ${currentPage}`);
    }
}

// Función para llamar desde otros scripts si es necesario
window.refreshNavigation = function() {
    if (navbarLoaded) {
        setupNavigation();
    }
};