import Certificaciones from "../../components/nosotros/certificaciones/certificaciones";
import Clientes from "../../components/nosotros/clientes/clientes";
import Historia from "../../components/nosotros/historia/historia";
import Valores from "../../components/nosotros/valores/valores";
import MainBanner from "../../components/servicios/MainBanner/MainBanner";

export default function Nosotros() {
  return (
    <div>
      <MainBanner title={"Nosotros"} url={'/images/NosotrosBanner.png'} />
      <Valores />
      <Historia />
      <Certificaciones />
      <Clientes />
    </div>
  );
}
