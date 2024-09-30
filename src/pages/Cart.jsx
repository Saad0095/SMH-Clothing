import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from "../assets/emptycart.png";

const Cart = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      {cart.product.lenght > 0 ?
      <div>
        <h3>SHOPPING CART</h3>
        <div>
          <div>
            <div>
              <p>PRODUCT</p>
              <div>
                <p>PRICE</p>
                <p>PRICE</p>
                <p>PRICE</p>
                <p>PRICE</p>
              </div>
            </div>
          </div>
          <div></div>
          </div>
      </div>
      : <div className='flex justify-center'>
        <img src={EmptyCart} alt="" className='h-96'/>
      </div>}
    </div>
  )
}

export default Cart
