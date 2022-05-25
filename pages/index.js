import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBottom from '../components/NavBottom';
import SeasonCard from '../components/SeasonCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const seasons = [{ season: 1, alumnos: Array.from(Array(49).keys()) }];
  return (
    <div>
      <Head>
        <title>Preuniversitario Yoga</title>
        <meta
          name='description'
          content='Únete a la próxima nave que despega el 18 de mayo. La salud mental se construye en comunidad.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.firstSection}>
        <h2>Primer Ciclo de 21 días En Curso!</h2>
      </section>
      <div className={styles.container}>
        {seasons.map(x => (
          <SeasonCard key={x.season} seasonInfo={x} />
        ))}
      </div>
    </div>
  );
}
