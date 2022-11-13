import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import titleImage from "../public/harry-duncton-header_trans_.png";
// import title from "/public/HarryDunctonheader_trans_.png"

function Navbar() {
  const headerStyle = {
    alignSelf: "center",
    inset: "1rem",
    position: "absolute",
    // // top: "50%",
    // left: "50%",
    // right: "50%",
    // transform: "translate(-50%, -50%)",
    // backgroundColor: 'red',
  };
  return (
    <>
      <header className={styles.header}>
        {/* <h1 className={styles.title}>Harry Duncton</h1> */}
        <Image
          src={titleImage}
          style={headerStyle}
          alt="Harry Duncton"
          width="1000"
          height="200"
        />
      </header>
      <nav className={styles.navbar}>
        
        <Link href="/">
          <a>HOME</a>
        </Link>{" "}
        <Link href="/about">
          <a>ABOUT</a>
        </Link>{" "}
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>{" "}
        <Link href="/upload">
          <a>(upload)</a>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
