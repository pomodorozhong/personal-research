import { getVisibleSceneBounds } from "@excalidraw/excalidraw";
import type { AppState, DataURL } from "@excalidraw/excalidraw/types";
import type { ExcalidrawImageElement } from "@excalidraw/excalidraw/element/types";

/** Scene box vs current Excalidraw viewport (padding in screen pixels). */
export function imageInViewport(
  el: Pick<ExcalidrawImageElement, "x" | "y" | "width" | "height">,
  appState: AppState,
  padPx = 80,
): boolean {
  const zoom = typeof appState.zoom === "number" ? appState.zoom : appState.zoom.value;
  const pad = padPx / zoom;
  const [minX, minY, maxX, maxY] = getVisibleSceneBounds(appState);
  return !(el.x + el.width < minX - pad || el.x > maxX + pad || el.y + el.height < minY - pad || el.y > maxY + pad);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchAsDataURL(path: string): Promise<{ dataURL: DataURL; bytes: number }> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${res.status} ${path}`);
  const blob = await res.blob();
  const dataURL = await blobToDataURL(blob);
  return { dataURL, bytes: blob.size };
}

function blobToDataURL(blob: Blob): Promise<DataURL> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as DataURL);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
