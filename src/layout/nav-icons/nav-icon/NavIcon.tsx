import React from 'react'
import "./NavIcon.css"
import parse from "html-react-parser"

function NavIcon({svgContent, name, handleClick}: {svgContent: string, name: string, handleClick: React.MouseEventHandler}) {
  return (
    <span className='icon-wrapper' title={name} data-testid='test-nav-icon' onClick={handleClick}>
      {parse(svgContent)}
    </span>
  )
}

export default NavIcon