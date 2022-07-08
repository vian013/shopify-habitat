import React from 'react'
import "./NavIcon.css"
import parse from "html-react-parser"

function NavIcon({svgContent, name, handleClick}: {svgContent: string, name: string, handleClick: React.Dispatch<any>}) {
  return (
    <li className='icon-wrapper' title={name} data-testid='test-nav-icon' onClick={handleClick}>
      {parse(svgContent)}
    </li>
  )
}

export default NavIcon