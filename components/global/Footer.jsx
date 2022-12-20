const Footer = () => {
  //Inner components
  const Services = () => {
    return (
      <>
        <p>Fletes de importación y Exportación</p>
        <p>|</p>
        <p>Almacenamiento en bodega.</p>
        <p>|</p>
        <p>Hand Carrier</p>
        <p>|</p>
        <p>Servicio de Carga Aérea Nacional e Internacional</p>
        <p>|</p>
        <p>Servicio de carga FLT</p>
        <p>|</p>
        <p>Servicio de carga LTL</p>
      </>
    );
  };

  return (
    <footer id="globalFooter">
      <div className="services">
        <Services />
      </div>
      <div className="main--wrapper">
        <div className="icon"></div>
        <div>
          <h6>Nav</h6>
          <ul>
            <li>Servicios</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="separator"></div>
        <div>
          <h6>Certificacion</h6>
          <ul>
            <li>ISO 9001-2015</li>
            <li>CTPAT</li>
          </ul>
        </div>
        <div>
          <h6>Contacto</h6>
          <ul>
            <li>Tel. 614 389 55(97/98)</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div>
          <h6>Políticas de privacidad</h6>
          <ul>
            <li>Política de envíos</li>
          </ul>
        </div>
        <div className="redes--sociales--wrapper">
          <p>in</p>
          <p>f</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
