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

PNG originales → `_raw/` (ignorado por git). Para regenerar:

```bash
cd public/marketing
cwebp -q 82 -m 6 _raw/quote-composer.png -o quote-composer.webp
```
