import React, { useContext } from 'react'
import { cartOpen } from './Cart/CartOpen'
import { badgeContext } from './BadgeContext'
import { cartContext } from './Cart/cartContext'
import '../css/header.css'

export default function Badge({ content, children, max = 99, className }) {
  const { badge, setBadge } = useContext(badgeContext)


  let style = {
    position: 'absolute',
    top: '0.5rem',
    right: '0.3rem',
    background: 'firebrick',
    color: 'white',
    borderRadius: '50%',
    padding: '0.3rem',
    fontSize: '0.6em',
    width: '25px',
    display: 'flex',
    justifyContent: 'center'
  }


  return (
    <>
      <div className='fo' style={{ position: 'relative' }}>
        {children}
        {!!content && (
          <span className="amount">{content <= max ? content : max + "+"}</span>
        )}

        {/* {badge > 0 && <span style={style}>{badge}</span>} */}
      </div>
    </>

  )
}
