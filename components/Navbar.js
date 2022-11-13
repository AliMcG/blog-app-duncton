import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from 'next/image'
import titleImage from "../public/harry-duncton-header_trans_.png"
// import title from "/public/HarryDunctonheader_trans_.png"

function Navbar() {
  return (
    <>
      <header>
        {/* <h1 className={styles.title}>Harry Duncton</h1> */}
        <Image src={titleImage} alt="Harry Duncton" width="400" height="200"/>
      </header>
      <nav className={styles.navbar}>
        <p><Link href="/"><a>Home,</a></Link>{" "}<Link href="/about"><a>About,</a></Link>{" "}
        <Link href="/contact"><a>Contact,</a></Link>{" "}<Link href="/posts"><a>Archive,</a></Link>{" "}<Link href="/upload"><a>Upload</a></Link></p>
      </nav>
    </>
  );
}

export default Navbar;
