// =========================
// CARGA DINÁMICA DEL NAVBAR
// =========================
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("nav-container");

    if (!container) {
        console.error("⚠️ Error: No se encontró #nav-container en la página.");
        return;
    }

    // Detectar la profundidad de la carpeta para ajustar la ruta correctamente
    let currentPath = window.location.pathname;
    let pathNavbar;
    
    // Detectar si estamos en GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    const baseUrl = isGitHubPages ? '/luis_guzman_f' : '';
    
    if (isGitHubPages) {
        // En GitHub Pages, usar ruta absoluta
        pathNavbar = baseUrl + '/components/navbar-working.html';
    } else {
        // En local, usar ruta relativa
        if (currentPath.includes('/pages/') || currentPath.includes('/blog/')) {
            pathNavbar = "../components/navbar-working.html";
        } else {
            pathNavbar = "components/navbar-working.html";
        }
    }

    // console.log("📌 Intentando cargar navbar desde:", pathNavbar);

    fetch(pathNavbar)
        .then(response => response.ok ? response.text() : Promise.reject("Error cargando navbar"))
        .then(data => {
            container.innerHTML = data;
            
            // Esperar un momento para que el DOM se actualice
            setTimeout(() => {
                setupNavigation();
                highlightActiveLink();
            }, 50);
        })
        .catch(error => {
            console.error("❌ Navbar no cargado. Usando fallback.", error);
            container.innerHTML = "<nav><a href='index.html'>Inicio</a></nav>";
        });

    function setupNavigation() {
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
        }
        
        // Configurar enlaces de navegación
        const navLinks = document.querySelectorAll('.nav-item-btn[data-page]');
        
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
        });
    }

    function highlightActiveLink() {
        const currentLocation = window.location.pathname.split("/").pop();
        document.querySelectorAll(".nav-link").forEach(item => {
            const itemPath = item.getAttribute("href").split("/").pop();
            if (itemPath === currentLocation || (currentLocation === "" && itemPath === "index.html")) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }
});
