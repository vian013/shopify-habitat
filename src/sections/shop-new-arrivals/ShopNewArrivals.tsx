import React from 'react'
import sections from '../../messages/sections'
import CollectionPanel from './collection-panel/CollectionPanel'
import "./ShopNewArrivals.css"

function ShopNewArrivals() {
   const {title, subTitle} = sections.shopNewArrivals

   return (
    <div className='shop-new-arrivals section'>
        <h1 className={"title"}>{title}</h1>
        <p className={"sub-title"}>{subTitle}</p>
        <CollectionPanel />
    </div>
  )
}

export default ShopNewArrivals