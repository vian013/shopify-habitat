import React, { ChangeEvent, Dispatch, MouseEvent, useEffect, useMemo, useRef, useState } from 'react'
import { MouseEventHandler } from 'react'
import { FilterActions } from '../../../store/actions/filterActions'
import { IAction, IFilter } from '../../../type/global'
import { ProductType } from '../../../type/product'
import { Options } from '../Products'
import styles from "./Filter.module.css"
import "./Filter.css"
import OptionPanel from './option-panel/OptionPanel'
        
type OptionPanel = {
  availability: boolean,
  price: boolean,
  colors: boolean,
  sizes: boolean
}

const initOptionPanelState = {
  availability: false,
  price: false,
  colors: false,
  sizes: false
}

function Filter({products, colors, sizes, filterState, filterDispatch}: {products: ProductType[], colors: Options, sizes: Options, filterState: IFilter, filterDispatch: Dispatch<IAction<any>>}) {
  const [optionPanel, setOptionPanel] = useState<OptionPanel>(initOptionPanelState)
  
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

  const togglePanel = (name: string) => {
    setOptionPanel({...optionPanel, [name]: !optionPanel[name as keyof OptionPanel]})
  }

  return (
    <div className={styles["filter-wrapper"]}>
      <div className="filter-options">
      <strong>Filter:</strong>
        <div className={` ${styles["filter-option"]}`}>
          <strong onClick={() => togglePanel("availability")} className="option-label availability">Availability<span className='dropdown-btn'></span></strong> 
          <OptionPanel handleReset={()=>{}} selectedCount={0} open={optionPanel.availability} option="availability">
            <>
              <div className="input-wrapper">
                <input type="checkbox"/><p>In stock {`(${inStock})`}</p> 
              </div>
              <div className="input-wrapper">
                <input type="checkbox"/><p>Out of stock {`(${outOfStock})`}</p> 
              </div>
            </>
          </OptionPanel>
        </div>
        <div className={` ${styles["price"]} ${styles["filter-option"]}`}>
          <strong onClick={() => togglePanel("price")} className="option-label price">Price<span className='dropdown-btn'></span></strong>
          <OptionPanel handleReset={()=>{}} selectedCount={0} open={optionPanel.price} option="price">
            <>
              From {minPrice} 
              <input type="range" onChange={handleMinPrice} value={minPrice}/>
              To {maxPrice}  
              <input type="range" onChange={handleMaxPrice} value={maxPrice}/>
            </>
          </OptionPanel>
        </div>
        <div className={` ${styles["colors"]} ${styles["filter-option"]}`}>
          <strong onClick={() => togglePanel("colors")} className="option-label colors">Colors<span className='dropdown-btn'></span></strong>
          <OptionPanel handleReset={()=>{}} selectedCount={0} open={optionPanel.colors} option="colors">
            <>
              {colorMap.map(({value, quantity}) => (
                <span onClick={handleColor} data-name={value} className={styles['color-option']} key={value}>{`${value} (${quantity})`}</span>
              ))}
            </>
          </OptionPanel>
        </div>
        <div className={` ${styles["sizes"]} ${styles["filter-option"]}`}>
          <strong onClick={() => togglePanel("sizes")} className="option-label sizes">Sizes<span className='dropdown-btn'></span></strong>
          <OptionPanel handleReset={()=>{}} selectedCount={0} open={optionPanel.sizes} option="sizes">
            <>
              {sizeMap.map(({value, quantity}) => (
                <span onClick={handleSize} data-name={value} className={styles['size-option']} key={value}>{`${value} (${quantity})`}</span>
              ))}
            </>
          </OptionPanel>
        </div>
      </div>
        
      <div className={"selected-tags"}>
        {showPricesTag&&<span className='selected-tag' onClick={resetPrices}>{minPrice}-{maxPrice} x</span>}
        {color&&<span className='selected-tag' onClick={resetColor}>{color} x</span>}
        {size&&<span className='selected-tag' onClick={resetSize}>{size} x</span>}
      </div>
    </div>
  )
}

export default Filter