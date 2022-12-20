import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header id="globalHeader">
      <div className="logo--wrapper"></div>
      <nav>
        <ul>
          <li>SERVICIOS</li>
          <li>NOSOTROS</li>
          <li>CONTACTO</li>
          <li>RASTREAR MI PAQUETE</li>
        </ul>
      </nav>
      <div className="right--section--wrapper">
        <div className="button">
          <p>Solicitar cotización</p>
        </div>
        <div className="right--section--wrapper--icon">
          <p>in</p>
          <p>f</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
