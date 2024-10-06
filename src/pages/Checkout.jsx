import React, { useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [shippingToggle, setShippingToggle] = useState(false)
  const [paymentToggle, setPaymentToggle] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  })

  const cart = useSelector(state => state.cart)
  const navigate = useNavigate()
  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.cartItems.reduce((total, product) => parseInt(total,10) + (product.price.replace(/,/g, '') * product.quantity), 0).toFixed(2),
      totalItems: cart.cartItems.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0),
    }
    // Navigate to the OrderPlacement route and pass order data as state
    navigate('/orderplacement', { state: { order: newOrder } })
  }
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 mt-20'>
      <h3 className='text-3xl font-semibold mb-4'>CHECKOUT</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
          {/* Billing Information */}
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
              <h3 className='text-lg font-semibold mb-4'>Billing Information</h3>
              {billingToggle ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className='block text-gray-700'>Name</label>
                <input type="text" name="name" placeholder='Enter the Name' className='w-full px-3 py-2 border' />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder='Enter Your Email' className='w-full px-3 py-2 border' />
              </div>
              <div>
                <label>Phone</label>
                <input type="number" placeholder='Enter Phone Number' className='w-full px-3 py-2 border' />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
              <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
              {shippingToggle ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className='block text-gray-700'>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                />
              </div>
              <div>
                <label className='block text-gray-700'>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter Your City"
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                />
              </div>
              <div>
                <label className='block text-gray-700'>Zip Code</label>
                <input
                  type="number"
                  name="zip"
                  placeholder="Enter Your Zip Code"
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
              <h3 className='text-lg font-semibold mb-2'>Payment Information</h3>
              {paymentToggle ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className='flex items-center mb-2'>
                <input type="radio" name='payment' checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                <label className='text-base block text-gray-700 ml-2'>Cash on Delivery</label>
              </div>
              <div className='flex items-center mb-2'>
                <input type="radio" name='payment' checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                <label className='text-base block text-gray-700 ml-2'>Debit Card</label>
              </div>

              {paymentMethod === "dc" && (
                <div className='bg-gray-100 p-1 rounded-lg mb-4'>
                  <h3 className='text-lg font-semibold mb-4'>Debit Card Information</h3>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                    <input type='text' placeholder='Enter Card Number' className='border p-2 w-full rounded' required />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                    <input type='text' placeholder='Enter Card Holder Name' className='border p-2 w-full rounded' required />
                  </div>
                  <div className='flex justify-between mb-4'>
                    <div className='w-1/2 mr-2'>
                      <label className='block text-gray-700 font-semibold mb-2'>Expiry Date</label>
                      <input type="text" placeholder='MM/YY' className='border p-2 w-full rounded' required />
                    </div>
                    <div>
                      <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                      <input type="text" placeholder='CVV' className='border p-2 w-full rounded' required />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className='md:w-1/3 ordersummaryContainer bg-white p-6 rounded-lg shadow-md border'>
          <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
          <div className='space-y-4 orderSummarInnerContainer'>
            {cart.cartItems && cart.cartItems.map((product) => (
              <div key={product.id} className='flex justify-between'>
                <div className='flex items-center'>
                  <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                  <div className='ml-4'>
                    <h4 className='text-md font-semibold'>{product.name}</h4>
                    <p className='text-gray-600'>${product.price} x {product.quantity}</p>
                  </div>
                </div>
                <div className='text-gray-800'>
                  ${parseInt(product.price.replace(/,/g, ''))*product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className='mt-4 border-t pt-4'>
            <div className='flex justify-between'>
              <span>Total Price:</span>
              <span className='font-semibold'>${cart.cartItems.reduce((total, product) => parseInt(total,10) + (product.price.replace(/,/g, '') * product.quantity), 0).toFixed(2)}</span>
            </div>
          </div>
          <button onClick={handleOrder} className='mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200'>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
