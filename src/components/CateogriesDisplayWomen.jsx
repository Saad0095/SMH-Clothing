import React from "react";
import BannerWomen1 from "../assets/Banner_women1.webp";
import BannerWomen2 from "../assets/Banner_women2.webp";
import BannerWomen3 from "../assets/Banner_women3.webp";
import { useNavigate } from "react-router-dom";

const CateogriesDisplayWomen = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-between items-center w-[92%] mx-auto">
        <span className="w-1/4 md:w-1/3 bg-black h-1"></span>
        <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold p-3">
          Shop For Women
        </h1>
        <span className="w-1/4 md:w-1/3 bg-black h-1"></span>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-96 h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img
              src={BannerWomen1}
              alt="Kameez-Shalwar"
              className="w-full h-full"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => navigate("/")}
              >
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">Unstitched</h4>
        </div>
        <div className="w-96 h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img src={BannerWomen2} alt="Kurta" className="w-full h-full" />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => navigate("/")}
              >
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">Stitched</h4>
        </div>
        <div className="w-96 h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img
              src={BannerWomen3}
              alt="Waist-Coat"
              className="w-full h-full"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => navigate("/")}
              >
                Shop Now
              </button>
            </div>
          </div>
          <h4 className="text-center font-semibold text-xl p-4">Kurti</h4>
        </div>
      </div>
    </div>
  );
};

export default CateogriesDisplayWomen;
