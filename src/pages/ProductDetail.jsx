import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Men } from "../app/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { productId } = useParams();
  // console.log("Product id from url:", productId);
  const product = Men.find((item) => item.id === Number(productId));
  // console.log(product);
  const [activeImg, setActiveImg] = useState(product.image);
  const [size, setSize] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="  mt-16 max-w-screen-2xl container mx-auto xl:px-16 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-8">
          <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 h-max ">
            <div className="flex flex-col  gap-6">
              <img src={activeImg} className="w-full " />
              <div className="flex flex-row justify-between">
                <img
                  src={product.image[0]}
                  className="w-24 h-26 cursor-pointer "
                  onClick={() => setActiveImg(product.image[0])}
                />
                <img
                  src={product.image[1]}
                  className="w-24 h-26 cursor-pointer "
                  onClick={() => setActiveImg(product.image[1])}
                />
                <img
                  src={product.image[2]}
                  className="w-24 h-26 cursor-pointer "
                  onClick={() => setActiveImg(product.image[2])}
                />
              </div>
            </div>

            <div>
              <h1 className="title text-left text-xl font-medium ">
                {product.name}
              </h1>
              <span className=" text-gray-400">SKU#: J-10000077382</span>
              <h2 className=" text-gray-500">IN STOCK</h2>
              <h1 className="font-bold text-4xl">{product.price}</h1>
              <hr className="border border-gray-500 my-4" />
              <div className="mb-6">
                <button className="flex justify-center items-center gap-2 w-ful py-3 px-3 border border-black rounded-md ease-in-out shadow-slate-600 lg:m-0 md:px-6 hover:bg-black hover:text-white">
                  Add To Bag
                </button>
              </div>
              <h1 className="mb-2 ml-1 font-semibold">Size</h1>
              <div className="flex space-x-4 mb-6 ">
                {product.sizes.map((item, index) => (
                  <div className="">
                    <button
                      onClick={() => setSize(item)}
                      className={`text-lg font-bold  p-4 rounded-full border  shadow-lg flex items-center justify-center w-8 h-8 hover:bg-black hover:text-white  ${
                        item === size
                          ? "  border-current bg-black text-white"
                          : ""
                      } `}
                      key={index}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <hr className="border border-gray-300 my-4" />
              <div className="relative">
                <button
                  className="w-full text-left p-2 rounded hover:bg-gray-200 transition flex justify-between"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="font-bold">More Information</span>
                  <span>
                    {!isOpen ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <ul className="flex flex-col p-4 transition ">
                    <div className="flex  mb-2">
                      <span className="font-bold">color</span>
                      <li className="ml-16">{product.color}</li>
                    </div>
                    <div className="flex mb-2 ">
                      <span className="font-bold">Category</span>
                      <li className="ml-10">{product.category}</li>
                    </div>
                    <div className="flex ">
                      <span className="font-bold">Fabric</span>
                      <li className="ml-16">{product.fabric}</li>
                    </div>
                    
                  </ul>
                )}
                 <hr className="border border-gray-300 my-4" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
