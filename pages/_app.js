import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Yoga Preuniversitario · Preparemonos juntos para entrar a la
          universidad
        </title>
      </Head>
      <SessionProvider>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
