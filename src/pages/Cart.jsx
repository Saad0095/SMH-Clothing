import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../assets/emptycart.png";
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
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 pt-28">
      {cart.cartItems.length > 0 ? (
        <div className="py-10">
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-us font-bold">
                <p>PRODUCT</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              {cart.cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b"
                >
                  <div className="md:flex items-center space-x-4">
                    <div>
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                    </div>
                    <div className="flex space-x-14 items-center">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                      </div>
                      <div className="priceContainer">
                        <p className="text-lg-3xl font-semi-bold">
                          Rs {parseFloat(product.price).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r"
                          onClick={() =>
                            dispatch(decreaseQuantity({ id: product.id }))
                          }
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button
                          className="text-xl font-bold px-1.5 border-l"
                          onClick={() =>
                            dispatch(increaseQuantity({ id: product.id }))
                          }
                        >
                          +
                        </button>
                      </div>
                      <p>
                        Rs{" "}
                        {(
                          parseFloat(product.price.replace(/,/g, "")) *
                          product.quantity
                        ).toLocaleString()}
                      </p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() =>
                          dispatch(removeFromCart({ id: product.id }))
                        }
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
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
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
