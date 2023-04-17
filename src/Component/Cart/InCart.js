import React, { useContext, useState } from 'react'
import { cartContext } from './cartContext'
import { cartTotalContext } from './CartTotalContext'
import '../../css/cart.css'

export default function InCart() {
  const { cart, setCart } = useContext(cartContext)


  function addQuantity(id) {
    const find = cart.find(item => item.id === id)
    const idx = cart.indexOf(find)
    const update = { ...find, quantity: find.quantity + 1 }
    setCart([
      ...cart.slice(0, idx),
      update,
      ...cart.slice(idx + 1)
    ])
  }
  function removeQuantity(id) {
    const find = cart.find(item => item.id === id)
    const idx = cart.indexOf(find)

    if (find.quantity > 0) {
      const update = { ...find, quantity: find.quantity - 1 }
      setCart([
        ...cart.slice(0, idx),
        update,
        ...cart.slice(idx + 1)
      ])
    } else {
      setCart([
        ...cart.slice(0, idx),
        ...cart.slice(idx + 1)
      ])
    }



  }

  const { total, setTotal } = useContext(cartTotalContext)

  const filter = cart.map(item => item.quantity * item.price)

  const mtotal = filter.reduce((acc, curr) => acc + curr, 0)

  setTotal(mtotal)

  return (
    <div className='in-cart'>
      <h2>Cart:</h2>
      <button onClick={() => setCart([])}>Delete Cart</button>
      <div className='cart-items'>
        {cart.map(item =>
          <>
            <div className='cart-item'>
              <p>{item.name} ára:{item.price} db: {item.quantity} <button onClick={() => addQuantity(item.id)}>+</button><button onClick={() => removeQuantity(item.id)}>-</button></p>
            </div>
          </>)}
        <p>Total: {total}Ft</p>
      </div>

    </div>
  )
}
