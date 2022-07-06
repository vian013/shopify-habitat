import React from 'react'
import NavIcon from './nav-icon/NavIcon'
import "./NavIcons.css"

function NavIcons({iconList} : {iconList: {svgContent: string, name: string}[]}) {
  return (
    <div data-testid="test-nav-icons">
      <ul className='nav-icons-wrapper'>
        {iconList.map(icon => (
            <NavIcon key={icon.name} {...icon}/>
        ))}
      </ul>
    </div>
  )
}

export default NavIcons