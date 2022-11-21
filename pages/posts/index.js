import Link from "next/link"
import styles from "../../styles/Posts.module.css";
// import { API } from 'aws-amplify';
// import { listPosts } from "../src/graphql/queries"; 
import testData from "../../Data/testPostData";


// fetches the data and returns the "props" that available in context for this page
export const getStaticProps = async ()=> {
  
  // await API.graphql({ query: listPosts });
  // // const data = await res.json()
  // console.log(data.data.listPosts.items)
  return {
    props: { posts: testData }
  }
}


function Posts({ posts }) {
  return ( <div >
    <h1>Blog Posts</h1>
    {posts.map(post => (
            <Link href={"/posts/" + post.id} key={post.id} >
            <a  className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            </a>
            </Link>
    ))}
  </div> );
}

export default Posts;