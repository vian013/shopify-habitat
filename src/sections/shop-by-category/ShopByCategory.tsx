import React from 'react'
import sections from '../../messages/sections'
import ProductSlider from './product-slider/ProductSlider'
import styles from "./ShopByCategory.module.css"

function ShopByCategory() {
   const {title, subTitle} = sections.shopByCategory
    
  return (
    <div className={`${styles["shop-by-category"]} section`}>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["sub-title"]}>{subTitle}</p>
        <ProductSlider />
    </div>
  )
}

export default ShopByCategory