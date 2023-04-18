import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function OrderCompleted() {

  const navigate = useNavigate()

  const date = new Date();

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const realDate = year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0') + ' ' + String(hour).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')

  return (
    <div>
      Rendelés leadva.{realDate}
    </div>
  )
}
