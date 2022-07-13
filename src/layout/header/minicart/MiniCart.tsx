import React from 'react'
import "./MiniCart.css"

function MiniCart({isCartOpen, closeCart}: {isCartOpen: boolean, closeCart: ()=>void}) {
  return (
    <div className='minicart-container'>
        <div className={`overlay ${isCartOpen&&"open"}`} onClick={closeCart}></div>
        <div className={`minicart-wrapper ${isCartOpen&&"open"}`}></div>
    </div>
  )
}

export default MiniCart