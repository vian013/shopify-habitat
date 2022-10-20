import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { BASE_URL } from '../../../App'
import { fetchCart } from '../../../redux/cart/actions'
import CartItems from './cart-items/CartItems'
import "./MiniCart.css"

function MiniCart() {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
    
  const handleButtonClick = (path: string) => {
    const currentPath = location.pathname
    if (currentPath==="/cart") {
      history.go(0)
    }
    else {
      history.push(path)
    } 
  }

  useEffect(()=>{
  }, [])
  
  const handleFetchCart = () => {
    dispatch(fetchCart("hahaha"))

  } 
    
  return (
    <div className="mini-cart">
      <CartItems/>
      <div className="cart-footer">
        <div className="subtotal-wrapper">
          <p>Subtotal </p>
          {/* <p>${subTotal}</p> */}
        </div>
        <div className="footer-buttons-wrapper">
          <button onClick={handleFetchCart} className='btn btn-checkout'>
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