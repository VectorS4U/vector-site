# Capturas de marketing

Archivos servidos (WebP):

| Archivo | Uso |
|---------|-----|
| `hero-tracking.webp` | Hero home (mapa / flota) |
| `hero-decision.webp` | Decisión gerente |
| `hero-route.webp` | Home Campo asesor |
| `home-team.webp` | Home Equipo supervisor |
| `expediente-thread.webp` | Hilo del expediente |
| `expediente-perfil.webp` | Ficha + crédito ERP |
| `quote-composer.webp` | Cotizador (líneas, stock, versiones) |
| `mobile-login.webp` | App: login |
| `mobile-route.webp` | App: ruta del día (Hoy) |
| `mobile-clientes.webp` | App: listado clientes |
| `mobile-cotizar.webp` | App: cotizaciones |
| `mobile-expediente.webp` | App: ficha / hilo |
| `mobile-visita.webp` | App: detalle de visita + Llegué |

PNG originales → `_raw/` (ignorado por git). Para regenerar:

```bash
cd public/marketing
cwebp -q 82 -m 6 _raw/quote-composer.png -o quote-composer.webp
```
