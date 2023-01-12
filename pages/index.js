import BlogDisplay from "../components/BlogDisplay";
import styles from "../styles/Home.module.css";


// fetches the data and returns the "props" that available in context for this page
export const getStaticProps = async () => {
  // const response = await fetch("http://localhost:4000/api/blogs/blogs-data")
  const response = await fetch(process.env.BACKEND_URL);
  // console.log("index.js", response);
  const data = await response.json();

  return {
    props: { posts: data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
    // fallback: true
  }
  }
;

// main page it shows post data with a substring for the post.text

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <main>
        <div className="">
          {posts.map((post, index) => (
            <BlogDisplay post={post} key={index} child={index + 1} />
          ))}
        </div>
      </main>
    </div>
  );
}
