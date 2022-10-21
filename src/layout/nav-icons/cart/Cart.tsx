import React, { useContext } from 'react'
import { AppContext, CartContext } from '../../../App'
import { AppActions } from '../../../store/actions/actions'
import { CartActions } from '../../../store/actions/cartActions'
import cartIcon from '../../icons/cart-icon'
import NavIcon from '../nav-icon/NavIcon'
import QuantityBadge from './quantity-badge/QuantityBadge'
import "./Cart.css"
import { useDispatch } from 'react-redux'
import { openSidebar } from '../../../redux/sidebar/actions'
import { openCart } from '../../../redux/cart/actions'

function Cart() {
  const {dispatch} = useContext(AppContext)!
  const _dispatch = useDispatch()

  const handleClick = () => {
    dispatch({type: AppActions.SET_BLURRED})
    _dispatch(openCart())
  }
  
  return (
    <li className='cart-icon'>
        <NavIcon {...cartIcon} handleClick={handleClick}/>
        <QuantityBadge></QuantityBadge>
    </li>
  )
}

export default Cart