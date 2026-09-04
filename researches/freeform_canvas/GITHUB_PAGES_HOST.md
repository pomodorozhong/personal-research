# Implementation plan: file-hosted Excalidraw boards on GitHub Pages

Copy this file into the new repo as `docs/IMPLEMENTATION.md` (or keep it here as the spec). It is a build plan, not the app.

**Decision already made:** Excalidraw (MIT), static GitHub Pages, hash routes.

Target URL:

```
https://pomodorozhong.github.io/freeform/#/moodboard
```

Adding a board = committing `canvases/moodboard.excalidraw` (or `.json`) and pushing. Pages rebuilds; the hash route starts working.

Related notes in this research folder: library comparison (`README.md`) and the bake-off demo (`demo/`).

---

## 0. Goal and non-goals

### Goal

A public site that is a **folder of Excalidraw documents**. Git is the database. GitHub Pages is the viewer.

| You do | The site does |
|---|---|
| Add `canvases/<slug>.excalidraw` and push | Serve `#/<slug>` with that scene |
| Draw locally / on excalidraw.com, download JSON | Load it via `fetch` + `initialData` / `loadFromBlob` |
| Commit an updated file | Next deploy shows the new scene |

### Non-goals (v1)

- Multiplayer / live cursors
- Saving from the browser **back into git** (needs GitHub API + a token; see §10)
- tldraw (production license on `*.github.io`)
- Konva / Fabric / Pixi as board formats
- Pretty path `/moodboard` without a hash (Pages has no rewrite API; hash is the point)

### Source of truth

The committed file wins. Do **not** treat `localStorage` as the published board. Optional later: a “local draft” banner that does not overwrite the fetched file.

---

## 1. URL and repo shape

GitHub **project** Pages for repo `freeform` under user `pomodorozhong`:

| Piece | Value |
|---|---|
| Repo | `pomodorozhong/freeform` |
| Pages URL | `https://pomodorozhong.github.io/freeform/` |
| Vite `base` | `/freeform/` |
| Router | `HashRouter` |
| Home | `.../freeform/#/` |
| Board | `.../freeform/#/moodboard` |
| Nested (optional v1.1) | `canvases/travel/japan.excalidraw` → `#/travel/japan` |

`https://pomodorozhong.github.io/freeform.moodboard` would mean a **repo named** `freeform.moodboard`. Do not use that. Slug lives after `#/`.

If you later use a user site (`pomodorozhong.github.io` as the repo), set `base: '/'`. Keep `base` in one env/config so you only change it once.

---

## 2. Architecture

```
                    git push
canvases/*.excalidraw  ──►  GitHub Actions  ──►  dist/  ──►  GitHub Pages
                              │
                              ├─ npm ci && npm run build
                              ├─ glob canvases → manifest.json
                              └─ copy canvases + fonts into dist

Browser:
  #/moodboard
    → HashRouter param slug = "moodboard"
    → GET  {base}canvases/moodboard.excalidraw
    → restore / initialData
    → <Excalidraw />
```

One SPA. Zero per-board HTML files. The only “index” of boards is a **manifest generated at build** from the folder (so adding a file is enough; you do not hand-edit routes).

Runtime listing via GitHub Contents API is possible for a public repo, but then a board exists on git **before** Pages has the file if you skip a rebuild. Stick to **build-time glob**: push → Actions → file is both listed and fetchable.

---

## 3. Suggested repo layout

New repo `freeform`, not inside `personal-research`.

```
freeform/
  package.json
  vite.config.ts
  tsconfig.json
  index.html
  .gitignore
  README.md
  .github/workflows/pages.yml
  canvases/                         # source of truth (committed boards)
    manifest.json                   # generated; commit it OR only emit into dist
    moodboard.excalidraw            # example
    scratch.json                    # .json also allowed
  scripts/
    build-manifest.mjs
  public/
    canvases/                       # optional: script copies here before vite build
    fonts/                          # Excalidraw fonts (see §6)
  src/
    main.tsx
    App.tsx
    index.css
    vite-env.d.ts
    lib/
      slugs.ts                      # filename → route slug
      loadCanvas.ts                 # fetch + restore
    pages/
      HomePage.tsx                  # list from manifest
      CanvasPage.tsx                # :slug → Excalidraw
      NotFoundPage.tsx
```

