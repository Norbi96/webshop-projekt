import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { cartOpen } from './Cart/CartOpen'

export default function Header() {

  const { isOpenCart, setIsOpenCart } = useContext(cartOpen)

  return (
    <div className='header'>
      <div class="logo">
        <p>practice</p>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button onClick={() => setIsOpenCart(!isOpenCart)}><span class="material-symbols-outlined">shopping_cart</span></button>
      </nav>

    </div>
  )
}
