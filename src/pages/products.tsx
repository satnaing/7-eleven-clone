import React from "react";
import { NextPage } from "next";

// Custom
import HeroStatic from "../components/HeroStatic";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Images
import CardImg1 from "../public/web-banner-meal-kits-products.png";
import CardImg2 from "../public/web-banner-7-select-ready-to-eat.jpeg";
import CardImg3 from "../public/web-banner-slurpee.png";
import CardImg4 from "../public/web-banner-mr-softee.png";
import CardImg5 from "../public/web-listing-2x-7cafe.png";
import CardImg6 from "../public/web-listing-2x-7cafe.png";

import heroImg from "../public/sliders/7-Eleven-Singapore-Products-Details.png";
import heroImgMobile from "../public/sliders/7-Eleven-Singapore-Products-Details-mobile.png";

const cards = [
  {
    id: 1,
    img: CardImg1,
    title: "Meal Kits",
    desc: "Introducing our new Meal Kits that will help you Save Time and Save Money, all while getting a Restaurant-Quality meal! Comes with pre-prepped and portioned quality ...",
  },
  {
    id: 2,
    img: CardImg2,
    title: "7-Select Ready-to-Eat",
    desc: "Trying to satisfy your cravings on the go? Visit any 7-Eleven store to enjoy these convenient snacks that are perfect for your busy lifestyle!",
  },
  {
    id: 3,
    img: CardImg3,
    title: "Slurpee",
    desc: "The one and only frozen beverage that gives you the brainfreeze sensation all year round!",
  },
  {
    id: 4,
    img: CardImg4,
    title: "Mr.Softee",
    desc: "Indulge yourself in swirls of rich and creamy soft-serve ice cream!",
  },
  {
    id: 5,
    img: CardImg5,
    title: "7Cafe",
    desc: "Enjoy a cup of coffee made from the finest 100% Arabica beans, only at 7-Eleven!",
  },
  {
    id: 6,
    img: CardImg6,
    title: "Exclusive Skincare",
    desc: "Achieve luminous and beautiful skin - anywhere, and at any time - with our exclusive KOSÉ SEKKISUI skincare range.",
  },
];

const Offer: NextPage = () => {
  return (
    <div>
      <NavBar />
      <HeroStatic imgWeb={heroImg} imgMobile={heroImgMobile} />
      <Section breadcrumb="Products">
        {cards.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </Section>
      <Footer />
    </div>
  );
};

export default Offer;
