import { convertToExcalidrawElements } from "@excalidraw/excalidraw";
import type { FileId } from "@excalidraw/excalidraw/element/types";
import type { MediaItem } from "./types";

const COLS = 4;
const CELL_W = 980;
const CELL_H = 620;
const IMG_W = 720;
const IMG_H = 405;

export function buildScene(images: MediaItem[]) {
  const skeleton = images.flatMap((img, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x = 80 + col * CELL_W;
    const y = 160 + row * CELL_H;
    return [
      {
        type: "image" as const,
        id: `img-${img.slug}`,
        x,
        y,
        width: IMG_W,
        height: IMG_H,
        fileId: img.id as FileId,
        status: "pending" as const,
        backgroundColor: "transparent",
        strokeColor: "#30363d",
        strokeWidth: 1,
      },
      {
        type: "text" as const,
        id: `label-${img.slug}`,
        x,
        y: y + IMG_H + 16,
        text: `${img.title}  ·  ${img.slug}`,
        fontSize: 20,
        strokeColor: "#9aa7b4",
      },
    ];
  });

  skeleton.unshift({
    type: "text",
    id: "intro",
    x: 80,
    y: 48,
    text: "Pan across the board. Images start as skeletons, then a tiny thumb, then the full PNG once they enter the viewport.",
    fontSize: 22,
    strokeColor: "#e6edf3",
  });

  return convertToExcalidrawElements(skeleton, { regenerateIds: false });
}
