import Head from "next/head";
// import Image from 'next/image'
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/posts/first-post">
              <h2>Post 1st Link &rarr;</h2>
            </Link>
            <p>A blog about blogging</p>
          </div>
          <div className={styles.card}>
            <Link href="/posts/first-post">
              <h2>Post 2nd Link &rarr;</h2>
            </Link>
            <p>A blog about a new drink.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
