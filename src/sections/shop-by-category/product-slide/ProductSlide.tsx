import React from 'react'
import styles from "./ProductSlide.module.css"

function ProductSlide({imgUrl, title, subTitle}: {imgUrl: string, title: string, subTitle: string}) {
  return (
    <div className={styles['product-slide']}>
        <div className={styles["img-wrapper"]}>
            <img className='lazyload' src={imgUrl} alt={title} />
        </div>
        <div className={styles["content-wrapper"]}>
            <h3 className={styles["title"]}>{title}</h3>
            <p className={styles["sub-title"]}>{subTitle}</p>
        </div>
    </div>
  )
}

export default ProductSlide