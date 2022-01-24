import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

import footerSupport from "../public/footer_support.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="row">
        <div className={styles.linkContainer}>
          <div className={styles.textContainer}>
            <Link href="/contact">Contact Us</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy-policy">Online Privacy Policy</Link>
          </div>
          <div className={styles.imgContainer}>
            <Image src={footerSupport} width={63} height={36} />
          </div>
        </div>
      </div>
      <hr className={styles.break} />
      <div className={styles.copyright}>
        Copyright 7-Eleven, Inc 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
