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
      <div className="">
      {posts.map((post, index) => (
          <BlogDisplay post={post} key={index} child={index + 1}/>
        ))}
      </div>
        
      </main>
    </div>
  );
}
