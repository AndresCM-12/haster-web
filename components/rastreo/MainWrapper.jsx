import styles from "./MainWrapper.module.scss";
import { motion } from "framer-motion";

const MainWrapper = () => {
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
            <h1>Rastrea tu embarque</h1>
          </div>
          <div>
            <h1>Cotiza con nosotros</h1>
          </div>
        </div>
        <input
          placeholder="Introduce hasta 30 números de rastreo, guía y/o referencia"
          type="text"
        />
        <button>Rastrear</button>
      </motion.div>
      <p>¿Qué Es un Número de Rastreo y Dónde Puedo Encontrarlo?</p>
      <p>¿Puedo rastrear mi embarque si no tengo un número de rastreo? </p>
    </div>
  );
};
export default MainWrapper;
