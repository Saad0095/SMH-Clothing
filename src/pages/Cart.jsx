import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmptyCart from "../assets/empty.webp"; // Uncomment this if you have the image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Cart component mounted');
    console.log('Cart items on mount:', cart.cartItems);
  }, []);
  
  // const handleRemoveFromCart = (productId) => {
  //   dispatch(removeFromCart({ id: productId }));
  // };

  // const handleQuantityChange = (productId, increase) => {
  //   if (increase) {
  //     dispatch(increaseQuantity({ id: productId })); // Increase quantity
  //   }
  //   //  else {
  //   //   dispatch(decreaseQuantity({ id: productId })); // Decrease quantity
  //   // }
  // };

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 mt-20'>
      {cart.cartItems.length > 0 ? (
        <div>
          <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
          <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className='md:w-2/3'>
              <div className='flex justify-between border-b items-center mb-4 text-us font-bold'>
                <p>PRODUCT</p>
                <div className='flex space-x-8'>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              {cart.cartItems.map((product) => (
                <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                  <div className='md:flex items-center space-x-4'>
                    <div>
                      <img 
                        src={product.image[0]} // Change this according to your image structure
                        alt={product.name} 
                        className='w-16 h-16 object-contain rounded' 
                      />
                      <div className='flex-1 ml-4'>
                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                      </div>
                    </div>
                    <div className='flex space-x-12 items-center'>
                      <p>${product.price.toFixed(2)}</p>
                      <div className='flex items-center justify-center border'>
                        <button 
                          className='text-xl font-bold px-1.5 border-r'
                          onClick={() => handleQuantityChange(product.id, false)} // Decrease quantity
                        >-</button>
                        <p className='text-xl px-2'>{product.quantity}</p>
                        <button 
                          className='text-xl px-1 border-l'
                          onClick={() => handleQuantityChange(product.id, true)} // Increase quantity
                        >+</button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button 
                        className='text-red-500 hover:text-red-700'
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
              <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
              <div className='flex justify-between mb-5 border-b pb-1'>
                <span className='text-sm'>TOTAL ITEMS:</span>
                <span>{cart.cartItems.length}</span>
              </div>
              <div className='mb-4 border-b pb-2'>
                <p>Shipping:</p>
                <p className='ml-2'>Shipping to:</p>
                <span className='text-us font-bold'> {/* Address goes here */} </span>
                <button className='text-blue-500 hover:underline mt-1 ml-2'>Change address</button>
              </div>
              <div className='flex justify-between mb-4'>
                <span>TOTAL PRICE:</span>
                <span>
                  ${cart.cartItems.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)}
                </span>
              </div>
              <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center'>
          <img src={EmptyCart} alt="Empty Cart" className='h-96' />
        </div>
      )}
    </div>
  );
}

export default Cart;
