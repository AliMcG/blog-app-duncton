import styles from "../styles/Footer.module.css"

// displays a dynamic copyright date

function Footer() {
  const year = new Date().getFullYear()
  return ( <footer className={styles.footer}>
    <p>Copyright {year} Harry Duncton</p>
     
</footer>  );
}

export default Footer;