import React, { useContext } from 'react'
import { orderContext } from './OrderContext'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { cartTotalContext } from './CartTotalContext'
import '../../css/order.css'
import { cartContext } from './cartContext'


export default function Order() {

  const { orderno } = useParams()

  const navigate = useNavigate()

  const { total, setTotal } = useContext(cartTotalContext)
  const { setCart } = useContext(cartContext)

  const { order, setOrder } = useContext(orderContext)

  function sendOrder() {
    setCart([])
    navigate('/order-completed')
  }

  return (
    <div className='order-complete'>
      <p>Megrendelés száma: {orderno}</p>
      <ul>
        <li>Termék neve:</li>
        <li>Termék ára:</li>
        <li>Darabszám:</li>
        <li>Részössz:</li>
        <li>Végösszeg:</li>
      </ul>
      {order.map(item => <ul>
        <li>{item.name}</li>
        <li>{item.price} Ft</li>
        <li>{item.quantity} db</li>
        <li>{item.price * item.quantity} Ft</li>
        <li></li>

      </ul>)}
      <div className='order-total'>
        <p></p>

        <p>{total} Ft</p>
      </div>
      <div className='checkout'>
        <button onClick={sendOrder}>Elküldés</button>
      </div>

    </div>
  )
}
