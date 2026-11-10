/** Sitio público Vector — no confundir con vector_web (app CRM). */

export const site = {
  name: 'Vector',
  tagline: 'Sales Execution Platform',
  description:
    'Rutas, visitas, cotizaciones y seguimiento comercial en un solo sistema. Integración con Softland u Odoo según el alcance acordado.',
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
  /**
   * Video demo 60–90 s (URL YouTube/Vimeo o archivo). Vacío = no mostrar bloque.
   * Override: PUBLIC_DEMO_VIDEO_URL
   */
  demoVideoUrl: (import.meta.env.PUBLIC_DEMO_VIDEO_URL as string | undefined)?.trim() ?? '',
  /** Google Analytics 4 — Measurement ID */
  gaMeasurementId: 'G-GWMEL656NY',
} as const;

/**
 * Testimonio del piloto. Completar cuando haya cita validada.
 * Mientras `quote` esté vacío, el sitio muestra un bloque honesto sin inventar nombres.
 */
export const pilotEvidence = {
  /** Ej.: «Usamos Vector para la ruta y el seguimiento del día.» */
  quote: '',
  /** Ej.: Gerente comercial · Operación piloto */
  attribution: '',
  /** Una línea de resultado medido, solo si está validado. */
  result: '',
} as const;

export const nav = [
  { href: '/producto', label: 'Producto' },
  { href: '/contacto', label: 'Contacto' },
] as const;
