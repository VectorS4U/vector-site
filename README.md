# Vector Site

Sitio público de **Vector** (marketing, SEO, demo). Separado de la app CRM en [`vector_web`](../vector_web).

| Proyecto | Rol | URL típica |
|----------|-----|------------|
| `vector_site` | Propaganda, contacto | GitHub Pages / subdominio |
| `vector_web` | Login + CRM | `app…` |
| `vector_api` | API | `api…` |
| [group4u.net](https://group4u.net) | Sitio empresa (hosting aparte) | No se mueve |

## Stack

- [Astro](https://astro.build) 7 — HTML **estático** (`output: 'static'`)
- [Tailwind CSS](https://tailwindcss.com) 4
- Deploy: **GitHub Pages** (Actions → `dist/`)

## Desarrollo

```bash
cd vector_site
cp .env.example .env
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321). En local puedes usar `BASE_PATH=/` para rutas sin prefijo.

## Variables

| Variable | Uso |
|----------|-----|
| `SITE_URL` | Origen canónico (SEO) |
| `BASE_PATH` | Prefijo de rutas (`/vector-site` en project Pages; `/` con dominio custom) |
| `PUBLIC_APP_URL` | Base de `vector_web` para “Iniciar sesión” |

## GitHub Pages (viable junto a tu hosting)

`group4u.net` puede seguir en tu hosting actual. Vector se publica aparte desde este repo (`VectorS4U/vector-site`).

### Deploy (GitHub Actions)

1. Repo → **Settings → Pages → Source: GitHub Actions**
2. Push a `main` (workflow `.github/workflows/deploy.yml`)
3. El workflow usa `configure-pages` para calcular solo `SITE_URL` / `BASE_PATH`:
   - Sin dominio custom → `https://vectors4u.github.io/vector-site/`
   - Con custom domain → raíz (`https://tu-dominio/`) y `BASE_PATH=/`

**Importante:** no dejes Variables de Actions viejas `SITE_URL` / `BASE_PATH` con `/vector-site/`
si ya configuraste dominio propio: rompen CSS e imágenes (HTML sin estilos).
Bórralas o deja solo `PUBLIC_APP_URL`.

### Dominio custom (ej. `vector.group4u.net`)

1. DNS: `CNAME vector → vectors4u.github.io`
2. Pages → **Custom domain** = `vector.group4u.net` + Enforce HTTPS
3. Re-run del workflow (el build tomará `BASE_PATH=/` solo)

Legal/apps: `{origen}/legal/terms/` (con project site sin custom domain incluye `/vector-site`).

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

- `/` — Home marketing (problema, pilares, roles, journey, cotización/Decisión, FAQ)
- `/producto` — Módulos ampliados + ERP / extras
- `/contacto` — Demo · `team@group4u.net` · [group4u.net](https://group4u.net)
- `/legal` — Índice
- `/legal/terms` — Términos de uso (Play Store / App Store / login)
- `/legal/privacy` — Política de privacidad

Las apps apuntan a `{SITE_URL}/legal/terms` y `{SITE_URL}/legal/privacy`
(`S4UCrm_movil` → `VectorBrand`; `vector_web` → `VECTOR_BRAND`).
