import React from 'react'
import { Link } from 'react-router-dom'
import {ProductType} from "../../type/product"
import styles from "./Product.module.css"

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
    <div className={styles['product-wrapper']}>
        <div className={styles["img-wrapper"]}>
            <Link to={`/products/${handle}`}>
              <img src={featuredImage} alt={handle} />
            </Link>
        </div>
        <div className={styles["content-wrapper"]}>
          <p className={styles['vendor']}>{vendor}</p>
          <Link className={styles['title']} to={`/products/${handle}`}>
            {title}
          </Link>
          <p className={styles['price']}>${price}.00</p>
          <div className={styles["colors"]}></div>
          <div className={styles["review"]}></div>
        </div>

    </div>
  )
}

export default Product