import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

import logo from "../public/logo_711.svg";
import facebookIcon from "../public/icon_facebook.svg";
import instagramIcon from "../public/icon_instagram.svg";
import closeIcon from "../public/icon_close_panel.png";
import hamburger from "../public/icon_menu_responsive.png";
import useToggle from "../hooks/useToggle";

function NavBar() {
  const [menuOpen, setMenuOpen] = useToggle(false);

  const handleMenu = () => {
    setMenuOpen(true);
  };
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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/offer">Offers & Contents</Link>
          </li>
          <li>
            <Link href="/pre-order">Pre-order</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
        <ul className={styles.rightMenu}>
          <li className={styles.rightNav}>
            <Link href="/locate">Locate</Link>
          </li>
          <li>
            <Link href="/7rewards">7Rewards</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
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

<nav className={styles.navBar}>
  <ul className={styles.leftNav}>
    <li>
      <a href="/home">Home</a>
    </li>
    <li>
      <a href="/products">Offers & Contests</a>
    </li>
    <li>
      <a href="/about">Pre-order</a>
    </li>
    <li>
      <a href="/login">Products</a>
    </li>
    <li>
      <a href="/signup">Services</a>
    </li>
  </ul>
  <div className={styles.logo}>
    <Image
      src={logo}
      alt="Picture of the author"
      width={102}
      height={102}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  </div>
  <ul className={styles.rightNav}>
    <li>
      <a href="/home">Locate</a>
    </li>
    <li>
      <a href="/products">7Rewards</a>
    </li>
    <li>
      <a href="/about">Career</a>
    </li>
    <li id="login">
      <a href="/login">Franchising</a>
    </li>
    <li id="signup">
      <a href="/signup">Social Media</a>
    </li>
  </ul>
</nav>;
{
  /* <nav className={styles.rightNav}></nav> */
}
{
  /* <div className={styles.hamburgerIcon}>
<div className="bar1"></div>
<div className="bar2"></div>
<div className="bar3"></div>
<ul className={styles.mobileMenu}>
  <li>
    <a href="/home">Home</a>
  </li>
  <li>
    <a href="/products">Products</a>
  </li>
  <li>
    <a href="/about">About</a>
  </li>
  <li id="login">
    <a href="/login">Login</a>
  </li>
  <li id="signup">
    <a href="/signup">Signup</a>
  </li>
</ul>
</div> */
}

export default NavBar;