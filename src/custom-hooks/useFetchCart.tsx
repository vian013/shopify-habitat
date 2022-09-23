import React, { useContext, useState } from 'react'
import { CartContext } from '../App'
import { CartItems } from '../layout/header/minicart/MiniCart'

function useFetchCart() {
    const [cartItems, setCartItems] = useState<CartItems>([])
    const {cartState: {cartId, isCartOpen}, cartDispatch} = useContext(CartContext)!
    const [subTotal, setSubTotal] = useState<number>(0)
    
  return {
    cartItems,
    setCartItems,
    cartId,
    isCartOpen,
    cartDispatch,
    subTotal,
    setSubTotal
  }
}

export default useFetchCart