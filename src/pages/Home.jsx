import React from "react";
import Carousel from "../components/Carousel";
import CateogriesDisplayMen from "../components/CateogriesDisplayMen";
import CateogriesDisplayWomen from "../components/CateogriesDisplayWomen";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CateogriesDisplayMen />
      <hr className="w-[90%] h-2 bg-black mx-auto" />
      <CateogriesDisplayWomen />
      <hr className="w-[90%] h-2 bg-black mx-auto" />
      <Newsletter />
    </div>
  );
};

export default Home;
