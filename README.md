# Basalto Studio

Business-card site for a full-stack developer in Santo Domingo, República Dominicana.
The design borrows from Tadao Ando — concrete planes, a slit of light, a strict grid —
annotated like source code.

## Stack

- React 19 + TypeScript, built with Vite
- `react-router-dom` for the two secondary routes (`/privacidad`, 404)
- `react-hook-form` + `zod` for the contact form
- Plain CSS in `src/styles/ando.css` (design tokens, layout classes, responsive rules)
- `vite-plugin-sitemap` for `sitemap.xml`

## Scripts

```sh
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build into dist/
npm run preview  # serve the build
npm run lint
```

## Where things live

| What | Where |
|------|-------|
| All copy, contact details, services, project | `src/data/content.ts` |
| Section shell (sidebar, slit, heading) | `src/components/Section.tsx` |
| Design tokens, type scale, breakpoints | `src/styles/ando.css` |
| SEO tags, Open Graph, structured data | `index.html` |
| Static assets (logo, OG image, project screenshot) | `public/` |

## Notes

- The contact form has no backend: it composes a WhatsApp message (with an email
  fallback) that the visitor sends from their own app. Nothing is stored on the site.
- The testimonial section renders only when `testimonio.nombre` in the content file is
  filled in. An anonymous quote reads as a placeholder.
- Section numbers (`§ 01`, `§ 02`, …) are assigned in order in `src/App.tsx`.
- Hosting assumes SPA fallback to `index.html` for `/privacidad` and unknown routes
  (Cloudflare Pages does this by default).
