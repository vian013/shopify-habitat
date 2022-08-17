import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import "./ProductQuickView.css"

function ProductQuickView() {
  const {state: {quickViewHandle}} = useContext(AppContext)!

  useEffect(()=>{
    console.log(quickViewHandle);
    
  }, [quickViewHandle])
  
  return (
    <div className={`product-quickview-container`}>
        <div className="overlay"></div>
        <div className="product-quickview-wrapper">
          <h1>quickview</h1>
        </div>
    </div>
  )
}

export default ProductQuickView