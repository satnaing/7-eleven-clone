import React from "react";
import styles from "../styles/HeroSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

import slider1 from "../public/sliders/web-banner-listing-all-day-breakfast-saver-combos.jpeg";
import slider1Mobile from "../public/sliders/resp-banner-listing-all-day-breakfast-saver-combos.jpeg";
import slider2 from "../public/sliders/web-banner-listing-convenience-at-supermarket-prices.jpeg";
import slider2Mobile from "../public/sliders/resp-banner-listing-convenience-at-supermarket-prices.jpeg";
import slider3 from "../public/sliders/web-banner-listing-mr-softee-coconut.jpeg";
import slider3Mobile from "../public/sliders/resp-banner-listing-mr-softee-coconut.jpeg";
import slider4 from "../public/sliders/web-banner-listing-meal-kits.png";
import slider4Mobile from "../public/sliders/resp-banner-listing-meal-kits.jpeg";

const webSliders = [
  { id: 1, image: slider1, alt: "All day breakfast saver combos" },
  { id: 2, image: slider2, alt: "Conveinence at supermarket prices" },
  { id: 3, image: slider3, alt: "Mr.Softee coconut" },
  { id: 4, image: slider4, alt: "Meal kits" },
];

const mobileSliders = [
  { id: 1, image: slider1Mobile, alt: "All day breakfast saver combos" },
  { id: 2, image: slider2Mobile, alt: "Conveinence at supermarket prices" },
  { id: 3, image: slider3Mobile, alt: "Mr.Softee coconut" },
  { id: 4, image: slider4Mobile, alt: "Meal kits" },
];

function HeroSection() {
  const WebSliders = webSliders.map((slider) => (
    <SwiperSlide key={slider.id}>
      <Image src={slider.image} alt={slider.alt} />
    </SwiperSlide>
  ));
  const MobileSliders = mobileSliders.map((slider) => (
    <SwiperSlide key={slider.id}>
      <Image src={slider.image} alt={slider.alt} />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className={styles.web}
      >
        {WebSliders}
      </Swiper>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className={styles.mobile}
      >
        {MobileSliders}
      </Swiper>
    </>
  );
}

export default HeroSection;
