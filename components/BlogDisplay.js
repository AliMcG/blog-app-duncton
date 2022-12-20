import styles from "../styles/BlogDisplay.module.css";
import Link from "next/link";
import Image from "next/image";

function BlogDisplay({ post }) {
  return (
    <Link href={"/posts/" + post.id}>
      <article className={styles.card}>
        <h2>{post.title}</h2>
        <p>{post.description.substring(0, 80)}...</p>
      </article>

      <Image
        src={post.image ? post.image : "/trees.jpg"}
        alt="Trees"
        width="475"
        height="275"
      />
    </Link>
  );
}

export default BlogDisplay;
