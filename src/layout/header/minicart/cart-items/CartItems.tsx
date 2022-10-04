import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../../../App'
import { CartActions } from '../../../../store/actions/cartActions'
import LineItem from '../line-item/LineItem'
import { CartItems as CartItemsType } from '../MiniCart'
import "./CartItems.css"

type Props = {
  cartItems: CartItemsType, 
  fetchCartItems: Function
  showCost?: boolean
}


function CartItems({cartItems, fetchCartItems, showCost}: Props) {
  const {cartState: {cartId, outOfStockError}, cartDispatch} = useContext(CartContext)!

  useEffect(() => {
    cartDispatch({type: CartActions.OPEN_CART})
  }, [])
    
  return (
    <div className='cart-items'>
        {cartItems.map((item) => (
            <LineItem key={item.lineId}
              {...item} 
              outOfStock={outOfStockError.lineId === item.lineId} 
              cartId={cartId} 
              fetchCartItems={fetchCartItems}
              showCost={showCost}
            />
        ))}
    </div>
  )
}

export default CartItems