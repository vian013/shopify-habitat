import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { AppContext, CartContext } from '../../../App'
import { AppActions } from '../../../store/actions/actions'
import { CartActions } from '../../../store/actions/cartActions'
import CartItems from './cart-items/CartItems'
import "./MiniCart.css"

export type CartItems = {title: string, quantity: number, variantId: string, lineId: string}[]

const MiniCart = forwardRef<HTMLDivElement, { isCartOpen: boolean, closeCart: () => void }>(({ isCartOpen, closeCart }, ref) => {
  const {dispatch} = useContext(AppContext)!
  const [cartItems, setCartItems] = useState<CartItems>([])
  const {cartState: {cartId, isCartOpen: _isCartOpen}, cartDispatch} = useContext(CartContext)!
  const [loading, setLoading] = useState<boolean>(false)

  const handleCloseCart = () => {
    dispatch({type: AppActions.SET_UNBLURRED})
    cartDispatch({type: CartActions.CLOSE_CART})
  }

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
    <div className={`minicart-container ${_isCartOpen&&"open"}`}>
        <div className={`overlay ${_isCartOpen&&"open"}`} onClick={handleCloseCart}></div>
        <div className={`minicart-wrapper ${_isCartOpen&&"open"}`} ref={ref}>
          <>
            <div className="cart-header">
              <h3 className='title'>Cart</h3>
              <button className='close-btn' onClick={handleCloseCart}>Close</button>
            </div>
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
        </div>
    </div>
    </>
  )

})

export default React.memo(MiniCart)