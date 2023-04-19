import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Badge from './Badge'
import { badgeContext } from './BadgeContext'
import { cartOpen } from './Cart/CartOpen'
import { loggedContext } from './LoggedContext'
import LoggedOut from './Cart/LoggedOut'
import LoggedIn from './Cart/LoggedIn'

export default function Header() {
  const { badge, setBadge } = useContext(badgeContext)
  const { isOpenCart, setIsOpenCart } = useContext(cartOpen)
  const { isLoggedIn, setIsLoggedIn } = useContext(loggedContext)

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
        <Badge content={badge} max={99}>
          <button onClick={() => setIsOpenCart(!isOpenCart)}><span class="material-symbols-outlined">shopping_cart</span></button>

        </Badge>

      </nav>
      {!isLoggedIn && <LoggedOut />}
      {isLoggedIn && <LoggedIn />}

    </div>
  )
}
