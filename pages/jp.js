import React from 'react';
import Image from 'next/image';
import styles from '../styles/Jp.module.css';
import Link from 'next/link';

const Jp = () => {
  return (
    <div className={styles.jpcontainer}>
      <p>
        Hola! Mi nombre es JP y soy quien está construyendo este espacio. Creo
        que es bueno partir por presentarte a mi familia: Mi pareja de hace ya
        mucho tiempo, la Nacha, y nuestra hermosa hija de 7 meses: Mila. (Ah, y
        se me olvidó mencionar a nuestra perrita Shakira, que también se coló a
        la foto).
      </p>
      <div className={styles.jpImageContainer}>
        <Image
          alt='familia'
          src='/images/shakira.jpg'
          width='300px'
          height='222px'
        />
      </div>
      <p>
        Soy Ingeniero Civil de profesión, estudié en la Universidad de Chile y
        en la Católica. Después hice un año de un Magíster en Innovación en la
        PUC para darme cuenta que no era lo que estaba buscando. Había en mi una
        necesidad gigante de entender qué es lo que es realmente ser innovador,
        y ahí fue cuando comencé a educarme por mi cuenta (gracias youtube) para
        ser programador, al mismo tiempo que me adentraba profundamente en la
        práctica del yoga.
      </p>
      <p>
        Todo el camino que he recorrido en la vida me ha llevado a saber que la
        mejor forma de lograr los objetivos es ponerle corazón y cariño a las
        cosas que uno hace. La constancia siempre da sus frutos, y es por eso
        que llamé a este proyecto <strong>El Arte de la Disciplina.</strong> No
        se trata de torturarse levantándose todos los días a las 5 de la mañana,
        si no que de todos los días sumar un pequeño grano de arena para
        evolucionar.
      </p>
      <p>
        Diseñé este espacio para acompañarte, para construir una comunidad en
        torno a este momento tan intenso de la vida que es cuando decidimos qué
        estudiar, y para contarte que no estás sol@. Son muchos los que están en
        tu situación... Son muchos los que están ansiosos e inseguros, y la idea
        de esta comunidad es entregarnos fuerza unos a otros para salir adelante
        y ser nuestra mejor versión.
      </p>
      <p>Nos vemos el 18 de mayo cuando comience este viaje.</p>
      <a
        className={styles.inscripcionBtn}
        target='_blank'
        style={{ backgroundColor: 'lightgreen', marginRight: '8px' }}
        href='https://wa.link/7sno14'
        rel='noreferrer'
      >
        Escríbeme al whatsapp
      </a>
      <Link href='/inscripciones'>
        <a className={styles.inscripcionBtn}>Inscribirme</a>
      </Link>
    </div>
  );
};

export default Jp;
