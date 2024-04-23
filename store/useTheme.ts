import { _storage } from "@/utils/localStorage";
import { create } from "zustand";

type IThemeColor = "light" | "dark";

interface IThemeStore {
  themeColor: IThemeColor;
  setThemeColor: (themeColor: IThemeColor) => void;
}

export const useTheme = create<IThemeStore>((set) => {
  const currentColor = _storage.get("theme-color");
  return {
    themeColor: currentColor ? currentColor : "dark",
    setThemeColor: (value) => set({ themeColor: value }),
  };
});
