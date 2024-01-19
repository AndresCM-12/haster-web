// components/LanguageSwitcher.js
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  // Lee el idioma almacenado en el localStorage al inicio de la aplicación
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'es';
    i18n.changeLanguage(storedLanguage);
  }, [i18n]);

  return (
    <div className={`${styles.languageSwitcher} ${i18n.language === 'en' ? styles.switcherActive : ''}`}>
      <label className={styles.switchLabel}>
        <input
          type="checkbox"
          checked={i18n.language === 'en'}
          onChange={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
