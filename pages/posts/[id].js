import styles from "../../styles/Single.module.css";
import testData from "../../Data/testPostData";
import Image from "next/image";

// import { API, graphqlOperation } from 'aws-amplify';
// import { listTodos, getTodo } from "../../src/graphql/queries";

export const getStaticPaths = async () => {
  // const data = await API.graphql({ query: listTodos });

  // This creates dynamic url paths for each blog item
  const paths = testData.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Passes down the Blog by id to new pathage
export const getStaticProps = async (context) => {
  const id = context.params.id;
  // const data = await API.graphql(graphqlOperation(getTodo, { id: id }));
  const data = testData[id - 1];

  return {
    props: { post: data },
  };
};

const BlogDetails = ({ post }) => {
  // console.log(post.data.getTodo.title)
  return (
    <div className={styles.single}>
      <Image
        src={post.image ? post.image : "/trees.jpg"}
        alt="Trees"
        width="375"
        height="275"
      />
      <article>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </article>
    </div>
  );
};

export default BlogDetails;
