import React from "react";
import styles from "../styles/Card.module.css";
import CardImg from "../public/web-listing-convenience-at-supermarket-prices.jpeg";
import Image from "next/image";

type Props = {
  img: StaticImageData;
  title: string;
};

const Card: React.FC<Props> = ({ img, title }) => {
  return (
    <div className={styles.card}>
      <Image src={img} alt={title} className={styles.image} />
      <div className={styles.container}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Card;
