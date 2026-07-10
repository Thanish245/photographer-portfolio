# Frame & Light

A React + Vite marketing/portfolio site for a photography studio: home, about, services, portfolio gallery, and a contact form.

## Stack

- React 19 + Vite (esbuild/rolldown)
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- No router library — a minimal custom pathname router (see [Architecture](#architecture))
- No backend — the contact form is wired to a swappable client-side service, currently backed by a local stub

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # eslint
```

Requires Node 18+.

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values for your deployment:

```bash
cp .env.example .env.local
```

| Variable | Purpose | Default |
| --- | --- | --- |
| `VITE_SITE_URL` | Canonical site URL, used in SEO tags (`useSeo`), sitemap, and JSON-LD | `https://www.frameandlight.studio` |
| `VITE_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY` | EmailJS credentials, if you wire EmailJS as the contact provider | unset |
| `VITE_RESEND_API_KEY` | Resend API key, if you wire Resend as the contact provider | unset |

Only variables prefixed `VITE_` are exposed to client code (this is a Vite convention, not optional). `.env.local` is git-ignored.

## Folder structure

```
public/                    Static files served as-is: favicon, robots.txt, sitemap.xml, og-image.jpg
src/
  assets/images/           Local, Vite-bundled photography assets (hashed at build time)
  components/
    layout/                AppShell, SiteHeader, PageHeader, PageLoader, ErrorBoundary
    sections/
      home/                Homepage-specific sections (also reused by inner pages, e.g. ContactCtaSection)
      portfolio/            PortfolioGallery (filterable masonry grid + lightbox)
    ui/                     Reusable primitives: Button, Card, Container, Input, Textarea, ImageFrame,
                             Reveal, SkeletonCard, AppLink, SkipLink
  config/
    env.js                 Reads import.meta.env, exposes typed config with defaults
  data/                     Plain JS content modules (no CMS) — one file per content area
  hooks/                    usePathname, useSeo, usePrefersReducedMotion, useContactForm
  pages/                    One component per route, composed from layout + section + ui components
  services/
    contactService.js       submitContactForm() + setContactFormProvider() swap point
  utils/
    cn.js                   Tiny classnames joiner (no clsx/tailwind-merge dependency)
    logger.js                Single logging choke point (dev-only info, always-on warn/error)
  App.jsx                   Route table (lazy-loaded pages) + Suspense + scroll-to-top on navigate
  main.jsx                  React root, wrapped in ErrorBoundary
  index.css                 Tailwind v4 entry, `@theme` tokens, base layer, custom keyframes
```

## Architecture

**Routing.** There is no `react-router`. `src/hooks/usePathname.js` tracks `window.location.pathname` and exposes `navigateTo(path)`, which does `history.pushState` + a synthetic `popstate` event. `src/components/ui/AppLink.jsx` intercepts left-clicks on internal `href`s and calls `navigateTo` instead of a full page load. `App.jsx` holds a flat `routeMap` (no nested routes, no params) and renders each page behind `React.lazy` + `Suspense` for automatic code splitting per route.

**Design system.** Tailwind v4's CSS-first config lives entirely in `src/index.css` (`@theme` block + `:root` custom properties for colors/radii/shadows) — there is no separate `tailwind.config.js` and no parallel JS token file. Components use Tailwind utility classes directly. Reusable primitives live in `src/components/ui/`; layout scaffolding (header, page hero, app shell, loading/error fallbacks) lives in `src/components/layout/`.

**Data layer.** `src/data/*.js` are plain exported objects/arrays — no CMS, no fetch layer. Pages import what they need directly. Images referenced from data files are imported as ES modules from `src/assets/images/`, so Vite fingerprints and hashes them at build time rather than the app depending on a third-party image CDN at runtime.

**Contact form.** `src/hooks/useContactForm.js` is a controlled-form hook (validation, submit states, a honeypot field) that calls `src/services/contactService.js`. That service exposes `submitContactForm()` and `setContactFormProvider(fn)` — the only integration point needed to wire in EmailJS, Resend, or a real backend endpoint. Until a provider is set, submissions resolve against a local stub that logs to the console and never sends real email. A client-side minimum-submit-interval guard is a placeholder only; a real deployment must also rate-limit server-side.

**SEO.** Because this is a client-side-only app (no SSR/prerendering), `index.html` carries a static baseline of meta description, canonical, Open Graph, Twitter Card tags, and a `ProfessionalService` JSON-LD block — this is what non-JS crawlers and social-preview bots see regardless of route. `src/hooks/useSeo.js` then updates title/description/canonical/OG tags per route at runtime for browsers and JS-executing crawlers (progressive enhancement, not a replacement for the static baseline).

**Error handling.** A top-level `ErrorBoundary` (`src/components/layout/ErrorBoundary.jsx`) wraps the whole app in `main.jsx` and renders a branded fallback (reusing `Card`/`Button`) instead of a blank page if a render error escapes a page component.

## Deployment

This is a static site after `npm run build` — the `dist/` folder can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, S3+CloudFront, GitHub Pages, etc.).

1. Set real values for the environment variables above (`VITE_SITE_URL` at minimum) at build time — Vite inlines them into the bundle, so they must be present when you run `npm run build`, not just at runtime.
2. Update `public/robots.txt`, `public/sitemap.xml`, and the canonical/OG URLs in `index.html` if the production domain differs from the `frameandlight.studio` placeholder used throughout.
3. Because routing is client-side only, configure your host to rewrite all paths to `index.html` (SPA fallback) — e.g. Netlify's `_redirects` with `/* /index.html 200`, or Vercel's default SPA rewrite.
4. Run `npm run build && npm run preview` locally to smoke-test the production bundle before deploying.

## Known limitations / recommended follow-ups

- **No SSR/prerendering.** OG/Twitter previews and non-JS crawlers only see the static tags baked into `index.html`, not per-page metadata. If server-rendered previews per route matter, consider prerendering (e.g. `vite-plugin-ssr`, Astro, or a prerender service) — out of scope for this pass.
- **Contact form has no real backend yet.** `setContactFormProvider()` is the integration point; wire EmailJS/Resend/a serverless function and set the corresponding `VITE_*` env vars.
- **Rate limiting is client-side only.** The 15s submit guard in `contactService.js` is a placeholder; add real rate limiting at the edge/server once a backend exists.
- **Per-project detail pages** were considered but not built (the brief marked this optional) — `portfolioItems` already has enough shape (`id`, `title`, `summary`, etc.) to back individual routes like `/portfolio/:id` later without a data migration.
