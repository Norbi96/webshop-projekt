import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import '../../css/cart.css'
import InCart from './InCart'

export default function Cart() {

  const { cart } = useContext(cartContext)

  const cartItems = cart.map(item => item.quantity)


  const veg = cartItems.reduce((acc, curr) => acc + curr, 0)

  return (
    <div className='cart'>
      {cart.length > 0 ? <p>{veg} item in the cart</p> : <p>cart is empty</p>}
      {cart.length > 0 && <InCart />}
    </div>
  )
}
