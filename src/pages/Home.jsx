import React from "react";
import Carousel from "../components/Carousel";
import CateogriesDisplayMen from "../components/CateogriesDisplayMen";
import CateogriesDisplayWomen from "../components/CateogriesDisplayWomen";
import Modal from "../components/Modal";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CateogriesDisplayMen />
      <CateogriesDisplayWomen />
      <Modal/>
      <hr className="w-[90%] h-2 bg-black mx-auto my-4" />
      <Newsletter />
    </div>
  );
};

export default Home;
