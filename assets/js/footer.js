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
    let depth = window.location.pathname.split("/").length - 3;
    if (depth < 0) depth = 0;
    let pathPrefix = depth > 0 ? "../".repeat(depth) : "";
    let pathFooter = pathPrefix + "luis_guzman_f/components/footer.html";


    console.log("📌 Intentando cargar footer desde:", pathFooter);

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