**Recommendation:** keep boards in repo-root `canvases/` (clean git history). `scripts/build-manifest.mjs` runs as `prebuild` / `predev`:

1. Write `src/generated/manifest.json` (imported by the app) **or** `public/canvases/manifest.json` (fetched).
2. Copy `canvases/**/*.{excalidraw,json}` → `public/canvases/` so `fetch` works in dev and prod.

Do not put huge binaries in `canvases/` if you can avoid it (see §7).

---

## 4. Stack (pin these; bump on purpose)

Matches what already worked in the bake-off:

| Package | Role |
|---|---|
| `react` + `react-dom` ^19 | UI |
| `vite` ^8 + `@vitejs/plugin-react` | Build |
| `react-router` ^7 | `HashRouter` |
| `@excalidraw/excalidraw` ^0.18.1 | Editor |
| `typescript` | Strict app code |

`vite.config.ts` essentials:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/freeform/", // project Pages; use "/" locally via env if you prefer
  plugins: [react()],
  define: {
    "process.env.IS_PREACT": JSON.stringify("false"),
  },
  server: { host: true, port: 5173 },
});
```

Local vs Pages base: use `base: process.env.BASE ?? "/freeform/"` and in `package.json`:

```json
{
  "scripts": {
    "predev": "node scripts/build-manifest.mjs",
    "prebuild": "node scripts/build-manifest.mjs",
    "dev": "vite --base /",
    "build": "tsc --noEmit && vite build --base /freeform/",
    "preview": "vite preview --base /freeform/"
  }
}
```

`preview` with `--base /freeform/` is how you catch broken asset paths before Pages.

---

## 5. File format and naming

### Accepted files

| On disk | URL |
|---|---|
| `canvases/moodboard.excalidraw` | `#/moodboard` |
| `canvases/moodboard.json` | `#/moodboard` (same slug; prefer one extension per slug) |
| `canvases/travel/japan.excalidraw` | `#/travel/japan` (v1.1) |

Rules:

- Slug = path relative to `canvases/` without extension, URL-safe: `[a-z0-9][a-z0-9-]*`, `/` for nesting.
- Reject `manifest.json` as a board.
- If both `.excalidraw` and `.json` exist for the same slug, fail the manifest script (do not guess).
- Title on the home page: slug with dashes → spaces, or an optional sidecar later.

### What’s inside a board file

Excalidraw’s own JSON (`.excalidraw` is JSON):

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "https://excalidraw.com",
  "elements": [ ],
  "appState": { "viewBackgroundColor": "#ffffff", "gridSize": null },
  "files": { }
}
```

`files` holds inlined images (`dataURL`s). Fine for a few screenshots; bad for a photo dump (git bloat). See §7.

Load path in the app:

```ts
import { restore } from "@excalidraw/excalidraw";

const url = `${import.meta.env.BASE_URL}canvases/${slug}.excalidraw`;
const raw = await fetch(url).then((r) => {
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
});
const data = restore(raw, null, null); // elements, appState, files
```

Fallback: if `.excalidraw` 404s, try `.json`. Better: manifest includes `{ slug, file: "moodboard.excalidraw" }` so you fetch the exact name.

`restore` (or `loadFromBlob`) upgrades old files. Do not hand-parse `elements` unless you have to.

---

## 6. App behavior

### Routes

```tsx
<HashRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/:slug/*" element={<CanvasPage />} />
  </Routes>
</HashRouter>
```

For nested slugs, either:

- v1: `path="/:slug"` only (flat files), or
- v1.1: `path="/*"` and treat `useParams()['*']` as the slug.

### Home (`#/`)

- Fetch or import `manifest.json`: `{ generatedAt, canvases: [{ slug, file, title, bytes }] }`
- List links to `#/${slug}`
- Empty state: “Add a file under `canvases/` and push”
- Keep this page boring; the boards are the product

### Board (`#/moodboard`)

Chrome (thin, full-width):

- Back to `#/`
- Title (slug)
- **Download** — `serializeAsJSON(elements, appState, files, "local")` so you can commit the file
- Optional: **View only** toggle (`viewModeEnabled`)
- Hint: “Published file is git. Download + commit to publish edits.”

Body: `height: 100%` wrapper — Excalidraw **requires a sized parent**.

```tsx
<Excalidraw
  initialData={{ ...data, scrollToContent: true }}
  theme="dark" /* or follow prefers-color-scheme */
  UIOptions={{ canvasActions: { loadScene: false } }} /* avoid replacing git scene by accident */
