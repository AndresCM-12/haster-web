import styles from "./historia.module.scss";

const Historia = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftWrapper}>
        <h1>Historia</h1>
        <p>
          Haster logística inicia operaciones en Cd. Chihuahua, Chih. El 3 de
          marzo de 2010, ofreciendo servicios de transporte de mercancías vía
          terrestre en modalidad de camión completo (FTL), en el año 2012
          comienza a ofrecer servicios de carga consolidado (LTL) entre Cd.
          Juarez y Cd. Chihuahua, en ese mismo año se inician las operaciones de
          fletes de Importación / Exportación en la frontera entre Cd. Juarez y
          El Paso TX.
        </p>
        <p>
          A la fecha Haster Logística ha expandido su portafolio de servicios
          tales como servicios de carga aérea doméstica e internacional, Hand
          Carrier y servicios de almacenaje y distribución.
        </p>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default Historia;
