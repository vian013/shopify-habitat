import React, { useRef } from 'react'
import placeholders from '../../messages/placeholders'
import SearchInput from './search-input/SearchInput'
import "./SearchPanel.css"

function SearchPanel({openSearch, closeSearch}: {openSearch: boolean, closeSearch: () => void}) {
   const panelRef = useRef(null) 

  return (
    <div id='search-panel' className={openSearch?"open":"close"} ref={panelRef}>
    <SearchInput placeholder={placeholders.search} handleClose={closeSearch}/>
    {/* <PopularSearches /> */}
    </div>
  )
}

export default SearchPanel