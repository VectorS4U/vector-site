# Vector Site

Sitio público de **Vector** (marketing, SEO, demo). Separado de la app CRM en [`vector_web`](../vector_web).

| Proyecto | Rol | URL típica |
|----------|-----|------------|
| `vector_site` | Propaganda, contacto | `vector.app` |
| `vector_web` | Login + CRM | `app.vector.app` |
| `vector_api` | API | `api…` |

## Stack

- [Astro](https://astro.build) 7 — HTML estático
- [Tailwind CSS](https://tailwindcss.com) 4
- Salida: `dist/` → S3 + CloudFront (mismo patrón que `vector_web`)

## Desarrollo

```bash
cd vector_site
cp .env.example .env   # opcional: PUBLIC_APP_URL para CTAs
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Variables

| Variable | Uso |
|----------|-----|
| `SITE_URL` | URL canónica (build / SEO) |
| `PUBLIC_APP_URL` | Base de `vector_web` para “Iniciar sesión” |

## Build

```bash
npm run build
npm run preview
```

## Marca

Assets en `public/brand/` (copiados de `vector_web`). Tokens en `src/styles/global.css`:

- Verde `#10B981` — CTA
- Navy `#0F172A` — texto
- Plus Jakarta Sans

## Páginas (v1)

- `/` — Home
- `/producto` — Módulos
- `/contacto` — Demo / correo
