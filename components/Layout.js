import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

// This wraps all of the pages/children with Header, NavBar and Footer.

export const Layout = ({ children }) => {
  
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
