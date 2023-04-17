import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from './ProductContext';
import '../../css/product.css';
import { nameContext } from './NameContext';
import { priceContext } from './PriceContext';
import { amountContext } from './AmountContext';
import { imgContext } from './ImgContext';

export default function EditProduct() {


  const params = useParams();

  const { products, setProducts } = useContext(productContext);

  const find = products.filter(prod => prod.id === params.id && prod)

  const navigate = useNavigate()

  const { name, setName } = useContext(nameContext)
  const { price, setPrice } = useContext(priceContext)
  const { amount, setAmount } = useContext(amountContext)
  const { img, setImg } = useContext(imgContext)


  function editProductHandler() {

    const idx = products.indexOf(find[0])

    const update = {
      ...find[0],
      name: name,
      price: Number(price),
      quantity: Number(amount),
      imgsrc: img
    }

    setProducts([
      ...products.slice(0, idx),
      update,
      ...products.slice(idx + 1)
    ]
    )

    navigate('/products')
  }

  function changeHandler(e, fgv) {
    fgv(e.target.value)
  }

  return (
    <>

      <div className='product-detail'>
        <p>
          <label>
            Product name:
            <input type='text' value={name} onChange={(e) => changeHandler(e, setName)} />
          </label>
        </p>
        <p>
          <label>
            Product price:
            <input type='text' value={price} onChange={(e) => changeHandler(e, setPrice)} />
          </label>
        </p>
        <p>
          <label>
            Product amount:
            <input type='text' value={amount} onChange={(e) => changeHandler(e, setAmount)} />
          </label>
        </p>
        <p>
          <label>
            Product imgsrc:
            <input type='text' value={img} onChange={(e) => changeHandler(e, setImg)} />
          </label>
        </p>
        <div className='product-detail-btn'>
          <Link to={navigate(-1)}>Back</Link>
          <button onClick={editProductHandler}>Edit</button>
        </div>
      </div>
    </>
  )
}
