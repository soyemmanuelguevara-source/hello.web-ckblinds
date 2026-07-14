# CK Blinds Baja — Landing Page | Informe de Proyecto para Desarrollador

> Este documento es el **brief oficial** para el desarrollo de la landing page de **CK Blinds Baja**. Contiene toda la información de marca, negocio, contenido y requisitos técnicos/visuales necesarios para iterar sobre la plantilla HTML base junto con Claude hasta alcanzar el resultado final.

---

## 0. Resumen del proyecto

Se debe construir una **landing page de una sola página (one-page)**, partiendo de una plantilla HTML base ya entregada al desarrollador (junto con un prompt inicial). El desarrollador **trabajará iterando con Claude** dentro del proyecto para ir ajustando esa plantilla a las necesidades específicas de este negocio hasta lograr el resultado deseado.

**No hay límite de iteraciones** — se puede seguir dando instrucciones a Claude (estilo, textos, secciones, animaciones, ajustes de color, etc.) las veces que sea necesario hasta que el sitio cumpla con el estándar de calidad descrito en este documento.

---

## 1. Información del negocio

| Campo | Detalle |
|---|---|
| **Nombre del negocio** | CK Blinds Baja |
| **Giro / Rubro** | Persianas, toldos y cortinas a medida (decoración e interiorismo para el hogar) |
| **Slogan / Tagline** | "Tú hogar, el lugar más importante, decóralo con lo mejor" |
| **Ubicación** | Baja California Sur, México |
| **Teléfono** | 612 120 7743 / +52 1 612 120 7743 |
| **Correo electrónico** | ckblinds@yahoo.com |
| **Facebook** | https://www.facebook.com/share/1BJ5E8hhB2/ |
| **Catálogo de WhatsApp** | https://wa.me/c/5216121207743 |
| **WhatsApp directo (chat/CTA botón)** | https://wa.me/5216121207743 |

### Descripción del negocio (texto original del cliente, vía Facebook)

> Lindas persianas para tu hogar 😍
> ✳️ 3 meses sin intereses con 💳
> ✳️ Telas elegantes, divinos colores en sheer elegance, enrollables, traslúcidas y black out.
> Diseñamos tus cortinas y te asesoramos para escoger la mejor opción 🤗
> ✳️ Agenda tu cita para que cheques nuestro muestrario.
> ✳️ Nosotros vamos sin costo alguno y sin compromiso.
> ✳️ Haz tu cita o envía un mensaje de WhatsApp al 📲 612 120 7743.
> Tu hogar, el lugar más importante, decóralo con lo mejor 🏠

### Servicios / productos a destacar

- **Persianas enrollables**
- **Sheer Elegance** (persianas de tela translúcida elegante)
- **Persianas traslúcidas**
- **Black Out** (bloqueo total de luz)
- **Toldos**
- **Cortinas a la medida** (diseño y asesoría personalizada)

### Propuesta de valor / diferenciadores (usar en secciones de "Por qué elegirnos")

- Asesoría personalizada de diseño para elegir la mejor opción de tela y color.
- Visita a domicilio **sin costo y sin compromiso** para mostrar el muestrario.
- Promoción de **3 meses sin intereses** con tarjeta de crédito.
- Agendamiento de citas fácil vía WhatsApp.
- Atención local en Baja California Sur.

### Llamados a la acción (CTAs) sugeridos

- "Agenda tu cita gratis"
- "Solicita tu visita sin costo"
- "Cotiza por WhatsApp"
- "Conoce nuestro catálogo"

---

## 2. Identidad de marca (Branding)

El único activo de marca entregado por el cliente es el **logotipo**, ubicado en `imagenes/logo.jpeg`. A partir de este logo se derivó la siguiente identidad visual:

### Descripción del logo

- Ícono geométrico en forma de **"K"** construido con formas tipo flecha/chevron, con degradado de azul cian (arriba) a azul marino profundo (abajo).
- Tipografía del nombre "**Ck Blinds Baja**" en bold, sans-serif moderna, color azul brillante.
- Subtítulo "**Persianas y Toldos**" en la misma familia tipográfica, tamaño menor.
- Fondo **negro sólido**.

### Paleta de colores (extraída del logo)

