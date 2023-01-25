import { useRouter } from "next/router";
import styles from "./HomeBanner.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        <div className={styles.emptyDiv}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="right--text--wrapper"
        >
          <h1>
            Tu mejor aliado en servicios <br />
            de logística y transporte
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
      <SwiperSlide className={styles.mainBanner}>
        <div className={styles.emptyDiv}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="right--text--wrapper"
        >
          <h1>
            Tu mejor aliado en servicios <br />
            de logística y transporte
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
    </Swiper>
  );
};

export default HomeBanner;
