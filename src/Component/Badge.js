import React, { useContext } from 'react'
import '../css/header.css'

export default function Badge({ content, children, max = 99, className }) {

  return (
    <>
      <div className='fo' style={{ position: 'relative' }}>
        {children}
        {!!content && (
          <span className="amount">{content <= max ? content : max + "+"}</span>
        )}

      </div>
    </>

  )
}
