import Link from "next/link"
import styles from "../../styles/Posts.module.css";

export const getStaticProps = async ()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()

  return {
    props: { posts: data }
  }
}


function Posts({ posts }) {
  return ( <div >
    <h1>Blog Posts</h1>
    {posts.map(post => (
            <Link href={"/posts/" + post.id} key={post.id} >
            <a  className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </a>
            </Link>
    ))}
  </div> );
}

export default Posts;