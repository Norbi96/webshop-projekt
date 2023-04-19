import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import '../../css/cart.css'
import InCart from './InCart'
import { badgeContext } from '../BadgeContext'
import { cartOpen } from './CartOpen'

export default function Cart() {

  const { cart } = useContext(cartContext)
  const { badge, setBadge } = useContext(badgeContext)
  const { isOpenCart, setIsOpenCart } = useContext(cartOpen)

  const cartItems = cart.map(item => item.quantity)


  const veg = cartItems.reduce((acc, curr) => acc + curr, 0)

  setBadge(veg)

  return (
    <div className='cart'>
      <div className='exit-cart'><button onClick={() => setIsOpenCart(!isOpenCart)}>x</button></div>
      <br />
      {badge > 0 ? <p>{badge} {badge > 1 ? 'items' : 'item'} in the cart</p> : <p>cart is empty</p>}
      {badge > 0 && <InCart />}
    </div>
  )
}
