import { useTranslation } from "react-i18next";
import styles from "./certificaciones.module.scss";
import { motion } from "framer-motion";

const Certificaciones = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ paddingTop: 360, opacity: 0 }}
      whileInView={{ paddingTop: 160, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.mainWrapper}
    >
      <div className={styles.titleWrapper}>
        <p>{t("ours")}</p>
        <h1>{t("certifications")}</h1>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.certificacionesWrapper}>
        <p>{t("certifications1")}</p>
        <br />
        <p>{t("certifications2")}</p>
        <br />
        <p>{t("certifications3")}</p>
        <br />
        <p>{t("certifications4")}</p>
      </div>
    </motion.div>
  );
};

export default Certificaciones;
