import { create } from "zustand";

type useTickerStorageType = {
  selectedTicker: string;
  setSelectedTicker: (value: string) => void;

  ticker: any;
  setTicker: (value: any) => void;
};

export const useTickerStorageStore = create<useTickerStorageType>((set) => ({
  selectedTicker: "USD",
  setSelectedTicker: (selectedTicker) => set({ selectedTicker }),

  ticker: null,
  setTicker: (ticker) => set({ ticker }),
}));
