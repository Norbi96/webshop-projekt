import React from 'react'
import { useContext } from 'react'
import { cartContext } from './cartContext'

export default function OrderCompleted() {

  const date = new Date();

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()




  return (
    <div>
      Rendelés leadva.{year + '-' + '0' + month + '-' + day + ' ' + hour + ':' + minutes}
    </div>
  )
}
