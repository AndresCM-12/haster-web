/* eslint-disable @next/next/no-img-element */
import styles from "./HomeMainServices.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import { useRouter } from "next/router";

const HomeMainServices = () => {
  const router = useRouter();
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <motion.div
      initial={{ paddingTop: 260 }}
      whileInView={{ paddingTop: 80 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={styles.servicesWrapper}
    >
      <h1>Servicios</h1>
      <div
        className={styles.button}
        onClick={() => {
          router.push("/servicios");
        }}
      >
        Ver todos los servicios
      </div>

      <Swiper
        id="swiperServices"
        className="swiperServices"
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        modules={[Scrollbar, A11y]}
        navigation={{ nextEl: "#nextArrow" }}
        spaceBetween={25}
        loop={true}
        slidesPerView={"auto"}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.serviceCard}>
            <img src="/images/servicios/05.png" alt="camiones" />
            <div className={styles.textWrapper}>
              <h2>Fletes de Importación y Exportación.</h2>
              <p onClick={()=>{router.push('/servicios')}}>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img src="/images/servicios/25.png" alt="camiones" />
            <div className={styles.textWrapper}>
              <h2>Almacenamiento en bodega.</h2>
              <p onClick={()=>{router.push('/servicios')}}>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img src="/images/servicios/23.png" alt="camiones" />
            <div className={styles.textWrapper}>
              <h2>Hand Carrier.</h2>
              <p onClick={()=>{router.push('/servicios')}}>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img src="/images/servicios/24.png" alt="camiones" />
            <div className={styles.textWrapper}>
              <h2>Servicio de Carga Aérea Nacional e Internacional</h2>
              <p onClick={()=>{router.push('/servicios')}}>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.swiperButton}
        onClick={() => {
          my_swiper.slideNext();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48.414"
          height="16.189"
          viewBox="0 0 48.414 16.189"
        >
          <line
            id="Line_18"
            data-name="Line 18"
            x1="47"
            transform="translate(1.414 8.063)"
            fill="none"
            stroke="#0e186c"
            strokeWidth="2"
          />
          <path
            id="Path_131"
            data-name="Path 131"
            d="M230.094,3603.919l-7.387-7.387,7.387-7.387"
            transform="translate(-221.293 -3588.437)"
            fill="none"
            stroke="#0e186c"
            strokeWidth="2"
          />
          <path
            id="Path_136"
            data-name="Path 136"
            d="M0,0"
            transform="translate(1.414 8.063)"
            fill="none"
            stroke="#0e186c"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default HomeMainServices;
