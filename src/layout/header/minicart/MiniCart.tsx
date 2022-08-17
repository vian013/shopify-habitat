import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { AppContext, CartContext } from '../../../App'
import { AppActions } from '../../../store/actions/actions'
import { CartActions } from '../../../store/actions/cartActions'
import CartItems from './cart-items/CartItems'
import "./MiniCart.css"

export type CartItems = {title: string, quantity: number, variantId: string, lineId: string}[]

const MiniCart = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [cartItems, setCartItems] = useState<CartItems>([])
  const {cartState: {cartId, isCartOpen: _isCartOpen}, cartDispatch} = useContext(CartContext)!
  const [loading, setLoading] = useState<boolean>(false)

  const fetchCartItems = async(loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>>)=> {
    
    if (!loading) setLoading(true)
    try {
      const data = await fetch(`http://localhost:4000/cart-items?cartId=${cartId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const {totalQuantity, items}: {totalQuantity: number, items: CartItems} = await data.json()

      if (totalQuantity >= 0) cartDispatch({type: CartActions.UPDATE_TOTAL_QUANTITY, payload: totalQuantity})
      if (items) setCartItems(items)
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    _isCartOpen && fetchCartItems(loading, setLoading)
    
  }, [_isCartOpen])
  
  return (
          <>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              cartItems.length <= 0 ? (
                <h1>Cart is empty</h1>
              ) : (
                <CartItems fetchCartItems={fetchCartItems} cartItems={cartItems}/>
              ) 
            )}
          </>
  )

})

export default React.memo(MiniCart)