import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../App'
import searchIcon from '../../icons/search-icon'
import NavIcon from '../nav-icon/NavIcon'

function Search({toggleSearch}: {toggleSearch: ()=>void}) {
  
  
  return (
    <li>
      <NavIcon {...searchIcon} handleClick={toggleSearch}/>
    </li>
  )
}

export default Search
