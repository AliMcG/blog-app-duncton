import BlogDisplay from "../components/BlogDisplay";
import styles from "../styles/Home.module.css";
import testData from "../Data/testPostData";
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
      <main>
        {posts.map((post) => (
          <BlogDisplay post={post} />
        ))}
      </main>
    </div>
  );
}
