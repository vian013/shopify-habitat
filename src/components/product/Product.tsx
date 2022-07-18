import React from 'react'
import {ProductType} from "../../type/product"

function Product({product} : {product: ProductType}) {
    const {
        description,
        featuredImage,
        handle,
        title,
        variants
    } = product
    
  return (
    <div className='product-wrapper'>
        <div className="img-wrapper">
            <img src={featuredImage} alt={handle} />
        </div>
        <p>{title}</p>

    </div>
  )
}

export default Product