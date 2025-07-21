# 📘 GUÍA COMPLETA DEL PORTAFOLIO - Luis Vicente Guzmán

**Una guía didáctica para entender, mantener y expandir tu portafolio web profesional**

---

## 📚 ÍNDICE

1. [¿Qué es este portafolio?](#qué-es-este-portafolio)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Código explicado sección por sección](#código-explicado-sección-por-sección)
4. [Cómo agregar contenido nuevo](#cómo-agregar-contenido-nuevo)
5. [Mantenimiento y administración](#mantenimiento-y-administración)
6. [Solución de problemas comunes](#solución-de-problemas-comunes)

---

## 🎯 ¿QUÉ ES ESTE PORTAFOLIO?

Este es un **sitio web profesional** creado para mostrar tus servicios, proyectos y experiencia en **geomática, SIG y agricultura de precisión**. Está construido con tecnologías web modernas pero de forma sencilla para que puedas mantenerlo fácilmente.

### 🌟 Características principales:
- **Responsive**: Se adapta a cualquier dispositivo (móvil, tablet, computadora)
- **Moderno**: Diseño profesional con animaciones suaves
- **SEO optimizado**: Aparece bien en Google
- **Componentes reutilizables**: Código organizado y fácil de mantener
- **Blog integrado**: Para compartir tus conocimientos

---

## 🏗️ ESTRUCTURA DEL PROYECTO

```
luis_guzman_f/
│
├── 📄 index.html                    # Página principal
├── 📱 manifest.json                 # Configuración para móviles
├── 🔍 robots.txt                   # Instrucciones para Google
├── 🗺️ sitemap.xml                  # Mapa del sitio
├── 🎯 favicon.ico                  # Icono del sitio
│
├── 📂 assets/                      # Archivos de diseño y funcionalidad
│   ├── 📂 css/                     # Estilos del sitio
│   │   ├── styles.css              # Estilos principales
│   │   ├── dark-mode.css           # Modo oscuro
│   │   └── lazy-loading.css        # Carga rápida de imágenes
│   │
│   ├── 📂 js/                      # Funcionalidades interactivas
│   │   ├── main.js                 # Código principal
│   │   ├── navbar-fixed.js         # Menú de navegación
│   │   ├── footer.js               # Pie de página
│   │   ├── filters.js              # Filtros de proyectos
│   │   └── map.js                  # Mapas interactivos
│   │
│   ├── 📂 img/                     # Imágenes del sitio
│   └── 📂 docs/                    # Documentos descargables
│       └── CV_LUIS_GUZMAN.pdf      # Tu currículum
│
├── 📂 pages/                       # Páginas del sitio
│   ├── about.html                  # Sobre mí
│   ├── services.html               # Servicios
│   ├── projects.html               # Proyectos
│   ├── contact.html                # Contacto
│   └── blog.html                   # Blog principal
│
├── 📂 blog/                        # Artículos del blog
│   ├── index.html                  # Redirección al blog
│   ├── articulo1.html              # Artículo 1: Introducción a GIS
│   ├── articulo2.html              # Artículo 2: Teledetección
│   └── articulo3.html              # Artículo 3: Big Data
│
└── 📂 components/                  # Partes reutilizables
    ├── navbar-working.html         # Menú de navegación
    ├── footer-dynamic.html         # Pie de página
    ├── breadcrumbs.html            # Navegación de migas
    └── testimonials.html           # Testimonios
```

---

## 📖 CÓDIGO EXPLICADO SECCIÓN POR SECCIÓN

### 1. 📄 **PÁGINA PRINCIPAL (index.html)**

La página principal está dividida en secciones claras:

#### **🔍 Sección HEAD (Configuración invisible)**
```html
<head>
    <meta charset="UTF-8">
    <!-- Define que el sitio usa caracteres especiales (acentos, ñ) -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Hace que el sitio se vea bien en móviles -->
    
    <title>Luis Vicente Guzmán | Geomática, SIG y Agricultura de Precisión</title>
    <!-- Título que aparece en la pestaña del navegador -->
    
    <meta name="description" content="Especialista en geomática y SIG...">
    <!-- Descripción que aparece en Google -->
</head>
```

**¿Qué hace cada cosa?**
- `charset="UTF-8"`: Permite usar acentos y caracteres especiales
- `viewport`: Hace que el sitio se adapte al tamaño de pantalla
- `title`: Es lo que se ve en la pestaña del navegador
- `description`: Es lo que aparece en los resultados de Google

#### **🎨 Banner Principal**
```html
<header class="hero text-black text-center d-flex align-items-center justify-content-center" 
        style="background: url('assets/img/banner.webp') no-repeat center center/cover; height: 90vh;">
    <div class="container">
        <h1 class="display-4" data-aos="fade-up">
            Geomática, SIG & Machine Learning
        </h1>
        <p class="lead" data-aos="fade-up" data-aos-delay="100">
            Impulsando la agricultura y el medio ambiente con tecnologías geoespaciales.
        </p>
        <a href="pages/about.html" class="btn btn-primary btn-lg m-2">
            <i class="fas fa-user"></i> Conóceme
        </a>
    </div>
</header>
```

**¿Qué significa cada parte?**
- `hero`: Clase que define esta sección como banner principal
- `background: url(...)`: Imagen de fondo del banner
- `height: 90vh`: El banner ocupa 90% de la altura de la pantalla
- `data-aos="fade-up"`: Animación que hace aparecer el texto desde abajo
- `data-aos-delay="100"`: Retraso de 100 milisegundos para la animación

#### **🏢 Sección de Servicios**
```html
<section class="container mt-5">
    <h2 class="text-center" data-aos="fade-up">Servicios</h2>
    <div class="row text-center mt-4">
        <div class="col-md-4" data-aos="zoom-in">
            <i class="fas fa-map-marked-alt fa-3x mb-2"></i>
            <h5>SIG y Cartografía</h5>
            <p>Generación de mapas y análisis geoespacial con QGIS, ArcGIS y PostGIS.</p>
        </div>
        <!-- Más servicios... -->
    </div>
</section>
```

**Explicación:**
- `container`: Limita el ancho del contenido
- `mt-5`: Margen superior (espacio arriba)
- `row`: Fila para organizar columnas
- `col-md-4`: Columna que ocupa 1/3 del ancho en pantallas medianas
- `fa-3x`: Icono 3 veces más grande
- `data-aos="zoom-in"`: Animación de zoom al aparecer

### 2. 🎨 **ESTILOS CSS (assets/css/styles.css)**

#### **Variables de color**
```css
:root {
    --primary-color: #2d6a4f;    /* Verde principal */
    --secondary-color: #40916c;   /* Verde claro */
    --highlight-color: #ffb703;   /* Amarillo vibrante */
    --hover-color: #faa307;       /* Naranja al pasar el mouse */
}
```

**¿Para qué sirve?**
- Define los colores principales del sitio
- Permite cambiar todos los colores desde un solo lugar
- Mantiene consistencia visual

#### **Estilos responsive**
```css
h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
}
```

**¿Qué significa?**
- `clamp()`: Función que ajusta el tamaño automáticamente
- `2rem`: Tamaño mínimo
- `5vw`: Tamaño que se ajusta al ancho de pantalla
- `3.5rem`: Tamaño máximo

### 3. ⚡ **JAVASCRIPT (assets/js/main.js)**

#### **Configuración principal**
```javascript
const AppConfig = {
    selectors: {
        preloader: '#preloader',
        contactForm: '#contact-form',
        navContainer: '#nav-container'
    },
    cache: new Map()
};
```

**¿Para qué sirve?**
- Organiza la configuración del sitio
- `selectors`: Elementos HTML que vamos a usar
- `cache`: Guarda elementos para acceso rápido

#### **Modo oscuro**
```javascript
const DarkMode = {
    toggle() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    }
};
```

**¿Cómo funciona?**
- `toggle()`: Activa/desactiva el modo oscuro
- `classList.toggle()`: Añade o quita la clase "dark-mode"
- `localStorage`: Guarda la preferencia del usuario

---

## 🔧 CÓMO AGREGAR CONTENIDO NUEVO

### 📝 **AGREGAR UN NUEVO ARTÍCULO AL BLOG**

#### **Paso 1: Crear el archivo HTML**

1. Ve a la carpeta `blog/`
2. Crea un nuevo archivo: `articulo4.html`
3. Copia este código base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Título Aquí | Blog</title>
    <meta name="description" content="Descripción del artículo (máximo 160 caracteres)">
    <meta name="keywords" content="palabra1, palabra2, palabra3">
    
    <!-- CSS (NO CAMBIAR) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="icon" href="../favicon.ico">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <link rel="stylesheet" href="../assets/css/dark-mode.css">
</head>
<body>
    <!-- Navegación (NO CAMBIAR) -->
    <div id="nav-container"></div>
    <div id="breadcrumb-container"></div>

    <!-- AQUÍ EMPIEZA TU CONTENIDO -->
    <main class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <article class="blog-post">
                    <!-- Imagen principal -->
                    <img src="../assets/img/tu-imagen.jpg" class="img-fluid rounded mb-4" alt="Descripción de la imagen">

                    <!-- Título del artículo -->
                    <h1 class="mb-3" data-aos="fade-up">Tu Título Aquí</h1>
                    
                    <!-- Fecha de publicación -->
                    <p class="text-muted" data-aos="fade-up" data-aos-delay="100">
                        <i class="fas fa-calendar-alt"></i> Publicado el [FECHA]
                    </p>

                    <!-- Contenido del artículo -->
                    <p data-aos="fade-up" data-aos-delay="200">
                        Tu primer párrafo aquí...
                    </p>

                    <h2 data-aos="fade-up" data-aos-delay="300">Subtítulo 1</h2>
                    <p data-aos="fade-up" data-aos-delay="400">
                        Contenido del subtítulo...
                    </p>

                    <!-- Cita destacada (opcional) -->
                    <blockquote class="blockquote text-center p-3 my-4 bg-light border-start border-primary" data-aos="fade-up" data-aos-delay="500">
                        "Tu cita aquí"
                    </blockquote>

                    <!-- Más contenido... -->

                    <!-- Botones de compartir (NO CAMBIAR) -->
                    <div class="share-buttons mt-4" data-aos="fade-up" data-aos-delay="800">
                        <p>📢 Comparte este artículo:</p>
                        <a href="javascript:void(0)" onclick="shareOnFacebook()" class="btn btn-outline-primary btn-sm">
                            <i class="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="javascript:void(0)" onclick="shareOnTwitter()" class="btn btn-outline-info btn-sm">
                            <i class="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="javascript:void(0)" onclick="shareOnWhatsApp()" class="btn btn-outline-success btn-sm">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </article>
            </div>

            <!-- Sidebar (NO CAMBIAR) -->
            <div class="col-lg-4">
                <aside class="sidebar bg-light p-4 rounded">
                    <h4 class="mb-3">Artículos relacionados</h4>
                    <ul class="list-unstyled">
                        <li><a href="articulo1.html">📌 Introducción a GIS</a></li>
                        <li><a href="articulo2.html">📌 Teledetección aplicada</a></li>
                        <li><a href="articulo3.html">📌 Big Data en Geomática</a></li>
                        <li><a href="../pages/blog.html">📌 Ver todos los artículos</a></li>
                    </ul>
                </aside>
            </div>
        </div>
    </main>

    <!-- Footer y scripts (NO CAMBIAR) -->
    <div id="footer-container"></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script src="../assets/js/navbar-fixed.js"></script>
    <script src="../assets/js/footer.js"></script>
    <script src="../assets/js/main.js"></script>

    <script>
        // Cargar breadcrumbs (NO CAMBIAR)
        fetch('../components/breadcrumbs.html')
            .then(response => response.text())
            .then(data => {
                const container = document.getElementById('breadcrumb-container');
                if (container) container.innerHTML = data;
            });
    </script>

    <script>
        AOS.init();
        
        // Funciones para compartir (NO CAMBIAR)
        function shareOnFacebook() {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
        }
        
        function shareOnTwitter() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            const text = encodeURIComponent('Descripción corta del artículo');
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title} - ${text}`, '_blank', 'width=600,height=400');
        }
        
        function shareOnWhatsApp() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            const text = encodeURIComponent(`*${document.title}*\n\nDescripción del artículo.\n\nLee el artículo completo aquí: ${window.location.href}`);
            window.open(`https://wa.me/?text=${text}`, '_blank');
        }
    </script>
</body>
</html>
```

#### **Paso 2: Personalizar el contenido**

**Cambia estos elementos:**
1. **Título**: Reemplaza "Tu Título Aquí" por el título real
2. **Descripción meta**: Escribe una descripción de máximo 160 caracteres
3. **Palabras clave**: Añade palabras relacionadas con el tema
4. **Imagen**: Sube tu imagen a `assets/img/` y cambia la ruta
5. **Fecha**: Cambia [FECHA] por la fecha real
6. **Contenido**: Escribe tu artículo

#### **Paso 3: Agregar el artículo al blog principal**

1. Abre `pages/blog.html`
2. Busca la sección donde están las tarjetas de artículos
3. Agrega una nueva tarjeta:

```html
<div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
    <div class="card h-100">
        <img src="../assets/img/tu-imagen.jpg" class="card-img-top" alt="Tu título">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">Tu Título Aquí</h5>
            <p class="card-text flex-grow-1">Resumen corto del artículo...</p>
            <div class="mt-auto">
                <a href="../blog/articulo4.html" class="btn btn-outline-primary">Leer más</a>
                <small class="text-muted d-block mt-2">📅 [FECHA]</small>
            </div>
        </div>
    </div>
</div>
```

### 🚀 **AGREGAR UN NUEVO PROYECTO**

#### **Paso 1: Agregar imagen del proyecto**

1. Guarda tu imagen en `assets/img/`
2. Usa formato `.webp` o `.jpg`
3. Tamaño recomendado: 400x300 píxeles

#### **Paso 2: Agregar proyecto a la galería**

1. Abre `pages/projects.html`
2. Busca la sección `<div class="row" id="project-gallery">`
3. Agrega una nueva tarjeta:

```html
<div class="col-md-4 project-card" data-category="CATEGORIA" data-aos="zoom-in" data-aos-delay="300">
    <div class="card">
        <img src="../assets/img/tu-proyecto.jpg" class="card-img-top" alt="Nombre del proyecto">
        <div class="card-body">
            <h5 class="card-title">Nombre del Proyecto</h5>
            <p class="card-text">Descripción corta del proyecto.</p>
            <!-- Opcional: Agregar botón para más detalles -->
            <a href="#" class="btn btn-primary">Ver detalles</a>
        </div>
    </div>
</div>
```

**Categorías disponibles:**
- `gis`: Para proyectos de SIG
- `remote`: Para teledetección
- `data`: Para análisis de datos

#### **Paso 3: Agregar proyecto a la página principal**

1. Abre `index.html`
2. Busca la sección "Proyectos Destacados"
3. Reemplaza uno de los proyectos existentes o agrega uno nuevo

### 📞 **ACTUALIZAR INFORMACIÓN DE CONTACTO**

#### **Cambiar datos personales:**

1. Abre `pages/contact.html`
2. Busca la sección de información de contacto
3. Actualiza:
   - **Teléfono**: Busca `+593968189168`
   - **Email**: Busca `luisvicente1988@hotmail.com`
   - **Dirección**: Busca la dirección actual

#### **Actualizar enlaces de redes sociales:**

1. Abre `components/footer-dynamic.html`
2. Busca los enlaces sociales
3. Actualiza las URLs

---

## 🛠️ MANTENIMIENTO Y ADMINISTRACIÓN

### 📊 **ARCHIVOS IMPORTANTES QUE NO DEBES TOCAR**

**❌ NO MODIFICAR:**
- `assets/js/navbar-fixed.js` - Sistema de navegación
- `assets/js/main.js` - Funcionalidades principales
- `components/navbar-working.html` - Menú de navegación
- `manifest.json` - Configuración PWA
- `robots.txt` - SEO
- `sitemap.xml` - Mapa del sitio

**✅ PUEDES MODIFICAR:**
- Contenido de páginas HTML
- Imágenes en `assets/img/`
- Artículos del blog
- Información personal

### 🔍 **ACTUALIZACIÓN SEO**

#### **Para cada nueva página/artículo:**

1. **Título único** (máximo 60 caracteres)
2. **Descripción única** (máximo 160 caracteres)
3. **Palabras clave relevantes**
4. **Imágenes con texto alternativo**

#### **Ejemplo de meta tags correctos:**
```html
<title>Machine Learning en Agricultura | Blog Luis Guzmán</title>
<meta name="description" content="Descubre cómo el machine learning está revolucionando la agricultura de precisión con casos prácticos y ejemplos reales.">
<meta name="keywords" content="Machine Learning, Agricultura, IA, Tecnología Agrícola, Python">
```

### 📱 **OPTIMIZACIÓN DE IMÁGENES**

#### **Tamaños recomendados:**
- **Banner principal**: 1920x1080 píxeles
- **Proyectos**: 400x300 píxeles
- **Blog**: 800x400 píxeles
- **Perfil**: 400x400 píxeles

#### **Formatos preferidos:**
1. `.webp` - Mejor calidad y menor tamaño
2. `.jpg` - Compatible con todo
3. `.png` - Solo para logotipos con transparencia

#### **Herramientas de optimización:**
- **Online**: tinypng.com, squoosh.app
- **Desktop**: GIMP (gratuito), Photoshop

### 🚀 **RENDIMIENTO DEL SITIO**

#### **Mejores prácticas:**
1. **Comprime las imágenes** antes de subirlas
2. **No agregues demasiadas animaciones** en una sola página
3. **Mantén el código limpio** y comentado
4. **Usa lazy loading** para imágenes (ya implementado)

#### **Verificar velocidad:**
- Google PageSpeed Insights
- GTmetrix
- Pingdom

### 📈 **ANALÍTICAS Y MONITOREO**

#### **Google Analytics (opcional):**
1. Crea una cuenta en Google Analytics
2. Agrega el código de seguimiento al `<head>` de todas las páginas
3. Monitorea visitantes, páginas más vistas, tiempo de permanencia

#### **Google Search Console:**
1. Verifica la propiedad del sitio
2. Envía el sitemap.xml
3. Monitorea errores de indexación

---

## 🔧 SOLUCIÓN DE PROBLEMAS COMUNES

### ❗ **La navegación no funciona**

**Problema**: Los enlaces del menú no llevan a las páginas correctas

**Solución**:
1. Verifica que el archivo `assets/js/navbar-fixed.js` no se haya modificado
2. Asegúrate de que todas las páginas estén en la carpeta `pages/`
3. Revisa que los nombres de archivo no tengan espacios o caracteres especiales

### ❗ **Las imágenes no se cargan**

**Problema**: Las imágenes aparecen como cuadros rotos

**Soluciones**:
1. **Verifica la ruta**: `../assets/img/imagen.jpg` (desde páginas)
2. **Verifica la ruta**: `assets/img/imagen.jpg` (desde index.html)
3. **Verifica el nombre**: Debe ser exacto, sin espacios
4. **Verifica el formato**: Usa .jpg, .png, .webp

### ❗ **El sitio se ve mal en móvil**

**Problema**: El diseño no se adapta a pantallas pequeñas

**Solución**:
1. No modifiques las clases de Bootstrap (`col-md-4`, `container`, etc.)
2. Usa las clases responsive que ya están implementadas
3. Prueba siempre en diferentes tamaños de pantalla

### ❗ **Los formularios no funcionan**

**Problema**: El formulario de contacto no envía emails

**Nota**: Este portafolio es estático, no tiene backend. Opciones:
1. **Formspree**: Servicio gratuito para formularios estáticos
2. **Netlify Forms**: Si alojas en Netlify
3. **EmailJS**: Envío de emails desde JavaScript
4. **Agregar WhatsApp**: Botón directo para contacto

### ❗ **Errores en el navegador**

**Problema**: La consola del navegador muestra errores

**Diagnóstico**:
1. Presiona F12 para abrir DevTools
2. Ve a la pestaña "Console"
3. Busca errores en rojo

**Errores comunes**:
- **404 Not Found**: Archivo no encontrado, verifica rutas
- **CORS Error**: Problema al cargar componentes, usa servidor local
- **JavaScript Error**: Revisa si modificaste algún archivo JS

---

## 📋 CHECKLIST DE MANTENIMIENTO MENSUAL

### ✅ **Contenido**
- [ ] Revisar que todos los enlaces funcionen
- [ ] Actualizar CV si es necesario
- [ ] Verificar que la información de contacto esté actualizada
- [ ] Agregar nuevo proyecto si tienes uno
- [ ] Publicar al menos un artículo de blog

### ✅ **Técnico**
- [ ] Optimizar nuevas imágenes
- [ ] Verificar que el sitio funcione en diferentes navegadores
- [ ] Revisar Google Search Console por errores
- [ ] Hacer backup de los archivos
- [ ] Verificar velocidad del sitio

### ✅ **SEO**
- [ ] Actualizar meta descriptions si es necesario
- [ ] Revisar palabras clave
- [ ] Verificar que Google esté indexando el sitio
- [ ] Actualizar sitemap.xml si agregaste páginas

---

## 📚 RECURSOS ADICIONALES

### 🎓 **Para aprender más**
- **HTML/CSS**: W3Schools, MDN Web Docs
- **Bootstrap**: getbootstrap.com
- **SEO**: Google Search Central
- **Imágenes**: Unsplash, Pexels (gratuitas)

### 🛠️ **Herramientas útiles**
- **Editor de código**: Visual Studio Code (gratuito)
- **Optimización imágenes**: TinyPNG
- **Verificación enlaces**: W3C Link Checker
- **Velocidad**: Google PageSpeed Insights

### 📞 **Soporte técnico**
Si tienes problemas específicos:
1. Revisa esta guía primero
2. Busca el error específico en Google
3. Consulta la documentación de Bootstrap
4. Si es urgente, contacta a quien te ayudó a crear el sitio

---

## 🎯 RESUMEN PARA RECORDAR

### **LO MÁS IMPORTANTE:**
1. **Backup**: Siempre haz copia antes de cambiar algo importante
2. **Prueba**: Verifica que todo funcione después de hacer cambios
3. **Mantén simple**: No compliques el código innecesariamente
4. **Consistencia**: Usa el mismo estilo en todo el sitio
5. **SEO**: Cada página nueva necesita título y descripción únicos

### **PARA AGREGAR CONTENIDO:**
- **Blog**: Copia la plantilla y personaliza
- **Proyectos**: Agrega a la galería con la categoría correcta
- **Imágenes**: Optimiza antes de subir
- **Contacto**: Actualiza cuando cambien tus datos

**¡Tu portafolio está listo para crecer contigo! 🚀**

---

*Esta guía está diseñada para ser tu compañera de largo plazo. Guárdala en un lugar seguro y consúltala cada vez que necesites hacer cambios en tu portafolio.*