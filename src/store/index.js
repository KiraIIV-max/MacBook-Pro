import { create } from "zustand";
import feature_mp4 from "../assets/videos/feature-1.mp4";

const useMacbookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: feature_mp4,
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: "#2e2c2e",
      scale: 0.08,
      texture: feature_mp4,
    }),
}));

export default useMacbookStore;
