import React, { forwardRef, useRef } from 'react'
import placeholders from '../../messages/placeholders'
import PopularSearches from './popular-searches/PopularSearches'
import SearchInput from './search-input/SearchInput'
import "./SearchPanel.css"

interface IProps {
  openSearch: boolean, 
  closeSearch: () => void
}

const SearchPanel = forwardRef<HTMLDivElement, IProps>(({openSearch, closeSearch}, ref) => {
  
  return (
    <div id='search-panel' ref={ref}>
      <SearchInput placeholder={placeholders.search} handleClose={closeSearch}/>
      <PopularSearches />
    </div>
  )
})

export default SearchPanel