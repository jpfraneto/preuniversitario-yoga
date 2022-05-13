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
      <div className={styles.alumnos}>
        {' '}
        {alumnos.map((alumno, index) => {
          return (
            <div key={alumno._id} className={styles.alumnoContainer}>
              <h5>
                {alumno.nombre.split(' ')[0]} - {alumno.region} -{' '}
                {alumno.comuna}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alumnos;
