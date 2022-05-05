import React from 'react';
import Link from 'next/link';
import styles from './NavBottom.module.css';

const NavBottom = () => {
  return (
    <div className={styles.bottomNav}>
      <Link href='/jp'>
        <a>Proyecto creado por jp.</a>
      </Link>
    </div>
  );
};

export default NavBottom;
