import styles from "./certificaciones.module.scss";
import { motion } from "framer-motion";

const Certificaciones = () => {
  return (
    <motion.div
      initial={{ paddingTop: 360, opacity: 0 }}
      whileInView={{ paddingTop: 160, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.mainWrapper}
    >
      <div className={styles.titleWrapper}>
        <p>Nuestras</p>
        <h1>Certificaciones</h1>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.certificacionesWrapper}>
        <p>
          Hemos logrado desarrollar un sistema de gestión integral enfocado al
          cumplimiento de los estándares C-TPAT y la norma ISO 9001:2015
          &quot;Sistemas de Gestión de la Calidad&ldquo; y es por eso que desde
          la dirección desarrollamos los siguientes compromisos:
        </p>
        <br />
        <p>
          Trabajar bajo el compromiso de la legalidad y el respeto a las normas
          mexicanas, y regulaciones que impacten sobre el trabajo digno y no
          discriminatorio.
        </p>
        <br />
        <p>
          Nos comprometemos a entender y cumplir con los requerimientos de
          nuestros clientes, así como atender sus necesidades, siempre y cuando
          estén dentro de las capacidades de Haster Logística
        </p>
        <br />
        <p>
          En Haster nos comprometemos a mantener un sistema de gestión integarl
          en donde se consideran los aspectos den el fortalecimiento de la
          seguirdad y antiterrorismo, calidad, medio ambiente y salud y
          seguridad en el trabajo. Nos Comprometemos con la NOM-035 en
          establecer los elementos para identificar, analizar y prevenir los
          factores de riesgo psicosocial, así como para promover un entorno
          organizacional favorable en los centros de trabajo.
        </p>
      </div>
    </motion.div>
  );
};

export default Certificaciones;
