# Noah McClung

Personal site — an editorial publication built around one person. Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion + React Router.

## Structure

- `src/content/*` — data-driven content (site meta, work, writing, visuals, watch). Add entries here to expand the archive; the layout doesn't need to change.
- `src/components/editorial/*` — typographic/grid primitives (Kicker, Rule, Meta, Reveal, Grid).
- `src/components/layout/*` — chrome shared across routes (Masthead, fullscreen index menu, page transitions, footer, archive page template).
- `src/sections/*` — homepage sections, composed in `src/pages/Home.tsx`.
- `src/pages/*` — routed pages.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```
