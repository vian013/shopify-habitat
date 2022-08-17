import React from 'react'
import { ProductType } from '../../type/product'
import Product from './Product'
import styles from "./Product.module.css"

function ShopProduct({product} : {product: ProductType}) {
  return (
    <Product product={product}/>
  )
}

export default ShopProduct