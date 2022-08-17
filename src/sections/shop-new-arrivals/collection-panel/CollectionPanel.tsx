import React, { useEffect, useState } from 'react'
import collectionTabs from '../../../messages/collectionTabs'
import CollectionSlider from '../collection-slider/CollectionSlider'
import CollectionTabs from '../collection-tabs/CollectionTabs'

function CollectionPanel() {
  const [collectionTab, setCollectionTab] = useState<string>(collectionTabs[0])

  const handleChangeTab = (tab: string) => {
    setCollectionTab(tab)
  }
    
  return (
    <div>
        <CollectionTabs collectionTab={collectionTab} handleChangeTab={handleChangeTab} />
        <CollectionSlider collectionTab={collectionTab}/>
    </div>
  )
}

export default CollectionPanel