/>
```

Lazy-load the editor (`React.lazy`) so the home page does not download Excalidraw.

`initialData` is only applied on mount. Changing slug must **remount** the editor (`key={slug}`).

### Unknown slug

If the slug is not in the manifest, show Not found + link home. Do not mount Excalidraw empty (people will think the loader failed).

### CSS / fonts

```ts
import "@excalidraw/excalidraw/index.css";
```

Self-host fonts so Pages does not depend on a CDN you forgot to allow:

1. Copy `node_modules/@excalidraw/excalidraw/dist/prod/fonts` → `public/fonts` (script or `prebuild`).
2. Before render: `window.EXCALIDRAW_ASSET_PATH = import.meta.env.BASE_URL;`  
   (with `base: '/freeform/'` this loads `/freeform/fonts/...`)

Confirm in Network tab on `vite preview --base /freeform/`.

---

## 7. Images and git

| Approach | When | How |
|---|---|---|
| Inline in `files` | Icons, 1–2 screenshots | Default Excalidraw export |
| Files in repo | Moodboard of photos | `canvases/moodboard/` folder of images; **not automatic** in v1 — Excalidraw wants `files` dataURLs. Defer unless you need it. |
| Git LFS | Large binaries | Avoid if you can; Pages + LFS is extra setup |

v1 rule of thumb: if a board JSON is > ~2–5 MB, split images out or compress before commit. Put a CI check (fail the build if a board exceeds N MB) so the repo does not silently explode.

`.gitattributes`: `*.excalidraw linguist-language=JSON` so GitHub diffs stay readable.

---

## 8. Manifest script (this is the “add a file → get a route” mechanism)

`scripts/build-manifest.mjs`:

1. Recursively list `canvases/**/*.{excalidraw,json}`, skip `manifest.json`.
2. Derive `slug` from relative path.
3. Validate unique slugs, sane characters.
4. Write:
   - `public/canvases/manifest.json`
   - copy each board to `public/canvases/<same relative path>`
5. Print a table of slugs in the build log.

Sketch:

```js
import { mkdir, readdir, copyFile, writeFile, stat } from "node:fs/promises";
import { dirname, join, relative, extname, parse } from "node:path";

const ROOT = "canvases";
const OUT = "public/canvases";

async function walk(dir) {
  const acc = [];
  for (const name of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) acc.push(...(await walk(p)));
    else acc.push(p);
  }
  return acc;
}

const files = (await walk(ROOT)).filter((p) => {
  const ext = extname(p);
  return (ext === ".excalidraw" || ext === ".json") && parse(p).base !== "manifest.json";
});

const canvases = [];
for (const file of files) {
  const rel = relative(ROOT, file);
  const slug = rel.replace(extname(rel), "").split("\\").join("/");
  canvases.push({
    slug,
    file: rel,
    title: parse(file).name.replace(/-/g, " "),
    bytes: (await stat(file)).size,
  });
}

// unique slug check, then mkdir + copyFile each, then writeFile manifest
```

Wire `predev` + `prebuild` so you cannot forget.

Home page reads `fetch(`${import.meta.env.BASE_URL}canvases/manifest.json`)` (always matches deployed files).

---

## 9. GitHub Pages deploy

Repo Settings → Pages → **GitHub Actions** (not “Deploy from a branch” of raw files).

`.github/workflows/pages.yml`:

```yaml
name: pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deploy.outputs.page_url }}
    steps:
      - id: deploy
        uses: actions/deploy-pages@v4
