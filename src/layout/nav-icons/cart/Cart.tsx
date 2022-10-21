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
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { CartState } from '../../../redux/cart/types'

function Cart() {
  const {dispatch} = useContext(AppContext)!
  const _dispatch = useDispatch()
  const {cart} = useSelector<RootState>(state => state.cart) as CartState

  const handleClick = () => {
    dispatch({type: AppActions.SET_BLURRED})
    _dispatch(openCart(cart?.id))
  }
  
  return (
    <li className='cart-icon'>
        <NavIcon {...cartIcon} handleClick={handleClick}/>
        <QuantityBadge></QuantityBadge>
    </li>
  )
}

export default Cart