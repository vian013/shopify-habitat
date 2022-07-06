import React from 'react'
import NavIcon from './nav-icon/NavIcon'
import "./NavIcons.css"

function NavIcons({iconList} : {iconList: {svgContent: string, name: string}[]}) {
  return (
    <div data-testid="test-nav-icons">
        {iconList.map(icon => (
            <NavIcon key={icon.name} svgContent={icon.svgContent} name={icon.name}/>
        ))}
    </div>
  )
}

export default NavIcons