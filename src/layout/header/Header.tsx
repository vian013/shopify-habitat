import React, { useEffect, useRef, useState } from 'react'
import Nav from '../nav/Nav'
import SearchPanel from '../search-panel/SearchPanel'
import AnnouncementBar from './announcement-bar/AnnouncementBar'
import { announcementTitle } from './announcement-bar/announment'
import "./Header.css"
import MiniCart from './minicart/MiniCart'

function Header() {
  const [openSearch, setOpenSearch] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const panelRef1 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    openSearch ? doOpenSearch() : doCloseSearch()

    return () => {
      console.log("clear");
    }
  }, [openSearch])

  useEffect(() => {
    console.log("cart");
  }, [isCartOpen])

  const toggleSearch = () => {
    setOpenSearch(prev => !prev)
  }

  const doOpenSearch = () => {
    const panel = panelRef1.current 
    if (panel) {
      panel.style.top = `0px`
    }
  }

  const doCloseSearch = () => {
    const panel = panelRef1.current 
    if (panel) {
      const panelHeight = panel.clientHeight + 3
      
      panel.style.top = `-${panelHeight}px`
    }
  }

  const closeSearch = () => {
    setOpenSearch(false)
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  return (
    <header id='header'>
      <AnnouncementBar title={announcementTitle}/>
      <Nav toggleSearch={toggleSearch} openCart={openCart}/>
      <SearchPanel ref={panelRef1} openSearch={openSearch} closeSearch={closeSearch}/>
      <MiniCart isCartOpen={isCartOpen} closeCart={closeCart}/>
    </header>
  )
}

export default React.memo(Header)
// export default Header