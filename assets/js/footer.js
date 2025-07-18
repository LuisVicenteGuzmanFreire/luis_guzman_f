// =========================
// CARGA DINÁMICA DEL FOOTER
// =========================
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("footer-container");

    if (!container) {
        console.error("⚠️ Error: No se encontró #footer-container en la página.");
        return;
    }

    // Detectar la profundidad de la carpeta para ajustar la ruta correctamente
    let currentPath = window.location.pathname;
    let pathFooter;
    
    // Detectar si estamos en GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    const baseUrl = isGitHubPages ? '/luis_guzman_f' : '';
    
    if (isGitHubPages) {
        // En GitHub Pages, usar ruta absoluta
        pathFooter = baseUrl + '/components/footer-dynamic.html';
    } else {
        // En local, usar ruta relativa
        if (currentPath.includes('/pages/') || currentPath.includes('/blog/')) {
            pathFooter = "../components/footer-dynamic.html";
        } else {
            pathFooter = "components/footer-dynamic.html";
        }
    }


    // console.log("📌 Intentando cargar footer desde:", pathFooter);

    fetch(pathFooter)
        .then(response => response.ok ? response.text() : Promise.reject("Error cargando footer"))
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            console.error("❌ Footer no cargado. Usando fallback.", error);
            container.innerHTML = "<footer><p>© 2025 Mi Portafolio</p></footer>";
        });
});
