import styles from "../styles/BlogDisplay.module.css"
import Link from "next/link";
import Image from 'next/image'

function BlogDisplay({post}) {
  return ( <>
    <div >
    <Link href={"/posts/" + post.id} key={post.id} >
            <a  className={styles.card}>
            <article>
            <h2>{post.title}</h2>
            <p>{post.description.substring(0, 80)}...</p>
            </article>
            
            <Image src={post.image ? post.image : "/trees.jpg"} alt="Trees" width="375" height="275"/>
            </a>
            </Link>
           
          </div>
  </> );
}

export default BlogDisplay;