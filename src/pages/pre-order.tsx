import React from "react";
import { NextPage } from "next";

// Custom
import HeroStatic from "../components/HeroStatic";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Images
import CardImg1 from "../public/web-listing-sunnyhills-pineapple-cake-sanrio-tote-bag-1880.png";

import heroImg from "../public/sliders/web-banner-listing-2x-sunnyhills-pineapple-cake-sanrio-tote-bag-1880.jpeg";
import heroImgMobile from "../public/sliders/resp-banner-listing-sunnyhills-pineapple-cake-sanrio-tote-bag-1880.jpeg";
import Header from "../components/Header";

const cards = [
  {
    id: 1,
    img: CardImg1,
    title: "SUNNYHILLS PINEAPPLE CAKE & SANRIO TOTE BAG - $18.80",
  },
];

const PreOrder: NextPage = () => {
  return (
    <div>
      <Header title="Pre-Order" />
      <NavBar />
      <HeroStatic imgWeb={heroImg} imgMobile={heroImgMobile} />
      <Section breadcrumb="Pre-order">
        {cards.map((card) => (
          <Card key={card.id} img={card.img} title={card.title} />
        ))}
      </Section>
      <Footer />
    </div>
  );
};

export default PreOrder;
