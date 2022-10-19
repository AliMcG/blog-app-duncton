import Head from "next/head";
// import Image from 'next/image'
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harry Duncton</title>
        <meta name="description" content="A blog to capture the roving mind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Harry Duncton</h1>

        <p className={styles.description}>
          NavBAr goes here (Home, About, Contact)
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
