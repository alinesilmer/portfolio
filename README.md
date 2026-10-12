# Portfolio — Aliné Silva

Sitio estático de una sola página. Astro + TypeScript + CSS con tokens. Sin framework de UI, sin base de datos, sin backend.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor local con recarga |
| `npm run build` | Revisa tipos y genera `dist/` |
| `npm run preview` | Sirve `dist/` para probar el build |

## Estructura

```
src/
  data/          Contenido: site.ts (perfil, formación, stack), projects.ts, chapters.ts (color y pose por sección)
  sections/      Las cinco secciones de la página, en orden
  components/
    layout/      Chapter (sección de color), Worlds (capas de color), Header, Footer
    persona/     La ilustración que cae
    projects/    ProjectShelf + ProjectFile (los separadores con pestaña)
    overlays/    Splash y el diálogo del CV
    ui/          Button
  scripts/       Movimiento ligado al scroll: scroll-frame (bucle), persona, worlds, chapters (los conecta)
  lib/           Utilidades puras (math, media, links)
  styles/        tokens.css (colores, tipografía, espacios, motion) y base.css
  assets/        Imágenes que Astro optimiza
public/          Archivos servidos tal cual (CV, favicon, og.png, robots, cabeceras)
```

## Tareas comunes

- **Agregar un proyecto:** guardá la captura en `src/assets/projects/` y sumá una entrada en `src/data/projects.ts`. El orden del arreglo es el orden en pantalla. `role`, `stack` y `year` son opcionales.
- **Cambiar un color o una tipografía:** `src/styles/tokens.css`.
- **Cambiar el color de una sección o dónde aparece la persona:** `src/data/chapters.ts`.
- **Cambiar textos de perfil, formación o stack:** `src/data/site.ts`.
- **Reemplazar el CV:** `public/cv/aline-silva-cv.png` (descarga) y `src/assets/cv.png` (vista previa).

## Deploy

Cualquier hosting estático sirve (`dist/`). Definí la variable de entorno `SITE_URL` con el dominio final: alimenta las URLs canónicas, Open Graph y el sitemap.

Las cabeceras de seguridad están en `vercel.json` (Vercel) y `public/_headers` (Netlify, Cloudflare Pages). La política de contenido no permite scripts en línea; por eso el build deja todo el JS y el CSS en archivos.
