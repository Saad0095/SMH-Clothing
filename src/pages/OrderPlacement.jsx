import React from 'react'

const OrderPlacement = () => {
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-28 mt-20'>
      <h2 className='text-4xl font-semibold mb-4'>Thank you For your Order</h2>
      <p className='text-2xl font-semibold mb-4'>Your order has been placed Successfully. You will recieve an email confirmation shortly</p>
      <div className='mt-10 p-6 border rounded-lg bg-gray-100'>
      <h3 className='text-lg font semibold mb-4'> Order Summary:</h3>
      <p className='text-lg'>Order Number:</p>
      <div className='mt-4'>
      <h4 className='text-lg font-semibold mb-2'> Shipping Information:</h4>

      </div>
      <div className='mt-4'>
        <h4 className='text-lg font-semibold mb-2'>Item Ordered:</h4>
        <div className='flex justify-between mt-2 '></div>

      </div>
      <div className='mt-4 flex justify-between'>
        <span className='text-lg font-semibold'>Total Price:</span>
        <span className='font-semibold '></span>
      </div>
      </div>
      <div className='mt-6'>
        <button className=' text-xl bg-green-500 text-white py-2 px-4 hover:bg-green-600 '> Track Order</button>
        <button className=' text-xl ml-4 bg-red-500 text-white py-2 px-4 hover:bg-red-600'> Continue Shopping</button>
      </div>
      
    </div>
  )
}

export default OrderPlacement
