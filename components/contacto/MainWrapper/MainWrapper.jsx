import styles from "./MainWrapper.module.scss";

const MainWrapper = () => {
  return (
    <div className={styles.mainWrapperContact}>
      <div className={styles.textWrapper}>
        <h1>Contáctanos</h1>

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
          <p>Tel. (52) 614 389 55 97/98 </p>
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
          <div className={styles.icon}></div>
          <p>
            <strong>Ave de las Industrias 6504-29</strong>
          </p>
          <p>
            <strong>Nombre de Dios</strong>
          </p>
          <p>Chihuahua, Chih. C.P. 31150</p>
        </div>

        <div className={styles.section}>
          <p>Búscanos en:</p>
          <div className={styles.socialMedia}></div>
        </div>
      </div>
      <div className={styles.contactWrapper}>
        <h1>Escríbenos para cualquier duda</h1>
        <form action="none">
          <label htmlFor="name">Nombre:</label>
          <input name="name" type="text" />

          <label htmlFor="company">Compañía:</label>
          <input name="company" type="text" />

          <label htmlFor="email">Email:</label>
          <input name="email" type="text" />

          <label htmlFor="phone">Teléfono:</label>
          <input name="phone" type="text" />

          <label htmlFor="message">Mensaje</label>
          <input className={styles.message} name="message" type="text" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};
export default MainWrapper;
