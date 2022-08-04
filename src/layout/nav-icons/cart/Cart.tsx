import React, { useContext } from 'react'
import { AppContext, CartContext } from '../../../App'
import { AppActions } from '../../../store/actions/actions'
import { CartActions } from '../../../store/actions/cartActions'
import cartIcon from '../../icons/cart-icon'
import NavIcon from '../nav-icon/NavIcon'

function Cart({openCart}: {openCart: ()=>void}) {
  const {dispatch} = useContext(AppContext)!
  const {cartDispatch} = useContext(CartContext)!

  const handleClick = () => {
    dispatch({type: AppActions.SET_BLURRED})
    // openCart()
    cartDispatch({type: CartActions.OPEN_CART})
  }
  
  return (
    <li>
        <NavIcon {...cartIcon} handleClick={handleClick}/>
    </li>
  )
}

export default Cart