> ⚠️ Los códigos HEX abajo son una aproximación visual extraída del logo. Se recomienda que el desarrollador/Claude verifique y ajuste los tonos exactos con un color picker una vez que el logo esté procesado (ver sección 4).

| Color | HEX aprox. | Uso sugerido |
|---|---|---|
| 🔵 Azul cian (claro) | `#1CADE4` | Acentos, hover states, degradados, íconos |
| 🔷 Azul marino profundo | `#0B2545` | Fondos secundarios, degradados, footer |
| 🔹 Azul medio (texto logo) | `#2196F3` | Botones CTA, links, títulos destacados |
| ⚫ Negro | `#0A0A0A` | Fondo principal / secciones dark (estética premium) |
| ⚪ Blanco | `#FFFFFF` | Texto sobre fondo oscuro, espacios en blanco |
| ◻️ Gris muy claro | `#F5F7FA` | Fondos de secciones alternas sobre fondo claro |

**Sugerencia de uso:** dado que el logo ya vive naturalmente sobre fondo negro con degradado azul, esto encaja perfectamente con el estilo **dark mode / high-tech premium** solicitado (ver sección 5). Se recomienda usar negro/azul marino como base y el azul cian como color de acento/energía en botones, líneas, íconos y efectos hover.

### Tipografía sugerida

Una tipografía sans-serif geométrica y moderna, con buen peso en bold para títulos (similar al estilo del logo) combinada con una sans-serif más ligera para cuerpo de texto. Ejemplos: **Poppins, Montserrat, Sora, Space Grotesk** o similar — elegir la que mejor transmita la sensación "big tech / elegante / minimal".

---

## 3. ⚠️ MUY IMPORTANTE — Origen de las imágenes

**El cliente NO proporcionó fotografías del negocio, productos instalados, ni banco de imágenes.** La única imagen entregada es el logotipo (`imagenes/logo.jpeg`).

**El desarrollador deberá obtener todas las imágenes necesarias para la landing page (fotos de persianas, toldos, cortinas instaladas, ambientes, catálogo de telas, etc.) directamente de:**

1. **Facebook del cliente:** https://www.facebook.com/share/1BJ5E8hhB2/
2. **Catálogo de WhatsApp del cliente:** https://wa.me/c/5216121207743

### Consideraciones al extraer estas imágenes

- Descargar únicamente imágenes reales del negocio (productos, instalaciones, muestrario) publicadas en estos dos canales — no se debe usar contenido de terceros.
- Revisar resolución y calidad: si alguna imagen tiene baja calidad (comprensión típica de WhatsApp/Facebook), se debe optimizar (recorte, mejora de nitidez/brillo, compresión para web) para mantener el estándar visual premium del sitio.
- Mantener consistencia visual entre las imágenes seleccionadas (misma proporción de aspecto, tono de color similar, iluminación) para que la galería/hero se vea cohesiva y profesional.
- Si el catálogo o Facebook no cuentan con suficientes imágenes de buena calidad para alguna sección (ej. hero principal), se puede complementar temporalmente con fotografía de stock de alta calidad relacionada con persianas/cortinas/interiorismo — dejarlo claramente señalado como *placeholder* para que el cliente lo sustituya después por fotos reales.
- Optimizar todas las imágenes para web (formato moderno tipo WebP, compresión, lazy loading) sin sacrificar la calidad visual premium.

---

## 4. Procesamiento del logo

El archivo `imagenes/logo.jpeg` tiene **fondo negro sólido incluido en la imagen** (no es transparente).

**Tarea obligatoria:** remover el fondo del logo (quitar el negro) para obtener una versión con **fondo transparente (PNG)**, de forma que el logo se pueda colocar correctamente sobre cualquier fondo (header, footer, pantalla de carga, favicon, etc.) sin mostrar el recuadro negro original.

- Generar al menos una versión: logo en PNG con fondo transparente, alta resolución.
- Usar esta versión transparente en: navbar/header, pantalla de carga (loading screen), footer y favicon.
- Si se requiere una variante del logo para fondos claros (ej. una versión en negro/azul marino sólido para usar sobre fondo blanco), se puede generar también, ya que el logo original está pensado para fondo oscuro.

---

## 5. Estilo y dirección de diseño

