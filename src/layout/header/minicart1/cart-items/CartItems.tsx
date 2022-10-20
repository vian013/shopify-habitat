import React from 'react'
import LineItem from '../line-item/LineItem'
import "./CartItems.css"

function CartItems() {
  return (
    <div className='cart-items'>
        {/* {cartItems.map((item) => (
            <LineItem key={item.lineId}
              {...item} 
              outOfStock={outOfStockError.lineId === item.lineId} 
              cartId={cartId} 
              showCost={showCost}
            />
        ))} */}
    </div>
  )
}

export default CartItems