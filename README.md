# Fundación GADES

Sitio web oficial de la Fundación GADES - Centro de investigación y desarrollo en ciencias ambientales.

## 🌐 Sitio en vivo

- **Producción**: https://fundaciongades.pages.dev
- **Preview**: https://29572632.fundaciongades.pages.dev

## 🚀 Desarrollo local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📦 Stack tecnológico

- **Astro 5.2** - Framework web moderno
- **React 19** - Componentes interactivos
- **TailwindCSS 4** - Estilos utilitarios
- **Cloudflare Pages** - Hosting y deployment

## 🎨 Características

- ⚡ Rendimiento optimizado
- 📱 Diseño responsive
- ♿ Accesible (WCAG)
- 🎨 Paleta de colores profesional
- 📝 Contenido estructurado SEO-friendly

## 📂 Estructura del proyecto

```
/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Layouts de página
│   ├── pages/          # Páginas del sitio
│   ├── images/         # Imágenes y assets
│   └── styles/         # Estilos globales
├── public/             # Assets estáticos
└── astro.config.mjs    # Configuración de Astro
```

## 🔄 Deploy

El sitio se despliega automáticamente a Cloudflare Pages cuando se hace push a la rama `main`.

### Deploy manual

```bash
# Construir el proyecto
npm run build

# Deploy a Cloudflare Pages
wrangler pages deploy out --project-name=fundaciongades
```

## 📝 Licencia

© 2024 Fundación GADES. Todos los derechos reservados.
