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
    
    // Lógica simple: si estamos en una subcarpeta, usar ../
    if (currentPath.includes('/pages/') || currentPath.includes('/blog/')) {
        pathNavbar = "../components/navbar-working.html";
    } else {
        pathNavbar = "components/navbar-working.html";
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
