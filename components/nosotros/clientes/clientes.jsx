import styles from "./clientes.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, FreeMode, Autoplay } from "swiper";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Clientes = () => {
  const { t } = useTranslation();

  const [my_swiper, set_my_swiper] = useState({});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.mainWrapper}
    >
      <div className={styles.textWrapper}>
        <p>{t("someOfOurClients")}</p>
        <h1>{t("clients")}</h1>
      </div>
      <div className={styles.clientsSwiper}>
        <div
          onClick={() => {
            my_swiper.slidePrev();
          }}
          className={styles.swiperButtonPrev}
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
        </div>
        <Swiper
          className={styles.mySwiper}
          onInit={(ev) => {
            set_my_swiper(ev);
          }}
          modules={[Scrollbar, A11y, FreeMode, Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{ nextEl: "#nextArrow" }}
          spaceBetween={20}
          slidesPerView={"auto"}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                loading="eager"
                style={{ objectFit: "contain" }}
                width="310"
                height="100"
                src="/images/clientes/Comex.png"
                alt="Comex brand logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                loading="eager"
                style={{ objectFit: "contain" }}
                width="310"
                height="100"
                src="/images/clientes/Comihnox.png"
                alt="Comex brand logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                loading="eager"
                style={{ objectFit: "contain" }}
                width="310"
                height="100"
                src="/images/clientes/GmSolutions.png"
                alt="Comex brand logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                loading="eager"
                style={{ objectFit: "contain" }}
                width="310"
                height="100"
                src="/images/clientes/Ripipsa.png"
                alt="Comex brand logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                loading="eager"
                style={{ objectFit: "contain" }}
                width="310"
                height="100"
                src="/images/clientes/Jabil.png"
                alt="Comex brand logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                loading="eager"
                style={{ objectFit: "contain" }}
                width="310"
                height="100"
                src="/images/clientes/Maqsuca.png"
                alt="Comex brand logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                loading="eager"
                style={{ objectFit: "contain" }}
                width="310"
                height="100"
                src="/images/clientes/GrupoGardea.png"
                alt="Comex brand logo"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          onClick={() => {
            my_swiper.slideNext();
          }}
          className={styles.swiperButtonNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48.414"
            height="16.189"
            viewBox="0 0 48.414 16.189"
          >
            <g
              id="Group_25"
              data-name="Group 25"
              transform="translate(272.5 3604.626) rotate(180)"
            >
              <line
                id="Line_8"
                data-name="Line 8"
                x1="47"
                transform="translate(225.5 3596.5)"
                fill="none"
                stroke="#0e186c"
                strokeWidth="2"
              />
              <path
                id="Path_101"
                data-name="Path 101"
                d="M230.094,3603.919l-7.387-7.387,7.387-7.387"
                transform="translate(2.793)"
                fill="none"
                stroke="#0e186c"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Clientes;
