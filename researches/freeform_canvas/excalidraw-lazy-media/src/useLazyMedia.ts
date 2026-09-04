import { useEffect, useRef, useState } from "react";
import { newElementWith } from "@excalidraw/excalidraw";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types";
import type { FileId } from "@excalidraw/excalidraw/element/types";
import { fetchAsDataURL, imageInViewport, sleep } from "./media";
import type { LoadState, MediaItem, MediaPhase } from "./types";

type Opts = {
  api: ExcalidrawImperativeAPI | null;
  images: MediaItem[];
  delayMs: number;
  eagerThumbs: boolean;
};

export function useLazyMedia({ api, images, delayMs, eagerThumbs }: Opts) {
  const [loads, setLoads] = useState<Record<string, LoadState>>({});
  const inflight = useRef(new Set<string>());
  const loadsRef = useRef(loads);
  loadsRef.current = loads;

  useEffect(() => {
    setLoads(Object.fromEntries(images.map((img) => [img.id, { phase: "skeleton" as const, bytes: 0 }])));
    inflight.current.clear();
  }, [images]);

  useEffect(() => {
    if (!api || images.length === 0) return;
    let cancelled = false;
    let raf = 0;

    const byId = new Map(images.map((img) => [img.id, img]));

    const mark = (id: string, phase: MediaPhase, bytes: number) => {
      setLoads((prev) => {
        const cur = prev[id];
        if (cur?.phase === phase && cur.bytes === bytes) return prev;
        return { ...prev, [id]: { phase, bytes } };
      });
    };

    const promote = async (img: MediaItem, next: "thumb" | "full") => {
      const key = `${img.id}:${next}`;
      if (inflight.current.has(key) || cancelled) return;
      const current = loadsRef.current[img.id]?.phase ?? "skeleton";
      if (next === "thumb" && current !== "skeleton") return;
      if (next === "full" && current === "full") return;
      inflight.current.add(key);
      try {
        if (delayMs > 0) await sleep(delayMs);
        if (cancelled) return;
        const path = next === "thumb" ? img.thumb : img.full;
        const { dataURL, bytes } = await fetchAsDataURL(`/${path}`);
        if (cancelled) return;
        api.addFiles([
          {
            id: img.id as FileId,
            dataURL,
            mimeType: "image/png",
            created: Date.now(),
            lastRetrieved: Date.now(),
            version: next === "thumb" ? 1 : 2,
          },
        ]);
        const elements = api.getSceneElements().map((el) => {
          if (el.type !== "image" || el.fileId !== img.id) return el;
          return newElementWith(el, { status: "saved" });
        });
        api.updateScene({ elements });
        const prevBytes = loadsRef.current[img.id]?.bytes ?? 0;
        mark(img.id, next, next === "full" ? prevBytes + bytes : bytes);
      } catch (err) {
        console.error(err);
      } finally {
        inflight.current.delete(key);
      }
    };

    const scan = () => {
      if (cancelled) return;
      const appState = api.getAppState();
      for (const el of api.getSceneElements()) {
        if (el.type !== "image" || !el.fileId) continue;
        const img = byId.get(el.fileId);
        if (!img) continue;
        const visible = imageInViewport(el, appState);
        const phase = loadsRef.current[img.id]?.phase ?? "skeleton";
        if (phase === "skeleton" && (visible || eagerThumbs)) void promote(img, "thumb");
        if (phase === "thumb" && visible) void promote(img, "full");
      }
    };

    const requestScan = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    };

    const unsubScroll = api.onScrollChange(requestScan);
    const unsubChange = api.onChange(requestScan);
    requestScan();
    const interval = window.setInterval(requestScan, 400);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearInterval(interval);
      unsubScroll();
      unsubChange();
    };
  }, [api, images, delayMs, eagerThumbs]);

  return loads;
}
