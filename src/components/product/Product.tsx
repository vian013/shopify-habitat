import React from 'react'
import { Link } from 'react-router-dom'
import {ProductType} from "../../type/product"
import "./Product.css"

function Product({product} : {product: ProductType}) {
    const {
        featuredImage,
        handle,
        title,
        variants,
        vendor, 
        price
    } = product

    // console.log(variants);
    
    
  return (
    <div className={'product-wrapper'}>
        <div className={"img-wrapper"}>
            <Link to={`/products/${handle}`}>
              <img loading='lazy' src={featuredImage} alt={handle} />
            </Link>
        </div>
        <div className={"content-wrapper"}>
          <p className={'vendor'}>{vendor}</p>
          <Link className={'title'} to={`/products/${handle}`}>
            {title}
          </Link>
          <p className={'price'}>${price}.00</p>
          <div className={"colors"}></div>
          <div className={"review"}></div>
        </div>

    </div>
  )
}

export default Product