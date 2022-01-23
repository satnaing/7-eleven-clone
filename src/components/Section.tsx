import Link from "next/link";
import React from "react";
import styles from "../styles/Section.module.css";

type Props = {
  heading: string;
  seeAllLink?: string;
};

const Section: React.FC<Props> = ({ heading, seeAllLink, children }) => {
  return (
    <div className="row">
      <section className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        {seeAllLink && (
          <div className={styles.seeAll}>
            <Link href={seeAllLink!}>See all</Link>
          </div>
        )}
        <div className={styles.cardContainer}>{children}</div>
      </section>
    </div>
  );
};

export default Section;
