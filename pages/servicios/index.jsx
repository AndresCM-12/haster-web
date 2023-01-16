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
          image:
            "https://actualidadaeroespacial.com/wp-content/uploads/2021/08/AITIIP-desarrolla-tecnologias-inteligentes-para-producir-un-ala-de-avion-hibrida-y-sostenible-310821-scaled.jpg",
        },
        {
          text: `Servicio de Carga Completa (FTL).`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Servicio de Carga Consolidada (LTL).`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Especializado.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Expediente.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Importación y Exportación Terrestre.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Operación y atención de Proyectos Especiales.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Recolección y entrega "Just in Time".`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Entrega garantizada.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Team Time drivers.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Seguro de mercancías.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
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
          text: `Transporte Aéreo de Carga Domestica.`,
          image:
            "https://actualidadaeroespacial.com/wp-content/uploads/2021/08/AITIIP-desarrolla-tecnologias-inteligentes-para-producir-un-ala-de-avion-hibrida-y-sostenible-310821-scaled.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
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
          text: `Transporte Aéreo de Carga Domestica.`,
          image:
            "https://actualidadaeroespacial.com/wp-content/uploads/2021/08/AITIIP-desarrolla-tecnologias-inteligentes-para-producir-un-ala-de-avion-hibrida-y-sostenible-310821-scaled.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
        {
          text: `Transporte Domestica e internacional.`,
          image:
            "https://www.viveusa.mx/sites/default/files/field/image/camiones_autonomos_texas_afp.jpg",
        },
      ],
      secondary: false,
    },
  ];
  return (
    <>
      <MainBanner title={'Servicios'} url={'/images/ServiciosBanner.png'}/>
      {listOfServices.map((service, index) => (
        <ServicesWrapper key={index} service={service} />
      ))}
    </>
  );
}
