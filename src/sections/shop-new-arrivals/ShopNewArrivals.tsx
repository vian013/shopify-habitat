import React from 'react'
import SectionHeader from '../../components/section-header/SectionHeader'
import sections from '../../messages/sections'
import CollectionPanel from './collection-panel/CollectionPanel'
import "./ShopNewArrivals.css"

function ShopNewArrivals() {
   const content = sections.shopNewArrivals

   return (
    <div className='shop-new-arrivals section'>
        <SectionHeader {...content}/>
        <CollectionPanel />
    </div>
  )
}

export default ShopNewArrivals