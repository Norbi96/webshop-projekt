import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productContext } from './ProductContext'

export default function DeleteProduct() {

  const params = useParams()

  const { products, setProducts } = useContext(productContext)

  const navigate = useNavigate()

  const newProduct = products.filter(prod => prod.id !== params.id)

  console.log(newProduct);



  return (
    <>
      A törlés sikeresen megtörtént..Visszaírányítás a termékekre
      {setTimeout(() => {
        setProducts(newProduct)
        navigate('/products')
      }, 2000)}
    </>
  )

}
