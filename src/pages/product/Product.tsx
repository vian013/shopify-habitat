import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductType } from '../../type/product'

function Product() {
  const [product, setProduct] = useState<ProductType|null>(null)
  const params = useParams<{handle: string}>()
  const productHandle = params.handle

  useEffect(()=> {
    const fetchData = async () => {
        const res = await fetch(`http://localhost:4000/products/${productHandle}`)
        const data = await res.json()
        setProduct(data)
    } 

    fetchData()
  }, [])
    
  if (!product) return <h1>...Loading</h1>
  const {
    featuredImage,
    handle,
    title,
    variants,
    vendor
    } = product
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

export default Product