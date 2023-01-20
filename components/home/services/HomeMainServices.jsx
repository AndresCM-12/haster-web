/* eslint-disable @next/next/no-img-element */
import styles from "./HomeMainServices.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";

const HomeMainServices = () => {
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <div className={styles.servicesWrapper}>
      <h1>Servicios</h1>
      <div className={styles.button}>Ver todos los servicios</div>

      <Swiper
        id="swiperServices"
        className="swiperServices"
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        modules={[Scrollbar, A11y]}
        navigation={{ nextEl: "#nextArrow" }}
        spaceBetween={25}
        slidesPerView={"auto"}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.serviceCard}>
            <img
              src="https://cpsaracing.com/wp-content/uploads/2019/09/Camiones-recorriendo-la-carretera.jpg"
              alt="camiones"
            />
            <div className={styles.textWrapper}>
              <h2>Fletes de Importación y Exportación.</h2>
              <p>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img
              src="https://cpsaracing.com/wp-content/uploads/2019/09/Camiones-recorriendo-la-carretera.jpg"
              alt="camiones"
            />
            <div className={styles.textWrapper}>
              <h2>Fletes de Importación y Exportación.</h2>
              <p>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img
              src="https://cpsaracing.com/wp-content/uploads/2019/09/Camiones-recorriendo-la-carretera.jpg"
              alt="camiones"
            />
            <div className={styles.textWrapper}>
              <h2>Fletes de Importación y Exportación.</h2>
              <p>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img
              src="https://cpsaracing.com/wp-content/uploads/2019/09/Camiones-recorriendo-la-carretera.jpg"
              alt="camiones"
            />
            <div className={styles.textWrapper}>
              <h2>Fletes de Importación y Exportación.</h2>
              <p>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img
              src="https://cpsaracing.com/wp-content/uploads/2019/09/Camiones-recorriendo-la-carretera.jpg"
              alt="camiones"
            />
            <div className={styles.textWrapper}>
              <h2>Fletes de Importación y Exportación.</h2>
              <p>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.serviceCard}>
            <img
              src="https://cpsaracing.com/wp-content/uploads/2019/09/Camiones-recorriendo-la-carretera.jpg"
              alt="camiones"
            />
            <div className={styles.textWrapper}>
              <h2>Fletes de Importación y Exportación.</h2>
              <p>Conoce más</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
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
            stroke="#2f2e64"
            stroke-width="2"
          />
          <path
            id="Path_131"
            data-name="Path 131"
            d="M230.094,3603.919l-7.387-7.387,7.387-7.387"
            transform="translate(-221.293 -3588.437)"
            fill="none"
            stroke="#2f2e64"
            stroke-width="2"
          />
          <path
            id="Path_136"
            data-name="Path 136"
            d="M0,0"
            transform="translate(1.414 8.063)"
            fill="none"
            stroke="#2f2e64"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeMainServices;
