import { useEffect } from "react";
import styles from "./MainWrapper.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MainWrapper = () => {
  const { t } = useTranslation();

  useEffect(() => {}, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.mainWrapperContact}
    >
      <div className={styles.textWrapper}>
        <h1>{t("contactUs")}</h1>

        <div className={styles.section}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18.001"
              viewBox="0 0 18 18.001"
            >
              <path
                id="Path_125"
                data-name="Path 125"
                d="M315.2-4.3h1.055c.232.027.464.049.7.083a8.776,8.776,0,0,1,5.359,2.79A8.766,8.766,0,0,1,324.643,5.9a8.574,8.574,0,0,1-2.784,5.378,8.772,8.772,0,0,1-7.814,2.256,8.655,8.655,0,0,1-4.981-2.789,8.759,8.759,0,0,1-2.2-4.514c-.057-.333-.092-.67-.137-1V4.171c.011-.062.023-.124.032-.186.044-.325.07-.652.132-.973a8.838,8.838,0,0,1,2.793-4.978,8.758,8.758,0,0,1,4.512-2.2C314.529-4.223,314.866-4.259,315.2-4.3Zm-4.215,6.619a3.492,3.492,0,0,0,.359,1.418,9.865,9.865,0,0,0,2.094,3.031A9.437,9.437,0,0,0,317.509,9.3a2.386,2.386,0,0,0,1.742-.145,3.925,3.925,0,0,0,1.041-.852.4.4,0,0,0,0-.665q-.78-.786-1.565-1.567a.4.4,0,0,0-.666,0c-.285.286-.566.577-.852.863a.82.82,0,0,1-1.142.089,11.849,11.849,0,0,1-2.625-2.572.818.818,0,0,1,.078-1.181c.292-.3.589-.587.882-.883a.4.4,0,0,0,.008-.641q-.792-.8-1.591-1.591a.4.4,0,0,0-.641.005c-.155.151-.308.306-.46.46A2.438,2.438,0,0,0,310.987,2.315Z"
                transform="translate(-306.727 4.304)"
                fill="#c30101"
              />
            </svg>
          </div>
          <p>{t("phonen")}</p>
        </div>

        <div className={styles.section}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12.647"
              viewBox="0 0 18 12.647"
            >
              <g
                id="Group_22"
                data-name="Group 22"
                transform="translate(-86.266 -348.478)"
              >
                <path
                  id="Path_126"
                  data-name="Path 126"
                  d="M112.357,348.478h15.257l.446.14c-.054.059-.087.1-.123.135l-7.478,7.5a.619.619,0,0,1-.944,0l-6.909-6.922c-.227-.227-.459-.448-.717-.7Z"
                  transform="translate(-24.72 0)"
                  fill="#c30101"
                />
                <path
                  id="Path_127"
                  data-name="Path 127"
                  d="M86.266,375.132l.145-.447,5.438,5.385-5.442,5.385-.141-.418Z"
                  transform="translate(0 -25.284)"
                  fill="#c30101"
                />
                <path
                  id="Path_128"
                  data-name="Path 128"
                  d="M112.7,555.735l5.44-5.38c.015.014.062.055.106.1q.645.646,1.29,1.293a1.668,1.668,0,0,0,2.468,0c.473-.471.947-.94,1.4-1.389l5.458,5.4c-.214.047-.392.09-.572.123a1.155,1.155,0,0,1-.21.005H113.462A1.583,1.583,0,0,1,112.7,555.735Z"
                  transform="translate(-25.505 -194.766)"
                  fill="#c30101"
                />
                <path
                  id="Path_129"
                  data-name="Path 129"
                  d="M438.548,380.517l5.44-5.384a1.417,1.417,0,0,1,.151.675q0,1.878,0,3.756,0,2.817,0,5.634a1.519,1.519,0,0,1-.152.706Z"
                  transform="translate(-339.874 -25.716)"
                  fill="#c30101"
                />
              </g>
            </svg>
          </div>
          <p>info@hasterlogis.com</p>
        </div>

        <div className={styles.section}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.075"
              height="17.594"
              viewBox="0 0 14.075 17.594"
            >
              <path
                id="location_on_FILL1_wght400_GRAD0_opsz48"
                d="M15.038,12.577a1.54,1.54,0,0,0,1.089-2.628,1.54,1.54,0,0,0-2.177,2.177A1.483,1.483,0,0,0,15.038,12.577Zm0,9.017A29.244,29.244,0,0,1,9.748,16,8.7,8.7,0,0,1,8,11.214a6.8,6.8,0,0,1,2.122-5.256,7.15,7.15,0,0,1,9.831,0,6.8,6.8,0,0,1,2.122,5.256A8.7,8.7,0,0,1,20.327,16,29.244,29.244,0,0,1,15.038,21.594Z"
                transform="translate(-8 -4)"
                fill="#c30101"
              />
            </svg>
          </div>
          <p>
            <strong>Ave de las Industrias 6504-29</strong>
          </p>
          <p>
            <strong>Nombre de Dios</strong>
          </p>
          <p>Chihuahua, Chih. C.P. 31150</p>
        </div>

        <div className={styles.section}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.075"
              height="17.594"
              viewBox="0 0 14.075 17.594"
            >
              <path
                id="location_on_FILL1_wght400_GRAD0_opsz48"
                d="M15.038,12.577a1.54,1.54,0,0,0,1.089-2.628,1.54,1.54,0,0,0-2.177,2.177A1.483,1.483,0,0,0,15.038,12.577Zm0,9.017A29.244,29.244,0,0,1,9.748,16,8.7,8.7,0,0,1,8,11.214a6.8,6.8,0,0,1,2.122-5.256,7.15,7.15,0,0,1,9.831,0,6.8,6.8,0,0,1,2.122,5.256A8.7,8.7,0,0,1,20.327,16,29.244,29.244,0,0,1,15.038,21.594Z"
                transform="translate(-8 -4)"
                fill="#c30101"
              />
            </svg>
          </div>
          <p>
            <strong>Santiago Troncoso No. 200 Bodega 8</strong>
          </p>
          <p>
            <strong>Col. Praderas del Sur</strong>
          </p>
          <p>Cd. Juárez, Chih. C.P. 32575 </p>
        </div>

        <div className={styles.section}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.075"
              height="17.594"
              viewBox="0 0 14.075 17.594"
            >
              <path
                id="location_on_FILL1_wght400_GRAD0_opsz48"
                d="M15.038,12.577a1.54,1.54,0,0,0,1.089-2.628,1.54,1.54,0,0,0-2.177,2.177A1.483,1.483,0,0,0,15.038,12.577Zm0,9.017A29.244,29.244,0,0,1,9.748,16,8.7,8.7,0,0,1,8,11.214a6.8,6.8,0,0,1,2.122-5.256,7.15,7.15,0,0,1,9.831,0,6.8,6.8,0,0,1,2.122,5.256A8.7,8.7,0,0,1,20.327,16,29.244,29.244,0,0,1,15.038,21.594Z"
                transform="translate(-8 -4)"
                fill="#c30101"
              />
            </svg>
          </div>
          <p>
            <strong>9300 Billy The Kid St. # 100</strong>
          </p>
          <p>El Paso. TX. C.P. 79907, EUA.</p>
        </div>

        <div className={styles.section}>
          <p>{t("findUsAt")}</p>
          <div className={styles.socialMedia}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g id="linkedin-seeklogo.com" transform="translate(-70.48 -74)">
                  <path
                    id="Path_143"
                    data-name="Path 143"
                    d="M92.061,74H72.9a2.409,2.409,0,0,0-2.419,2.4V95.6A2.409,2.409,0,0,0,72.9,98H92.061a2.409,2.409,0,0,0,2.419-2.4V76.4A2.41,2.41,0,0,0,92.061,74ZM78.181,92.991H74.953V82.724h3.229ZM76.545,81.465a1.6,1.6,0,1,1,1.742-1.6A1.6,1.6,0,0,1,76.545,81.465ZM89.97,92.991H86.741V87.3c0-1.323-.468-2.225-1.636-2.225a1.771,1.771,0,0,0-1.657,1.2,2.266,2.266,0,0,0-.106.8v5.92H80.113V86c0-1.28-.042-2.351-.085-3.275h2.8l.149,1.428h.064a3.74,3.74,0,0,1,3.208-1.658c2.125,0,3.717,1.407,3.717,4.43v6.069Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <div
              onClick={() => {
                //on click navigate to facebook
                window.open(
                  "https://www.facebook.com/profile.php?id=100075860441537&mibextid=ZbWKwL",
                  "_blank"
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.335"
                height="24.335"
                viewBox="0 0 24.335 24.335"
              >
                <g
                  id="facebook-icon-seeklogo.com"
                  transform="translate(-92 -93)"
                >
                  <path
                    id="Path_142"
                    data-name="Path 142"
                    d="M113.056,93H95.279A3.279,3.279,0,0,0,92,96.279v17.776a3.279,3.279,0,0,0,3.279,3.279h8.767l.015-8.7H101.8a.532.532,0,0,1-.533-.531l-.011-2.8a.533.533,0,0,1,.533-.535h2.255v-2.709c0-3.143,1.92-4.855,4.724-4.855h2.3a.533.533,0,0,1,.533.533V100.1a.533.533,0,0,1-.533.533h-1.412c-1.525,0-1.82.725-1.82,1.788v2.345h3.351a.533.533,0,0,1,.529.6l-.333,2.8a.533.533,0,0,1-.529.47h-3l-.015,8.7h5.217a3.279,3.279,0,0,0,3.279-3.279V96.277A3.279,3.279,0,0,0,113.056,93Zm0,0"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <div
              onClick={() => {
                //on click navigate to facebook
                window.open(
                  "https://wa.me/526145359194?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
                  "_blank"
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.295"
                height="24.557"
                viewBox="0 0 24.295 24.557"
              >
                <g id="whatsapp" transform="translate(-92.18 -89.87)">
                  <path
                    id="Path_144"
                    data-name="Path 144"
                    d="M104.5,89.87a11.97,11.97,0,0,0-11.97,11.97,13.8,13.8,0,0,0,1.737,6.213l-2.092,6.374,6.559-2.1a12.134,12.134,0,0,0,5.767,1.478,11.97,11.97,0,1,0,0-23.939Zm0,22.024a10.991,10.991,0,0,1-5.541-1.663l-3.781,1.233,1.227-3.66a11.431,11.431,0,0,1-1.959-5.964A10.054,10.054,0,1,1,104.5,111.894Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_145"
                    data-name="Path 145"
                    d="M209.414,205.435a1.4,1.4,0,0,1,.492-.205h.943a.538.538,0,0,1,.369.307c.116.264.911,2.131.97,2.276a.787.787,0,0,1-.034.82c-.248.319-.765.916-.765.916a.369.369,0,0,0-.027.478,9.569,9.569,0,0,0,1.62,2,7.717,7.717,0,0,0,2.317,1.435c.5.164.608-.055.8-.3s.786-1,.786-1a.47.47,0,0,1,.608-.116c.4.185,2.364,1.134,2.364,1.134a.318.318,0,0,1,.253.307,2.144,2.144,0,0,1-.533,1.831,3.575,3.575,0,0,1-2.938.922,11.507,11.507,0,0,1-4.625-2.258,15.168,15.168,0,0,1-3.3-4.072,3.94,3.94,0,0,1-.454-2.092A3.308,3.308,0,0,1,209.414,205.435Z"
                    transform="translate(-109.467 -108.807)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactWrapper}>
        <h1>{t("writeUsFor")}</h1>
        <form
          action="https://formsubmit.co/info@hasterlogis.com"
          method="POST"
        >
          <label htmlFor="name">{t("name")}:</label>
          <input name="name" type="text" />

          <label htmlFor="company">{t("company")}:</label>
          <input name="company" type="text" />

          <label htmlFor="email">{t("email")}:</label>
          <input name="email" type="email" />

          <label htmlFor="phone">{t("phone")}:</label>
          <input name="phone" type="text" />

          <label htmlFor="message">{t("message")}:</label>
          <input className={styles.message} name="message" type="text" />
          <button type="submit">{t("send")}</button>
        </form>
      </div>
    </motion.div>
  );
};
export default MainWrapper;
