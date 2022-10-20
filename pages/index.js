import Head from "next/head";
// import Image from 'next/image'
import Link from 'next/link';
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harry Duncton</title>
        <meta name="description" content="A blog to capture the roving mind" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Harry Duncton</h1>

        <p className={styles.description}>
          NavBAr goes here (<Link href="/">Home</Link>, <Link href="/about">About</Link>, <Link href="/contact">Contact</Link>)
        </p>

        <div className={styles.grid}>
          
          <div className={styles.card}>
          <Link href="/posts/first-post" >
            <h2>Post Link &rarr;</h2>
            </Link>
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
