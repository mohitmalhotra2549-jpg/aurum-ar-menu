# Aurum — Augmented Reality Menu

A premium, Apple-level AR menu for a 5-dish restaurant, built with Next.js
(App Router), TypeScript, Tailwind CSS and `<model-viewer>`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The homepage links to `/menu`, the AR menu
itself.

To try AR on a phone during development, expose your dev server over HTTPS
(e.g. `npx localtunnel --port 3000` or deploy to Vercel) — both WebXR and
iOS Quick Look require a secure context.

## Adding your real 3D models — the only step left

Nothing in the code needs to change. Just drop files into:

```
/public/models/chocolate-cake.glb   (+ optional chocolate-cake.usdz)
/public/models/grilled-sandwich.glb (+ optional grilled-sandwich.usdz)
/public/models/momos.glb            (+ optional momos.usdz)
/public/models/pastry.glb           (+ optional pastry.usdz)
/public/models/zinger-burger.glb    (+ optional zinger-burger.usdz)
```

See `/public/models/README.md` for details. Until a file is present, that
dish shows "3D model not available." instead of a broken viewer — checked
live on the server, so no rebuild is needed.

Dish photography works the same way in `/public/images/*.jpg` — see
`/public/images/README.md`.

## How AR is wired up

- `<model-viewer>` (`@google/model-viewer`) renders the GLB and exposes a
  built-in AR button (`slot="ar-button"`).
- `ar-modes="webxr scene-viewer quick-look"` tells it to try, in order:
  WebXR (Android Chrome), Google Scene Viewer (Android fallback), and
  Quick Look (iOS, using the `.usdz` if present).
- `camera-controls` + `auto-rotate` give free rotate/zoom/scale before
  entering AR; once placed on a real surface, native OS gestures handle
  scale/rotate/move.
- `ar-scale="auto"` and `ar-placement="floor"` let it size and sit
  naturally on a table via the phone camera.

## Project structure

```
app/
  page.tsx            Homepage (logo, welcome, "View AR Menu")
  menu/page.tsx        Server component — checks /public/models on disk
  loading.tsx          Route-level loading animation
components/
  Hero.tsx             Homepage hero
  MenuClient.tsx        Search + filter + grid + modal state
  DishCard.tsx          Single dish card
  DishModal.tsx          Full dish detail with AR viewer
  ARViewer.tsx           <model-viewer> wrapper + "not available" fallback
  ReticleFrame.tsx        Signature AR-viewfinder motif
  ThemeToggle.tsx, ThemeProvider.tsx   Dark/Light mode
  SearchBar.tsx, CategoryFilter.tsx, VegBadge.tsx
  QRCodeButton.tsx        Scan-to-open QR code
  ContactSection.tsx       Footer with restaurant details
data/dishes.ts           Single source of truth for menu content
lib/models.server.ts      Server-side existence check for GLB/USDZ files
types/dish.ts             Shared TypeScript types
```

## Design notes

Palette: obsidian/espresso dark surfaces with a brass accent (the AR
reticle motif), ivory/parchment for light mode, sage/burgundy for veg
badges. Display type is Fraunces (serif, restrained), body is Inter, and
prices/prep-times use IBM Plex Mono for a menu-ticket feel.
