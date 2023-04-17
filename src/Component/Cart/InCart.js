import React, { useContext } from 'react'
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

    if (find.quantity > 1) {
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

  function cartNameLength(item) {
    let name = ''
    for (let i = 0; i < 10; i++) {
      name += item.name[i]
    }
    return name + '...'
  }

  return (
    <div className='in-cart'>
      <h2>Cart:
        <button onClick={() => setCart([])}><span class="material-symbols-outlined">
          remove_shopping_cart
        </span></button>
      </h2>
      <div className='cart-items'>
        {cart.map(item =>
          <>
            <div className='cart-item'>
              <p>{item.name.length > 10 ? cartNameLength(item) : item.name} ára:{item.price} db: {item.quantity} <p><button className='plus' onClick={() => addQuantity(item.id)}>+</button><button className='minus' onClick={() => removeQuantity(item.id)}>-</button></p></p>
            </div>
          </>)}
        <p style={{ fontSize: '1.3em', color: 'purple' }}>Total: {total}Ft</p>
      </div>

    </div>
  )
}
