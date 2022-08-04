import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../../../App'
import { CartActions } from '../../../../store/actions/cartActions'
import LineItem from '../line-item/LineItem'
import { CartItems as CartItemsType } from '../MiniCart'

function CartItems({cartItems, fetchCartItems}: {cartItems: CartItemsType, fetchCartItems: Function}) {
  const {cartState: {cartId}, cartDispatch} = useContext(CartContext)!

  useEffect(() => {
    cartDispatch({type: CartActions.OPEN_CART})
  }, [])
    
  return (
    <>
        {cartItems.map(({title, quantity, variantId, lineId}) => (
            <LineItem key={variantId} title={title} quantity={quantity} cartId={cartId} variantId={variantId} lineId={lineId} fetchCartItems={fetchCartItems}/>
        ))}
    </>
  )
}

export default CartItems