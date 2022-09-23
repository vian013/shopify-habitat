import React, { Dispatch, useContext, useEffect, useState } from 'react'
import { BASE_URL, CartContext } from '../App'
import { CartItems } from '../layout/header/minicart/MiniCart'
import { CartActions } from '../store/actions/cartActions'
import { IAction } from '../type/global'

async function fetchCart(
    cartId: string, 
    loading: boolean, 
    setLoading: Dispatch<boolean>,
    cartDispatch: ({}: IAction<any>) => void,
    setCartItems: Dispatch<CartItems>,
    setSubTotal: Dispatch<number>
    ) {
    if (!loading) setLoading(true)
    try {
      const data = await fetch(`${BASE_URL}/cart-items?cartId=${cartId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const {totalQuantity, subTotal, items}: {totalQuantity: number, subTotal: number, items: CartItems} = await data.json()
      
      
      if (totalQuantity >= 0) cartDispatch({type: CartActions.UPDATE_TOTAL_QUANTITY, payload: totalQuantity})
      if (items) setCartItems(items)
      if (subTotal) setSubTotal(subTotal)
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  
}

export default fetchCart