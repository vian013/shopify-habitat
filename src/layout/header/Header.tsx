import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'
import Nav from '../nav/Nav'
import SearchPanel from '../search-panel/SearchPanel'
import Sidebar from '../sidebar1/Sidebar'
import AnnouncementBar from './announcement-bar/AnnouncementBar'
import { announcementTitle } from './announcement-bar/announment'
import "./Header.css"
import ShopPanel from './shop-panel/ShopPanel'

type Shop = {
  isShopOpen: boolean,
  openShopPanel: ()=>void,
  closeShopPanel: ()=>void,
}
export const shopContext = createContext<Shop|undefined>(undefined)
const ShopProvider = shopContext.Provider

function Header() {
  const [openSearch, setOpenSearch] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)
  const panelRef1 = useRef<HTMLDivElement>(null)
  const shopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    openSearch ? doOpenSearch() : doCloseSearch()

    return () => {
    }
  }, [openSearch])

  useEffect(() => {
    isShopOpen ? doOpenShopPanel() : doCloseShopPanel()
    
  }, [isShopOpen])

  const toggleSearch = () => {
    setOpenSearch(prev => !prev)
  }

  const doOpenSearch = () => {
    const panel = panelRef1.current 
    if (panel) {
      panel.style.top = `0px`
      panel.style.zIndex = "11"
    }
  }

  const doCloseSearch = () => {
    const panel = panelRef1.current 
    if (panel) {
      const panelHeight = panel.clientHeight + 3
      panel.style.top = `-${panelHeight}px`
      panel.style.zIndex = "10"
    }
  }

  const closeSearch = () => {
    setOpenSearch(false)
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  const openShopPanel = () => {
    setIsShopOpen(true)
  }

  const closeShopPanel = () => {
    setIsShopOpen(false)
  }

  const doOpenShopPanel = () => {
    const shopPanel = shopRef.current
    if (shopPanel) {
      shopPanel.style.top = `0px`
      shopPanel.style.zIndex = "11"
    }
    
  }

  const doCloseShopPanel = () => {
    const shopPanel = shopRef.current 
    if (shopPanel) {
      const panelHeight = shopPanel.clientHeight + 3
      shopPanel.style.top = `-${panelHeight}px`
      shopPanel.style.zIndex = "10"
    }
  }

  return (
    <header id='header'>
      <ShopProvider value={{isShopOpen, openShopPanel, closeShopPanel}}>
        <AnnouncementBar title={announcementTitle}/>
        <Nav toggleSearch={toggleSearch}/>
        <SearchPanel ref={panelRef1} closeSearch={closeSearch}/>
        <ShopPanel ref={shopRef}/>
        <Sidebar />
      </ShopProvider>
    </header>
  )
}

export default Header