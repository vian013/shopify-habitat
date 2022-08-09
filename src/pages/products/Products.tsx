import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Product from '../../components/product/Product'
import {ProductType} from "../../type/product"
import "./Products.css"

function Products() {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:4000/products")
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])
    
  return products.length === 0 ? <h1>"Loading..."</h1> : (
    <div className='products-page'>
        <div className="products-container">
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default withRouter(Products) 