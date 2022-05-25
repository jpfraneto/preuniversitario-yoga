import React from 'react';
import styles from '../styles/Alumnos.module.css';
import { connectToDatabase } from '../lib/mongodb';
import Alumno from '../components/Alumno';

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
        {alumnos.map((alumno, index) => {
          return <Alumno key={alumno._id} alumno={alumno} />;
        })}
      </div>
    </div>
  );
};

export default Alumnos;
