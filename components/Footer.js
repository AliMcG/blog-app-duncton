import styles from "../styles/Footer.module.css"

function Footer() {
  const year = new Date().getFullYear()
  return ( <footer className={styles.footer}>
    <p>Copyright {year} Harry Duncton</p>
     
</footer>  );
}

export default Footer;