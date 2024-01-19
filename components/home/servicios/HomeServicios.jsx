import styles from "./HomeServicios.module.scss";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { delay, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HomeServicios = () => {
  const { t } = useTranslation();

  let [serviceSelected, setServiceSelected] = useState(0);
  const router = useRouter();
  let mainServices = {
    serviceSlideAereo: {
      name: t("airTrans"),
      text: t("domesticAndInter"),
      image: "/images/servicio_aereo.png",
    },
    serviceSlideTerrestre: {
      name: t("landTrans"),
      text: t("offersLandTrans"),
      image: "/images/servicio_terrestre.png",
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ marginTop: -90, opacity: 1 }}
        viewport={{ once: true }}
        className={styles.mainWrapperServices}
        transition={{ duration: 0.5 }}
      >
        <h1>{t("airOrLand")}</h1>
        <div
          className={styles.button}
          onClick={() => {
            router.push("/servicios");
          }}
        >
          <p>{t("viewAllServices")}</p>
        </div>
        <div className={styles.servicesWrapper}>
          <TextInServiceComponent
            get={serviceSelected}
            set={setServiceSelected}
            name={t("airTrans")}
            index={0}
          />

          <TextInServiceComponent
            get={serviceSelected}
            set={setServiceSelected}
            name={t("landTrans")}
            index={1}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.dynamicWrapper}
      >
        {serviceSelected === 0 ? (
          <ServiceSlideComponent
            serviceSlide={mainServices.serviceSlideAereo}
            order={"left"}
          />
        ) : (
          <ServiceSlideComponent
            serviceSlide={mainServices.serviceSlideTerrestre}
            order={"right"}
          />
        )}
      </motion.div>
    </>
  );
};

const TextInServiceComponent = ({ get, set, name, index }) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={() => {
        set(index);
      }}
      className={get === index ? styles.selected : styles.unSelected}
    >
      <h1>{name}</h1>
    </div>
  );
};

