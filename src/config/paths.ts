/**
 * Prefijo de despliegue (p. ej. `/vector-site/` en GitHub Pages project site).
 * Con dominio custom y `BASE_PATH=/` queda `/`.
 *
 * Páginas llevan `/` final (GH Pages). Assets (`.webp`, `.svg`…) no.
 */
export function withBase(path = ''): string {
  let base = import.meta.env.BASE_URL || '/';
  if (!base.endsWith('/')) base += '/';
  if (!path || path === '/') return base;

  const clean = path.replace(/^\//, '');
  const isAsset = /\.[a-zA-Z0-9]+$/.test(clean);
  if (isAsset) return `${base}${clean}`;

  return `${base}${clean.replace(/\/$/, '')}/`;
}
