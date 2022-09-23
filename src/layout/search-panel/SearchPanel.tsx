import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { BASE_URL } from '../../App'
import placeholders from '../../messages/placeholders'
import PopularSearches from './popular-searches/PopularSearches'
import SearchInput from './search-input/SearchInput'
import SearchResults, { Results } from './result-panel/ResultPanel'
import "./SearchPanel.css"

interface IProps {
  closeSearch: () => void
}

const SearchPanel = forwardRef<HTMLDivElement, IProps>(({closeSearch}, ref) => {
  const [results, setResults] = useState<Results|null>(null)
  const [term, setTerm] = useState("")

  const handleSearch = async (term: string) => {
    const res = await fetch(`${BASE_URL}/search?term=${term}`)
    const _results = await res.json()
    setResults(_results)
  }
  
  return (
    <div style={{position: "relative"}}>
      <div id='search-panel' ref={ref}>
        <SearchInput 
          term={term} 
          setTerm={setTerm} 
          placeholder={placeholders.search} 
          handleClose={closeSearch} 
          handleSearch={handleSearch}
        />
        {term && results && <SearchResults results={results} handleCloseSearch={closeSearch}/>}
        <PopularSearches />
      </div>
    </div>
  )
})

export default SearchPanel