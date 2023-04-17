import React, { useContext } from 'react'
import '../css/product.css'
import { Link } from 'react-router-dom';
import { productContext } from './ProductDetails/ProductContext';
import { cartContext } from '../Component/Cart/cartContext';
import { badgeContext } from '../Component/BadgeContext';
export default function Products() {


  const { products, setProdcuts } = useContext(productContext)

  const { badge, setBadge } = useContext(badgeContext)

  const { cart, setCart } = useContext(cartContext)


  const cartItems = cart.map(item => item.quantity)


  const veg = cartItems.reduce((acc, curr) => acc + curr, 0)

  setBadge(veg)

  function addToCart(id) {

    const find = products.find(prod => prod.id === id)

    let isInCart = cart.some(item => item.name === find.name)

    if (!isInCart) {
      setCart([...cart, { ...find, quantity: 1 }])
      isInCart = true
    }


  }

  return (
    <>
      <div className='products'>
        {products.map(product =>
          <div className='box'>
            <img src={product.imgsrc} alt={product.name} />
            <div className='inside-box'>
              <h2>{product.name}</h2>
              <p>Ára: {product.price} Ft</p>
              <p>Raktáron: {product.quantity} db</p>
            </div><div className='prodbtns'>
              <Link to={`/products/${product.id}`}>Termék info</Link>
              <button onClick={() => addToCart(product.id)}>Kosárba</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
