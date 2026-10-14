/** Sitio público Vector — no confundir con vector_web (app CRM). */

export const site = {
  name: 'Vector',
  tagline: 'Sales Execution Platform',
  description:
    'CRM comercial con campo, GPS, cotizaciones y Decisión gerencial. Simple de adoptar; fuerte en visitas.',
  locale: 'es',
  /**
   * Origen canónico (SEO). En build Astro también inyecta `import.meta.env.SITE`.
   * Project Pages: https://vectors4u.github.io — custom: https://vector.group4u.net
   */
  url:
    import.meta.env.SITE ??
    import.meta.env.SITE_URL ??
    'https://vectors4u.github.io',
  /** App Angular — login del tenant. Override con PUBLIC_APP_URL en .env */
  appUrl: import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:4200',
  /** Operador / empresa. */
  company: 'Group4U',
  companyUrl: 'https://group4u.net',
  contactEmail: 'team@group4u.net',
} as const;

export const nav = [
  { href: '/producto', label: 'Producto' },
  { href: '/contacto', label: 'Contacto' },
] as const;
