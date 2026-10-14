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

### Opción A — URL de GitHub (por defecto)

Tras el primer deploy: `https://vectors4u.github.io/vector-site/`

1. Repo → **Settings → Pages → Source: GitHub Actions**
2. Push a `main` (workflow `.github/workflows/deploy.yml`)
3. Variables opcionales en **Settings → Secrets and variables → Actions → Variables**:
   - `SITE_URL` = `https://vectors4u.github.io`
   - `BASE_PATH` = `/vector-site/`
   - `PUBLIC_APP_URL` = URL real de la app

### Opción B — Subdominio (recomendado)

Ejemplo: `vector.group4u.net` en Pages; `group4u.net` sin tocar.

1. En el DNS de `group4u.net` (tu hosting/registrador):

   ```
   CNAME  vector  →  vectors4u.github.io
   ```

2. En el repo: **Settings → Pages → Custom domain** = `vector.group4u.net` (HTTPS)
3. Variables de Actions:

   | Variable | Valor |
   |----------|--------|
   | `SITE_URL` | `https://vector.group4u.net` |
   | `BASE_PATH` | `/` |
   | `PUBLIC_APP_URL` | URL de login de la app |

4. Opcional: archivo `public/CNAME` con una línea `vector.group4u.net` y rebuild.

Legal/apps: apuntar a `{SITE_URL}/legal/terms` (con project Pages incluye el prefijo `/vector-site` si aplica).

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
