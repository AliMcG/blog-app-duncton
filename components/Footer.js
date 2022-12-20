import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import linkedIn from "../public/linkedin-custom.svg";
import subStack from "../public/substack-custom.svg";
import twitter from "../public/twitter-custom.svg";



function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.sticky}>
      <article className={styles.icons}>
        <Link href="https://uk.linkedin.com/in/harry-duncton-93591731" target="_blank" rel="noopener noreferrer">
          {/* to open link in a new tab use target="_blank" 
      and as a security measure use rel="..." to stop malicious reopening of the tab */}
          
            <Image src={linkedIn} width="40" height="40" alt="LinkedIn-logo" />
          
        </Link>
        <Link href="https://harryduncton.substack.com" target="_blank" rel="noopener noreferrer">
          
            <Image src={subStack} width="40" height="40" alt="LinkedIn-logo" />
          
        </Link>
        <Link href="https://twitter.com/lethalsturgeon" target="_blank" rel="noopener noreferrer">
          
            <Image src={twitter} width="40" height="40" alt="LinkedIn-logo" />
          
        </Link>
      </article>
      <footer className={styles.footer}>
        {/* displays a dynamic copyright date */}
        <p>Copyright {year} Harry Duncton</p>
      </footer>
    </div>
  );
}

export default Footer;
