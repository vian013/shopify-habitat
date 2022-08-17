import React from 'react'
import sections from '../../messages/sections'
import ProductSlider from './product-slider/ProductSlider'
import "./ShopByCategory.css"

function ShopByCategory() {
   const {title, subTitle} = sections.shopByCategory
    
  return (
    <div className={"shop-by-category section"}>
        <h1 className={"title"}>{title}</h1>
        <p className={"sub-title"}>{subTitle}</p>
        <ProductSlider />
    </div>
  )
}

export default ShopByCategory