import styles from "../styles/Navbar.module.css"
import Link from "next/link"

function Navbar() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Harry Duncton</h1>
      </header>
      <nav className={styles.navbar}>
        <p><Link href="/">Home,</Link>{" "}<Link href="/about">About</Link>,{" "}
        <Link href="/contact">Contact</Link>,{" "}<Link href="/posts">Blogs</Link></p>
      </nav>
    </>
  );
}

export default Navbar;
