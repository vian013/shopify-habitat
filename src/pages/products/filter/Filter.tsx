import React, { ChangeEvent, Dispatch, MouseEvent, useMemo } from 'react'
import { MouseEventHandler } from 'react'
import { FilterActions } from '../../../store/actions/filterActions'
import { IAction, IFilter } from '../../../type/global'
import { ProductType } from '../../../type/product'
import { Options } from '../Products'
import styles from "./Filter.module.css"
        
function Filter({products, colors, sizes, filterState, filterDispatch}: {products: ProductType[], colors: Options, sizes: Options, filterState: IFilter, filterDispatch: Dispatch<IAction<any>>}) {
  const colorMap = useMemo(() => {
    const _colorMap: {value: string, quantity: number}[] = []
    for (let color in colors) {
      const pair = {value: color, quantity: colors[color]}
      _colorMap.push(pair)
    }
    return _colorMap
  }, [colors])
  
  const sizeMap = useMemo(() => {
    const _sizeMap: {value: string, quantity: number}[] = []
    for (let size in sizes) {
      const pair = {value: size, quantity: sizes[size]}
      _sizeMap.push(pair)
    }
    return _sizeMap
  }, [sizes])

  const inStock = useMemo(() => {
    return products.reduce<number>((count, product) => {
      if (product.totalInventory > 0) count++
      return count
    }, 0)
  }, [products])

  const outOfStock = useMemo(() => {
    return products.length - inStock
  }, [products, inStock])
  
  const handleMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    filterDispatch({type: FilterActions.SET_MIN_PRICE, payload: Number(e.target.value)})
  }
  
  const handleMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    filterDispatch({type: FilterActions.SET_MAX_PRICE, payload: Number(e.target.value)})
  }

  const handleColor = (e: MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLElement
    filterDispatch({type: FilterActions.SET_COLOR, payload: target.dataset.name})
  }

  const handleSize = (e: MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLElement
    filterDispatch({type: FilterActions.SET_SIZE, payload: target.dataset.name})
  }
  
  const resetSize = () => filterDispatch({type: FilterActions.SET_SIZE, payload: ""})

  const resetColor = () => filterDispatch({type: FilterActions.SET_COLOR, payload: ""})
  
  const resetPrices = () => {
    filterDispatch({type: FilterActions.SET_MIN_PRICE, payload: 0})
    filterDispatch({type: FilterActions.SET_MAX_PRICE, payload: 1000})
  }
  
  const {minPrice, maxPrice, color, size} = filterState
  const showPricesTag = !(minPrice===0&&maxPrice===1000) && (minPrice < maxPrice)

  return (

    <div className={styles["filter-wrapper"]}>
        <strong>Filter:</strong>

        <div className={styles["availability"]}>
          <strong>Availability</strong> 
          <input type="checkbox"/> In stock {`(${inStock})`}
          <input type="checkbox"/> Out of stock {`(${outOfStock})`}
        </div>
        <div className={styles["price"]}>
          <strong>Price</strong>
          From <input type="text" onChange={handleMinPrice} value={minPrice}/>
          To <input type="text" onChange={handleMaxPrice} value={maxPrice}/>
        </div>
        <div className={styles["color"]}>
          <strong>Colors</strong>
          {colorMap.map(({value, quantity}) => (
            <span onClick={handleColor} data-name={value} className={styles['color-option']} key={value}>{`${value} (${quantity})`}</span>
          ))}
        </div>
        <div className={styles["size"]}>
          <strong>Sizes</strong>
          {sizeMap.map(({value, quantity}) => (
            <span onClick={handleSize} data-name={value}  className={styles['size-option']} key={value}>{`${value} (${quantity})`}</span>
          ))}
        </div>
        <div className={styles["selected-tags"]}>
          {showPricesTag&&<span onClick={resetPrices}>{minPrice}-{maxPrice} X</span>}
          {color&&<span onClick={resetColor}>{color} X</span>}
          {size&&<span onClick={resetSize}>{size} X</span>}
        </div>
    </div>
  )
}

export default Filter