import React, { useContext } from 'react'
import { AppContext, CartContext } from '../../../App'
import { AppActions } from '../../../store/actions/actions'
import { CartActions } from '../../../store/actions/cartActions'
import cartIcon from '../../icons/cart-icon'
import NavIcon from '../nav-icon/NavIcon'
import QuantityBadge from './quantity-badge/QuantityBadge'
import "./Cart.css"

function Cart({openCart}: {openCart: ()=>void}) {
  const {dispatch} = useContext(AppContext)!
  const {cartDispatch} = useContext(CartContext)!

  const handleClick = () => {
    dispatch({type: AppActions.SET_BLURRED})
    dispatch({type: AppActions.OPEN_SIDEBAR})
    cartDispatch({type: CartActions.OPEN_CART})
  }
  
  return (
    <li className='cart-icon'>
        <NavIcon {...cartIcon} handleClick={handleClick}/>
        <QuantityBadge></QuantityBadge>
    </li>
  )
}

export default Cart