import styles from "./MainBanner.module.scss";

const MainBanner = ({ title, url }) => {
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
        <div></div>
        <div className={styles.textWrapper}>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};
export default MainBanner;
