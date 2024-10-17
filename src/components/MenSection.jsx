import React from "react";
import BannerMen1 from "../assets/Banner_men1.webp";
import BannerMen2 from "../assets/Banner_men2.webp";
import BannerMen3 from "../assets/Banner_men3.webp";
import { useNavigate } from "react-router-dom";

const MenSection = () => {
  const navigate = useNavigate();

  const handleShopNow = (category) => {
    navigate(`/men/${category}`);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between items-center w-[92%] mx-auto">
        <span className="w-1/4 md:w-1/3 bg-black h-1 dark:bg-white"></span>
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold p-3">
          Shop For Men
        </h1>
        <span className="w-1/4 md:w-1/3 bg-black h-1 dark:bg-white"></span>
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="h-[450px] w-96 md:h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img
              src={BannerMen1}
              alt="Kameez-Shalwar"
              className="h-full w-full "
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="text-white text-base bg-gradient-to-r from-zinc-900 via-black to-zinc-950 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-gray-500 font-medium rounded-lg px-7 py-2.5 text-center me-2 mb-2"
                onClick={() => handleShopNow("Kameez-shalwar")}
              >
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">
            Kameez Shalwar
          </h4>
        </div>
        <div className="h-[450px] w-96 md:h-[500px] 2xl:h-[400px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img src={BannerMen2} alt="Kurta" className="h-full w-full" />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="text-white text-base bg-gradient-to-r from-zinc-900 via-black to-zinc-950 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-gray-500 font-medium rounded-lg px-7 py-2.5 text-center me-2 mb-2"
                onClick={() => handleShopNow("Kurta")}
              >
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">Kurta</h4>
        </div>
        <div className="h-[450px] w-96 md:h-[500px] 2xl:h-[400px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img src={BannerMen3} alt="Waist-Coat" className="h-full w-full" />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="text-white text-base bg-gradient-to-r from-zinc-900 via-black to-zinc-950 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-gray-500 font-medium rounded-lg px-7 py-2.5 text-center me-2 mb-2"
                onClick={() => handleShopNow("Waistcoat")}
              >
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

export default MenSection;
