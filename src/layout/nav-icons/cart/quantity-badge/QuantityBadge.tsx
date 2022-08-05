import React, { useContext } from 'react'
import { CartContext } from '../../../../App'
import "./QuantityBadge.css"

function QuantityBadge() {
    const {cartState: {cartTotalQuantity}} = useContext(CartContext)!
    
  return (
    <div className='quantity-badge'>
        <p>{cartTotalQuantity}</p>
    </div>
  )
}

export default QuantityBadge