// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * GitHub Pages (repo VectorS4U/vector-site):
 *   SITE_URL=https://vectors4u.github.io  BASE_PATH=/vector-site
 * Dominio propio (recomendado, p. ej. vector.group4u.net):
 *   SITE_URL=https://vector.group4u.net  BASE_PATH=/
 */
const site = process.env.SITE_URL ?? 'https://vectors4u.github.io';
/** Astro normaliza; preferir con barra final en project Pages. */
const rawBase = process.env.BASE_PATH ?? '/vector-site';
const base = rawBase === '/' ? '/' : rawBase.replace(/\/?$/, '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
