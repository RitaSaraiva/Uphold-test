import { create } from "zustand";

type useTickerStorageType = {
  selectedTicker: string;
  setSelectedTicker: (value: string) => void;
};

export const useTickerStorageStore = create<useTickerStorageType>((set) => ({
  selectedTicker: "USD",
  setSelectedTicker: (selectedTicker) => set({ selectedTicker }),
}));
