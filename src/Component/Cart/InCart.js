import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import { cartTotalContext } from './CartTotalContext'
import { Link } from 'react'
import '../../css/cart.css'
import { orderContext } from './OrderContext'
import { useNavigate } from 'react-router-dom'
import { cartOpen } from './CartOpen'
import { badgeContext } from '../BadgeContext'


export default function InCart() {
  const { cart, setCart } = useContext(cartContext)
  const { order, setOrder } = useContext(orderContext)
  const { isOpenCart, setIsOpenCart } = useContext(cartOpen)

  const navigate = useNavigate()


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
  const { badge, setBadge } = useContext(badgeContext)

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
  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function orderProcess() {
    let rnd = getRandomArbitrary(40000, 60000)
    setOrder(cart)
    setIsOpenCart(!isOpenCart)
    setBadge(null)
    navigate(`/order/${rnd}`)


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
        <p><button onClick={orderProcess} >Megrendelés</button></p>
      </div>

    </div>
  )
}
