import React from 'react'
import Account from './account/Account'
import Cart from './cart/Cart'
import NavIcon from './nav-icon/NavIcon'
import "./NavIcons.css"
import Search from './search/Search'

function NavIcons({toggleSearch} : {toggleSearch: ()=>void}) {
  return (
    <div data-testid="test-nav-icons">
      <ul className='nav-icons-wrapper'>
        <Search toggleSearch={toggleSearch}/>
        <Account />
        <Cart/>
      </ul>
    </div>
  )
}

export default NavIcons