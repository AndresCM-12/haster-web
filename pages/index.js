import Head from "next/head";
import HomeBanner from "../components/home/Banner";
import FormFooter from "../components/home/form/FormFooter";
import HomeNumbers from "../components/home/numbers/Numbers";
import HomeMainServices from "../components/home/services/HomeMainServices";
import HomeServicios from "../components/home/servicios/HomeServicios";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haster Logistics</title>
      </Head>
      <HomeBanner />
      <HomeServicios />
      <HomeNumbers />
      <HomeMainServices />
      <FormFooter />
    </>
  );
}
