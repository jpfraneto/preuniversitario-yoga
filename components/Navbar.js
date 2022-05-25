import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignin = e => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = e => {
    e.preventDefault();
    signOut();
  };
  return (
    <>
      <Link passHref href='/'>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <h1>YOGA</h1>
            <h2>preuniversitario</h2>
          </div>
          <div className={styles.buttonsContainer}>
            <Link href='/testimonios'>
              <a>Testimonios</a>
            </Link>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
            <Link href='/inscripciones'>
              <a>Inscríbete!</a>
            </Link>
            {/* {session && (
              <>
                <a href='#' onClick={handleSignout} className='btn-signin'>
                  Sign out
                </a>
                <button>{session.user.email}</button>
              </>
            )}
            {!session && (
              <a href='#' onClick={handleSignin} className='btn-signin'>
                Sign in
              </a>
            )} */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Navbar;
