import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false, 
    pauseOnFocus: false, 
    pauseOnDotsHover: false, 
  };

  return (
    <div className="carousel overflow-hidden relative">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[642px]"
            src="../src/assets/CarouselImg1.webp"
            alt="Carousel Image"
          />
        </div>
        <div>
          <img
            className="w-full h-[642px]"
            src="../src/assets/CarouselImg2.webp"
            alt="Carousel Image"
          />
        </div>
        <div>
          <img
            className="w-full h-[642px]"
            src="../src/assets/CarouselImg3.webp"
            alt="Carousel Image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
