import React, { Dispatch, useEffect, useState } from 'react'
import CloseSearch from '../close-search/CloseSearch';
import "./SearchInput.css"

type Props = {
  term: string,
  setTerm: Dispatch<string>
  placeholder: string, 
  handleClose: ()=>void, 
  handleSearch: Function
}

function SearchInput({term, setTerm, placeholder, handleClose, handleSearch}: Props) {

  useEffect(() => {
    const timeout = setTimeout(() => {
      if(term) handleSearch(term)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [term])
    
  return (
    <form className='search-form'>
        <input className='search-input' type="text" value={term} onChange={(e)=> setTerm(e.target.value)} placeholder={placeholder}/>
        <CloseSearch handleClose={handleClose}/>
    </form>
  )
}

export default SearchInput