# Excalidraw lazy media (experiment)

Sibling of `../demo`. A moodboard whose **`.excalidraw` scene has no image bytes**. Each picture goes:

1. **Skeleton** — `status: "pending"`, empty `files` (Excalidraw’s built-in placeholder)
2. **Thumb** — fetch a 24×14 PNG, `addFiles`, blurry upscale
3. **Full** — fetch 800×450 PNG only when the image intersects the viewport

That is the pattern a GitHub Pages host would use: keep `moodboard.excalidraw` small, put media in `media/`, hydrate when the user pans near them.

## Run

```bash
cd researches/freeform_canvas/excalidraw-lazy-media
npm install
npm run dev
```

Open http://localhost:5174

`predev` regenerates `public/media/**`. Drag the **Fake latency** slider if the jump is too fast on localhost. Uncheck nothing — thumbs are viewport-lazy by default; **Eager thumbs** still defers the heavy PNG.

Pan the board. The legend chips go gray → amber → green. DevTools → Network should show `thumbs/*.png` then `full/*.png`, not one giant JSON.

## What to copy into the Pages app later

- Scene JSON: image elements + `fileId`, `status: "pending"`, **omit** `files` (or only embed thumbs).
- Catalog: `{ id, thumb, full, width, height }`.
- On `onScrollChange` / `getVisibleSceneBounds`: if intersecting, `fetch` → `FileReader` data URL → `api.addFiles` + `newElementWith(el, { status: "saved" })`.
- Bump `BinaryFileData.version` when replacing thumb with full so the image cache notices.
