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

        // Coordenadas de Quito, Ecuador
        const lat = -0.185106;
        const lng = -78.492463;
        
        // Crear una nueva instancia del mapa centrado en Quito, Ecuador
        window.myMap = L.map("map").setView([lat, lng], 15);

        // Agregar capa de mapa base
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        }).addTo(window.myMap);

        // Crear un icono personalizado para el pin
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: '<i class="fas fa-map-marker-alt" style="color: #2d6a4f; font-size: 24px;"></i>',
            iconSize: [20, 20],
            iconAnchor: [10, 20],
            popupAnchor: [0, -20]
        });

        // Agregar marcador con popup
        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(window.myMap);
        
        // Contenido del popup
        marker.bindPopup(`
            <div style="text-align: center; font-family: Arial, sans-serif;">
                <h6 style="margin: 0 0 8px 0; color: #2d6a4f;">
                    <i class="fas fa-map-marked-alt"></i> Luis Vicente Guzmán
                </h6>
                <p style="margin: 0 0 8px 0; font-size: 14px;">
                    <i class="fas fa-envelope"></i> luisvicente1988@hotmail.com
                </p>
                <p style="margin: 0 0 8px 0; font-size: 14px;">
                    <i class="fas fa-phone"></i> +593 968189168
                </p>
                <p style="margin: 0; font-size: 12px; color: #666;">
                    <i class="fas fa-map-marker-alt"></i> Quito, Ecuador
                </p>
                <div style="margin-top: 10px;">
                    <a href="https://wa.me/593968189168" target="_blank" style="background: #25d366; color: white; padding: 4px 8px; border-radius: 4px; text-decoration: none; font-size: 12px;">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        `);

        // Habilitar interacciones del mapa
        window.myMap.dragging.enable();
        window.myMap.scrollWheelZoom.enable();
        window.myMap.touchZoom.enable();
        window.myMap.doubleClickZoom.enable();
        window.myMap.boxZoom.enable();
    }
});

