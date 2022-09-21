import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/HomePage.module.scss';
import Header from '../components/Header';
import HomePage from './HomePage';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Practice with NextJS-Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Header/> */}
        <HomePage></HomePage>
      </main>
    </div>
  )
}

export default Home
