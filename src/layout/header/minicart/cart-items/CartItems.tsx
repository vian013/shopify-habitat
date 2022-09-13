import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../../../App'
import { CartActions } from '../../../../store/actions/cartActions'
import LineItem from '../line-item/LineItem'
import { CartItems as CartItemsType } from '../MiniCart'
import "./CartItems.css"

function CartItems({cartItems, fetchCartItems}: {cartItems: CartItemsType, fetchCartItems: Function}) {
  const {cartState: {cartId, outOfStockError}, cartDispatch} = useContext(CartContext)!

  useEffect(() => {
    cartDispatch({type: CartActions.OPEN_CART})
  }, [])
    
  return (
    <div className='cart-items'>
        {cartItems.map(({imgUrl, title, options, price, quantity, variantId, lineId}) => (
            <LineItem
              imgUrl={imgUrl} 
              key={variantId} 
              title={title} 
              options = {options}
              price={price}
              quantity={quantity} 
              cartId={cartId} 
              variantId={variantId} 
              lineId={lineId} 
              outOfStock={outOfStockError.lineId === lineId} 
              fetchCartItems={fetchCartItems}
            />
        ))}
    </div>
  )
}

export default CartItems