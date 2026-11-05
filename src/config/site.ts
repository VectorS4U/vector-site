/** Sitio público Vector — no confundir con vector_web (app CRM). */

export const site = {
  name: 'Vector',
  tagline: 'Sales Execution Platform',
  description:
    'Rutas, visitas, cotizaciones y seguimiento comercial en un solo sistema. Softland u Odoo conectados; simple de adoptar en campo.',
  locale: 'es',
  /**
   * Origen canónico (SEO). En build Astro también inyecta `import.meta.env.SITE`.
   * Project Pages: https://vectors4u.github.io — custom: https://vector.group4u.net
   */
  url:
    import.meta.env.SITE ??
    import.meta.env.SITE_URL ??
    'http://localhost:4321',
  /** App Angular — login del tenant. Override con PUBLIC_APP_URL en .env */
  appUrl: import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:4200',
  /**
   * Operador / empresa detrás del producto.
   * Marca comercial: S4U — Solutions for You (sitio group4u.net).
   */
  company: 'S4U',
  companyLegal: 'Solutions for You',
  companyTrade: 'Group4U',
  companyUrl: 'https://group4u.net',
  contactEmail: 'team@group4u.net',
  /**
   * WhatsApp comercial (solo dígitos con código país). Vacío = no mostrar CTA.
   * Override: PUBLIC_WHATSAPP_E164
   */
  whatsappE164: (import.meta.env.PUBLIC_WHATSAPP_E164 as string | undefined)?.replace(
    /\D/g,
    '',
  ) ?? '',
} as const;

export const nav = [
  { href: '/producto', label: 'Producto' },
  { href: '/contacto', label: 'Contacto' },
] as const;
