import React, { forwardRef, useRef } from 'react'
import placeholders from '../../messages/placeholders'
import PopularSearches from './popular-searches/PopularSearches'
import SearchInput from './search-input/SearchInput'
import "./SearchPanel.css"

interface IProps {
  closeSearch: () => void
}

const SearchPanel = forwardRef<HTMLDivElement, IProps>(({closeSearch}, ref) => {
  
  return (
    <div style={{position: "relative"}}>
      <div id='search-panel' ref={ref}>
        <SearchInput placeholder={placeholders.search} handleClose={closeSearch}/>
        <PopularSearches />
      </div>
    </div>
  )
})

export default SearchPanel