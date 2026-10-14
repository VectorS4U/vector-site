// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * En CI, `actions/configure-pages` define SITE_URL + BASE_PATH:
 * - dominio custom → BASE_PATH=/
 * - project site (…github.io/vector-site) → BASE_PATH=/vector-site/
 *
 * Local: raíz por defecto (sin prefijo).
 */
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const rawBase = process.env.BASE_PATH ?? '/';
const base =
  !rawBase || rawBase === '/'
    ? '/'
    : rawBase.replace(/\/?$/, '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  /** GitHub Pages sirve carpetas (`producto/index.html`); sin `/` final → 404. */
  trailingSlash: 'always',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
