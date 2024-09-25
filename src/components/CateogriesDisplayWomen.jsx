import React from "react";
import BannerWomen1 from "../assets/Banner_women1.webp";
import BannerWomen2 from "../assets/Banner_women2.webp";
import BannerWomen3 from "../assets/Banner_women3.webp";
import { useNavigate } from "react-router-dom";

const CateogriesDisplayWomen = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-10 ">
      <h1 className="text-4xl text-center font-bold p-4">Shop For Women</h1>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-96 h-[500px] p-4 m-4">
          <div className="relative group h-full w-full">
            <img
              src={BannerWomen1}
              alt="Kameez-Shalwar"
              className="w-full h-full"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black py-2 px-4 rounded" onClick={()=> navigate("/")}>
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
              <button className="bg-white text-black py-2 px-4 rounded" onClick={()=> navigate("/")}>
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
              <button className="bg-white text-black py-2 px-4 rounded" onClick={()=> navigate("/")}>
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
