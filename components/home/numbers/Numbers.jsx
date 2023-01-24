import styles from "./HomeNumbers.module.scss";
import { useCountUp } from "react-countup";
import React from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const HomeNumbers = () => {
  const allExperienceArray = [
    { text: "Embarques", number: 183000, duration: 2 },
    { text: "Clientes", number: 996, duration: 2 },
    { text: "Equipos", number: 40, duration: 1.5 },
    { text: "Experiencia", number: 15, duration: 1 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={styles.numbersWrapper}
    >
      {allExperienceArray.map((item, index) => (
        <HomeNumbersComponent
          key={index}
          title={item.text}
          number={item.number}
          duration={item.duration}
        />
      ))}
    </motion.div>
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
    transition: "easeInOut",
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
