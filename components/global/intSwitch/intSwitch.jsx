// components/LanguageSwitcher.js
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";
import es from "../../../public/images/es.png";
import en from "../../../public/images/en.png";
import Image from "next/image";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  // Lee el idioma almacenado en el localStorage al inicio de la aplicación
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "es";
    i18n.changeLanguage(storedLanguage);
  }, [i18n]);

  return (
    <div
      className={`${styles.languageSwitcher} ${
        i18n.language === "en" ? styles.switcherActive : ""
      }`}
    >
      <label className={styles.switchLabel}>
        <input
          type="checkbox"
          checked={i18n.language === "en"}
          onChange={() => changeLanguage(i18n.language === "en" ? "es" : "en")}
        />
        <span className={styles.slider}></span>
      </label>
      <Image
        style={{
          objectFit: "contain",
          backgroundColor: "transparent",
          marginInlineStart: "12px",
        }}
        width={24}
        height={24}
        src={i18n.language === "en" ? en : es}
        alt="Language switcher"
      />
    </div>
  );
};

export default LanguageSwitcher;
