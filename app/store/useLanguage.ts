import { _storage } from "@/utils/localStorage";
import { ILocates } from "@/utils/types";
import { create } from "zustand";

export interface ILanguage {
  currentLang: ILocates;
  setCurrentLang: (value: ILocates) => void;
}

export const useLanguage = create<ILanguage>((set) => {
  const lang = _storage.get("current-lang");
  return {
    currentLang: lang ? lang : "en",
    setCurrentLang: (value) => {
      _storage.set("current-lang", value);
      set({ currentLang: value });
    },
  };
});
