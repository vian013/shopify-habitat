import React, { useEffect, useReducer, useRef, useState } from 'react'
import { BASE_URL } from '../../App'
import Product from '../../components/product/Product'
import { FilterActions } from '../../store/actions/filterActions'
import { filterReducer } from '../../store/reducers/filterReducer'
import { IFilter } from '../../type/global'
import {ProductType} from "../../type/product"
import Filter from './filter/Filter'
import "./Products.css"

export type Options = {[key: string]: number}

const initFilter: IFilter = {
    minPrice: 0,
    maxPrice: 1000,
    color: "",
    size: ""
}

function Products() {
    const [products, setProducts] = useState<ProductType[]>([])
    const [sizes, setSizes] = useState<Options>({})
    const [colors, setColors] = useState<Options>({})
    const [filterState, filterDispatch] = useReducer(filterReducer, initFilter)
    const firstRender = useRef<number>(0)
    const {minPrice, maxPrice, color, size} = filterState

    useEffect(() => {
        fetchAllVariants()
    }, [])

    const timeRef = useRef<NodeJS.Timeout|null>(null)

    useEffect(() => {
        if (firstRender.current<=1) {
            firstRender.current++
            return
        }
        
        if (timeRef.current) {
            clearTimeout(timeRef.current)
          }
          timeRef.current = setTimeout(() => {
            if (typeof minPrice === "number" && typeof maxPrice === "number" && (minPrice < maxPrice)) fetchData()
          }, 1000);

    }, [minPrice, maxPrice])

    useEffect(() => {
        if (firstRender.current<=1) {
            firstRender.current++
            return
        }

        if (typeof minPrice === "number" && typeof maxPrice === "number" && (minPrice < maxPrice)) fetchData()
    }, [color, size])

    const fetchData = async () => {
        let url: string = `${BASE_URL}/product-variants?minPrice=${minPrice}&maxPrice=${maxPrice}${color&&`&color=${color}`}${size&&`&size=${size}`}`

        const res = await fetch(url)
        const data: {products: any, colors: Options, sizes: Options} = await res.json()
        const {products, colors, sizes} = data
        
        if (products && products.length > 0) setProducts(products)
        if (Object.keys(colors).length > 0) setColors(colors)
        if (Object.keys(sizes).length > 0) setSizes(sizes)
    }

    const fetchAllVariants = async() => {
        const res = await fetch(`${BASE_URL}/product-variants/all`)
        const data = await res.json()
        const {products, colors, sizes} = data

        if (products && products.length > 0) setProducts(products)
        if (Object.keys(colors).length > 0) setColors(colors)
        if (Object.keys(sizes).length > 0) setSizes(sizes)
    }
    
  return products.length === 0 ? <h1>"Loading..."</h1> : (
    <div className='products-page'>
        <Filter filterState={filterState} filterDispatch={filterDispatch} products={products} colors={colors} sizes={sizes}/>
        <div className="products-container">
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default Products 