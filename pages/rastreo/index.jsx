import MainBanner from "../../components/servicios/MainBanner/MainBanner";
import MainWrapper from "../../components/rastreo/MainWrapper";
import Head from "next/head";

export default function Rastreo() {
  return (
    <>
      <Head>
        <title>Haster | Rastreo</title>
      </Head>
      <MainBanner title={""} url={"/images/RastreoBanner.png"} />
      <MainWrapper />
    </>
  );
}
