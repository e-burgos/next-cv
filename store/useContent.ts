import { IMainContent, mainContent } from "@/data/main";
import { _storage } from "@/utils/localStorage";
import { create } from "zustand";

export interface IContentStore {
  content: IMainContent;
  setContent: (value: IMainContent) => void;
}

export const useContent = create<IContentStore>((set) => {
  const lang = _storage.get("current-lang");
  return {
    content: lang === "es" ? mainContent.es : mainContent.en,
    setContent: (value) => {
      set({ content: value });
    },
  };
});
