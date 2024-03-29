import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import esrImage from "../../public/images/esr.png";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation();
  const Services = () => {
    return (
      <div className="services">
        <p>{t("importAndExport")}</p>
        <p>|</p>
        <p>{t("wareHousing")}</p>
        <p>|</p>
        <p>{t("handCarrier")}</p>
        <p>|</p>
        <p>{t("domesticAndAir")}</p>
        <p>|</p>
        <p>{t("ftlCargoService")}</p>
        <p>|</p>
        <p>{t("ltlCargoService")}</p>
      </div>
    );
  };

  return (
    <motion.footer
      initial={{ paddingTop: 260 }}
      whileInView={{ paddingTop: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="globalFooter"
    >
      <div className="services--wrapper">
        <Services />
      </div>
      <div className="main--wrapper">
        <div className="icon">
          <Icon />
        </div>
        <div>
          <h6>Nav</h6>
          <ul>
            <Link href={"/servicios"}>
              <li>{t("service")}</li>
            </Link>
            <Link href={"/nosotros"}>
              <li>{t("aboutus")}</li>
            </Link>
            <Link href={"/contacto"}>
              <li>{t("contact")}</li>
            </Link>
          </ul>
        </div>
        <div className="separator"></div>
        <div className="child-section">
          <h6>{t("certification")}</h6>
          <ul>
            <li>ISO 9001-2015</li>
            <li>CTPAT</li>
            <li>ESR</li>
          </ul>
        </div>
        <div className="child-section">
          <h6>{t("contactUs")}</h6>
          <ul>
            <li>{t("phonen")}</li>
            <li>info@hasterlogis.com</li>
          </ul>
        </div>
        <div className="child-section">
          <h6>{t("privacyPolicy")}</h6>
          <ul>
            <li>{t("shipmentPolicy")}</li>
          </ul>
        </div>
        <div className="redes--sociales--wrapper">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="linkedin-seeklogo.com" transform="translate(-70.48 -74)">
                <path
                  id="Path_143"
                  data-name="Path 143"
                  d="M92.061,74H72.9a2.409,2.409,0,0,0-2.419,2.4V95.6A2.409,2.409,0,0,0,72.9,98H92.061a2.409,2.409,0,0,0,2.419-2.4V76.4A2.41,2.41,0,0,0,92.061,74ZM78.181,92.991H74.953V82.724h3.229ZM76.545,81.465a1.6,1.6,0,1,1,1.742-1.6A1.6,1.6,0,0,1,76.545,81.465ZM89.97,92.991H86.741V87.3c0-1.323-.468-2.225-1.636-2.225a1.771,1.771,0,0,0-1.657,1.2,2.266,2.266,0,0,0-.106.8v5.92H80.113V86c0-1.28-.042-2.351-.085-3.275h2.8l.149,1.428h.064a3.74,3.74,0,0,1,3.208-1.658c2.125,0,3.717,1.407,3.717,4.43v6.069Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div
            onClick={() => {
              //on click navigate to facebook
              window.open(
                "https://www.facebook.com/profile.php?id=100075860441537&mibextid=ZbWKwL",
                "_blank"
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.335"
              height="24.335"
              viewBox="0 0 24.335 24.335"
            >
              <g id="facebook-icon-seeklogo.com" transform="translate(-92 -93)">
                <path
                  id="Path_142"
                  data-name="Path 142"
                  d="M113.056,93H95.279A3.279,3.279,0,0,0,92,96.279v17.776a3.279,3.279,0,0,0,3.279,3.279h8.767l.015-8.7H101.8a.532.532,0,0,1-.533-.531l-.011-2.8a.533.533,0,0,1,.533-.535h2.255v-2.709c0-3.143,1.92-4.855,4.724-4.855h2.3a.533.533,0,0,1,.533.533V100.1a.533.533,0,0,1-.533.533h-1.412c-1.525,0-1.82.725-1.82,1.788v2.345h3.351a.533.533,0,0,1,.529.6l-.333,2.8a.533.533,0,0,1-.529.47h-3l-.015,8.7h5.217a3.279,3.279,0,0,0,3.279-3.279V96.277A3.279,3.279,0,0,0,113.056,93Zm0,0"
                  transform="translate(0 0)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div
            onClick={() => {
              //on click navigate to facebook
              window.open(
                "https://wa.me/526145359194?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios",
                "_blank"
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.295"
              height="24.557"
              viewBox="0 0 24.295 24.557"
            >
              <g id="whatsapp" transform="translate(-92.18 -89.87)">
                <path
                  id="Path_144"
                  data-name="Path 144"
                  d="M104.5,89.87a11.97,11.97,0,0,0-11.97,11.97,13.8,13.8,0,0,0,1.737,6.213l-2.092,6.374,6.559-2.1a12.134,12.134,0,0,0,5.767,1.478,11.97,11.97,0,1,0,0-23.939Zm0,22.024a10.991,10.991,0,0,1-5.541-1.663l-3.781,1.233,1.227-3.66a11.431,11.431,0,0,1-1.959-5.964A10.054,10.054,0,1,1,104.5,111.894Z"
                  fill="#fff"
                />
                <path
                  id="Path_145"
                  data-name="Path 145"
                  d="M209.414,205.435a1.4,1.4,0,0,1,.492-.205h.943a.538.538,0,0,1,.369.307c.116.264.911,2.131.97,2.276a.787.787,0,0,1-.034.82c-.248.319-.765.916-.765.916a.369.369,0,0,0-.027.478,9.569,9.569,0,0,0,1.62,2,7.717,7.717,0,0,0,2.317,1.435c.5.164.608-.055.8-.3s.786-1,.786-1a.47.47,0,0,1,.608-.116c.4.185,2.364,1.134,2.364,1.134a.318.318,0,0,1,.253.307,2.144,2.144,0,0,1-.533,1.831,3.575,3.575,0,0,1-2.938.922,11.507,11.507,0,0,1-4.625-2.258,15.168,15.168,0,0,1-3.3-4.072,3.94,3.94,0,0,1-.454-2.092A3.308,3.308,0,0,1,209.414,205.435Z"
                  transform="translate(-109.467 -108.807)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
        <Image
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
          background: "transparent",
        }}
        src={esrImage}
        alt="ESR"
      />
      </div>
    </motion.footer>
  );
};
const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="82.421"
      height="94.096"
      viewBox="0 0 82.421 94.096"
    >
      <g
        id="Group_23"
        data-name="Group 23"
        transform="translate(-61.222 -69.894)"
      >
        <g
          id="Group_3"
          data-name="Group 3"
          transform="translate(62.827 148.549)"
        >
          <path
            id="Path_3"
            data-name="Path 3"
            d="M64.357,224.277h2v6.051h7.527v-6.051h2v14.645h-2v-6.849H66.361v6.849h-2Z"
            transform="translate(-64.357 -223.908)"
            fill="#fff"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M96.123,224.277h2.243l5.313,14.645h-2.173l-1.485-4.387H94.229l-1.585,4.387H90.61Zm3.26,8.643-2.223-6.47L94.8,232.92Z"
            transform="translate(-77.172 -223.908)"
            fill="#fff"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M120.421,233.844a4.11,4.11,0,0,0,.567,2.023,3.7,3.7,0,0,0,3.351,1.456A5.741,5.741,0,0,0,126.3,237a2.245,2.245,0,0,0,1.709-2.213,1.935,1.935,0,0,0-.724-1.705,7.18,7.18,0,0,0-2.3-.868l-1.922-.448a8.545,8.545,0,0,1-2.666-.966,3.1,3.1,0,0,1-1.352-2.742,4.279,4.279,0,0,1,1.329-3.24,5.244,5.244,0,0,1,3.764-1.266,6.412,6.412,0,0,1,3.807,1.112,4.055,4.055,0,0,1,1.567,3.554h-1.864a3.77,3.77,0,0,0-.612-1.8,3.479,3.479,0,0,0-2.953-1.147,3.325,3.325,0,0,0-2.418.738,2.356,2.356,0,0,0-.736,1.715,1.684,1.684,0,0,0,.869,1.575,12.467,12.467,0,0,0,2.579.8l1.99.468a5.992,5.992,0,0,1,2.222.927,3.514,3.514,0,0,1,1.352,2.981,3.748,3.748,0,0,1-1.726,3.479A7.579,7.579,0,0,1,124.2,239a5.9,5.9,0,0,1-4.171-1.4,4.765,4.765,0,0,1-1.478-3.758Z"
            transform="translate(-90.813 -223.556)"
            fill="#fff"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M155.747,224.277v1.744h-4.934v12.9h-2v-12.9h-4.935v-1.744Z"
            transform="translate(-103.172 -223.908)"
            fill="#fff"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M171.083,224.277h10.626v1.795h-8.693v4.446h8.035v1.694h-8.035v4.965h8.843v1.745H171.083Z"
            transform="translate(-116.453 -223.908)"
            fill="#fff"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M197.783,224.277h6.657a6.544,6.544,0,0,1,2.711.488,3.466,3.466,0,0,1,2.026,3.459,3.6,3.6,0,0,1-2.063,3.5,3,3,0,0,1,1.291.917,3.289,3.289,0,0,1,.483,1.844l.07,1.964a6.029,6.029,0,0,0,.14,1.246,1.225,1.225,0,0,0,.638.9v.329H207.3a1.841,1.841,0,0,1-.16-.489,9.458,9.458,0,0,1-.1-1.156l-.119-2.443a2.065,2.065,0,0,0-1.036-1.924,4.187,4.187,0,0,0-1.734-.269h-4.387v6.281h-1.984Zm6.443,6.71a3.665,3.665,0,0,0,2.147-.558,2.3,2.3,0,0,0,.79-2.014,2.173,2.173,0,0,0-1.105-2.133,3.528,3.528,0,0,0-1.58-.3h-4.711v5.005Z"
            transform="translate(-129.487 -223.908)"
            fill="#fff"
          />
        </g>
        <path
          id="Path_9"
          data-name="Path 9"
          d="M192.066,138.889c-.091.749-.2,1.5-.341,2.235l6.679,3.857C196.537,143.022,194.417,140.985,192.066,138.889Z"
          transform="translate(-63.703 -33.679)"
          fill="#fff"
        />
        <path
          id="Path_10"
          data-name="Path 10"
          d="M207.318,156.874l.014-.022c-.03-.152-.111-.5-.326-1.277q-.764-.907-1.612-1.842l-2.218,3.387a12.839,12.839,0,0,0,3.163.523c.846-.019,1-.187,1-.189s.062-.1.009-.394Z"
          transform="translate(-69.292 -40.924)"
          fill="#fff"
        />
        <path
          id="Path_11"
          data-name="Path 11"
          d="M85.317,77.514l-.011,0a3.264,3.264,0,0,0-.585.577c-.014.1-.005.583,1.051,2.257.954-.795,1.946-1.548,2.961-2.248-.832-.273-1.65-.52-2.44-.736a7.318,7.318,0,0,0-.861.127Z"
          transform="translate(-11.47 -3.645)"
          fill="#fff"
        />
        <path
          id="Path_12"
          data-name="Path 12"
          d="M135.081,103.265c-4.241-2.766-8.461-5.3-12.546-7.529a28.23,28.23,0,0,0-8.28,4.508c3.771,1.924,7.718,4.142,11.749,6.6l1.94-3.233,8.592,5.425a28.829,28.829,0,0,0,.116-4.712Z"
          transform="translate(-25.887 -12.614)"
          fill="#fff"
        />
        <path
          id="Path_13"
          data-name="Path 13"
          d="M157.4,108.706l.07-.334A34.729,34.729,0,0,0,156.3,89.148a29.265,29.265,0,0,0-11.673-14.657A28.774,28.774,0,0,0,133.3,70.239a31.522,31.522,0,0,0-7.576-.209,20.982,20.982,0,0,1,16.822,14.064,28.622,28.622,0,0,1,1.072,14.848l-.125.706-5.79-3.711,7.494,16.872,17.888-.713Z"
          transform="translate(-31.484 0)"
          fill="#fff"
        />
        <path
          id="Path_14"
          data-name="Path 14"
          d="M73.186,167.342a21.74,21.74,0,0,1-6.222-6.167,31.312,31.312,0,0,0,3.358,6.789,29.02,29.02,0,0,0,8.634,8.516,29.557,29.557,0,0,0,18.23,4.514,34.227,34.227,0,0,0,17.947-6.887l.252-.187,5.238,3.025-6.717-16.663-18.48.847,5.862,3.759-.587.409a28.754,28.754,0,0,1-13.9,5.272A21.653,21.653,0,0,1,73.186,167.342Z"
          transform="translate(-2.803 -44.121)"
          fill="#fff"
        />
        <path
          id="Path_15"
          data-name="Path 15"
          d="M120.557,81.771a19.125,19.125,0,0,0-16.194-8.534c-.362,0-.729.009-1.106.024l-3.462.188a35.134,35.134,0,0,0-10.962,6.335,45.659,45.659,0,0,0,3.93,4.2c1.784,1.706,3.845,3.513,6.128,5.377a29.787,29.787,0,0,1,10.626-6.346A26.1,26.1,0,0,1,120.557,81.771Z"
          transform="translate(-13.478 -1.632)"
          fill="#fff"
        />
        <path
          id="Path_16"
          data-name="Path 16"
          d="M67.576,107.953l-.087-.095a35.914,35.914,0,0,0-4.01,19.794l1.312,3.208a19.743,19.743,0,0,0,7.611,9.367,19.062,19.062,0,0,0,7.359,2.74,25.952,25.952,0,0,1-3.577-11.385,30.091,30.091,0,0,1,2.035-13.259A106.654,106.654,0,0,1,67.576,107.953Z"
          transform="translate(-1.03 -18.531)"
          fill="#fff"
        />
        <path
          id="Path_17"
          data-name="Path 17"
          d="M78.025,86.015c-5.242-5.023-7.249-8.268-6.315-10.209l.034-.059a1.908,1.908,0,0,1,.342-.384C66.7,74.2,63.2,74.6,61.691,76.559c-1.5,2.855.6,7.568,6.221,14.01,5.779,6.6,14.107,13.693,24.751,21.079l.368.255-2.5,4.168,19.308-.751-7.42-18.428L98.8,102.234l-.4-.269A158.5,158.5,0,0,1,78.025,86.015Z"
          transform="translate(0 -2.351)"
          fill="#fff"
        />
        <path
          id="Path_18"
          data-name="Path 18"
          d="M194.543,170.871c1.239-2.215.1-5.751-3.4-10.488a1.8,1.8,0,0,1-.147.3l-.032.046c-1.1,1.394-3.769,1.44-8.161.14l-.628-.186,1.6-2.358-17.281.808,6.795,15.292,3.048-4.671.355.127a44.718,44.718,0,0,0,11.846,2.817C191.56,172.865,193.581,172.249,194.543,170.871Z"
          transform="translate(-51.385 -43.166)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};
export default Footer;
