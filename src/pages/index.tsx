import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";

import CardImg from "../public/web-listing-2x-convenience-at-supermarket-prices.jpeg";
import CardImg2 from "../public/web-listing-2x-all-day-breakfast-saver-combos.jpeg";
import CardImg3 from "../public/web-listing-2x-meal-kits.jpeg";

import CardImg4 from "../public/web-banner-meal-kits.png";
import CardImg5 from "../public/web-banner-7-select-ready-to-eat.jpeg";
import CardImg6 from "../public/img_thumb_product_cash_withdrawal.jpeg";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const cards = [
  { img: CardImg, title: "Offers & Contests" },
  { img: CardImg2, title: "All-Day Breakfast Saver Combos!" },
  { img: CardImg3, title: "Meal Kits" },
];

const avilCards = [
  { img: CardImg4, title: "Meal Kits" },
  { img: CardImg5, title: "7-Select Ready-to-Eat" },
  { img: CardImg6, title: "Cash Withdrawal" },
];

const Home: NextPage = () => {
  return (
    <div>
      <Header title="Home" />
      <NavBar />
      <HeroSection />
      <Section heading="Offers & Contests" seeAllLink="/offer">
        {cards.map((card) => (
          <Card key={card.title} img={card.img} title={card.title} />
        ))}
      </Section>
      <Section heading="Available now at 7-Eleven">
        {avilCards.map((card) => (
          <Card key={card.title} img={card.img} title={card.title} />
        ))}
      </Section>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;
