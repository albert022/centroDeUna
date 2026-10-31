# Aura Nails & Beauty Studio — Demo Web (Plan Básico de QRMOON)

Demostración web comercial de alto impacto para centros de uñas, manicuristas y estética integral en **Santo Domingo Este, República Dominicana**, desarrollada con **Next.js 16 (App Router), TypeScript y Tailwind CSS v4**.

Esta demo ilustra todo lo que incluye el **Plan Básico de QRMOON** para impulsar pequeños salones de belleza y convertirlos en negocios con presencia digital premium, moderna y orientada a la conversión mediante WhatsApp.

---

## ✨ Características Principales

### 1. Identidad Visual & Diseño
- **Paleta de Colores:** Rosa empolvado, nude, blanco marfil, champán y acentos en rosa profundo y dorado suave.
- **Tipografía:** Combinación refinada con serif clásica para títulos (`Playfair Display`) y sans-serif moderna para lectura (`Plus Jakarta Sans`).
- **Fotografía Profesional:** Imágenes de alta calidad en manicura, uñas acrílicas, pedicura spa y estética integral con derechos de demostración.
- **Experiencia Móvil (Mobile-First):** Interfaz optimizada para celulares con navegación fluida, menús accesibles y botones táctiles amplios.

### 2. Estructura de la Web
- **Encabezado y Navegación:**
  - Logotipo boutique con isotipo distintivo.
  - Menú por anclas: *Inicio, Servicios, Galería, Preguntas y Contacto*.
  - Botón directo "Reservar por WhatsApp" y acceso a la Tarjeta Digital.
  - Drawer móvil responsivo con accesos directos.
- **Sección 1 — Inicio, Filosofía y Servicios:**
  - **Hero:** Título *"El arte de consentirte empieza en tus manos"*, ubicación en Santo Domingo Este y llamados a la acción claros.
  - **Filosofía del Estudio:** Presentación cálida y honesta con 3 tarjetas de beneficios (*Atención personalizada*, *Cuidado e higiene rigurosa*, *Diseños adaptados a cada estilo*).
  - **Catálogo de 8 Servicios:**
    1. Manicura Clásica
    2. Esmaltado Semipermanente en Gel
    3. Uñas Acrílicas (Full Set)
    4. Soft Gel y Extensiones
    5. Pedicura Spa Relajante
    6. Nail Art y Diseños Personalizados
    7. Diseño y Perfilado de Cejas
    8. Lifting de Pestañas
    - Precios de referencia ilustrativos en **RD$**, duración estimada y botón directo *"Consultar por WhatsApp"* con el servicio precargado.
- **Sección 2 — Nuestros Trabajos (Galería Interactiva):**
  - Galería con 10 fotografías de alta resolución.
  - Filtros por categoría: *Todas, Manicura, Uñas Acrílicas, Nail Art, Pedicura, Estética*.
  - **Lightbox Modal:** Visualizador ampliado con navegación mediante flechas/teclado y botón de consulta por diseño.
  - Llamado a la acción: *"¿Te gustaría un diseño como este? Escríbenos por WhatsApp"* y enlace al perfil de Instagram.
- **Sección 3 — Contacto y Solicitud de Citas:**
  - **Formulario Inteligente:** Nombre, teléfono/WhatsApp, servicio de interés, fecha preferida, franja horaria y notas opcionales.
  - **Validación del lado del cliente:** Al enviar, formatea un mensaje estructurado y abre WhatsApp con los datos completados.
  - **Aviso de transparencia:** Sin falsas promesas; se aclara que la confirmación se coordina manualmente vía WhatsApp.
  - **Información del Negocio:** Dirección en Santo Domingo Este, horarios de apertura, botón hacia Google Maps, teléfono y redes sociales.
  - **Acordeón de Preguntas Frecuentes (FAQ):** 8 respuestas claras sobre ubicación, horarios, citas, tarifas en RD$, higiene y métodos de pago.

---

## 🚀 Funcionalidades Incluidas del Plan Básico de QRMOON

1. **Chatbot Básico de Preguntas Frecuentes:**
   - Widget flotante interactivo sin consumo de APIs de IA ni costos recurrentes.
   - 6 preguntas preconfiguradas con respuestas instantáneas locales y derivación directa a WhatsApp.
2. **Tarjeta Digital de Contacto QRMOON (.vcf):**
   - Presentación de tarjeta virtual estilo smartphone.
   - Botón interactivo para descargar el archivo `.vcf` (vCard) y guardar el contacto directamente en el celular del cliente.
3. **Integración con Google Reviews:**
   - Modal demostrativo con código QR y enlace configurable al perfil de Google Business sin fabricar testimonios falsos.
4. **Botón Flotante de WhatsApp:**
   - Acceso permanente en la esquina inferior con indicador de disponibilidad.
5. **Preparación para Google Analytics:**
   - Soporte nativo para medición mediante la variable de entorno `NEXT_PUBLIC_GA_ID`.

---

## 📁 Archivo Centralizado de Configuración

Todos los datos editables del salón se encuentran en un único archivo:

📍 [`src/data/businessConfig.ts`](file:///c:/Users/asay2/source/repos/demos/centroDeUna/src/data/businessConfig.ts)

Desde allí puedes modificar en segundos:
- Nombre del salón, eslogan y descripción.
- Teléfono y número de WhatsApp (código de área de RD).
- Dirección en Santo Domingo Este y enlace de Google Maps.
- Horarios de atención para días de semana, sábados y domingos.
- Lista completa de servicios, precios en RD$, fotos y duraciones.
- Imágenes y descripciones de la galería de trabajos.
- Enlaces de redes sociales (Instagram y TikTok) y ficha de Google Reviews.
- Preguntas y respuestas del FAQ y del Chatbot.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 16 (App Router con Turbopack)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 con variables CSS temáticas
- **Iconografía:** Lucide React + Iconos SVG optimizados
- **Optimización de Imágenes:** `next/image` con Unsplash CDN configurado

---

## 💻 Instrucciones para Ejecutar en Local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en tu navegador:
   ```
   http://localhost:3000
   ```
4. Compilar para producción:
   ```bash
   npm run build
   ```
   y ejecutar:
   ```bash
   npm run start
   ```

---

Desarrollado como demostración de alto rendimiento para el **Plan Básico de QRMOON**.
