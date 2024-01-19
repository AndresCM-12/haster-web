import { useRouter } from "next/router";
import styles from "./HomeBanner.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const HomeBanner = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Swiper
      id="swiperMainBanner"
      className={styles.swiperWrapper}
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{
        type: "progressbar",
      }}
      speed={1000}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide className={styles.mainBanner}>
      <div className={styles.emptyDiv}></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="right--text--wrapper"
        >
          <h1>
            {t("yourBestAllay1")}
            <br />
            {t("yourBestAllay2")}
          </h1>
          <h6>
            {t("logisticCovers")}
          </h6>
          <div
            onClick={() => {
              router.push("/contacto");
            }}
            className="button"
          >
            <p>{t("contactUs")}</p>
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
            {t("mainObjectives1")}
            <br /> {t("mainObjectives2")}
          </h1>
          <h6>
            {t("timelyAndEco1")}
            <br />
            {t("timelyAndEco2")}
          </h6>
          <div
            onClick={() => {
              router.push("/contacto");
            }}
            className="button"
          >
            <p>{t("contactUs")}</p>
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
            {t("fastestAndBest1")}
            <br /> {t("fastestAndBest2")}
          </h1>
          <h6>
            {t("hasterOffers")}
          </h6>
          <div
            onClick={() => {
              router.push("/contacto");
            }}
            className="button"
          >
            <p>{t("contactUs")}</p>
          </div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
