# ZENIA AI

## Descripción
Landing page moderna y responsive para ZENIA AI, empresa especializada en servicios de desarrollo e implementación de sistemas de inteligencia artificial para el sector público y privado. Contamos con ingenieros y profesionales del derecho para desarrollar e implementar soluciones innovadoras.

## Características
- **Diseño moderno y responsive**: Optimizado para todos los dispositivos
- **Metodología BEM**: CSS organizado con bloques modulares
- **Glassmorphism**: Efectos de vidrio esmerilado modernos
- **Video background**: Hero section con video de fondo
- **Animaciones fluidas**: Transiciones y efectos de aparición
- **Tarjetas interactivas**: Flip cards para los pilares del negocio
- **Header fijo**: Navegación siempre visible con efecto blur
- **Optimizado para SEO**: Meta tags completos y Open Graph
- **Indicadores de scroll**: Chevrones animados con glassmorphism
- **Formulario funcional**: Integrado con Netlify para contacto
- **Accesible**: Diseño inclusivo y navegable por teclado
- **Tema personalizado**: Colores teal que combinan con el logo

## Estructura del proyecto
```
zenia-ai/
├── index.html          # Página principal con todos los componentes
├── styles/
│   ├── style.css      # CSS principal con imports
│   └── blocks/        # Bloques CSS modulares
│       ├── reset.css       # Reset de estilos base
│       ├── variables.css   # Variables CSS (colores teal, espaciado)
│       ├── utilities.css   # Clases utilitarias
│       ├── header.css     # Header fijo con glassmorphism
│       ├── hero.css       # Hero con video y logo
│       ├── services.css   # Servicios con flip cards
│       ├── about.css      # Sección acerca de
│       ├── contact.css    # Formulario de contacto
│       ├── footer.css     # Footer con enlaces
│       └── responsive.css # Media queries responsive
├── scripts/
│   └── main.js        # JavaScript para interactividad
├── images/            # Recursos gráficos
│   ├── logo.png       # Logo principal de ZENIA AI
│   └── favicon.png    # Favicon del sitio
├── videos/            # Contenido multimedia
│   ├── video-zenia.mp4  # Video de fondo del hero
│   └── video-zenia.webm # Video de fondo (formato alternativo)
└── README.md         # Documentación del proyecto
```

## Secciones del sitio

### 🏠 Hero Section
- Video de fondo con loop automático
- Logo de ZENIA AI como elemento principal
- Contenedor con glassmorphism
- Botón de call-to-action
- Diseño completamente responsive

### 🛠️ Servicios
- **Retos de las instituciones**: Problemas que resolvemos
- **Servicios ofrecidos**: 8 servicios principales con iconos
- **Pilares**: 3 flip cards interactivas (Funcionalidad, Seguridad, Cumplimiento)
- **Proceso de implementación**: Timeline de 6 pasos
- **Beneficios**: Ventajas de nuestros servicios

### 👥 Acerca de
- Información de la empresa
- Características destacadas
- Logo integrado

### 📞 Contacto
- Formulario funcional con Netlify
- Información de contacto completa
- Enlaces a WhatsApp
- Protección anti-spam

## Características técnicas

### 🎨 Glassmorphism
Efectos de vidrio esmerilado aplicados en:
- Header fijo con backdrop-filter
- Contenedor del hero
- Tarjetas de servicios
- Indicadores de scroll

### 🔄 Interactividad
- **Flip cards**: Tarjetas que se voltean al hacer clic
- **Scroll indicators**: Chevrones que aparecen cuando hay contenido scrolleable
- **Animaciones**: Fade-in desde abajo con delays escalonados
- **Menu responsive**: Hamburger menu para móviles
- **Video interactivo**: Reproducción en loop con control por JavaScript

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints optimizados para todos los dispositivos
- Navegación adaptativa
- Contenido flexible

### 🎯 SEO y Social Media
- Meta tags completos
- Open Graph para Facebook
- Twitter Cards
- Favicon personalizado
- URLs canónicas
- Structured data ready

## Configuración de colores
- **Primario**: #2dc7bb (Teal principal, matching logo)
- **Secundario**: #1a9d95 (Teal oscuro)
- **Glassmorphism**: rgba(255, 255, 255, 0.1) con backdrop-filter
- **Texto**: Blanco para contraste sobre fondos oscuros
- **Acentos**: Gradientes y sombras en tonos teal

## Metodología BEM
El proyecto utiliza BEM (Block Element Modifier) para organización CSS:

- **Bloques**: header, hero, services, about, contact, footer
- **Elementos**: header__logo, hero__button, services__pillar, etc.
- **Modificadores**: hero__button--primary, services__pillar--flip

## Tecnologías utilizadas
- **HTML5**: Semántico y accesible
- **CSS3**: Variables personalizadas, Flexbox, Grid
- **JavaScript ES6+**: Módulos, async/await, event delegation
- **Fuentes**: Inter de Google Fonts
- **Video**: MP4 y WebM para compatibilidad
- **Netlify**: Hosting y formularios

## Instrucciones de desarrollo

### Configuración inicial
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador o usa un servidor local
3. Para desarrollo activo, usa Live Server en VS Code

### Estructura de archivos
- **index.html**: Página principal con todas las secciones
- **styles/blocks/**: CSS modular por componente
- **scripts/main.js**: Lógica de interacción
- **images/**: Logo y recursos gráficos
- **videos/**: Video de fondo del hero

### Personalización

#### Colores
Modifica las variables en `styles/blocks/variables.css`:
```css
:root {
  --primary-color: #2dc7bb;
  --secondary-color: #1a9d95;
  /* ... más variables */
}
```

#### Contenido
- **Servicios**: Edita las tarjetas en la sección services
- **Pilares**: Modifica el contenido de las flip cards
- **Contacto**: Actualiza información y enlaces

#### Estilos
- **Glassmorphism**: Ajusta opacity y blur en cada componente
- **Animaciones**: Modifica delays y durations en main.js
- **Responsive**: Actualiza breakpoints en responsive.css

## Deployment

### Netlify (Recomendado)
1. Conecta tu repositorio a Netlify
2. El formulario de contacto funcionará automáticamente
3. Configura el dominio personalizado

### Otros hostings
1. Sube todos los archivos manteniendo la estructura
2. Para el formulario, considera servicios como Formspree o EmailJS

## Características de accesibilidad
- ✅ Navegación por teclado
- ✅ ARIA labels en elementos interactivos
- ✅ Contraste de colores adecuado
- ✅ Texto alternativo en imágenes
- ✅ Estructura semántica HTML5
- ⏳ Pendiente: Focus management en flip cards

## Performance
- ✅ CSS organizado y minificable
- ✅ JavaScript modular
- ✅ Imágenes optimizadas
- ✅ Video con múltiples formatos
- ✅ Lazy loading ready

## Soporte de navegadores
- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11: No soportado (backdrop-filter)
