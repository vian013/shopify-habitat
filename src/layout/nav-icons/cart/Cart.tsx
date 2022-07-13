import React from 'react'
import cartIcon from '../../icons/cart-icon'
import NavIcon from '../nav-icon/NavIcon'

function Cart() {
  return (
    <li>
        <NavIcon {...cartIcon} handleClick={()=>{}}/>
    </li>
  )
}

export default Cart