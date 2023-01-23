import styles from "./clientes.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";

const Clientes = () => {
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.textWrapper}>
        <p>Algunos de nuestros</p>
        <h1>Clientes</h1>
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
        <Swiper
          className={styles.mySwiper}
          onInit={(ev) => {
            set_my_swiper(ev);
          }}
          modules={[Scrollbar, A11y]}
          navigation={{ nextEl: "#nextArrow" }}
          spaceBetween={20}
          slidesPerView={"auto"}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}></div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}></div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}></div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}></div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}></div>
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
                stroke="#2f2e64"
                stroke-width="2"
              />
              <path
                id="Path_101"
                data-name="Path 101"
                d="M230.094,3603.919l-7.387-7.387,7.387-7.387"
                transform="translate(2.793)"
                fill="none"
                stroke="#2f2e64"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
