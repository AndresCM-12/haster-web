import MainBanner from "../../components/servicios/MainBanner/MainBanner";
import MainWrapper from "../../components/contacto/MainWrapper/MainWrapper";
import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Haster | Contacto</title>
      </Head>
      <MainBanner title={""} url={"/images/ContactoBanner.png"} />
      <MainWrapper />
    </>
  );
}
