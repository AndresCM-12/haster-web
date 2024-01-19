import Head from "next/head";
import Certificaciones from "../../components/nosotros/certificaciones/certificaciones";
import Clientes from "../../components/nosotros/clientes/clientes";
import Historia from "../../components/nosotros/historia/historia";
import Valores from "../../components/nosotros/valores/valores";
import MainBanner from "../../components/servicios/MainBanner/MainBanner";
import { useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Haster | {t("about")}</title>
      </Head>
      <MainBanner title={t("about")} url={"/images/NosotrosBanner.png"} />
      <Valores />
      <Historia />
      <Certificaciones />
      <Clientes />
    </div>
  );
}
