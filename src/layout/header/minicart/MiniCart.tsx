import React, { forwardRef, useContext, useEffect, useState } from 'react'
import {  useHistory, useLocation } from 'react-router-dom'
import { AppContext } from '../../../App'
import useFetchCart from '../../../custom-hooks/useFetchCart'
import { AppActions } from '../../../store/actions/actions'
import CartItems from './cart-items/CartItems'
import "./MiniCart.css"

export type CartItem = {
  imgUrl: string,
  title: string, 
  options: string, 
  price: number,
  quantity: number, 
  variantId: string, 
  lineId: string,
  cost: number
}

export type CartItems = CartItem[]

const MiniCart = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const {
    cartId,
    cartItems,
    isCartOpen,
    subTotal,
    fetchCartItems
  } = useFetchCart()
  
  const [loading, setLoading] = useState<boolean>(false)
  const history = useHistory()
  const {dispatch} = useContext(AppContext)!
  const location = useLocation()

  const handleButtonClick = (path: string) => {
    const currentPath = location.pathname
    if (currentPath==="/cart") {
      history.go(0)
    }
    else {
      history.push(path)
    } 
    dispatch({type: AppActions.CLOSE_SIDEBAR})
  }

  useEffect(() => {
    isCartOpen && fetchCartItems(loading, setLoading)
  }, [isCartOpen, cartId])
  
  return (
          <>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              cartItems.length <= 0 ? (
                <h1>Cart is empty</h1>
              ) : (
                <div className="mini-cart">
                  <CartItems fetchCartItems={fetchCartItems} cartItems={cartItems}/>
                  <div className="cart-footer">
                    <div className="subtotal-wrapper">
                      <p>Subtotal </p>
                      <p>${subTotal}</p>
                    </div>
                    <div className="footer-buttons-wrapper">
                      <button onClick={() => handleButtonClick("/cart")} className='btn btn-checkout'>
                        view cart
                      </button>
                      <button onClick={() => handleButtonClick("/checkout")} className='btn btn-checkout'>
                        checkout
                      </button>
                    </div>
                  </div>
                </div>
              ) 
            )}
          </>
  )

})

export default React.memo(MiniCart)