```

Checks after first deploy:

- `https://pomodorozhong.github.io/freeform/` loads home (not a 404 on JS)
- `.../freeform/#/moodboard` loads the example board
- Hard-refresh; fonts 200, not 404 under `/freeform/fonts/`
- Direct visit to `.../freeform/` (no hash) still boots the SPA

`404.html` is **not** required for hash routes. The server only ever serves `index.html` at `/freeform/`.

---

## 10. Authoring workflow (what you will actually do)

### Create a board

1. Open [excalidraw.com](https://excalidraw.com) **or** run this app locally (`npm run dev`, `#/scratch`).
2. Draw.
3. Menu → **Save as image** is the wrong thing. Export **`.excalidraw`** / JSON (Excalidraw: “Save to…” / download `.excalidraw`).
4. Save as `canvases/moodboard.excalidraw`.
5. `git add canvases/moodboard.excalidraw && git commit && git push`
6. Wait for Actions. Open `https://pomodorozhong.github.io/freeform/#/moodboard`

### Edit a published board

1. Open the Pages URL, or open the JSON in Excalidraw.
2. Edit.
3. **Download** from the site chrome (or Excalidraw export).
4. Replace `canvases/moodboard.excalidraw` in git. Push.

v1 does **not** `git commit` from the browser. If you want that later:

- GitHub App / PAT with `contents: write`
- “Publish” button → `PUT` contents API (base64) → commit on `main` or open a PR
- Never embed a write token in the static site; a tiny serverless function or you committing locally is simpler for a personal repo

### Local loop (faster than waiting for Pages)

```bash
npm install
npm run dev          # http://localhost:5173/#/moodboard  (base /)
```

Drop a file in `canvases/`, restart or rerun `node scripts/build-manifest.mjs` if `predev` already ran.

---

## 11. Implementation order (do this in order)

### Phase A — empty SPA on Pages

- [ ] Create repo `freeform`, MIT license, `main` branch
- [ ] Vite + React + TS + HashRouter hello world
- [ ] `base` `/freeform/` on build
- [ ] Actions workflow; confirm `.../freeform/#/` shows “hello”
- [ ] README: URL table + how to add a canvas (link this plan)

### Phase B — one hard-coded board

- [ ] Commit `canvases/moodboard.excalidraw` (export a tiny scene from excalidraw.com)
- [ ] Copy fonts; set `EXCALIDRAW_ASSET_PATH`
- [ ] `CanvasPage` fetches that one file, mounts `<Excalidraw key={slug} />`
- [ ] Confirm locally with `vite preview --base /freeform/`
- [ ] Deploy; confirm `#/moodboard`

### Phase C — folder → routes

- [ ] `build-manifest.mjs` + `predev`/`prebuild`
- [ ] Home lists manifest
- [ ] `/:slug` looks up file name from manifest
- [ ] Second file `canvases/scratch.excalidraw` appears after push with **no code change**
- [ ] Unknown slug → not-found page

### Phase D — chrome and hygiene

- [ ] Download JSON button (`serializeAsJSON`)
- [ ] View-only toggle
- [ ] Size cap in the manifest script
- [ ] `.gitattributes` for `.excalidraw`
- [ ] Empty-folder copy in README

### Phase E — only if you need it

- [ ] Nested slugs `travel/japan`
- [ ] Sidecar `moodboard.meta.json` `{ "title", "description" }`
- [ ] Publish-to-git button (token not in frontend)
- [ ] Theme follow OS
- [ ] Custom Excalidraw library (`.excalidrawlib`) on home

Stop after Phase D unless a real board needs E.

---

## 12. Code sketches (copy, then typecheck)

### `src/App.tsx`

```tsx
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CanvasPage } from "./pages/CanvasPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<CanvasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
```

### `src/pages/CanvasPage.tsx` (flat slugs)

```tsx
import { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { RestoredDataState } from "@excalidraw/excalidraw/types";

const Excalidraw = lazy(async () => {
  const m = await import("@excalidraw/excalidraw");
  return { default: m.Excalidraw };
});

export function CanvasPage() {
  const { slug = "" } = useParams();
  const [data, setData] = useState<RestoredDataState | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { restore } = await import("@excalidraw/excalidraw");
      const manifest = await fetch(`${import.meta.env.BASE_URL}canvases/manifest.json`).then((r) => r.json());
      const entry = manifest.canvases.find((c: { slug: string }) => c.slug === slug);
      if (!entry) {
        setError("not-found");
        return;
      }
      const raw = await fetch(`${import.meta.env.BASE_URL}canvases/${entry.file}`).then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      });
      if (!cancelled) setData(restore(raw, null, null));
    })().catch((e) => !cancelled && setError(String(e)));
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (error === "not-found") return <NotFound />;
  if (error) return <p>Failed to load {slug}: {error}</p>;
  if (!data) return <p>Loading {slug}…</p>;

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header>
        <Link to="/">All canvases</Link>
        <span>{slug}</span>
      </header>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Suspense fallback={<p>Loading editor…</p>}>
          <Excalidraw key={slug} initialData={{ ...data, scrollToContent: true }} theme="light" />
        </Suspense>
      </div>
    </div>
  );
}
```

Types: confirm `RestoredDataState` / `restore` exports on 0.18 (`@excalidraw/excalidraw` and `/types`). Adjust imports to match the installed `.d.ts` (the bake-off used `ExcalidrawImperativeAPI` from `@excalidraw/excalidraw/types`).

Download button (once you have `excalidrawAPI`):

```ts
import { serializeAsJSON } from "@excalidraw/excalidraw";

const json = serializeAsJSON(
  api.getSceneElements(),
  api.getAppState(),
  api.getFiles(),
  "local",
);
const blob = new Blob([json], { type: "application/json" });
// <a download={`${slug}.excalidraw`} href={URL.createObjectURL(blob)}>
```

---

## 13. Pitfalls (read before you debug for an hour)

| Symptom | Cause | Fix |
|---|---|---|
| Blank editor | Parent has no height | Flex column + `flex: 1; min-height: 0` |
| Fonts 404 on Pages, OK on localhost | `base` missing on font URLs | `EXCALIDRAW_ASSET_PATH = import.meta.env.BASE_URL` + copy fonts into `public/` |
| `#/moodboard` empty after adding a file | Manifest not rebuilt / file not copied to `public/canvases` | `prebuild` script; check `dist/canvases/` |
| Works on `localhost:5173/moodboard` but not Pages | Used `BrowserRouter` | `HashRouter` only |
| JS 404 at `/freeform/assets/...` | Built with `base: '/'` | `vite build --base /freeform/` |
| Excalidraw crashes on Preact build | Vite stripped `process.env.IS_PREACT` | `define` in `vite.config.ts` (see bake-off) |
| Scene ignored after navigating home → other board | `initialData` only on first mount | `key={slug}` |
| “I edited on Pages and it vanished” | No git write | Download + commit; do not promise persistence in the UI |
| tldraw temptation | Better chrome | License dies on GitHub Pages without a key |

SSR: Excalidraw must only run on the client. Vite SPA is fine. Do not switch to a server-rendered framework without `ssr: false`.

---

## 14. README skeleton for the new repo

Keep the public README short:

1. What it is (file-hosted Excalidraw boards)
2. URLs (`#/` and `#/moodboard`)
3. Add a board (4 bullets from §10)
4. Local `npm run dev`
5. Link to this implementation plan

---

## 15. Definition of done

v1 is done when **all** of these are true:

1. `https://pomodorozhong.github.io/freeform/#/` lists boards from git.
2. Adding `canvases/foo.excalidraw` and pushing makes `#/foo` work with **no other source change**.
3. `#/does-not-exist` is a not-found page.
4. Download from a board produces a file Excalidraw can open.
5. `vite preview --base /freeform/` matches Pages (fonts, fetch paths).

---

## 16. Why not the other libraries (one paragraph)

tldraw snapshots could also be one JSON per board, but GitHub Pages is production HTTPS and the SDK **stops rendering** without a license key. Fabric `toJSON` could be a file format if you built the whole editor. Konva JSON is a scene-graph dump, not a document. Pixi has no document. Excalidraw is the format + the editor + MIT, which is the whole product here.
