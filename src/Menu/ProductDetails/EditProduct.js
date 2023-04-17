import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from './ProductContext';
import '../../css/product.css';

export default function EditProduct() {

  const { id } = useParams();

  const { products, setProducts } = useContext(productContext);
  console.log('id', id);
  const find = products.find(prod => prod.id == id)

  let name = find.name
  let price = find.price
  let amount = find.quantity
  let img = find.imgsrc
  const navigate = useNavigate()
  // const [name, setName] = useState(find.name)
  // const [price, setPrice] = useState(find.price)
  // const [amount, setAmount] = useState(find.quantity)
  // const [img, setImg] = useState(find.imgsrc)

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
  };



  function namechange(e) {
    name = e.target.value
  }
  function pricechange(e) {
    price = e.target.value
  }
  function amountchange(e) {
    amount = e.target.value
  }
  function imgehange(e) {
    img = e.target.value
  }
  return (
    <>
      <div className='product-detail'>
        <p>
          <label>
            Product name:
            <input type='text' placeholder={name} onChange={namechange} />
          </label>
        </p>
        <p>
          <label>
            Product price:
            <input type='text' placeholder={price} onChange={pricechange} />
          </label>
        </p>
        <p>
          <label>
            Product amount:
            <input type='text' placeholder={amount} onChange={amountchange} />
          </label>
        </p>
        <p>
          <label>
            Product imgsrc:
            <input type='text' placeholder={img} onChange={imgehange} />
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
