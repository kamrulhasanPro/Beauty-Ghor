"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function Hero() {
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const carouselImage = [
    "https://i.postimg.cc/vBXcNc73/image-url-https-bk-shajgoj-com-storage-2026-01-winter-care-shajgoj-homepage-website.jpg",
    "https://i.postimg.cc/PJxPsT25/image_url_https_bk_shajgoj_com_storage_2025_09_shajgoj_korean_skin_care_festival.png",
    "https://i.postimg.cc/qq5gpS5L/image_url_https_bk_shajgoj_com_storage_2024_10_shop_by_concern_web_updated.png",
    "https://i.postimg.cc/c4vrF1vX/image_url_https_bk_shajgoj_com_storage_2025_09_nirvana_hero_sliding_banner_1.png",
  ];
  return (
    <section>
      <Slider {...settings}>
        {carouselImage.map((carousel, i) => (
          <div key={i}>
            <Image
              src={carousel}
              height={300}
              width={1240}
              alt={`Slide ${i + 1}`}
              className="w-full h-52 md:h-full md:object-cover overflow-x-hidden"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
