import styles from "./FormFooter.module.scss";
import { motion } from "framer-motion";

const FormFooter = () => {
  return (
    <>
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.wrapperForm}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.background}
        >
          <h1>Contáctanos</h1>
          <form className={styles.Form}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="company">Compañía:</label>
            <input type="text" name="company" id="company" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="phone">Teléfono:</label>
            <input type="text" name="phone" id="phone" />
            <label htmlFor="message">Mensaje:</label>
            <input type="text" name="message" id="message" />
            <button>Enviar</button>
          </form>
        </motion.div>
      </div>
      <div className={styles.wrapperMap}>
        <div className={styles.Map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1179.8036985972026!2d-106.09530768865238!3d28.6434338753281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1672690772508!5m2!1ses!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.infoWrapper}>
          <div>
            <span className="material-symbols-outlined icon">location_on</span>
            <h3>Ave de las industrias 6504-29</h3>
            <h3>Nombre de Dios</h3>
            <p>Chihuahua, Chih. C.P. 31150</p>
          </div>
          <div>
            <p>Tel. [52] 61 4389 5597/98</p>
            <p>info@hasterlogistic.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormFooter;
