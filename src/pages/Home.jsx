import React from "react";
import Hero from "../components/Hero";
import CateogriesDisplayMen from "../components/CateogriesDisplayMen";
import CateogriesDisplayWomen from "../components/CateogriesDisplayWomen";

const Home = () => {
  return (
    <div>
      <Hero />
      <CateogriesDisplayMen />
      <hr className="w-[90%] h-2 bg-black mx-auto"/>
      <CateogriesDisplayWomen />
    </div>
  );
};

export default Home;
