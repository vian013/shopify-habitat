import React from 'react'
import collectionTabs from '../../../messages/collectionTabs'
import "./CollectionTabs.css"

function CollectionTabs({collectionTab, handleChangeTab}: {collectionTab: string, handleChangeTab: (tab: string)=>void}) {
    
  return (
    <div className='collection-tabs'>
        {collectionTabs.map(tab => (
            <div key={tab} className={`collection-tab ${collectionTab===tab?"active":""}`} onClick={()=>handleChangeTab(tab)}>{tab}</div>
        ))}
    </div>
  )
}

export default CollectionTabs