# Aurum — Augmented Reality Menu

A premium AR menu for a restaurant, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and `<model-viewer>`.

## How to run

```bash
npm run dev   # starts on port 5000
```

The **"Start application"** workflow runs this automatically.

## Stack

- **Next.js 14** (App Router, server components)
- **TypeScript + Tailwind CSS**
- **`@google/model-viewer`** — renders 3D GLB models with built-in AR button
- **framer-motion** — animations
- **next-themes** — dark/light mode
- **qrcode.react** — QR code for scanning on mobile

## Adding content

Drop files into `/public/` — no code changes needed:

| File pattern | Purpose |
|---|---|
| `public/models/<slug>.glb` | 3D model for AR viewer |
| `public/models/<slug>.usdz` | iOS Quick Look fallback |
| `public/images/<slug>.jpg` | Dish photo |

Current dish slugs: `chocolate-cake`, `grilled-sandwich`, `momos`, `pastry`, `zinger-burger`

The server checks for file existence at request time, so missing models/images degrade gracefully without a rebuild.

## Project structure

```
app/            Next.js App Router pages
components/     React components
data/dishes.ts  Menu content (single source of truth)
lib/            Server utilities (model file existence check)
public/         Static assets (images, 3D models)
types/          Shared TypeScript types
```

## User preferences

- Keep existing project structure and stack.
- Next.js runs on port 5000 (Replit webview requirement).
