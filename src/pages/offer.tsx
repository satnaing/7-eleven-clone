import React from "react";
import { NextPage } from "next";
import Image from "next/image";

// Custom
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Images
import CardImg from "../public/web-listing-2x-convenience-at-supermarket-prices.jpeg";
import CardImg2 from "../public/web-listing-2x-all-day-breakfast-saver-combos.jpeg";
import CardImg3 from "../public/web-listing-2x-meal-kits.jpeg";
import CardImg4 from "../public/web-listing-2x-deals-at-1.jpeg";
import CardImg5 from "../public/web-listing-2x-generous-rebates-with-uob-one-cards.jpeg";
import CardImg6 from "../public/web-listing-2x-redeem-a-free-7cafe-on-7rewards.jpeg";
import CardImg7 from "../public/web-listing-2x-mr-softee-coconut.jpeg";
import CardImg8 from "../public/web-listing-2x-bubblegum-slurpee.jpeg";
import CardImg9 from "../public/web-listing-2x-7cafe.png";

import heroImg from "../public/sliders/web-banner-listing-convenience-at-supermarket-prices.jpeg";
import heroImgMobile from "../public/sliders/resp-banner-listing-convenience-at-supermarket-prices.jpeg";
import HeroStatic from "../components/HeroStatic";
import Header from "../components/Header";

const cards = [
  { img: CardImg, title: "Convenience At Supermarket Prices" },
  { img: CardImg2, title: "All-Day Breakfast Saver Combos!" },
  { img: CardImg3, title: "Meal Kits" },
  { img: CardImg4, title: "Deal at $1" },
  {
    img: CardImg5,
    title:
      "Singapore’s most generous rebate cards on daily essentials for everyone, everywhere!",
  },
  { img: CardImg6, title: "Redeem a FREE 7Café on 7Rewards!" },
  { img: CardImg7, title: "Meal Kits 2" },
  { img: CardImg8, title: "Bubblegum Slurpee!" },
  { img: CardImg9, title: "7 Cafe" },
];

const Offer: NextPage = () => {
  return (
    <div>
      <Header title="Offer" />
      <NavBar />
      <HeroStatic imgWeb={heroImg} imgMobile={heroImgMobile} />
      <Section breadcrumb="Offers & Contests">
        {cards.map((card) => (
          <Card key={card.title} img={card.img} title={card.title} />
        ))}
      </Section>
      <Footer />
    </div>
  );
};

export default Offer;
