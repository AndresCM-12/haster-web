import { useTranslation } from "react-i18next";
import styles from "./MainBanner.module.scss";

const MainBanner = ({ title, url }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={styles.MainWrapper}
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.emtpy}></div>
        <div className={styles.textWrapper}>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};
export default MainBanner;
