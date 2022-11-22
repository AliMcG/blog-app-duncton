import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
// import { createContext, useContext } from 'react';
import { useState } from "react"
import titleImage from "../public/harry-duncton-header_trans_.png";
// import title from "/public/HarryDunctonheader_trans_.png"

function Navbar() {
  
  const [user, setUser] = useState(false)

  function handleClick() {
    console.log("Clicked")
    setUser(preValue => !preValue)
  }
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
    <button onClick={handleClick} className={styles.login}>{user ? "Logout" : "Login"}</button>
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
        {user && <Link href="/upload">
          <a>(upload)</a>
        </Link>}
      </nav>
    </>
  );
}

export default Navbar;
