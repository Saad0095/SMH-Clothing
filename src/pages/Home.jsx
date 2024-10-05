import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import MenSection from "../components/MenSection";
import WomenSection from "../components/WomenSection";
import Modal from "../components/Modal";
import Newsletter from "../components/Newsletter";

import { useSelector, useDispatch } from "react-redux";
import { data } from "../app/data";

const Home = () => {

  return (
    <div>
      <Carousel />
      <MenSection/>
      <WomenSection/>
      <Modal/>
      <hr className="w-[90%] h-2 bg-black mx-auto my-4" />
      <Newsletter />
  
    </div>
  );
};

export default Home;
