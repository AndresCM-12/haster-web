import { useTranslation } from "react-i18next";
import styles from "./ServicesWrapper.module.scss";
import { motion } from "framer-motion";

const ServicesWrapper = ({ service }) => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={
          !service.secondary ? styles.MainWrapper : styles.MainWrapperSecondary
        }
      >
        <div className={styles.textWrapper}>
          <div className={styles.title}>
            <p>{service.type}</p>
            {service.title ? (
              <h1>{service.title}</h1>
            ) : (
              <h3>{service.subtitle}</h3>
            )}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.text}>
            <p>{service.text}</p>
          </div>
        </div>
        <div className={styles.cardsWrapper}>
          {service.services.map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Card = ({ service }) => {
  return (
    <>
      <div className={styles.cardWrapper}>
        <img src={service.image} alt="" />
        <div>
          <h1>{service.text}</h1>
        </div>
      </div>
    </>
  );
};

export default ServicesWrapper;
