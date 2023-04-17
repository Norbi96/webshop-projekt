import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import { cartOpen } from './CartOpen'
import '../../css/cart.css'
import InCart from './InCart'
import { productContext } from '../../Menu/ProductDetails/ProductContext'
import { useParams } from 'react-router-dom'

export default function Cart() {



  const { products, setProducts } = useContext(productContext)
  const { cart, setCart } = useContext(cartContext)

  const cartItems = cart.map(item => item.quantity)

  console.log(cartItems);

  const veg = cartItems.reduce((acc, curr) => acc + curr, 0)

  return (
    <div className='cart'>
      {cart.length > 0 ? <p>{veg} item in the cart</p> : <p>cart is empty</p>}
      {cart.length > 0 && <InCart />}
    </div>
  )
}
