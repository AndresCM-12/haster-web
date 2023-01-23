import styles from "./HomeNumbers.module.scss";
import CountUp, { useCountUp } from "react-countup";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";

const HomeNumbers = () => {
  const allExperienceArray = [
    { text: "Embarques", number: 183000, duration: 1 },
    { text: "Clientes", number: 996, duration: 2 },
    { text: "Equipos", number: 40, duration: 1.5 },
    { text: "Experiencia", number: 15, duration: 0.5 },
  ];

  return (
    <div className={styles.numbersWrapper}>
      {allExperienceArray.map((item, index) => (
        <HomeNumbersComponent
          key={index}
          title={item.text}
          number={item.number}
          duration={item.duration}
        />
      ))}
    </div>
  );
};

const HomeNumbersComponent = ({ title, number, duration }) => {
  const countUpRef = React.useRef(null);
  const { pauseResume } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: number,
    delay: 1000,
    duration: duration,
  });

  return (
    <div className={styles.numberComponent}>
      <InView
        onChange={(inView) => {
          if (inView) {
            pauseResume();
          }
        }}
      >
        <h1 ref={countUpRef}> 1</h1>
        <h2>{title}</h2>
      </InView>
    </div>
  );
};
export default HomeNumbers;
