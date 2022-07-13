import React from 'react'
import "./SearchTag.css"

function SearchTag({title, link}: {title: string, link: string}) {
  return (
    <a className='search-tag' href={link}>{title}</a>
  )
}

export default SearchTag