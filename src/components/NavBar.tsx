import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import useToggle from "../hooks/useToggle";

import logo from "../public/logo_711.svg";
import facebookIcon from "../public/icon_facebook.svg";
import instagramIcon from "../public/icon_instagram.svg";
import closeIcon from "../public/icon_close_panel.png";
import hamburger from "../public/icon_menu_responsive.png";

function NavBar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useToggle(false);

  return (
    <header className={styles.header}>
      <div className={styles.mobileContainer}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Picture of the author"
            width={102}
            height={102}
          />
        </div>
        <span className={styles.hamburger} onClick={() => setMenuOpen(true)}>
          <Image src={hamburger} width={48} height={48} />
        </span>
      </div>
      <nav
        className={`${styles.nav} ${
          menuOpen ? styles.openNav : styles.closeNav
        }`}
      >
        <span className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
          <Image src={closeIcon} width={28} height={28} />
        </span>
        <ul className={styles.leftMenu}>
          <li className={router.pathname == "/" ? `${styles.active}` : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname == "/offer" ? `${styles.active}` : ""}>
            <Link href="/offer">Offers & Contents</Link>
          </li>
          <li
            className={
              router.pathname == "/pre-order" ? `${styles.active}` : ""
            }
          >
            <Link href="/pre-order">Pre-order</Link>
          </li>
          <li
            className={router.pathname == "/products" ? `${styles.active}` : ""}
          >
            <Link href="/products">Products</Link>
          </li>
          <li
            className={router.pathname == "/services" ? `${styles.active}` : ""}
          >
            <Link href="/services">Services</Link>
          </li>
        </ul>
        <ul className={styles.rightMenu}>
          <li
            className={`${
              router.pathname == "/services" ? `${styles.active}` : ""
            } ${styles.rightNav}`}
          >
            <Link href="/locate">Locate</Link>
          </li>
          <li
            className={router.pathname == "/7rewards" ? `${styles.active}` : ""}
          >
            <Link href="/7rewards">7Rewards</Link>
          </li>
          <li
            className={router.pathname == "/careers" ? `${styles.active}` : ""}
          >
            <Link href="/careers">Careers</Link>
          </li>
          <li
            className={
              router.pathname == "/franchising" ? `${styles.active}` : ""
            }
          >
            <Link href="/franchising">Franchising</Link>
          </li>
          <li className={styles.socialMedia}>
            <Link href="/facebook">
              <a>
                <Image src={facebookIcon} />
              </a>
            </Link>
            <Link href="/instagram">
              <a>
                <Image src={instagramIcon} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
