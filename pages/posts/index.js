import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Single.module.css";

import testData from "../../Data/testPostData";

// fetches the data and returns the "props" that available in context for this page
export const getStaticProps = async () => {
  const response = await fetch(process.env.BACKEND_URL);
  const data = await response.json();
  // await API.graphql({ query: listPosts });
  // // const data = await res.json()
  // console.log(data.data.listPosts.items)
  return {
    props: { posts: data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

function Posts({ posts }) {
  return (
    <div className={styles.blogs}>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <Link href={"/posts/" + post._id} key={post._id}>
          <div className={styles.single}>
            <Image
              unoptimized
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
        </Link>
      ))}
    </div>
  );
}

export default Posts;
