import React from 'react'
import SectionHeader from '../../components/section-header/SectionHeader'
import sections from '../../messages/sections'
import ProductSlider from './product-slider/ProductSlider'
import "./ShopByCategory.css"

function ShopByCategory() {
   const content = sections.shopByCategory
    
  return (
    <div className={"shop-by-category section"}>
      <SectionHeader {...content}/>
      <ProductSlider />
    </div>
  )
}

export default ShopByCategory