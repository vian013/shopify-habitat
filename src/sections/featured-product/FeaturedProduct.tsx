import React from 'react'
import SectionHeader from '../../components/section-header/SectionHeader'
import ProductLayout from '../../layout/product-layout/ProductLayout'
import sections from '../../messages/sections'
import "./FeaturedProduct.css"

function FeaturedProduct() {
    const productHandle = "adidas-classic-backpack"
    const content = sections.featuredProduct
    
  return (
    <div className='featured-product section'>
      <SectionHeader {...content}/>
      <ProductLayout productHandle={productHandle}>
          <ProductLayout.Review>
              <p>1 review</p>
          </ProductLayout.Review>
      </ProductLayout>
    </div>
  )
}

export default FeaturedProduct