import React from "react";
import { NextPage } from "next";

// Custom
import HeroStatic from "../components/HeroStatic";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Images
import CardImg1 from "../public/img_career_opportunity.jpeg";
import CardImg2 from "../public/img_career_traineeship.jpeg";
import CardImg3 from "../public/img_career_offer.jpeg";

import heroImg from "../public/sliders/banner_careers.jpeg";
import heroImgMobile from "../public/sliders/banner_careers-jpg-mobile.png";

const cards = [
  {
    id: 1,
    img: CardImg1,
    title: "Career Opportunities",
  },
  {
    id: 2,
    img: CardImg2,
    title: "Traineeship",
  },
  {
    id: 3,
    img: CardImg3,
    title: "What We Offer",
  },
];

const Offer: NextPage = () => {
  return (
    <div>
      <NavBar />
      <HeroStatic imgWeb={heroImg} imgMobile={heroImgMobile} />
      <Section heading="Be part of our high performing team">
        {cards.map((card) => (
          <Card key={card.id} img={card.img} title={card.title} />
        ))}
      </Section>
      <Footer />
    </div>
  );
};

export default Offer;
