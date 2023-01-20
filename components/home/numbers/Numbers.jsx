import styles from "./HomeNumbers.module.scss";

const HomeNumbers = () => {
  const allExperienceArray = [
    { text: "Embarques", number: "183000" },
    { text: "Clientes", number: "996" },
    { text: "Equipos", number: " 40 " },
    { text: "Experiencia", number: " 15 " },
  ];

  return (
    <div className={styles.numbersWrapper}>
      {allExperienceArray.map((item, index) => (
        <HomeNumbersComponent
          key={index}
          title={item.text}
          number={item.number}
        />
      ))}
    </div>
  );
};

const HomeNumbersComponent = ({ title, number }) => {
  return (
    <div className={styles.numberComponent}>
      <div>
        <h1>{number}</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
export default HomeNumbers;
