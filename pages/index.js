import BlogDisplay from "../components/BlogDisplay";
import styles from "../styles/Home.module.css";
import testData from "../Data/testPostData";
import Link from "next/link";
import Image from 'next/image'
// import { API, graphqlOperation } from 'aws-amplify';
// import { listTodos } from "../src/graphql/queries";


// fetches the data and returns the "props" that available in context for this page
export const getStaticProps = async () => {
  // const data = await API.graphql({ query: listTodos }); || await API.graphql(
  // graphqlOperation(queries.getTodo, { id: 'some id' })

  // const data = await res.json()
  return {
    props: { posts: testData },
  };
};

// main page it shows post data with a substring for the post.text

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <main >
        {posts.map((post, index) => (
          <div className={styles.card} key={index}>
            <Link href={"/posts/" + post.id}  >

            <a className={styles.card} >
            <article>
            <h2>{post.title}</h2>
            <p>{post.description.substring(0, 80)}...</p>
            </article>
            <Image src={post.image ? post.image : "/trees.jpg"} alt="Trees" width="375" height="275"/>
            </a>
            </Link>
           
          </div>
        ))}
      </main>
    </div>
  );
}
