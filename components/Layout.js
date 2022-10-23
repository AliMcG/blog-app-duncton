import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
// import { useRouter } from "next/router";
// import Profile from './Profile';
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  // so we can check which page was loaded
  // const router = useRouter();

  return (
    <div className={styles.container}>
      {/* <Profile /> */}
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
