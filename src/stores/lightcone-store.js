import { create } from "zustand";

export const useLightconeStore = create((set) => ({
  id: "",
  setId: (id) => set({ id }),
  level: 80,
  setLevel: (level) => set({ level }),
  rank: 1,
  setRank: (rank) => set({ rank }),
  promotion: 6,
  setPromotion: (promotion) => set({ promotion }),
}));
