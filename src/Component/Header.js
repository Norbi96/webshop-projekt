import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Badge from './Badge'
import { badgeContext } from './BadgeContext'

export default function Header() {
  const { badge, setBadge } = useContext(badgeContext)


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
        <Badge badgeContent={badge} color="primary" />

      </nav>

    </div>
  )
}
