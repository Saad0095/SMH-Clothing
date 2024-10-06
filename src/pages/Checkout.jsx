import React, {useState}from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [shippingToggle, setshippingToggle] = useState(false)
  const [payementToggle, setPaymentToggle] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('cod')
  
  return (
    <div className='conatiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 mt-20'>
      <h3 className='text-3xl font-semibold mb-4 '>CHECKOUT</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8 '>
        <div className='md:w-2/3'>
        <div className='border p-2 mb-6'>
          <div className='flex items-center justify-between'
            onClick={() => setBillingToggle(!billingToggle)}>
            <h3 className='text-lg font-semibold mb-4'>Billing Information</h3>
            {billingToggle ?<FontAwesomeIcon icon={faAngleUp} />: <FontAwesomeIcon icon={faAngleDown} />}
          </div>
          <div className={`space-y-4 ${billingToggle ? "" : "hidden"}` }>
            <div>
              <label className='block text-gray-700'>Name</label>
              <input type="text"
                name="name"
                placeholder='Enter the Name'
                className='w-full px-3 py-2 border'
              />
            </div>
{/*  */}
<div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email"
              placeholder='Enter Your  Email'
              className='w-full px-3 py-2 border'/>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="Number"
              placeholder='Enter Phone Number'
              className='w-full px-3 py-2 border'/>
            </div>
          </div>


          </div>
         
        </div>

      {/* Shipping */}
        <div className='border p-2 mb-6'>
          <div className='flex items-center justify-between'
            onClick={() => setshippingToggle(!shippingToggle)}>
            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
            {shippingToggle ?<FontAwesomeIcon icon={faAngleUp} />: <FontAwesomeIcon icon={faAngleDown} />}

          </div>
          <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}` }>
            <div>
              <label className='block text-gray-700'>Address</label>
              <input type="text"
                name="name"
                placeholder='Enter Name'
                className='w-full px-3 py-2 border'
              />
            </div>

            {/*  */}
            <div>
            <div>
              <label htmlFor="">City</label>
              <input type="email"
              placeholder='Enter Your  Email'
              className='w-full px-3 py-2 border'/>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Zip Code</label>
              <input type="Number"
              placeholder='Enter Phone Number'
              className='w-full px-3 py-2 border'/>
            </div>
          </div>
          </div>
        
        </div>
      {/* payment Method */}
      <div className='border p-2 mb-6'>
          <div className='flex items-center justify-between'
            onClick={() => setPaymentToggle(!payementToggle)}>
            <h3 className='text-lg font-semibold mb-2'>Payement Information</h3>
            {payementToggle ?<FontAwesomeIcon icon={faAngleUp} />: <FontAwesomeIcon icon={faAngleDown} />}

          </div>
          <div className={`space-y-4 ${payementToggle ? "" : "hidden"}` }>
            <div className='flex item-center mb-2'>
              <input type="radio" name='payement ' checked = {paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
              <label className='block text-gray-700 ml-2'>Cash on delievery</label>
             
            </div>
            <div className='flex item-center mb-2'>
              <input type="radio" name='payement ' checked = {paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
              <label className='block text-gray-700 ml-2'>Debit Card</label>
             
            </div>
            {/*  */}
                 
         {paymentMethod === "dc" && (
          <div className='bg-gray-100 p-40 rounded-lg mb-4'>
            <h3 className='text-xl font-semibold mb-4'>Debit Card Information </h3>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
              <input type='text' placeholder='Enter Card Number' className='border p-2 w-full rounded' required/>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
              <input type='text' placeholder='Enter Card Number' className='border p-2 w-full rounded' required/>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='w-1/2 mr-2'>
                <label className='block text-gray-700 font-semibold mb-2'>Expiry Date </label>
                <input type="number" placeholder='MM/YY' className='border p-2 w-full rounded' required/>
              </div>
              <div>
                <label>CVV</label>
                <input type="text" placeholder='CVV' className='border p-2 w-full rounded' required />
              </div>
            </div>
          </div>
         )}

          </div>
     
        </div>
        </div>
        <div className='md:w-1/3 max-h-96 bg-white p-6 rounded-lg shadow-md border'></div>
      </div>
      
    </div>
  )
}

export default Checkout
