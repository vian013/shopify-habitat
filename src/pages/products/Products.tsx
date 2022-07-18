import React, { useEffect, useState } from 'react'
import Product from '../../components/product/Product'
import {ProductType} from "../../type/product"

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
    
    useEffect(() => {
        console.log("products:", products);
        
    }, [products])

    
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

export default Products