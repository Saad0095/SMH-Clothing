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
    <div className="border-t pt-14">

      <div>
      {cart.cartItems.length > 0 ? (
            cart.cartItems.map((product) => (
              <div key={product.id} className="py-4  border-t border-b text-gray-700 items-center grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr]  gap-4">
                <div className="flex items-start gap-6">
                  <img className="w-16 sm:w-20" src={product.image[0]} alt="" />
                  <div>
                  <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                  <div className="flex items-center gap-5 mt-2 ">
                    
                    <p className="text-lg-3xl font-semi-bold">
                           Rs{" "}
                           {parseFloat(
                             product.price.replace(/,/g, "")
                           ).toLocaleString()}
                         
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">s</p>
                  </div>
                  </div>
                </div>
                <div className="flex items-center justify-center ">
                         <button
                           className="max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border-r"
                           onClick={() =>
                             dispatch(decreaseQuantity({ id: product.id }))
                           }
                         >
                           -
                         </button>
                         <p className="text-xl px-2">{product.quantity}</p>
                         <button
                                 className="max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border-l"

                           onClick={() =>
                             dispatch(increaseQuantity({ id: product.id }))
                           }
                         >
                           +              
                         </button>
                         <button
                         className="text-red-500 hover:text-red-700 w-4 mr-4 sm:w-5 cursor-pointer "
                         onClick={() =>
                           dispatch(removeFromCart({ id: product.id }))
                         }
                       >
                         <FontAwesomeIcon icon={faTrashAlt} />
                       </button>
                       
                       </div>
                       <p className=" font-bold">
                        Rs{" "}
                        {(
                          parseFloat(product.price.replace(/,/g, "")) *
                          product.quantity
                        ).toLocaleString()}
                      </p>


              </div>
            ))
          ) : (
            <p>no product in the cart </p>
          )}
      </div>


    </div>

    // <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 pt-28">
    //   {cart.cartItems.length > 0 ? (
    //     <div className="py-10">
    //       <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
    //       <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8 gap-4">
    //         <div className="w-[90%] md:w-2/3">
    //           <div className="flex justify-between border-b items-center mb-4 text-us font-bold">
    //             <p>PRODUCT</p>
    //             <div className="flex space-x-8">
    //               <p>PRICE</p>
    //               <p>QUANTITY</p>
    //               <p>SUBTOTAL</p>
    //               <p>REMOVE</p>
    //             </div>
    //           </div>
    //           {cart.cartItems.map((product) => (
    //             <div
    //               key={product.id}
    //               className="flex items-center justify-between p-3 border-b"
    //             >
    //               <div className="md:flex items-center space-x-4">
    //                 <div>
    //                   <img
    //                     src={product.image[0]}
    //                     alt={product.name}
    //                     className="w-16 h-16 object-contain rounded"
    //                   />
    //                 </div>
    //                 <div className="flex space-x-14 items-center">
    //                   <div className="flex-1">
    //                     <h3 className="text-lg font-semibold">
    //                       {product.name}
    //                     </h3>
    //                   </div>
    //                   <div className="priceContainer">
    //                     <p className="text-lg-3xl font-semi-bold">
    //                       Rs{" "}
    //                       {parseFloat(
    //                         product.price.replace(/,/g, "")
    //                       ).toLocaleString()}
    //                     </p>
    //                   </div>
    //                   <div className="flex items-center justify-center border">
    //                     <button
    //                       className="text-xl font-bold px-1.5 border-r"
    //                       onClick={() =>
    //                         dispatch(decreaseQuantity({ id: product.id }))
    //                       }
    //                     >
    //                       -
    //                     </button>
    //                     <p className="text-xl px-2">{product.quantity}</p>
    //                     <button
    //                       className="text-xl font-bold px-1.5 border-l"
    //                       onClick={() =>
    //                         dispatch(increaseQuantity({ id: product.id }))
    //                       }
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                   <p>
    //                     Rs{" "}
    //                     {(
    //                       parseFloat(product.price.replace(/,/g, "")) *
    //                       product.quantity
    //                     ).toLocaleString()}
    //                   </p>
    //                   <button
    //                     className="text-red-500 hover:text-red-700"
    //                     onClick={() =>
    //                       dispatch(removeFromCart({ id: product.id }))
    //                     }
    //                   >
    //                     <FontAwesomeIcon icon={faTrashAlt} />
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //         <div className="md:w-1/3 p-6 rounded-lg shadow-md border">
    //           <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
    //           <div className="flex justify-between mb-5 border-b pb-1">
    //             <span className="text-sm">TOTAL ITEMS:</span>
    //             <span>
    //               {cart.cartItems.reduce(
    //                 (totalQuantity, product) =>
    //                   totalQuantity + product.quantity,
    //                 0
    //               )}
    //             </span>
    //           </div>
    //           <div className="flex justify-between mb-4">
    //             <span>TOTAL PRICE:</span>
    //             <span>
    //               Rs{" "}
    //               {cart.cartItems
    //                 .reduce(
    //                   (total, product) =>
    //                     total +
    //                     parseFloat(product.price.replace(/,/g, "")) *
    //                       product.quantity,
    //                   0
    //                 )
    //                 .toLocaleString()}
    //             </span>
    //           </div>
    //           <button
    //             className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
    //             onClick={() => navigate("/checkout")}
    //           >
    //             Checkout
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="flex justify-center">
    //       <img src={EmptyCart} alt="Empty Cart" className="h-96" />
    //     </div>
    //   )}
    // </div>
  );
};

export default Cart;



{/* <div className="py-8 max-w-8xl container mx-auto px-3 mt-5">
      <h2 className="mb-5 text-xl font-bold">Shopping Cart</h2>
      <div className="flex flex-col md:flex-row justify-between md-gap-8 gap-4 ">
        <div className="space-y-6 ">
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((product) => (
              <div key={product.id} className="rounded-lg">
                <div className="justify-between mb-6 rounded-lg  bg-white p-6 shadow-md flex justify-start ">
                  <img
                    src={product.image[0]}
                    className="w-full h-28 rounded-lg w-20 "
                    alt=""
                  />
                  <div className="ml-4 flex w-full justify-between">
                    <div className=" mt-0">
                      <h2 className="text-sm font-bold text-gray-900">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-sm text-gray-900">
                        Rs{" "}
                        {parseFloat(
                          product.price.replace(/,/g, "")
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div className=" flex justify-between mb-24 space-y-4 block space-x-6">
                      <div className="flex items-center  border-gray-100">

                      <button
                         className="text-xl  px-1.5 border"
                         onClick={() =>
                           dispatch(decreaseQuantity({ id: product.id }))
                         }
                       >
                         -
                       </button>
                       <p className="text-xl px-2 border">{product.quantity}</p>
                       <button
                         className="text-xl  px-1.5 border"
                         onClick={() =>
                           dispatch(increaseQuantity({ id: product.id }))
                         }
                       >
                         +
                       </button>
                       <button
                         className="text-red-500 ml-2 hover:text-red-700"
                         onClick={() =>
                           dispatch(removeFromCart({ id: product.id }))
                         }
                       >
                         <FontAwesomeIcon icon={faTrashAlt} />
                       </button>
                      </div>
                     

                    </div>
                    
                    <div className=" mt-1 flex justify-between">
                      <p className=" font-bold">
                        Rs{" "}
                        {(
                          parseFloat(product.price.replace(/,/g, "")) *
                          product.quantity
                        ).toLocaleString()}
                      </p>
                      </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>no product in the cart </p>
          )}
        </div>
        <div className="md-w-1/3"> billing</div>
      </div>
    </div> */}