La landing page debe transmitir una imagen de marca **premium, corporativa y de nivel "big tech"**, manteniendo a la vez un enfoque **minimalista y elegante**. Referencia de sensación: sitios de tecnología de alta gama, limpios, con mucho espacio en blanco/negro, tipografía cuidada y motion design sutil pero impactante.

**Checklist de estilo:**

- [ ] Diseño **minimalista**, con jerarquía visual clara y espaciado generoso.
- [ ] Estética **premium / enterprise / corporativa** — nada de plantillas genéricas o "cheap".
- [ ] Uso de la paleta de marca (negro, azul marino, azul cian) como base visual, aprovechando el estilo dark/high-tech que ya sugiere el logo.
- [ ] Tipografía moderna y consistente en todo el sitio.
- [ ] Responsive — debe verse impecable en mobile, tablet y desktop.

---

## 6. Requisitos funcionales y de animación

### 6.1 Pantalla de carga (Loading Screen)

- Implementar una **pantalla de carga inicial** que se muestra antes de cargar el sitio.
- Debe incluir un **spinner/loader animado** junto con el **logo del negocio** (versión con fondo transparente, ver sección 4) en el centro.
- Transición suave (fade out) hacia el contenido principal una vez cargado.

### 6.2 Animaciones al hacer scroll

- Agregar **animaciones de scroll** (fade-in, slide-up, reveal, etc.) para las distintas secciones de la página conforme el usuario va bajando.
- Las animaciones deben sentirse sutiles y elegantes, no exageradas — acordes al estilo premium/minimal.

### 6.3 Efectos en el título del Hero

En la sección principal (Hero), el título debe incluir efectos visuales llamativos pero elegantes, por ejemplo:

- **Efecto de máquina de escribir (typewriter effect)** en el texto del título.
- **Cambio de color en las letras** (animación de color/gradiente en el texto, letra por letra o en todo el título).
- Se anima al desarrollador/Claude a explorar variaciones de estos efectos (o combinarlos) hasta lograr un resultado que se vea de alta gama y no recargado.

---

## 7. Flujo de trabajo sugerido con Claude

Este proyecto está diseñado para desarrollarse **iterando con Claude** sobre la plantilla base HTML ya entregada. El desarrollador puede (y debe) dar instrucciones sucesivas a Claude para ir ajustando el sitio hasta el resultado deseado. Sugerencia de orden de trabajo:

1. Adaptar la plantilla base con la información de marca y contenido de este documento (secciones 1 y 2).
2. Aplicar la paleta de colores y tipografía de marca en todo el sitio.
3. Remover el fondo del logo y aplicar la versión transparente en header/footer/loading screen.
4. Extraer y optimizar imágenes reales desde Facebook y el catálogo de WhatsApp del cliente (sección 3), e integrarlas en hero, galería/servicios y testimonios si aplica.
5. Implementar la pantalla de carga con spinner + logo.
6. Implementar animaciones de scroll en las secciones.
7. Implementar los efectos del título del Hero (typewriter + cambio de color).
8. Revisar responsividad y pulir detalles finales (spacing, contraste, velocidad de animaciones, performance).
9. Iterar con Claude tantas veces como sea necesario en cualquiera de los pasos anteriores hasta cumplir el estándar premium/enterprise solicitado.

---

## 8. Checklist final antes de entrega

- [ ] Información de negocio y contacto correcta (teléfono, correo, WhatsApp, ubicación).
- [ ] Botones de CTA funcionando (WhatsApp directo, llamada, formulario si aplica).
- [ ] Paleta de colores de marca aplicada consistentemente.
- [ ] Logo con fondo transparente usado correctamente en todas las ubicaciones.
- [ ] Imágenes reales del negocio obtenidas de Facebook/WhatsApp, optimizadas para web.
- [ ] Pantalla de carga con spinner + logo implementada.
- [ ] Animaciones de scroll funcionando en todas las secciones.
- [ ] Efectos de typewriter y cambio de color en el título del Hero.
- [ ] Sitio 100% responsive (mobile, tablet, desktop).
- [ ] Estilo visual final: premium, corporativo, high-tech, elegante y minimalista.

---

## 9. Estructura de archivos del repositorio

```
ck-blinds/
├── README.md          ← este documento (brief del proyecto)
└── imagenes/
    └── logo.jpeg       ← logo original del negocio (fondo negro, requiere remoción de fondo)
```
