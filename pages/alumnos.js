import React from 'react';
import styles from '../styles/Alumnos.module.css';
import { connectToDatabase } from '../lib/mongodb';

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const alumnos = await db.collection('alumnos').find({}).toArray();
  return {
    props: {
      // alumnos: JSON.stringify(JSON.parse(alumnos)),
      alumnos: JSON.parse(JSON.stringify(alumnos)),
    },
  };
}

const Alumnos = ({ alumnos }) => {
  return (
    <div>
      {alumnos.map((alumno, index) => {
        return (
          <div key={alumno._id} className={styles.alumnoContainer}>
            <h3>
              {index + 1} - {alumno.nombre}
            </h3>
            <h4>
              {alumno.region} - {alumno.comuna}
            </h4>
            <h5>{alumno.telefono}</h5>
            <hr />
            <h4>¿Cuál es tu relación con el yoga?</h4>
            <p>{alumno.relacion}</p>
            <h4>
              ¿Cómo te sientes con respecto a la decisión de qué carrera
              estudiar?
            </h4>
            <p>{alumno.carrera}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Alumnos;
