export type MediaItem = {
  id: string;
  fullId: string;
  slug: string;
  title: string;
  width: number;
  height: number;
  thumb: string;
  full: string;
  thumbBytes: number;
  fullBytes: number;
};

export type Catalog = { images: MediaItem[] };

export type MediaPhase = "skeleton" | "thumb" | "full";

export type LoadState = {
  phase: MediaPhase;
  bytes: number;
};
