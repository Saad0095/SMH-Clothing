import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../app/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="border-t pt-24 ">
      <div>
        {cart.cartItems.length > 0 ? (
          <>
            {cart.cartItems.map((product) => (
              <div
                key={product.id}
                className="py-4 container   sm:mx-4   border-t border-b text-gray-700  items-center grid  grid-cols-[2fr_0.5fr_0.5fr] sm:grid-cols-[2fr_2fr_0.5fr]  gap-4 dark:text-white"
              >
                <div className="flex items-start  sm:gap-6">
                  <img
                    className="w-16 sm:w-20 mx-4 "
                    src={product.image[0]}
                    alt=""
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {product.name}
                    </p>
                    <div className="flex items-center sm:gap-5 gap-2 mt-2 ">
                      <p className="sm:text-lg text-sm font-semi-bold">
                        Rs{" "}
                        {parseFloat(
                          product.price.replace(/,/g, "")
                        ).toLocaleString()}
                      </p>
                    </div>
                    <p> Size: {product.size}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:mt-0  mt-5 ">
                  <button
                    className="max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border-r"
                    onClick={() =>
                      dispatch(decreaseQuantity({ id: product.id }))
                    }
                  >
                    -
                  </button>
                  <p className="sm:text-xl  text-sm sm:px-2  px-1 ">
                    {product.quantity}
                  </p>
                  <button
                    className="max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border-l"
                    onClick={() =>
                      dispatch(increaseQuantity({ id: product.id }))
                    }
                  >
                    +
                  </button>
                  <button
                    className="text-red-500  text-sm hover:text-red-700 w-4 mr-4 sm:w-5 cursor-pointer "
                    onClick={() =>
                      dispatch(
                        removeFromCart({ id: product.id, size: product.size })
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
                <p className=" font-semibold sm:text-xl text-sm sm:mt-0 mt-5">
                  Rs{" "}
                  {(
                    parseFloat(product.price.replace(/,/g, "")) *
                    product.quantity
                  ).toLocaleString()}
                </p>
              </div>
            ))}
            <div className="flex justify-end m-16">
              <div className=" w-full sm:w-[450px]  p-6  rounded-lg shadow-md border  ">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className="flex  justify-between mb-5 border-b pb-1">
                  <span className="text-sm">TOTAL ITEMS:</span>
                  <span>
                    {cart.cartItems.reduce(
                      (totalQuantity, product) =>
                        totalQuantity + product.quantity,
                      0
                    )}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>TOTAL PRICE:</span>
                  <span>
                    Rs{" "}
                    {cart.cartItems
                      .reduce(
                        (total, product) =>
                          total +
                          parseFloat(product.price.replace(/,/g, "")) *
                            product.quantity,
                        0
                      )
                      .toLocaleString()}
                  </span>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-zinc-900 via-black to-zinc-950 hover:bg-gradient-to-br focus:outline-none mb-2 text-white py-2 dark:border-[1px] dark:border-gray-500"
                  onClick={() => navigate("/checkout")}
                >
                  Checkout
                </button>
                <button
                  className="w-full bg-white text-black py-2 hover:text-white hover:bg-green-800  border border-black"
                  onClick={() => navigate("/")}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-screen flex flex-col mt-36 items-center gap-5">
            <h1 className="text-3xl font-bold p-5">Your Cart is Empty!</h1>
            <button className="bg-black text-white px-4 py-2 dark:bg-cyan-600 cursor-pointer" onClick={()=>navigate("/")}>CONTINUE SHOPPING</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
