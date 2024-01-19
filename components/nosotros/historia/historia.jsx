import { useTranslation } from "react-i18next";
import styles from "./historia.module.scss";
import { motion } from "framer-motion";

const Historia = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.mainWrapper}
    >
      <div className={styles.leftWrapper}>
        <h1>{t("history")}</h1>
        <p>
          {t("background1")}
        </p>
        <p>
          {t("background2")}
        </p>
      </div>
      <div className={styles.image}></div>
    </motion.div>
  );
};

export default Historia;
