import styles from "./HomeBanner.module.scss";
const HomeBanner = () => {
  return (
    <>
      <section className={styles.mainBanner}>
        <div></div>
        <div className="right--text--wrapper">
          <h1>
            Tu mejor aliado en servicios <br />
            de logística y transporte
          </h1>
          <h6>
            La logística cubre casi todas las actividades de las organizaciones.
            Una correcta administración de logística permite reducir
            significativamente los costos y aumentar la competitividad en un
            mundo globalizado.
          </h6>
          <div className="button">
            <p>Contáctanos</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
