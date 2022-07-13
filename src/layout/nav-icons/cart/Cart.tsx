import React from 'react'
import cartIcon from '../../icons/cart-icon'
import NavIcon from '../nav-icon/NavIcon'

function Cart({openCart}: {openCart: ()=>void}) {
  return (
    <li>
        <NavIcon {...cartIcon} handleClick={openCart}/>
    </li>
  )
}

export default Cart