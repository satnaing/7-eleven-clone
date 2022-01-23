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

const cards = [
  { img: CardImg, title: "Offers & Contests" },
  { img: CardImg2, title: "All-Day Breakfast Saver Combos!" },
  { img: CardImg3, title: "Meal Kits" },
];

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Section heading="Offers & Contests" seeAllLink="offer">
        {cards.map((card) => (
          <Card key={card.title} img={card.img} title={card.title} />
        ))}
      </Section>
    </div>
  );
};

export default Home;
