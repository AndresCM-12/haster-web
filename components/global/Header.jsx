import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuBackground, setMenuBackground] = useState("rgba(0,0,0,0)");
  const [menuPaddingTop, setMenuPaddingTop] = useState("20px");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setMenuBackground("rgba(0,0,0,0.7)");
      setMenuPaddingTop("20px");
    } else {
      setMenuBackground("rgba(0,0,0,0)");
      setMenuPaddingTop("40px");
    }
  });

  const styles = {
    popup: {
      left: menu ? "0%" : "100%",
    },
    text: {
      left: menu ? "calc(100% - 300px)" : "100%",
    },
  };
  const router = useRouter();
  return (
    <>
      <motion.header
        initial={{ top: -50, opacity: 0 }}
        whileInView={{ top: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.mainWrapperServices}
        id="globalHeader"
        style={{ background: menuBackground, paddingTop: menuPaddingTop }}
      >
        <div
          className="logo--wrapper"
          onClick={() => {
            router.push("/");
          }}
        >
          <Isotype />
        </div>

        <nav>
          <ul>
            <Link className="links" href={"/servicios"}>
              <motion.li>SERVICIOS</motion.li>
            </Link>
            <Link className="links" href={"/nosotros"}>
              <motion.li>NOSOTROS</motion.li>
            </Link>
            <Link className="links" href={"/contacto"}>
              <motion.li>CONTACTO</motion.li>
            </Link>
            <Link className="links" href={"/rastreo"}>
              <motion.li>RASTREAR EMBARQUE</motion.li>
            </Link>
          </ul>
        </nav>

        <div className="right--section--wrapper">
          <div
            className="button"
            onClick={() => {
              router.push("/contacto");
            }}
          >
            <p>Solicitar cotización</p>
          </div>
          <div className="right--section--wrapper--icon">
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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.335"
                height="24.335"
                viewBox="0 0 24.335 24.335"
              >
                <g
                  id="facebook-icon-seeklogo.com"
                  transform="translate(-92 -93)"
                >
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
            <div>
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
        </div>

        <div onClick={() => setMenu(!!true)} className="burger--section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="none"
          >
            <path
              d="M3.75 22.5V20.625H26.25V22.5H3.75ZM3.75 15.9375V14.0625H26.25V15.9375H3.75ZM3.75 9.375V7.5H26.25V9.375H3.75Z"
              fill="white"
            />
          </svg>
        </div>
      </motion.header>

      <div id="mobileGlobalMenu" className="menu--wrapper">
        <div
          onClick={() => setMenu(!!false)}
          className="menu--background"
          style={styles.popup}
        ></div>
        <div className="menu--wrapper" style={styles.text}>
          <ul>
            <Link onClick={() => setMenu(!!false)} className="links" href={"/"}>
              <li>INICIO</li>
            </Link>
            <Link
              onClick={() => setMenu(!!false)}
              className="links"
              href={"/servicios"}
            >
              <li>SERVICIOS</li>
            </Link>
            <Link
              onClick={() => setMenu(!!false)}
              className="links"
              href={"/nosotros"}
            >
              <li>NOSOTROS</li>
            </Link>
            <Link
              onClick={() => setMenu(!!false)}
              className="links"
              href={"/contacto"}
            >
              <li>CONTACTO</li>
            </Link>
            <Link
              onClick={() => setMenu(!!false)}
              className="links"
              href={"/rastreo"}
            >
              <li>RASTREAR</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

const Isotype = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="196"
      height="45.039"
      viewBox="0 0 196 45.039"
    >
      <g
        id="Group_24"
        data-name="Group 24"
        transform="translate(-356.733 188.97)"
      >
        <g
          id="Group_9"
          data-name="Group 9"
          transform="translate(425.84 -178.716)"
        >
          <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
            <path
              id="Path_102"
              data-name="Path 102"
              d="M539.3-160.34h3.168v9.568h11.9v-9.568h3.168v23.156h-3.168v-10.829h-11.9v10.829H539.3Z"
              transform="translate(-539.297 160.923)"
              fill="#fff"
            />
            <path
              id="Path_103"
              data-name="Path 103"
              d="M604.148-160.34h3.547l8.4,23.156H612.66l-2.349-6.936h-9.158l-2.506,6.936h-3.216Zm5.154,13.667-3.515-10.23-3.736,10.23Z"
              transform="translate(-574.182 160.923)"
              fill="#fff"
            />
            <path
              id="Path_104"
              data-name="Path 104"
              d="M658.134-145.613a6.5,6.5,0,0,0,.9,3.2q1.5,2.3,5.3,2.3a9.058,9.058,0,0,0,3.1-.5,3.548,3.548,0,0,0,2.7-3.5,3.062,3.062,0,0,0-1.145-2.7,11.338,11.338,0,0,0-3.634-1.371l-3.039-.709a13.475,13.475,0,0,1-4.215-1.529,4.892,4.892,0,0,1-2.138-4.335,6.765,6.765,0,0,1,2.1-5.123,8.29,8.29,0,0,1,5.952-2,10.132,10.132,0,0,1,6.021,1.758q2.477,1.757,2.478,5.619h-2.948a5.97,5.97,0,0,0-.967-2.853q-1.376-1.813-4.67-1.813A5.253,5.253,0,0,0,660.1-158a3.722,3.722,0,0,0-1.164,2.711,2.664,2.664,0,0,0,1.375,2.49,19.712,19.712,0,0,0,4.078,1.261l3.146.741a9.484,9.484,0,0,1,3.513,1.466,5.556,5.556,0,0,1,2.138,4.713q0,3.846-2.729,5.5a11.983,11.983,0,0,1-6.341,1.655,9.333,9.333,0,0,1-6.595-2.206,7.537,7.537,0,0,1-2.337-5.943Z"
              transform="translate(-611.317 161.88)"
              fill="#fff"
            />
            <path
              id="Path_105"
              data-name="Path 105"
              d="M728.1-160.34v2.758h-7.8v20.4h-3.168v-20.4h-7.8v-2.758Z"
              transform="translate(-644.961 160.923)"
              fill="#fff"
            />
            <path
              id="Path_106"
              data-name="Path 106"
              d="M767.5-160.34h16.8v2.837H770.557v7.03h12.7v2.68h-12.7v7.85h13.982v2.758H767.5Z"
              transform="translate(-681.117 160.923)"
              fill="#fff"
            />
            <path
              id="Path_107"
              data-name="Path 107"
              d="M824.591-160.34h10.525a10.34,10.34,0,0,1,4.288.772q3.2,1.482,3.2,5.47a6.148,6.148,0,0,1-.859,3.4,6.209,6.209,0,0,1-2.4,2.128,4.746,4.746,0,0,1,2.042,1.45,5.222,5.222,0,0,1,.764,2.916l.11,3.105a9.474,9.474,0,0,0,.22,1.97,1.937,1.937,0,0,0,1.009,1.419v.52h-3.846a2.863,2.863,0,0,1-.252-.773,14.627,14.627,0,0,1-.157-1.828l-.19-3.862a3.262,3.262,0,0,0-1.638-3.042,6.605,6.605,0,0,0-2.742-.426h-6.937v9.931h-3.136Zm10.188,10.608a5.786,5.786,0,0,0,3.4-.883,3.639,3.639,0,0,0,1.249-3.184,3.437,3.437,0,0,0-1.748-3.373,5.572,5.572,0,0,0-2.5-.473h-7.45v7.913Z"
              transform="translate(-716.597 160.923)"
              fill="#fff"
            />
          </g>
        </g>
        <g
          id="Group_10"
          data-name="Group 10"
          transform="translate(356.733 -188.97)"
        >
          <path
            id="Path_108"
            data-name="Path 108"
            d="M475.455-126.325c-.061.5-.137,1.005-.229,1.5l4.485,2.59Q477.83-124.207,475.455-126.325Z"
            transform="translate(-430.372 150.038)"
            fill="#fff"
          />
          <path
            id="Path_109"
            data-name="Path 109"
            d="M488.405-110.739l.009-.015c-.02-.1-.074-.334-.219-.857q-.513-.609-1.082-1.237l-1.49,2.275a8.63,8.63,0,0,0,2.124.351c.568-.013.673-.126.674-.127s.042-.068.006-.264Z"
            transform="translate(-436.834 141.663)"
            fill="#fff"
          />
          <path
            id="Path_110"
            data-name="Path 110"
            d="M378.47-182.089l-.007,0a2.193,2.193,0,0,0-.393.388c-.009.064,0,.391.706,1.516.641-.534,1.306-1.039,1.988-1.51-.559-.184-1.108-.349-1.638-.494a4.949,4.949,0,0,0-.578.086Z"
            transform="translate(-369.992 184.757)"
            fill="#fff"
          />
          <path
            id="Path_111"
            data-name="Path 111"
            d="M418.87-160.452c-2.848-1.857-5.681-3.557-8.425-5.055a18.962,18.962,0,0,0-5.56,3.027c2.532,1.292,5.183,2.781,7.889,4.434l1.3-2.171,5.769,3.643a19.372,19.372,0,0,0,.078-3.164Z"
            transform="translate(-386.659 174.389)"
            fill="#fff"
          />
          <path
            id="Path_112"
            data-name="Path 112"
            d="M436.57-162.91l.047-.224a23.315,23.315,0,0,0-.79-12.908,19.647,19.647,0,0,0-7.838-9.842,19.324,19.324,0,0,0-7.605-2.856,21.174,21.174,0,0,0-5.087-.14,14.614,14.614,0,0,1,5.51,2.054,14.492,14.492,0,0,1,5.785,7.389,19.221,19.221,0,0,1,.72,9.97l-.084.474-3.888-2.492,5.032,11.329,12.011-.479Z"
            transform="translate(-393.129 188.97)"
            fill="#fff"
          />
          <path
            id="Path_113"
            data-name="Path 113"
            d="M366.125-102.161a14.6,14.6,0,0,1-4.178-4.142,21.032,21.032,0,0,0,2.255,4.559,19.488,19.488,0,0,0,5.8,5.718,19.846,19.846,0,0,0,12.241,3.031,22.977,22.977,0,0,0,12.051-4.624l.169-.126,3.517,2.031-4.51-11.189-12.409.569,3.936,2.524-.394.274a19.309,19.309,0,0,1-9.336,3.54A14.541,14.541,0,0,1,366.125-102.161Z"
            transform="translate(-359.973 137.968)"
            fill="#fff"
          />
          <path
            id="Path_114"
            data-name="Path 114"
            d="M403.105-180.205a12.99,12.99,0,0,0-3.777-3.71,12.964,12.964,0,0,0-7.1-2.021c-.243,0-.49.006-.743.016l-2.324.127a23.588,23.588,0,0,0-7.361,4.254,30.638,30.638,0,0,0,2.638,2.821c1.2,1.145,2.582,2.359,4.115,3.61a20,20,0,0,1,7.135-4.261A17.507,17.507,0,0,1,403.105-180.205Z"
            transform="translate(-372.314 187.085)"
            fill="#fff"
          />
          <path
            id="Path_115"
            data-name="Path 115"
            d="M361.5-154.437l-.058-.064a24.115,24.115,0,0,0-2.693,13.291l.881,2.154a13.255,13.255,0,0,0,5.111,6.289,12.8,12.8,0,0,0,4.941,1.839,17.42,17.42,0,0,1-2.4-7.645,20.2,20.2,0,0,1,1.367-8.9A71.593,71.593,0,0,1,361.5-154.437Z"
            transform="translate(-357.924 167.549)"
            fill="#fff"
          />
          <path
            id="Path_116"
            data-name="Path 116"
            d="M368.015-177.007c-3.519-3.373-4.867-5.552-4.24-6.855l.023-.04a1.275,1.275,0,0,1,.23-.258c-3.618-.783-5.964-.514-6.979.8-1.005,1.917.4,5.082,4.177,9.407A91.967,91.967,0,0,0,377.844-159.8l.247.171-1.679,2.8,12.964-.5L384.395-169.7l-2.427,3.586-.266-.181A106.467,106.467,0,0,1,368.015-177.007Z"
            transform="translate(-356.733 186.253)"
            fill="#fff"
          />
          <path
            id="Path_117"
            data-name="Path 117"
            d="M471.151-100.253c.832-1.488.068-3.862-2.286-7.043a1.23,1.23,0,0,1-.1.2l-.022.031c-.739.936-2.53.967-5.48.094l-.422-.125,1.075-1.583-11.6.543,4.562,10.268L458.923-101l.239.086a30.039,30.039,0,0,0,7.953,1.892C469.148-98.915,470.5-99.328,471.151-100.253Z"
            transform="translate(-416.133 139.071)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default Header;
