import Link from "next/link";
import React from "react";
import styles from "../styles/Section.module.css";

type Props = {
  heading?: string;
  seeAllLink?: string;
  breadcrumb?: string;
};

const Section: React.FC<Props> = ({
  heading,
  seeAllLink,
  breadcrumb,
  children,
}) => {
  return (
    <div className="row">
      <section className={styles.container}>
        {breadcrumb ? (
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <div className={styles.breadcrumbSeparator}> &rsaquo;</div>
            <span>
              <a className={styles.breadcrumbActive}>{breadcrumb}</a>
            </span>
          </div>
        ) : (
          <h2 className={styles.heading}>{heading}</h2>
        )}

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
