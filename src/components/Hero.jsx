import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    // cssEase: "linear",
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        <div>
          <img className="w-full h-screen object-cover" src="../src/assets/Hero1.webp" alt="Hero1" />
        </div>
        <div>
          <img className="w-full h-screen object-cover" src="../src/assets/Hero2.webp" alt="Hero2" />
        </div>
        <div>
          <img className="w-full h-screen object-cover" src="../src/assets/Hero3.webp" alt="Hero3" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
