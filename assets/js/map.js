document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("map")) { // Solo ejecuta si existe el contenedor #map

        // Verificar si el mapa ya está inicializado y eliminarlo antes de crear uno nuevo
        if (L.DomUtil.get("map")._leaflet_id !== undefined) {
            L.DomUtil.get("map").innerHTML = ""; // Resetear el contenedor
        }

        // Si existe una instancia anterior del mapa, eliminarla antes de crear una nueva
        if (typeof window.myMap !== "undefined" && window.myMap !== null) {
            window.myMap.remove();
            window.myMap = null; // Resetear la variable global
        }

        // Crear una nueva instancia del mapa y almacenarla en una variable global
        window.myMap = L.map("map").setView([41.66, -4.72], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(window.myMap);

        // Habilitar interacciones del mapa
        window.myMap.dragging.enable();
        window.myMap.scrollWheelZoom.enable();
        window.myMap.touchZoom.enable();
        window.myMap.doubleClickZoom.enable();
        window.myMap.boxZoom.enable();
    }
});

