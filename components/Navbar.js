import styles from "../styles/Navbar.module.css"
import Link from "next/link"

function Navbar() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Harry Duncton</h1>
      </header>
      <nav className={styles.navbar}>
        <p><Link href="/"><a>Home,</a></Link>{" "}<Link href="/about"><a>About,</a></Link>{" "}
        <Link href="/contact"><a>Contact,</a></Link>{" "}<Link href="/posts"><a>Archive,</a></Link>{" "}<Link href="/upload"><a>Upload</a></Link></p>
      </nav>
    </>
  );
}

export default Navbar;
