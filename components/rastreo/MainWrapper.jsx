import { useTranslation } from "react-i18next";
import styles from "./MainWrapper.module.scss";
import { motion } from "framer-motion";

const MainWrapper = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.mainWrapperRastreo}>
      <motion.div
        initial={{ marginTop: -80, opacity: 0 }}
        whileInView={{ marginTop: -160, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.searchWrapper}
      >
        <div className={styles.titleWrapper}>
          <div className={styles.selected}>
            <h1>{t("trackYourPackage")}</h1>
          </div>
          <div>
            <h1>{t("quoteWithUs")}</h1>
          </div>
        </div>
        <input
          placeholder={t("enterUp")}
          type="text"
        />
        <button>{t("track")}</button>
      </motion.div>
      <p>{t("whatIsATracking")}</p>
      <p>{t("canITrack")}</p>
    </div>
  );
};
export default MainWrapper;
