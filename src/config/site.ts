/** Sitio público Vector — no confundir con vector_web (app CRM). */

export const site = {
  name: 'Vector',
  tagline: 'Sales Execution Platform',
  description:
    'CRM comercial con campo, GPS, cotizaciones y conexión a tu ERP. Simple de adoptar; fuerte en visitas.',
  locale: 'es',
  /** URL canónica del marketing (producción). */
  url: import.meta.env.SITE_URL ?? 'https://vector.app',
  /** App Angular — login del tenant. Override con PUBLIC_APP_URL en .env */
  appUrl: import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:4200',
} as const;

export const nav = [
  { href: '/producto', label: 'Producto' },
  { href: '/contacto', label: 'Contacto' },
] as const;
