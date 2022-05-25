import React from 'react';
import styles from './SeasonCard.module.css';
import Link from 'next/link';

const SeasonCard = ({ seasonInfo }) => {
  return (
    <div className={styles.sesionCardContainer}>
      <h2>Temporada {seasonInfo.season}</h2>
      <p>Alumnos: {seasonInfo.alumnos.length}</p>
      <Link href={`/temporadas/${seasonInfo.season}`}>
        <a>Visitar</a>
      </Link>
    </div>
  );
};

export default SeasonCard;
