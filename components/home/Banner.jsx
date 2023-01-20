import { useRouter } from "next/router";
import styles from "./HomeBanner.module.scss";
const HomeBanner = () => {
  const router = useRouter();
  return (
    <>
      <section className={styles.mainBanner}>
        <div className={styles.emptyDiv}></div>
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
          <div onClick={()=>{router.push('/contacto')}} className="button">
            <p>Contáctanos</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
