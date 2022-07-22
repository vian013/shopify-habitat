import React, { forwardRef, useContext } from 'react'
import { AppContext } from '../../../App'
import { AppActions } from '../../../store/actions'
import "./MiniCart.css"

const MiniCart = forwardRef<HTMLDivElement, { isCartOpen: boolean, closeCart: () => void }>(({ isCartOpen, closeCart }, ref) => {
  const {dispatch} = useContext(AppContext)!

  const handleCloseCart = () => {
    dispatch({type: AppActions.SET_UNBLURRED})
    closeCart()
  }
  
  return (
    <>
    <div className={`minicart-container ${isCartOpen&&"open"}`}>
        <div className={`overlay ${isCartOpen&&"open"}`} onClick={handleCloseCart}></div>
        <div className={`minicart-wrapper ${isCartOpen&&"open"}`} ref={ref}>
          <div className="cart-header">
            <h3 className='title'>Cart</h3>
            <button className='close-btn' onClick={handleCloseCart}>Close</button>
          </div>
        </div>
    </div>
    </>
  )

})

export default MiniCart