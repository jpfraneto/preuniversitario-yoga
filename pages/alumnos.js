import React from 'react';
import { connectToDatabase } from '../lib/mongodb';

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const alumnos = await db.collection('alumnos').find({});
  console.log('los alumnos son: ', alumnos);
  return {
    props: {
      alumnos: { 213: 232 },
    },
  };
}

const Alumnos = ({ alumnos }) => {
  console.log('inside the component', alumnos);
  return <div>Alumnos</div>;
};

export default Alumnos;
