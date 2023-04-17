import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../../css/product.css'
import { productContext } from './ProductContext'

export default function ProductDetails() {

  const navigate = useNavigate()
  const params = useParams()
  const { products, setProducts } = useContext(productContext)

  const find = products.filter(prod => prod.id == params.id && prod)

  return (
    <div>
      <h1>ProductDetails</h1>
      <div className='product-detail'>
        <img src={find[0].imgsrc} alt={find[0].name} />
        <h2>{find[0].name}</h2>
        <p>Price: {find[0].price} Ft</p>
        <p>Amount: {find[0].quantity}</p>
        <div className='product-detail-btn'>
          <Link to={`/edit-product/${find[0].id}`}>Edit</Link>
          <Link to={`/delete-product/${find[0].id}`}>Delete</Link>
        </div>
        <br />
        <div className='product-detail-btn'>
          <Link to={navigate(-1)}>Back</Link>
        </div>
      </div>
    </div >
  )
}
