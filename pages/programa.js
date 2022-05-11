import React from 'react';
import programa from '../src/data/programa';
import styles from '../styles/Programa.module.css';

const Programa = () => {
  console.log(programa);
  return (
    <div>
      {programa.map((day, index) => {
        return (
          <div key={index} className={styles.individualPrograma}>
            <div className={styles.dayDetails}>
              <h3 className={styles.classNumber}>{day.classNumber}</h3>
              <h4>
                {day.dia} - {day.date}
              </h4>
            </div>
            <div className={styles.classDetails}>
              <div className={styles.classKriya}>
                <h4>Kriya: {day.kriya}</h4>
                <p>{day.objetivosKriya}</p>
              </div>
              <div className={styles.classMeditation}>
                <h4>Meditación: {day.meditacion}</h4>
                <p>{day.objetivosMeditacion}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Programa;
