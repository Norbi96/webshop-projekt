import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from './ProductContext';
import '../../css/product.css';

export default function EditProduct() {

  const params = useParams();

  const { products, setProducts } = useContext(productContext);

  const find = products.filter(prod => prod.id == params.id && prod)

  const navigate = useNavigate()

  const [name, setName] = useState(find[0].name)
  const [price, setPrice] = useState(find[0].price)
  const [amount, setAmount] = useState(find[0].quantity)
  const [img, setImg] = useState(find[0].imgsrc)

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

  return (
    <>

      <div className='product-detail'>
        <p><label>Product name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /></label></p>
        <p><label>Product price: <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} /></label></p>
        <p><label>Product amount: <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} /></label></p>
        <p><label>Product imgsrc: <input type='text' value={img} onChange={(e) => setImg(e.target.value)} /></label></p>
        <div className='product-detail-btn'>
          <Link to={navigate(-1)}>Back</Link>
          <button onClick={editProductHandler}>Edit</button>
        </div>
      </div>
    </>
  )
}
