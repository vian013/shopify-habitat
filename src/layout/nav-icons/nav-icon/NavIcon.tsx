import React from 'react'
import "./NavIcon.css"
import parse from "html-react-parser"

function NavIcon({svgContent, name}: {svgContent: string, name: string}) {
  return (
    <li className='icon-wrapper' title={name} data-testid='test-nav-icon'>
      {parse(svgContent)}
    </li>
  )
}

export default NavIcon