import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../app/slices/cartSlice";
import { removeDetails } from "../app/slices/orderSlice";

const OrderPlacement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const { cartItems } = useSelector((state) => state.cart);

  const handleContinue = () => {
    dispatch(removeDetails());
    navigate("/");
  };

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  if (!order) {
    return <p>No order details found.</p>;
  }

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-28 pt-32 pb-20">
      <h2 className="text-4xl font-semibold mb-4">Thank you For your Order</h2>
      <p className="text-2xl font-semibold mb-4">
        Your order has been placed successfully. You will receive an email
        confirmation shortly.
      </p>
      <div className="mt-10 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Order Summary:</h3>
        <p className="text-lg">Order Number: #{Date.now()}</p>
        <div className="mt-4 space-y-2">
          <h4 className="text-lg font-semibold mb-2">Shipping Information:</h4>
          <p>{order[0].name}</p>
          <p>{order[0].address}</p>
          <p>{order[0].city}</p>
          <p>{order[0].zip}</p>
          <h1 className="font-bold">
            Selected Products:{" "}
            <span className="font-normal">
              {cartItems.map((item) => (
                <p key={item.id}>
                  {item.quantity} x {item.name}
                </p>
              ))}
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="mt-6">
        <button
          className="mt-3 text-xl ml-4 bg-red-500 text-white py-2 px-4 hover:bg-red-600"
          onClick={handleContinue}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderPlacement;
