import { useEffect, useMemo, useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types";
import "@excalidraw/excalidraw/index.css";
import { buildScene } from "./scene";
import type { Catalog, LoadState, MediaItem } from "./types";
import { useLazyMedia } from "./useLazyMedia";

export function App() {
  const [images, setImages] = useState<MediaItem[]>([]);
  const [api, setApi] = useState<ExcalidrawImperativeAPI | null>(null);
  const [delayMs, setDelayMs] = useState(700);
  const [eagerThumbs, setEagerThumbs] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/media/catalog.json")
      .then((r) => {
        if (!r.ok) throw new Error(`catalog ${r.status}`);
        return r.json() as Promise<Catalog>;
      })
      .then((cat) => setImages(cat.images))
      .catch((e) => setError(String(e)));
  }, []);

  const scene = useMemo(() => (images.length ? buildScene(images) : null), [images]);
  const loads = useLazyMedia({ api, images, delayMs, eagerThumbs });

  const stats = tally(images, loads);

  return (
    <div className="app">
      <header className="hud">
        <div>
          <strong>Excalidraw lazy media</strong>
          <p>
            Scene JSON has <em>no</em> binaries. Visible images: skeleton → 24×14 thumb → 800×450 PNG.
            Pan to load the rest. Watch the Network tab.
          </p>
        </div>
        <label>
          Fake latency
          <input
            type="range"
            min={0}
            max={2000}
            step={100}
            value={delayMs}
            onChange={(e) => setDelayMs(Number(e.target.value))}
          />
          <span>{delayMs} ms</span>
        </label>
        <label className="check">
          <input type="checkbox" checked={eagerThumbs} onChange={(e) => setEagerThumbs(e.target.checked)} />
          Eager thumbs (full still lazy)
        </label>
        <dl className="stats">
          <div>
            <dt>skeleton</dt>
            <dd>{stats.skeleton}</dd>
          </div>
          <div>
            <dt>thumb</dt>
            <dd>{stats.thumb}</dd>
          </div>
          <div>
            <dt>full</dt>
            <dd>{stats.full}</dd>
          </div>
          <div>
            <dt>fetched</dt>
            <dd>{formatBytes(stats.bytes)}</dd>
          </div>
        </dl>
      </header>
      <ul className="legend">
        {images.map((img) => (
          <li key={img.id} data-phase={loads[img.id]?.phase ?? "skeleton"}>
            {img.title}
          </li>
        ))}
      </ul>
      <div className="stage">
        {error ? <p className="error">{error}</p> : null}
        {scene ? (
          <Excalidraw
            key={images.map((i) => i.id).join(",")}
            excalidrawAPI={setApi}
            theme="dark"
            initialData={{
              elements: scene,
              files: {},
              appState: {
                viewBackgroundColor: "#0c1017",
                currentItemStrokeColor: "#58a6ff",
                zoom: { value: 0.7 as import("@excalidraw/excalidraw/types").AppState["zoom"]["value"] },
                scrollX: -40,
                scrollY: -20,
              },
              scrollToContent: false,
            }}
            UIOptions={{ canvasActions: { loadScene: false, export: false } }}
          />
        ) : (
          <p className="boot">Loading catalog…</p>
        )}
      </div>
    </div>
  );
}

function tally(images: MediaItem[], loads: Record<string, LoadState>) {
  const acc = { skeleton: 0, thumb: 0, full: 0, bytes: 0 };
  for (const img of images) {
    const row = loads[img.id];
    const phase = row?.phase ?? "skeleton";
    acc[phase] += 1;
    acc.bytes += row?.bytes ?? 0;
  }
  return acc;
}

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}
