import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBottom from '../components/NavBottom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Preuniversitario Yoga</title>
        <meta
          name='description'
          content='Avanzando en conjunto para una mejor educación mental'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <div>
          <h5>¿Estás estresad@?</h5>
          <h5>¿No tienes claro qué estudiar?</h5>
          <h5>¿Sientes ansiedad por la PTU y la PAES?</h5>
          <p>Las respuestas están adentro de ti.</p>
        </div>
        <div className={styles.contentText}>
          <p>
            Únete a una red de alumnos de todo Chile que están en la misma
            situación que tú. Juntos podemos salir adelante.
          </p>
          <p>
            Cada <span>nave</span> es un viaje de 21 días en conjunto para
            ayudarnos a encontrar la claridad necesaria para avanzar de buena
            forma.
          </p>
          <p>Ocuparemos las herramientas que el yoga nos entrega para:</p>
          <ul>
            <li>Manejar la ansiedad.</li>
            <li>Reducir el estrés.</li>
            <li>Aumentar la claridad mental.</li>
          </ul>
          <p>
            La siguiente despega el 18 de mayo. Inscríbete antes de que se
            acaben los cupos!
          </p>
          <a
            className={styles.inscripcionBtn}
            target='_blank'
            style={{ backgroundColor: 'lightgreen' }}
            href='https://wa.link/7sno14'
          >
            Escríbeme al whatsapp
          </a>
          <br />
          <div style={{ marginTop: '20px' }}>
            <Link href='/inscripciones'>
              <a className={styles.inscripcionBtn}>Inscribirme</a>
            </Link>
          </div>
        </div>
      </div>

      <NavBottom />
    </div>
  );
}
