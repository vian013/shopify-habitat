import React from 'react'
import { CartItems as  CartItemsType} from '../../../../redux/cart/types'
import LineItem from '../line-item/LineItem'
import "./CartItems.css"

function CartItems({cartItems, cartId}: {cartItems: CartItemsType, cartId: string}) {
  return cartItems && (
    <div className='cart-items'>
        {cartItems.map((item) => (
            <LineItem key={item.lineId}
              {...item} 
              // outOfStock={outOfStockError.lineId === item.lineId} 
              cartId={cartId} 
              // showCost={showCost}
            />
        ))}
    </div>
  )
}

export default CartItems