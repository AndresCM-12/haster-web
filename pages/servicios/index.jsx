import Head from "next/head";
import MainBanner from "../../components/servicios/MainBanner/MainBanner";
import ServicesWrapper from "../../components/servicios/ServicesWrapper/ServicesWrapper";
import { useTranslation } from "react-i18next";

export default function Servicios() {
  const { t } = useTranslation();

  const listOfServices = [
    {
      title: t("landTrans"),
      type: t("transportation"),
      text: t("offersLandTrans"),
      services: [
        {
          text: t("doorToDoorService"),
          image: "/images/servicios/20.png",
        },
        { text: t("fullTruckLoad"), image: "/images/servicios/11.png" },
        {
          text: t("lessThanTruckLoad"),
          image: "/images/servicios/02.png",
        },
        {
          text: t("specialized"),
          image: "/images/servicios/22.png",
        },
        {
          text: t("expedited"),
          image: "/images/servicios/05.png",
        },
        {
          text: t("lanImportAndExport"),
          image: "/images/servicios/19.png",
        },
        {
          text: t("operationAndAttention"),
          image: "/images/servicios/01.png",
        },
        { text: t("justInTime"), image: "/images/servicios/16.png" },
        {
          text: t("guarantedDelivery"),
          image: "/images/servicios/08.png",
        },
        {
          text: t("teamTimeDrivers"),
          image: "/images/servicios/03.png",
        },
        {
          text: t("merchandiseInsurance"),
          image: "/images/servicios/15.png",
        },
      ],
      secondary: false,
    },
    {
      title: t("airTrans"),
      type:  t("transportation"),
      text: t("domesticAndInterAir"),
      services: [
        {
          text: t("domesticAreaCargo"),
          image: "/images/servicios/21.png",
        },
        {
          text: t("internationalAreaCargo"),
          image: "/images/servicios/06.png",
        },
        {
          text: t("charterFlights"),
          image: "/images/servicios/00.png",
        },
        {
          text: t("handCarrier"),
          image: "/images/servicios/07.png",
        },
        {
          text: t("doorToDoorService"),
          image: "/images/servicios/17.png",
        },
        {
          text: t("priorityService"),
          image: "/images/servicios/13.png",
        },
        {
          text: t("nextFlightOut"),
          image: "/images/servicios/05.png",
        },
        {
          text: t("merchandiseInsurance"),
          image: "/images/servicios/09.png",
        },
      ],
      secondary: true,
    },
    {
      subtitle: t("specializedWarehousing"),
      type: t("serviceA"),
      text: t("specializedWarehousingDist"),
      services: [
        {
          text: t("wareHousing"),
          image: "/images/servicios/25.png",
        },
        {
          text: t("goodsPickUp"),
          image: "/images/servicios/18.png",
        },
        {
          text: t("disAndTrans"),
          image: "/images/servicios/12.png",
        },
        {
          text: t("deliveryToClients"),
          image: "/images/servicios/04.png",
        },
        {
          text: t("deliverToDistCent"),
          image: "/images/servicios/20.png",
        },
        {
          text: t("consolidatedRoutes"),
          image: "/images/servicios/03.png",
        },
        {
          text: t("crossDock"),
          image: "/images/servicios/05.png",
        },
        {
          text: t("unloadingAndLoading"),
          image: "/images/servicios/10.png",
        },
        {
          text: t("stayFrom24"),
          image: "/images/servicios/22.png",
        },
      ],
      secondary: false,
    },
  ];
  return (
    <>
      <Head>
        <title>Haster | {t("services")}</title>
      </Head>
      <MainBanner title={t("services")} url={"/images/ServiciosBanner.png"} />
      {listOfServices.map((service, index) => (
        <ServicesWrapper key={index} service={service} />
      ))}
    </>
  );
}
