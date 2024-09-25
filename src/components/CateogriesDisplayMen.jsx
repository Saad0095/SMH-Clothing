import React from "react";
import BannerMen1 from "../assets/Banner_men1.webp";
import BannerMen2 from "../assets/Banner_men2.webp";
import BannerMen3 from "../assets/Banner_men3.webp";

const CateogriesDisplayMen = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl text-center font-bold p-4">Shop For Men</h1>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="w-96 h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img
              src={BannerMen1}
              alt="Kameez-Shalwar"
              className="h-full w-full"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">
            Kameez Shalwar
          </h4>
        </div>
        <div className="w-96 h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img src={BannerMen2} alt="Kurta" className="h-full w-full" />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">Kurta</h4>
        </div>
        <div className="w-96 h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img src={BannerMen3} alt="Waist-Coat" className="h-full w-full" />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">Waist-Coat</h4>
        </div>
      </div>
    </div>
  );
};

export default CateogriesDisplayMen;
