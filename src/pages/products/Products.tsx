import React, { useEffect, useReducer, useRef, useState } from 'react'
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
        filterDispatch({type: FilterActions.SET_COLOR, payload: ""})
        filterDispatch({type: FilterActions.SET_SIZE, payload: ""})
        filterDispatch({type: FilterActions.SET_MIN_PRICE, payload: 0})
        filterDispatch({type: FilterActions.SET_MAX_PRICE, payload: 1000})
        fetchData({all: true})
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
            if (typeof minPrice === "number" && typeof maxPrice === "number" && (minPrice < maxPrice)) fetchData({all: false})
          }, 1000);

    }, [minPrice, maxPrice])

    useEffect(() => {
        if (firstRender.current<=1) {
            firstRender.current++
            return
        }

        if (typeof minPrice === "number" && typeof maxPrice === "number" && (minPrice < maxPrice)) fetchData({all: false})
    }, [color, size])

    const fetchData = async ({all}: {all: boolean}) => {
        let url: string = `http://localhost:4000/product-variants?minPrice=${minPrice}&maxPrice=${maxPrice}${all===true?`&all=true`:""}${color&&`&color=${color}`}${size&&`&size=${size}`}`

        const res = await fetch(url)
        const data: {products: any, colors: Options, sizes: Options} = await res.json()
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