// =========================
// FUNCIONES DE FILTRO PARA PROYECTOS
// =========================

/* Función que inicializa los filtros de los proyectos */
document.addEventListener("DOMContentLoaded", function () {
    initProjectFilters();
});

function initProjectFilters() {
    console.log("🔄 Inicializando filtros de proyectos...");

    const filterButtons = document.querySelectorAll(".filter-btn");  /* Botones de filtro */
    const projectCards = document.querySelectorAll(".col-md-4.project-card");  /* Tarjetas de proyectos */

    if (!filterButtons.length || !projectCards.length) {
        console.warn("⚠️ No se encontraron botones o tarjetas de proyecto.");
        return;
    }

    filterButtons.forEach(button => {
        button.removeEventListener("click", handleProjectFilter);
        button.addEventListener("click", handleProjectFilter);
    });
}

/* Función para manejar el filtrado de los proyectos */
function handleProjectFilter(event) {
    const filter = event.target.getAttribute("data-filter");

    // ✅ Quitar la clase "active" de todos los botones de filtro
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));

    // ✅ Agregar la clase "active" solo al botón seleccionado
    event.target.classList.add("active");

    // ✅ Filtrar proyectos según la categoría seleccionada
    document.querySelectorAll(".col-md-4.project-card").forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
