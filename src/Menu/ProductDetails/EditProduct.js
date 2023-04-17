import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from './ProductContext';
import '../../css/product.css';

export default function EditProduct() {

  const { id } = useParams();

  const { products, setProducts } = useContext(productContext);
  console.log('id', id);
  const find = products.find(prod => prod.id == id)


  const navigate = useNavigate()
  const [name, setName] = useState(find.name)
  const [price, setPrice] = useState(find.price)
  const [amount, setAmount] = useState(find.quantity)
  const [img, setImg] = useState(find.imgsrc)

  function editProductHandler() {

    const idx = products.indexOf(find)

    const update = {
      ...find,
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
        <p>
          <label>
            Product name:
            <input type='text' value={name} />
          </label>
        </p>
        <p>
          <label>
            Product price:
            <input type='text' value={price} />
          </label>
        </p>
        <p>
          <label>
            Product amount:
            <input type='text' value={amount} />
          </label>
        </p>
        <p>
          <label>
            Product imgsrc:
            <input type='text' value={img} />
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
