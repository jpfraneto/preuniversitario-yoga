import React from 'react';
import { useRouter } from 'next/router';
import { connectToDatabase } from '../../../lib/mongodb';
import Link from 'next/link';
import styles from '../../../styles/Temporadas.module.css';

export async function getStaticPaths() {
  return {
    paths: [{ params: { index: '1' } }, { params: { index: '2' } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const alumnos = await db
    .collection('alumnos')
    .find({ season: parseInt(params.index) })
    .toArray();
  return {
    props: {
      // alumnos: JSON.stringify(JSON.parse(alumnos)),
      alumnos: JSON.parse(JSON.stringify(alumnos)),
    },
  };
}

const TemporadaIndex = ({ alumnos }) => {
  const router = useRouter();
  const handleQuery = async () => {
    const response = await fetch('/api/temporadas');
    const data = await response.json();
  };
  return (
    <div>
      <Link href={`/temporadas/${router.query.index}/grabaciones`}>
        <a>Grabaciones</a>
      </Link>
      {alumnos.map(x => {
        return (
          <Link key={x._id} href={`/u/${x._id}`}>
            <a className={styles.alumnoLink}>{x.nombre}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default TemporadaIndex;