const ServiceSlideComponent = ({ serviceSlide, order }) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      {order === "left" ? (
        <div
          className={styles.slideWrapper}
          style={{ backgroundImage: `url('${serviceSlide.image}')` }}
        >
          <div className={styles.textWrapper}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107.713"
                height="68.209"
                viewBox="0 0 107.713 68.209"
              >
                <g
                  id="Group_26"
                  data-name="Group 26"
                  transform="translate(-70.007 -39.369)"
                >
                  <path
                    id="Path_99"
                    data-name="Path 99"
                    d="M174.741,67.369l-12.072-9.658a1.8,1.8,0,0,0-1.122-.393H133.625L118.008,39.966a1.793,1.793,0,0,0-1.334-.594H98.724a1.795,1.795,0,0,0-1.667,2.461l6.194,15.486H99.743L89.5,40.24a1.8,1.8,0,0,0-1.539-.871H71.8a1.8,1.8,0,0,0-1.782,1.587v0c0,.038-.006.076-.008.114s0,.049,0,.074c0,.006,0,.012,0,.018s0,.039,0,.059c0,.036,0,.072.006.108s.005.043.008.064c0,.038.01.077.017.115,0,.02.009.039.014.058.009.039.018.078.03.118,0,.016.01.031.016.046.011.033.021.066.033.1L83.3,74.736a9.109,9.109,0,0,0,5.249,5.138l9.3,3.489q-3.021,4.905-6.038,9.813-3.585,5.837-7.18,11.665a1.8,1.8,0,0,0,1.528,2.736h14.359a1.8,1.8,0,0,0,.983-.293l2.03-1.327c1.611-1.047,18.891-12.358,22.549-14.762.039-.022.08-.041.118-.065h0q5.27-3.44,10.541-6.889h31.99c.057,0,.115,0,.172-.009l.045-.006c.042,0,.083-.011.125-.019l.052-.011q.058-.013.116-.03l.047-.015c.041-.013.081-.028.121-.044l.033-.014q.07-.03.138-.066l.009,0a1.8,1.8,0,0,0,.293-.2l4.987-4.156a7.943,7.943,0,0,0-.123-12.3ZM101.374,42.961h14.5L128.8,57.318H107.118Zm71.189,33.951-4.489,3.741H142.231q2.97-1.942,5.94-3.882a1.8,1.8,0,0,0-1.966-3q-5.433,3.56-10.866,7.111a1.8,1.8,0,0,0-.2.133q-5.151,3.366-10.3,6.724a1.807,1.807,0,0,0-.174.1c-1.712,1.127-21.378,14-23.091,15.119l-1.584,1.036H89.375q2.749-4.465,5.493-8.932,3.585-5.837,7.18-11.665l.011-.021c.017-.029.033-.06.049-.09s.022-.038.031-.058q.035-.073.063-.15c.009-.024.016-.048.023-.072s.02-.059.027-.089.012-.051.018-.077.011-.044.015-.067,0-.016,0-.024c0-.023.007-.047.009-.07s.008-.069.011-.1c0-.019,0-.037,0-.056,0-.04,0-.08,0-.12,0-.013,0-.027,0-.04,0-.046-.007-.092-.012-.137l0-.024c-.007-.051-.017-.1-.029-.153l0-.009a1.794,1.794,0,0,0-1.115-1.265L89.807,76.512A5.508,5.508,0,0,1,86.629,73.4L74.451,42.959H86.939L97.186,60.037a1.8,1.8,0,0,0,1.539.871h7.15l.029,0h0l.043,0h54.971L172.5,70.173a4.347,4.347,0,0,1,.066,6.738Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_100"
                    data-name="Path 100"
                    d="M246.113,170.62H203.035a1.795,1.795,0,0,0,0,3.59h43.078a1.795,1.795,0,1,0,0-3.59Z"
                    transform="translate(-104.313 -104.327)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <h1>{serviceSlide.name}</h1>
            <p>{serviceSlide.text}</p>
            <div
              className={styles.button}
              onClick={() => {
                router.push("/servicios");
              }}
            >
             {t("learnMore")}
            </div>
          </div>
          <div className={styles.transparent}></div>
        </div>
      ) : (
        <div
          className={styles.slideWrapper}
          style={{ backgroundImage: `url('${serviceSlide.image}')` }}
        >
          <div className={styles.transparent}></div>
          <div className={styles.textWrapper}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115.105"
                height="44.965"
                viewBox="0 0 115.105 44.965"
              >
                <path
                  id="Path_135"
                  data-name="Path 135"
                  d="M184.579,178.341a1.8,1.8,0,0,0-1.272-.527h-6.449l-6.667-6.667a1.8,1.8,0,0,0-1.272-.527h-12.59a1.8,1.8,0,0,0-1.8,1.8V195.8h-1.8a1.8,1.8,0,0,0-1.8,1.8v1.8h-1.8V172.421a1.8,1.8,0,0,0-1.8-1.8H71.8a1.8,1.8,0,0,0-1.8,1.8V203a1.8,1.8,0,0,0,1.8,1.8h3.6v5.4a1.8,1.8,0,0,0,1.8,1.8h4.564a7.188,7.188,0,0,0,12.453,0h32.51a7.193,7.193,0,0,0,13.192-1.8h20.243a7.193,7.193,0,0,0,13.929,0h9.223a1.8,1.8,0,0,0,1.8-1.8V179.613A1.8,1.8,0,0,0,184.579,178.341Zm-21.055,3.07h8.993V192.2h-8.993Zm4.65-7.194,3.6,3.6H158.127v-3.6Zm-17.24,28.777v3.6H139.912a7.2,7.2,0,0,0-.736-1.8h8.16a1.8,1.8,0,0,0,1.8-1.8v0Zm-34.172-1.8V174.219h7.194V201.2Zm-10.791,0V174.219h7.194V201.2Zm-10.791,0V174.219h7.194V201.2Zm-10.791,0V174.219h7.194V201.2Zm43.165,0V174.219h7.194V201.2Zm17.985,0h-7.194V174.219h7.194ZM73.6,174.219h7.194V201.2H73.6Zm5.395,34.172v-3.6h2.765a7.193,7.193,0,0,0-.966,3.6Zm8.993,3.6a3.591,3.591,0,0,1-3.334-2.249,1.77,1.77,0,0,0-.109-.3,3.6,3.6,0,0,1,3.442-4.64h0a3.6,3.6,0,0,1,3.445,4.631,1.78,1.78,0,0,0-.118.334,3.594,3.594,0,0,1-3.326,2.229Zm7.194-3.6a7.193,7.193,0,0,0-.966-3.6H126.72a7.193,7.193,0,0,0-.966,3.6Zm40.313,2.544a3.594,3.594,0,0,1-5.877-1.2,1.772,1.772,0,0,0-.109-.3,3.6,3.6,0,0,1,3.442-4.64h0a3.6,3.6,0,0,1,2.544,6.141Zm34.172,0a3.6,3.6,0,1,1-2.544-6.141h0a3.6,3.6,0,0,1,2.544,6.141Zm4.42-4.344a7.192,7.192,0,0,0-13.928,0H154.53V199.4h1.8a1.8,1.8,0,0,0,1.8-1.8V181.411h1.8V194a1.8,1.8,0,0,0,1.8,1.8h12.59a1.8,1.8,0,0,0,1.8-1.8V181.422h0a1.824,1.824,0,0,0,.2-.011h5.191V197.6h-5.4a1.8,1.8,0,0,0,0,3.6h5.4v5.394Z"
                  transform="translate(-70 -170.62)"
                  fill="#fff"
                />
              </svg>
            </div>
            <h1>{serviceSlide.name}</h1>
            <p>{serviceSlide.text}</p>
            <div
              className={styles.button}
              onClick={() => {
                router.push("/servicios");
              }}
            >
              {t("learnMore")}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeServicios;
