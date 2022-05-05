import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <Link passHref href='/'>
        <div className={styles.navContainer}>
          <h1>YOGA</h1>
          <h2>preuniversitario</h2>
        </div>
      </Link>
      <div className={styles.secondNav}>100% Online y gratuito</div>
    </>
  );
};

export default Navbar;
