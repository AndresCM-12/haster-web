import Head from "next/head";
import MainBanner from "../../components/servicios/MainBanner/MainBanner";
import ServicesWrapper from "../../components/servicios/ServicesWrapper/ServicesWrapper";

export default function Servicios() {
  const listOfServices = [
    {
      title: "Terrestre",
      type: "Transporte",
      text: `Haster Logística ofrece soluciones de transporte terrestre en todo el territorio mexicano y el Sur de Estados Unidos de América, ofreciendo el correcto manejo de flujos de cargos terrestre desde origen hasta destino, ofreciendo servicios con valor agregado como, seguros de carga, asesoría, servicios de cross dock.`,
      services: [
        {
          text: `Servicio Puerta a puerta.`,
          image: "/images/servicios/20.png",
        },
        {
          text: `Servicio de Carga Completa
          (FTL).`,
          image: "/images/servicios/11.png",
        },
        {
          text: `Servicio de Carga Consolidada (LTL).`,
          image: "/images/servicios/02.png",
        },
        {
          text: `Especializado.`,
          image: "/images/servicios/22.png",
        },
        {
          text: `Expeditado.`,
          image: "/images/servicios/05.png",
        },
        {
          text: `Importación y Exportación Terrestre.`,
          image: "/images/servicios/19.png",
        },
        {
          text: `Operación y atención de Proyectos Especiales.`,
          image: "/images/servicios/01.png",
        },
        {
          text: `Recolección y entrega "Just in Time".`,
          image: "/images/servicios/16.png",
        },
        {
          text: `Entrega garantizada.`,
          image: "/images/servicios/08.png",
        },
        {
          text: `Team Time drivers.`,
          image: "/images/servicios/03.png",
        },
        {
          text: `Seguro de mercancías.`,
          image: "/images/servicios/15.png",
        },
      ],
      secondary: false,
    },
    {
      title: "Aéreo",
      type: "Transporte",
      text: `Transporte Aéreo de Carga Doméstica e Internacional
      Servicio de Transportación Aérea Doméstica e Internacional eficiente y flexible, el cual se ajusta a las distintas necesidades de operación de nuestros clientes. 
      Una amplia base de experiencia en servicios de transportación aérea, nos permite garantizar la satisfacción de todas las necesidades de todos nuestros clientes. 
      `,
      services: [
        {
          text: `Carga Área Nacional.`,
          image: "/images/servicios/21.png",
        },
        {
          text: `Carga Aérea Internacional.`,
          image: "/images/servicios/06.png",
        },
        {
          text: `Vuelos Charter.`,
          image: "/images/servicios/00.png",
        },
        {
          text: `Hand Carrier.`,
          image: "/images/servicios/07.png",
        },
        {
          text: `Servicio Puerta-Puerta.`,
          image: "/images/servicios/17.png",
        },
        {
          text: `Servicio Priority.`,
          image: "/images/servicios/13.png",
        },
        {
          text: `Next Flight Out.`,
          image: "/images/servicios/05.png",
        },
        {
          text: `Seguro de mercancía`,
          image: "/images/servicios/09.png",
        },
      ],
      secondary: true,
    },
    {
      subtitle: "Especializado de almacenaje y distribución",
      type: "Servicio",
      text: `Servicio especializado de Almacenaje y Distribución, con operación las 24 hrs. los 7 días de la semana.
      Brindamos el servicio logístico de manera integral, con personal altamente capacitado y con herramientas de última tecnología. 
      `,
      services: [
        {
          text: `Almacenaje.`,
          image: "/images/servicios/25.png",
        },
        {
          text: `Recolección de mercancías.`,
          image: "/images/servicios/18.png",
        },
        {
          text: `Distribución y transporte.`,
          image: "/images/servicios/12.png",
        },
        {
          text: `Entregas a Clientes, unidades
          dedicadas y consolidadas.`,
          image: "/images/servicios/04.png",
        },
        {
          text: `Entregas a CEDIS.`,
          image: "/images/servicios/20.png",
        },
        {
          text: `Rutas consolidadas.`,
          image: "/images/servicios/03.png",
        },
        {
          text: `Cross Docking.`,
          image: "/images/servicios/05.png",
        },
        {
          text: `Operaciones de descarga y
          carga en andén.`,
          image: "/images/servicios/10.png",
        },
        {
          text: `Estadía de 24 a 72 horas.`,
          image: "/images/servicios/22.png",
        },
      ],
      secondary: false,
    },
  ];
  return (
    <>
      <Head>
        <title>Haster | Servicios</title>
      </Head>
      <MainBanner title={"Servicios"} url={"/images/ServiciosBanner.png"} />
      {listOfServices.map((service, index) => (
        <ServicesWrapper key={index} service={service} />
      ))}
    </>
  );
}
