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
    console.log('🔍 Debug footer - currentPath:', currentPath);
    let pathFooter;
    
    // Lógica simple: si estamos en una subcarpeta, usar ../
    if (currentPath.includes('/pages/') || currentPath.includes('/blog/')) {
        pathFooter = "../components/footer-dynamic.html";
        console.log('📁 Detectado en subcarpeta, usando ruta footer:', pathFooter);
    } else {
        pathFooter = "components/footer-dynamic.html";
        console.log('🏠 Detectado en raíz, usando ruta footer:', pathFooter);
    }


    // console.log("📌 Intentando cargar footer desde:", pathFooter);

    fetch(pathFooter)
        .then(response => response.ok ? response.text() : Promise.reject("Error cargando footer"))
        .then(data => {
            container.innerHTML = data;
            
            // Eliminar skip-to-content después de cargar footer
            if (typeof removeSkipToContentElements === 'function') {
                setTimeout(() => removeSkipToContentElements(), 100);
            }
        })
        .catch(error => {
            console.error("❌ Footer no cargado. Usando fallback.", error);
            container.innerHTML = "<footer><p>© 2025 Mi Portafolio</p></footer>";
        });
});
