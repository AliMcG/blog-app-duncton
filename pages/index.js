import PostCard from "../components/PostCard";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { API } from 'aws-amplify';
import { listPosts } from "../src/graphql/queries"; 
import Image from 'next/image'


// fetches the data and returns the "props" that available in context for this page
export const getStaticProps = async ()=> {
  const data = await API.graphql({ query: listPosts });
  // const data = await res.json()
  console.log(data.data.listPosts.items)
  return {
    props: { posts: data.data.listPosts.items }
  }
}

// import { API, graphqlOperation } from 'aws-amplify';

// const oneTodo = await API.graphql(
//   graphqlOperation(queries.getTodo, { id: 'some id' })

// Can sort the data to show the 10 most recent posts here on home page?

// main page it shows post data with a substring for the post.text

export default function Home({ posts}) {

  console.log(posts)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
         <h1>The Beverage Blogs</h1>
           {posts.map(post => (
            <Link href={"/posts/" + post.id} key={post.id} >
            <a  className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.description.substring(0, 80)}...</p>
            <Image src="/trees.jpg" alt="Trees" width="64" height="64"/>
            </a>
            </Link>
           ))}
        
      </main>
    </div>
  );
}
