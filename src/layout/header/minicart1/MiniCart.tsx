import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { BASE_URL } from '../../../App'
import { fetchCart } from '../../../redux/cart/actions'
import { CartState } from '../../../redux/cart/types'
import { RootState } from '../../../redux/store'
import CartItems from './cart-items/CartItems'
import EmptyCart from './empty-cart/EmptyCart'
import "./MiniCart.css"

function MiniCart() {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const {cart, loading} = useSelector<RootState>(state => state.cart) as CartState

  useEffect(()=>{
    if(cart) dispatch(fetchCart(cart.id))
  }, [])
    
  const handleButtonClick = (path: string) => {
    const currentPath = location.pathname
    if (currentPath==="/cart") {
      history.go(0)
    }
    else {
      history.push(path)
    } 
  }
    
  if(loading) return <h1>Loading...</h1>
  return !cart || cart.totalQuantity===0 ? 
    (
      <EmptyCart />
    )
  : (
    <div className="mini-cart">
      <CartItems 
        cartId={cart.id}
        cartItems={cart.items}
      />
      <div className="cart-footer">
        <div className="subtotal-wrapper">
          <p>Subtotal </p>
          <p>${cart?.subTotal}</p>
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
}

export default MiniCart