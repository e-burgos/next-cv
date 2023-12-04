import React from "react";
import { useLanguage } from "@/app/store/useLanguage";
import styles from "./styles/switch-lang.module.css";
import { useTheme } from "@/app/store/useTheme";
import { useContent } from "@/app/store/useContent";
import { mainContent } from "@/data/main";

const SwitchLang = () => {
  const { currentLang, setCurrentLang } = useLanguage();
  const { setContent } = useContent();
  const { themeColor } = useTheme();

  const handleLabelClick = () => {
    if (currentLang === "en") {
      setContent(mainContent.es);
      setCurrentLang("es");
    } else {
      setContent(mainContent.en);
      setCurrentLang("en");
    }
  };

  return (
    <div className={styles.switchContainer}>
      <label
        className={`theme-switcher-label d-flex  ${
          themeColor !== "dark" ? "active" : ""
        }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <span className={styles.flag}>
            {currentLang === "es" && <h4>{"ES"}</h4>}
            {currentLang === "en" && <h4>{"EN"}</h4>}
          </span>
        </div>
      </label>
    </div>
  );
};

export default SwitchLang;
