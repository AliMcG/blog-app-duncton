import styles from "../styles/Footer.module.css"
import Image from "next/image";
import Link from "next/link";
import linkedIn from "../public/linkedin-custom.svg"
import subStack from "../public/substack-custom.svg"
import twitter from "../public/twitter-custom.svg"

// displays a dynamic copyright date

function Footer() {
  const year = new Date().getFullYear()
  return ( <div>
  <article>
    <Link href="https://uk.linkedin.com/in/harry-duncton-93591731">
      {/* to open link ina new tab use target="_blank" 
      and as a security measure use rel="..." to stop malicious reopening of the tab */}
      <a target="_blank" rel="noopener noreferrer">
        <Image src={linkedIn} width="38" height="38" alt="LinkedIn-logo" />
      </a>
    </Link>
    <Link href="https://harryduncton.substack.com">
      <a target="_blank" rel="noopener noreferrer">
        <Image src={subStack} width="38" height="38" alt="LinkedIn-logo" />
      </a>
    </Link>
    <Link href="https://twitter.com/lethalsturgeon">
      <a target="_blank" rel="noopener noreferrer">
        <Image src={twitter} width="38" height="38" alt="LinkedIn-logo" />
      </a>
    </Link>
  </article>
  <footer className={styles.footer}>
    <p>Copyright {year} Harry Duncton</p>
     
</footer>
  </div>  );
}

export default Footer;