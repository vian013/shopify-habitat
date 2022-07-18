import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import cartIcon from '../../icons/cart-icon'
import NavIcon from '../nav-icon/NavIcon'

function Cart({openCart}: {openCart: ()=>void}) {
  const {dispatch} = useContext(AppContext)

  const handleClick = () => {
    dispatch({type: "SET_BLURRED"})
    openCart()
  }
  
  return (
    <li>
        <NavIcon {...cartIcon} handleClick={handleClick}/>
    </li>
  )
}

export default Cart