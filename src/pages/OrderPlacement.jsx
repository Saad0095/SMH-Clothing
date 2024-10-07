//orderplacement
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const OrderPlacement = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const order = location.state?.order // Access the order data from the state

  if (!order) {
    return <p>No order details found.</p>
  }

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-28 mt-20'>
      <h2 className='text-4xl font-semibold mb-4'>Thank you For your Order</h2>
      <p className='text-2xl font-semibold mb-4'>Your order has been placed successfully. You will receive an email confirmation shortly.</p>
      <div className='mt-10 p-6 border rounded-lg bg-gray-100'>
        <h3 className='text-lg font-semibold mb-4'>Order Summary:</h3>
        <p className='text-lg'>Order Number: {order.orderNumber}</p>
        <div className='mt-4'>
          <h4 className='text-lg font-semibold mb-2'>Shipping Information:</h4>
          <p>{order.shippingInformation.name}</p>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div className='mt-4'>
          <h4 className='text-lg font-semibold mb-2'>Items Ordered: <span className='font-semibold'>{order.totalItems}</span> </h4>
         
        </div>
        <div className='mt-4 flex justify-between'>
          <span className='text-lg font-semibold'>Total Price: <span className='font-semibold'>${order.totalPrice}</span></span>
          
        </div>
      </div>
      <div className='mt-6'>
        <button className='mt-3 text-xl ml-4 bg-green-500 text-white py-2 px-4 trackOrderBTn hover:bg-green-600'>Track Order</button>
        <button className='mt-3 text-xl ml-4 bg-red-500 text-white py-2 px-4 hover:bg-red-600' onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    </div>
  )
}

export default OrderPlacement
