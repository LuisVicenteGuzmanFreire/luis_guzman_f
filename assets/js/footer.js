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
    
    if (currentPath.includes('/pages/') || currentPath.includes('/blog/')) {
        // Si estamos en una página dentro de /pages/ o /blog/
        pathFooter = "../components/footer-dynamic.html";
    } else {
        // Si estamos en la raíz
        pathFooter = "components/footer-dynamic.html";
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
