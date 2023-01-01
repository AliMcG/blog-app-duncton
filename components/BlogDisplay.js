import styles from "../styles/BlogDisplay.module.css";
import Link from "next/link";
import Image from "next/image";

function BlogDisplay({ post, child }) {
  return (
    <Link href={"/posts/" + post.id}>
    <section className={child % 2 === 0 ? styles.card : styles.card1}>
    <article >
        <h2>{post.title}</h2>
        <p>{post.description.substring(0, 80)}...</p>
       
      </article>
      <Image
        src={post.image ? post.image : "/trees.jpg"}
        alt="Trees"
        width="475"
        height="275"
      />
    </section>
      

    
    </Link>
  );
}

export default BlogDisplay;
