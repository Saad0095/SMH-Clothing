import React, { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addDetails } from "../app/slices/orderSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.address.trim() === "" ||
      formData.city.trim() === "" ||
      formData.zipCode.trim() === ""
    ) {
      setErrorMsg("*Please fill out the required fields");
    } else if (formData.name.trim().length < 4) {
      setErrorMsg("*Name must contain at least 4 characters");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg("*Invalid Email Address");
    } else {
      setErrorMsg(null);
      dispatch(addDetails(formData));
      navigate("/orderplacement");

      // const newOrder = {
      //   products: cart.products,
      //   orderNumber: "12345",
      //   shippingInformation: formData,
      //   totalPrice: cart.cartItems
      //     .reduce(
      //       (total, product) =>
      //         parseFloat(total) +
      //         parseFloat(product.price.replace(/,/g, "")) * product.quantity,
      //       0
      //     )
      //     .toFixed(2),
      //   totalItems: cart.cartItems.reduce(
      //     (totalQuantity, product) => totalQuantity + product.quantity,
      //     0
      //   ),
      // };
      // navigate("/orderplacement", { state: { order: newOrder } });
    }
  };

  const totalPrice = cart.cartItems
    .reduce(
      (total, product) =>
        parseFloat(total) +
        parseFloat(product.price.replace(/,/g, "")) * product.quantity,
      0
    )
    .toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="container   md:px-10 px-4 lg:px-22  pt-32 pb-14">
      <h3 className="text-3xl font-semibold mb-4">CHECKOUT</h3>
      {errorMsg && (
        <p className="text-red-500 text-center text-sm mb-4">{errorMsg}</p>
      )}
      <div className="flex flex-col lg:flex-row  justify-between sm:space-x-10 mt-8">
        <div className="lg:w-2/3 md:w-3/3  ">
          {/* Billing Information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between p-3 rounded"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold ">Billing Information</h3>
              {billingToggle ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter the Name"
                  className="w-full px-3 py-2 border bg-inherit"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border bg-inherit"
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-full px-3 py-2 border bg-inherit"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between  p-3 rounded"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 ">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border bg-inherit"
                />
              </div>
              <div>
                <label className="block text-gray-700 ">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter Your City"
                  className="w-full px-3 py-2 border bg-inherit"
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="number"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Enter Your Zip Code"
                  className="w-full px-3 py-2 border bg-inherit"
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between  p-3 rounded"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Information</h3>
              {paymentToggle ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2 px-4">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="text-base block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 md:w-2/3   ordersummaryContainer p-6  rounded-lg shadow-md border h-fit">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="space-y-4 orderSummarInnerContainer">
            {cart.cartItems &&
              cart.cartItems.map((product) => (
                <div key={product.id} className="flex justify-between">
                  <div className="flex ">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="ml-4">
                      <h4 className="sm:text-md text-sm font-semibold">{product.name}</h4>
                      <p className="text-gray-600">
                        Rs {product.price} x {product.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    Rs{" "}
                    {(
                      parseFloat(product.price.replace(/,/g, "")) *
                      product.quantity
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              ))}
            <div className="flex justify-between border-t border-gray-300 pt-4 mt-4">
              <h4 className="font-semibold">Total Price:</h4>
              <h4 className="font-semibold">Rs {totalPrice}</h4>
            </div>
            <button
              className="w-full text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  me-2 mb-2"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
