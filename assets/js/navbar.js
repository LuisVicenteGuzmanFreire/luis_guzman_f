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
            highlightActiveLink();
        })
        .catch(error => {
            console.error("❌ Navbar no cargado. Usando fallback.", error);
            container.innerHTML = "<nav><a href='index.html'>Inicio</a></nav>";
        });

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
