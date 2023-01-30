import { useRouter } from "next/router";
import styles from "./HomeBanner.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import homeBanner2 from "../../public/images/HomeBanner2.png";
import homeBanner3 from "../../public/images/HomeBanner3.png";
const HomeBanner = () => {
  const router = useRouter();

  return (
    <Swiper
      id="swiperMainBanner"
      className={styles.swiperWrapper}
      loop={true}
      slidesPerView={1}
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide className={styles.mainBanner}>
        <div className={[styles.emptyDiv, styles.one]}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="right--text--wrapper"
        >
          <h1>
            TU MEJOR ALIADO EN SERVICIOS
            <br />
            DE LOGÍSTICA Y TRANSPORTE
          </h1>
          <h6>
            La logística cubre casi todas las actividades de las organizaciones.
            Una correcta administración de logística permite reducir
            significativamente los costos y aumentar la competitividad en un
            mundo globalizado.
          </h6>
          <div
            onClick={() => {
              router.push("/contacto");
            }}
            className="button"
          >
            <p>Contáctanos</p>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide
        className={styles.mainBanner}
        style={{ backgroundImage: `url(/images/HomeBanner2.png)` }}
      >
        <div className={styles.emptyDiv}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="right--text--wrapper"
        >
          <h1>
            “OBJETIVOS PRINCIPALES
            <br /> DE LA LOGISTICA”
          </h1>
          <h6>
            El movimiento oportuno y económico de recursos materiales entre
            etapas y lugares de trabajo. La reducción de costos.
            <br />
            Aumentar la calidad dentro de las organizaciones.
          </h6>
          <div
            onClick={() => {
              router.push("/contacto");
            }}
            className="button"
          >
            <p>Contáctanos</p>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide
        className={styles.mainBanner}
        style={{ backgroundImage: `url(/images/HomeBanner3.png)` }}
      >
        <div className={styles.emptyDiv}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="right--text--wrapper"
        >
          <h1>
            “SOMOS LOS MÁS RÁPIDOS
            <br /> Y LOS MEJORES”
          </h1>
          <h6>
            Haster Logística ofrece soluciones de transporte terrestre contando
            con un experimentado equipo de trabajo a las mejores tarifas del
            mercado.
          </h6>
          <div
            onClick={() => {
              router.push("/contacto");
            }}
            className="button"
          >
            <p>Contáctanos</p>
          </div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
