import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import searchIcon from '../../icons/search-icon'
import NavIcon from '../nav-icon/NavIcon'

function Search() {
  const {setState} = useContext(AppContext)

  const handleClick = () => {
    setState((prev: IState)=> {
      return {
        ...prev,
        openSearch: !prev.openSearch
      }
    })
  }
  
  return (
    <>
      <NavIcon {...searchIcon} handleClick={handleClick}/>
    </>
  )
}

export default Search
