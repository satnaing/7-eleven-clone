import React from "react";
import Image from "next/image";
import styles from "../styles/HeroStatic.module.css";

type Props = {
  imgWeb: string | StaticImageData;
  imgMobile: string | StaticImageData;
};

const HeroStatic: React.FC<Props> = ({ imgWeb, imgMobile }) => {
  return (
    <>
      <div className={styles.heroWeb}>
        <Image src={imgWeb} />
      </div>
      <div className={styles.heroMobile}>
        <Image src={imgMobile} />
      </div>
    </>
  );
};

export default HeroStatic;
