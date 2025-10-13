# Diego Molina | Redes de Mercadeo

Sitio web personal y de negocios de Diego Molina, enfocado en redes de mercadeo, crecimiento personal y oportunidades de emprendimiento. El sitio es multilenguaje (Español y Portugués) y está construido con [Astro](https://astro.build/) y TailwindCSS.

## Estructura del Proyecto

```
.
├── public/                   # Archivos públicos (imágenes, scripts, favicon, etc.)
│   ├── logos/
│   ├── pageImages/
│   └── scripts/
├── src/
│   ├── components/           # Componentes Astro reutilizables
│   ├── i18n/                 # Utilidades y textos para internacionalización
│   ├── layouts/              # Layouts base
│   ├── pages/                # Páginas del sitio (ES y PT)
│   │   └── pt/               # Páginas en portugués
│   └── styles/               # Estilos globales
├── .astro/                   # Archivos generados por Astro
├── .vscode/                  # Configuración de VSCode
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

## Características

- **Multilenguaje:** Español y Portugués, con detección automática y cambio de idioma.
- **Diseño responsivo:** Usando TailwindCSS y fuentes Poppins.
- **Protección de páginas:** Algunas páginas requieren clave de acceso.
- **Formulario de contacto:** Envío por email y WhatsApp.
- **Componentes reutilizables:** Header, Footer, Hero, ButtonContact, etc.
- **SEO y metadatos sociales:** Etiquetas para Open Graph y Twitter.

## Scripts útiles

- `npm install` — Instala las dependencias.
- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza el sitio en producción.

## Cómo cambiar la clave de acceso

Edita la constante `CLAVE_ACCESO` en los archivos:
- [`public/scripts/accesoProtegido-v2.js`](public/scripts/accesoProtegido-v2.js)
- [`public/scripts/accesoProtegido-v2-pt.js`](public/scripts/accesoProtegido-v2-pt.js)

## Internacionalización

Las traducciones y textos están en [`src/i18n/ui.ts`](src/i18n/ui.ts). Para agregar o modificar textos, edita ese archivo.

## Créditos

Desarrollado por [GMG Tech](https://gmgtech.netlify.app) y por Ignacio Molina.

---
¿Dudas o sugerencias? [Contacta aquí](https://diegomolina.ar/contacto)