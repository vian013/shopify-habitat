import React, { useEffect, useState } from 'react'
import CloseSearch from '../close-search/CloseSearch';
import "./SearchInput.css"

function SearchInput({placeholder, handleClose}: {placeholder: string, handleClose: ()=>void}) {
  const [term, setTerm] = useState("")

  useEffect(() => {
    const handleSearch = () => {
    }

    handleSearch()
  }, [term])
    
  return (
    <form className='search-form'>
        <input className='search-input' type="text" value={term} onChange={(e)=> setTerm(e.target.value)} placeholder={placeholder}/>
        <CloseSearch handleClose={handleClose}/>
    </form>
  )
}

export default SearchInput