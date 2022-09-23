import React, { Dispatch, forwardRef, useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext, BASE_URL, CartContext } from '../../../App'
import fetchCart from '../../../custom-hooks/fetchCart'
import useFetchCart from '../../../custom-hooks/useFetchCart'
import { AppActions } from '../../../store/actions/actions'
import { CartActions } from '../../../store/actions/cartActions'
import CartItems from './cart-items/CartItems'
import "./MiniCart.css"

export type CartItems = {
  imgUrl: string,
  title: string, 
  options: string, 
  price: number,
  quantity: number, 
  variantId: string, 
  lineId: string
}[]

const MiniCart = forwardRef<HTMLDivElement, {}>((props, ref) => {
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
  const history = useHistory()
  const {dispatch} = useContext(AppContext)!

  const fetchCartItems = async (loading: boolean, setLoading: Dispatch<boolean>) => {
    await fetchCart(cartId, loading, setLoading, cartDispatch, setCartItems, setSubTotal)
  }

  const handleButtonClick = (path: string) => {
    history.push(path)
    dispatch({type: AppActions.CLOSE_SIDEBAR})
  }

  useEffect(() => {
    isCartOpen && fetchCartItems(loading, setLoading)
    
  }, [isCartOpen])
  
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