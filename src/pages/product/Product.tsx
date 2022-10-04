import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductType } from '../../type/product'
import styles from "./Product.module.css"
import "./Product.css"
import ProductContent from '../../components/product-content/ProductContent'
import { BASE_URL } from '../../App'

function Product() {
  const [product, setProduct] = useState<ProductType | null>(null)
  const params = useParams<{ handle: string }>()
  const productHandle = params.handle

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${BASE_URL}/products/${productHandle}`)
      const data = await res.json()
      setProduct(data)
    }

    fetchData()
    
  }, [productHandle])
  
  if (!product) return <h1>...Loading</h1>
  const {
    featuredImage,
    handle,
    title,
    variants,
    vendor,
    images,
    options
  } = product
  const price = variants[0].price
  
  return (
    <div className={styles['product-page']}>
      <div className={styles["product-container"]}>
        <div className={styles["detail-images"]}>
          {images.map(({ url }, index) => (
            <div className={styles["img-wrapper"]} key={index}>
              <img className="lazyload" src={url} alt={`${title}-image-${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles["img-wrapper"]}>
          <img src={featuredImage} alt={handle} />
        </div>

        <ProductContent
          vendor={vendor}
          title={title}
          productHandle={productHandle}
          price={price}
          options={options}
        />
      </div>
    </div>
  )
}

export default React.memo(Product)