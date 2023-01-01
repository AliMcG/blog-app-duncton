import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
// import { createContext, useContext } from 'react';
import { useState } from "react"
import titleImage from "../public/harry-new-header.png";

function Navbar() {
  
  const [user, setUser] = useState(false)

  function handleClick() {
    console.log("Clicked")
    setUser(preValue => !preValue)
  }
  const headerStyle = {
    // alignSelf: "center",
    // inset: "1rem",
    // position: "absolute",
    // margin: "1rem"
    // // top: "50%",
    // left: "50%",
    // right: "50%",
    // transform: "translate(-50%, -50%)",
    // backgroundColor: 'red',
  };
  return (
    <>
    <button onClick={handleClick} className={styles.login}>{user ? "Logout" : "Login"}</button>
    <SearchBar />
      <header className={styles.header}>
        <Image
          src={titleImage}
          style={headerStyle}
          alt="Harry Duncton"
          width="700"
          height="50"
        />
        
      </header>
      
      <nav className={styles.navbar}>
        
        <Link href="/">
          HOME
        </Link>{" "}
        <Link href="/about">
          ABOUT
        </Link>{" "}
        <Link href="/contact">
          CONTACT
        </Link>{" "}
        {user && <Link href="/upload">
          Add a New Entry
        </Link>}
      </nav>
    </>
  );
}

export default Navbar;
