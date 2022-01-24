import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/InfoSection.module.css";

import seven11Logo from "../public/bg_711_logo.png";
import appStore from "../public/button_dl_appstore_v2.png";
import playStore from "../public/button_dl_googleplay_v2.png";
import rewardsBg from "../public/bg_7rewards.png";
import bgCareer from "../public/bg_careeropp.jpeg";
import bgFranchisee from "../public/bg_franchisee.png";

const InfoSection = () => {
  return (
    <div className={`row ${styles.container}`}>
      <div className={styles.cardContainer}>
        <InfoCard className={styles.about} />
        <RewardCard />
        <CareerCard />
        <FranchiseCard />
      </div>
    </div>
  );
};

type InfoProps = {
  className: any;
};

const InfoCard: React.FC<InfoProps> = ({ className }) => {
  return (
    <div className={styles.about}>
      <div className={styles.imgContainer}>
        <Image src={seven11Logo} width={200} height={200} />
      </div>
      <div className={styles.aboutTextContainer}>
        <h4 className={styles.title}>About 7-Eleven</h4>
        <p>
          7-Eleven was founded in 1927 as an ice and beverage stand in Dallas,
          Texas, and has gradually evolved from selling basic items such as
          eggs, milk and bread, to today’s one-stop-shop convenient solution.
        </p>
        <Link href="/something">
          <a className={styles.readmore}>Read more</a>
        </Link>
      </div>
    </div>
  );
};

const RewardCard = () => {
  return (
    <div className={styles.rewards}>
      <div className={styles.rewardImageContainer}>
        <Image src={rewardsBg} />
      </div>
      <div className={styles.rewardTextContainer}>
        <h3 className={styles.rewardsTitle}>7Rewards</h3>
        <div className={styles.rewardDesc}>
          Shop, Earn, and Redeem eVouchers with 7-Eleven!
        </div>
        <div className={styles.downloadDesc}>
          Download 7Rewards today and start saving with us!
        </div>
        <div className={styles.rewardStores}>
          <Link href="https://itunes.apple.com/sg/app/7rewards-7-eleven-singapore/id1223957237?mt=8">
            <a>
              <Image src={appStore} width={123} height={51} />
            </a>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=sg.com.seveneleven.sevenrewards">
            <a>
              <Image src={playStore} width={123} height={51} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CareerCard = () => {
  return (
    <div className={`${styles.career}`}>
      <div className={styles.careerTextContainer}>
        <h4 className={styles.careerTitle}>Career Opportunities</h4>
        <p>
          Come join our team of convenience masterminds if you know how to
          innovate, inspire and interested in blazing a new trail or two. More
          details coming soon.
        </p>
      </div>
      <div className={styles.careerImgContainer}>
        <Image src={bgCareer} width={360} height={258.39} />
      </div>
    </div>
  );
};

const FranchiseCard = () => {
  return (
    <div className={`${styles.franchise}`}>
      <div className={styles.franchiseTextContainer}>
        <h4 className={styles.careerTitle}>Becoming a Franchisee</h4>
        <p>
          If you&apos;ve got what it takes to franchise with 7-Eleven, go ahead
          and take the first step. More details coming soon.
        </p>
      </div>
      <div className={styles.franchiseImgContainer}>
        <Image src={bgFranchisee} width={210} height={179.45} />
      </div>
    </div>
  );
};

export default InfoSection;
