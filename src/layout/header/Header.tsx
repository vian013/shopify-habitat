import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import SearchPanel from '../search-panel/SearchPanel'
import AnnouncementBar from './announcement-bar/AnnouncementBar'
import { announcementTitle } from './announcement-bar/announment'
import "./Header.css"

function Header() {
  const [openSearch, setOpenSearch] = useState(false)

  const toggleSearch = () => {
    setOpenSearch(prev => !prev)
  }

  const closeSearch = () => {
    setOpenSearch(false)
  }

  useEffect(() => {
    console.log("toggle search");
    
  }, [openSearch])

  return (
    <header id='header'>
      <AnnouncementBar title={announcementTitle}/>
      <Nav toggleSearch={toggleSearch}/>
      <SearchPanel openSearch={openSearch} closeSearch={closeSearch}/>
    </header>
  )
}

export default React.memo(Header)
// export default Header