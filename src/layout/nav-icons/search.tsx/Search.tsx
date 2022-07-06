import React from 'react'
import NavIcon from '../nav-icon/NavIcon'

function Search(props: {svgContent: string, name: string}) {
  return (
    <>
        <NavIcon {...props}/>
    </>
  )
}

export default Search
