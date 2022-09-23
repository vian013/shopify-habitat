import React, { Dispatch, useEffect, useState } from 'react'
import fetchCart from '../../custom-hooks/fetchCart'
import useFetchCart from '../../custom-hooks/useFetchCart'
import messages from '../../messages/messages'

function Cart() {
  const {
    cartItems,
    setCartItems,
    cartId,
    isCartOpen,
    cartDispatch,
    subTotal,
    setSubTotal
  } = useFetchCart()

  const [loading, setLoading] = useState<boolean>(false)
  const fetchCartItems = async (loading: boolean, setLoading: Dispatch<boolean>) => {
    await fetchCart(cartId, loading, setLoading, cartDispatch, setCartItems, setSubTotal)
  }
  
  useEffect(()=>{
  }, [])

  const {cart, orderSummary} = messages.pages.cart
  
  return (
    <div id='cart-page'>
      <div className="page-width">
        <div className="content-wrapper">
          <div className="cart-wrapper">
            <h1 className="title">{cart.title}</h1>
          </div>
          <div className="order-summary">
            <h1 className='title'>{orderSummary.title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart