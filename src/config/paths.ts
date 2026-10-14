/**
 * Prefijo de despliegue (p. ej. `/vector-site/` en GitHub Pages project site).
 * Con dominio custom y `BASE_PATH=/` queda `/`.
 */
export function withBase(path = ''): string {
  let base = import.meta.env.BASE_URL || '/';
  if (!base.endsWith('/')) base += '/';
  if (!path || path === '/') return base;
  return `${base}${path.replace(/^\//, '')}`;
}
