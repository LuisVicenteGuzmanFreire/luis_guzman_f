// =========================
// MODO OSCURO MEJORADO
// =========================
document.addEventListener("DOMContentLoaded", function () {
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    }

    if (!document.getElementById("dark-mode-toggle")) {
        let darkModeBtn = document.createElement("button");
        darkModeBtn.id = "dark-mode-toggle";
        darkModeBtn.className = "dark-mode-btn";
        darkModeBtn.innerHTML = "🌍"; 
        document.body.appendChild(darkModeBtn);
        darkModeBtn.addEventListener("click", toggleDarkMode);
    }

    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// =========================
// FUNCIÓN PARA INICIALIZAR FORMULARIO DE CONTACTO (TOTALMENTE CORREGIDA)
// =========================
function handleContactFormSubmit(event) {
    event.preventDefault();

    let form = document.getElementById("contact-form");
    let successMessage = document.getElementById("success-message");

    if (!form || !successMessage) {
        console.warn("⚠️ No se encontró el formulario o el mensaje de éxito.");
        return;
    }

    // ✅ Verificar si el formulario es válido antes de enviarlo
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        console.warn("⚠️ Formulario inválido. Revisa los campos.");
        return;
    }

    console.log("✅ Formulario enviado correctamente.");

    // ✅ Mostrar mensaje de éxito
    successMessage.style.display = "block";
    successMessage.style.opacity = "1";

    // ✅ Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
        successMessage.style.opacity = "0";
        setTimeout(() => {
            successMessage.style.display = "none";
            successMessage.style.opacity = "1";
        }, 500);
    }, 5000);

    // ✅ Ocultar mensajes de error
    form.querySelectorAll(".invalid-feedback").forEach(feedback => {
        feedback.style.display = "none";
    });

    // ✅ Eliminar clases de validación después del envío
    form.querySelectorAll(".is-invalid, .was-validated").forEach(input => {
        input.classList.remove("is-invalid", "was-validated");
    });

    // ✅ Reiniciar el formulario después de 300ms
    setTimeout(() => {
        form.reset();
        form.classList.remove("was-validated");
        form.querySelectorAll(".is-invalid, .was-validated").forEach(input => {
            input.classList.remove("is-invalid", "was-validated");
        });
    }, 300);
}


// =========================
// MEJORAS EN EL FORMULARIO DE CONTACTO
// =========================
document.querySelectorAll("#contact-form input, #contact-form textarea").forEach(input => {
    input.addEventListener("blur", function () {
        if (!this.checkValidity()) {
            this.classList.add("is-invalid");
        } else {
            this.classList.remove("is-invalid");
        }
    });
});




// ✅ Asegurar que `handleContactFormSubmit` se asigna correctamente en `initContactForm()`
function initContactForm() {
    console.log("🔄 Reasignando eventos del formulario de contacto...");

    let form = document.getElementById("contact-form");

    if (!form) {
        console.warn("⚠️ No se encontró el formulario de contacto.");
        return;
    }

    // 🔥 Elimina cualquier evento previo antes de reasignarlo
    form.removeEventListener("submit", handleContactFormSubmit);
    form.addEventListener("submit", handleContactFormSubmit);
}

// ✅ Ejecutar `initContactForm` cuando cargue la página
document.addEventListener("DOMContentLoaded", function () {
    initContactForm();
});






// =========================
// CARGA DINÁMICA DE PÁGINAS (AJAX)
// =========================
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }, 500); // Asegura que el preloader desaparezca
    }

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.getAttribute("href");
            showPreloader();
            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    });

    window.addEventListener("popstate", function () {
        location.reload();
    });
});

// =========================
// CONTROL DE NAVEGACIÓN PARA EVITAR BLOQUEOS EN ENLACES DE CONTACTO
// =========================
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        let href = this.getAttribute("href");
        if (href && (href.startsWith("tel:") || href.startsWith("mailto:") || href.includes("wa.me"))) {
            return; 
        }
    });
});

// =========================
// PRELOADER CONTROL
// =========================
function showPreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "flex";
        preloader.style.opacity = "1";
    }
}

function hidePreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JS cargado correctamente");

    function inicializarFiltros() {
        console.log("🔄 Reiniciando filtros... (Solo inicializando AOS)");
        AOS.init();
    }
    
    inicializarFiltros();

    window.addEventListener("popstate", function () {
        console.log("🔄 Página cambiada, reiniciando filtros...");
        setTimeout(inicializarFiltros, 500);
    });
});


window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 300); // Reducido a 300ms para mejor rendimiento
    }
});






