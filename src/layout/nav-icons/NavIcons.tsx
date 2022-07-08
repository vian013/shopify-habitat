import React from 'react'
import Account from './account/Account'
import Cart from './cart/Cart'
import NavIcon from './nav-icon/NavIcon'
import "./NavIcons.css"
import Search from './search/Search'

function NavIcons({iconList} : {iconList: {svgContent: string, name: string}[]}) {
  return (
    <div data-testid="test-nav-icons">
      <ul className='nav-icons-wrapper'>
        <Search />
        <Account />
        <Cart />
      </ul>
    </div>
  )
}

export default NavIcons