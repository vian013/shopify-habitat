import React from 'react'
import ProductLayout from '../../layout/product-layout/ProductLayout'
import "./FeaturedProduct.css"

function FeaturedProduct() {
    const productHandle = "adidas-classic-backpack"
    
  return (
    <div className='featured-product section'>
        <ProductLayout productHandle={productHandle}>
            <ProductLayout.Review>
                <p>1 review</p>
            </ProductLayout.Review>
        </ProductLayout>
    </div>
  )
}

export default FeaturedProduct