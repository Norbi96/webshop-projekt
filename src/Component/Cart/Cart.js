import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import '../../css/cart.css'
import InCart from './InCart'
import { badgeContext } from '../BadgeContext'

export default function Cart() {

  const { cart } = useContext(cartContext)
  const { badge, setBadge } = useContext(badgeContext)

  const cartItems = cart.map(item => item.quantity)


  const veg = cartItems.reduce((acc, curr) => acc + curr, 0)

  setBadge(veg)

  return (
    <div className='cart'>
      {cart.length > 0 ? <p>{badge} item in the cart</p> : <p>cart is empty</p>}
      {cart.length > 0 && <InCart />}
    </div>
  )
}
