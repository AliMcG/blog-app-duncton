import PostCard from "../components/PostCard";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const getStaticProps = async ()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()

  return {
    props: { posts: data }
  }
}

// sort the data to show the 10 most recent posts here on home page

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
         <h1>The Beverage Blogs</h1>
           {posts.map(post => (
            <Link href={"/posts/" + post.id} key={post.id} >
            <a  className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 80)}...</p>
            </a>
            </Link>
           ))}
        
      </main>
    </div>
  );
}
