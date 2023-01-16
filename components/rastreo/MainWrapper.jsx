import styles from "./MainWrapper.module.scss";

const MainWrapper = () => {
  return (
    <div className={styles.mainWrapperRastreo}>
      <div className={styles.searchWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.selected}>
            <h1>Rastre tu envío</h1>
          </div>
          <div>
            <h1>Cotiza con nosotros</h1>
          </div>
        </div>
        <input
          placeholder="Introduce hasta 30 números de rastreo, guía y/o referencia"
          type="text"
        />
        <button>Rastrear</button>
      </div>
      <p>¿Qué Es un Número de Rastreo y Dónde Puedo Encontrarlo?</p>
      <p>¿Puedo rastrear mi embarque si no tengo un número de rastreo? </p>
    </div>
  );
};
export default MainWrapper;
