import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { CartContext } from '../../../../App'
import { CartState } from '../../../../redux/cart/types'
import { RootState } from '../../../../redux/store'
import "./QuantityBadge.css"

function QuantityBadge() {
  const {cart} = useSelector<RootState>(state => state.cart) as CartState
    
  return (
    <div className='quantity-badge'>
        <p>{cart?.totalQuantity}</p>
    </div>
  )
}

export default QuantityBadge