import React from "react";
import styles from "../styles/Card.module.css";
import CardImg from "../public/web-listing-convenience-at-supermarket-prices.jpeg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  img: StaticImageData;
  title: string;
  desc?: string;
  url?: string;
};

const Card: React.FC<Props> = ({ img, title, desc, url = "/" }) => {
  return (
    <Link href={url}>
      <div className={`${styles.card} ${desc ? styles.left : styles.center}`}>
        <Image src={img} alt={title} className={styles.image} />
        <div className={styles.container}>
          <h4 className={`${styles.title} ${desc && styles.smallMargin}`}>
            {title}
          </h4>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
