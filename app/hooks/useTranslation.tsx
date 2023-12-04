import { useCallback } from "react";
import { useLanguage } from "../store/useLanguage";
import { ILangComponent, ILangComponentResult } from "utils/types";

const useTranslation = () => {
  const { currentLang } = useLanguage();

  const handleFilterLang = useCallback(
    (values: ILangComponent): ILangComponentResult => {
      switch (currentLang) {
        case "es":
          return {
            label: values.label?.es || "",
            placeholder: values.placeholder?.es || "",
            text1: values.text1?.es || "",
            text2: values.text2?.es || "",
            text3: values.text3?.es || "",
            text4: values.text4?.es || "",
            text5: values.text5?.es || "",
            text6: values.text6?.es || "",
            text7: values.text7?.es || "",
            text8: values.text8?.es || "",
            text9: values.text9?.es || "",
            text10: values.text10?.es || "",
            text11: values.text11?.es || "",
            text12: values.text12?.es || "",
            text13: values.text13?.es || "",
            text14: values.text14?.es || "",
            text15: values.text15?.es || "",
          };
        case "en":
          return {
            label: values.label?.en || "",
            placeholder: values.placeholder?.en || "",
            text1: values.text1?.en || "",
            text2: values.text2?.en || "",
            text3: values.text3?.en || "",
            text4: values.text4?.en || "",
            text5: values.text5?.en || "",
            text6: values.text6?.en || "",
            text7: values.text7?.en || "",
            text8: values.text8?.en || "",
            text9: values.text9?.en || "",
            text10: values.text10?.en || "",
            text11: values.text11?.en || "",
            text12: values.text12?.en || "",
            text13: values.text13?.en || "",
            text14: values.text14?.en || "",
            text15: values.text15?.en || "",
          };
        default:
          return {
            label: values.label?.en || "",
            placeholder: values.placeholder?.en || "",
            text1: values.text1?.en || "",
            text2: values.text2?.en || "",
            text3: values.text3?.en || "",
            text4: values.text4?.en || "",
            text5: values.text5?.en || "",
            text6: values.text6?.en || "",
            text7: values.text7?.en || "",
            text8: values.text8?.en || "",
            text9: values.text9?.en || "",
            text10: values.text10?.en || "",
            text11: values.text11?.en || "",
            text12: values.text12?.en || "",
            text13: values.text13?.en || "",
            text14: values.text14?.en || "",
            text15: values.text15?.en || "",
          };
      }
    },
    [currentLang]
  );
  return { handleFilterLang };
};

export default useTranslation;
