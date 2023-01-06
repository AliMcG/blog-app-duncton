import styles from "../../styles/Single.module.css";
import testData from "../../Data/testPostData";
import Image from "next/image";
import { Markup } from 'interweave';


export const getStaticPaths = async () => {
  // const data = await API.graphql({ query: listTodos });
  const response = await fetch("http://localhost:4000/api/blogs/blogs-data")
  const data = await response.json()
  // console.log(data)
  // This creates dynamic url paths for each blog item
  const paths = data.map((post) => {
    return {
      params: { id: post._id },
    };
  });
  // console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

// Passes down the Blog by id to new pathage
export const getStaticProps = async (context) => {
  const id = context.params.id;
  
  const response = await fetch(`http://localhost:4000/api/blogs/blogs-data/${id}`)
  const data = await response.json()
  
  return {
    props: { post: data[0] },
  };
};

const BlogDetails = ({ post }) => {
  
  return (
    <div className={styles.single}>
      <Image
        unoptimized src={post.image ? post.image : "/trees.jpg"}
        alt="Trees"
        width="375"
        height="275"
      />
      <article>
        <h2>{post.title}</h2>
        {/* <p>{post.description}</p> */}
        <Markup content={post.description} />
      </article>
    </div>
  );
};

export default BlogDetails;
