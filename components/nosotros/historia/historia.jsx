import styles from "./historia.module.scss";

const Historia = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftWrapper}>
        <h1>Historia</h1>
        <p>
          La empresa Haster Logística S. de R.L. de C.V. inició el 3 de marzo
          del 2010, con su primer vehículo, al principio solo se dedicaba al
          transporte local de mercancía cinco años más tarde el fundador de la
          compañía Jose Luis García, compra su primer camión realizando
          movimientos locales para empresas maquiladoras.
        </p>
        <p>
          Debido a la demanda de movimientos en el año del 2018 empieza la
          implementación de Haster en el servicio de consolidado abriendo
          sucursal en Ciudad Juárez y Chihuahua el circuito de CUU-JRZ y JRS-CUU
          empieza operaciones a finales del 2018 siendo un éxito, un año después
          se apertura importación a el Paso TX.
        </p>
        <p>
          En la ctualidad Haster cuenta con los mismos servicios además de
          contar con Hand Carrier, que consiste en realizar entregas urgentes a
          nivel mundial.
        </p>
        <p>
          La confianza de nuestros clientes ha permitido que Haster contiúe en
          crecimiento.
        </p>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default Historia;
