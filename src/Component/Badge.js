import React, { useContext } from 'react'
import { cartOpen } from './Cart/CartOpen'
import { badgeContext } from './BadgeContext'

export default function Badge() {
  const { isOpenCart, setIsOpenCart } = useContext(cartOpen)
  const { badge, setBadge } = useContext(badgeContext)


  let style = {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'firebrick',
    color: 'white',
    borderRadius: '50%',
    padding: '0.3rem',
    fontSize: '0.6em'
  }

  return (
    <>
      <div className='fo' style={{ position: 'relative' }}>

        {badge > 0 && <span style={style}>{badge}</span>}
        <button onClick={() => setIsOpenCart(!isOpenCart)}><span class="material-symbols-outlined">shopping_cart</span></button>
      </div>
    </>

  )
}
