import React from 'react'
import headers from '../../../messages/headers'
import popularSearches from '../../../messages/popular-searches'
import SearchTag from './search-tag/SearchTag'
import "./PopularSearches.css"

function PopularSearches() {
  return (
    <div className='popular-search'>
        <h5 className='title'>{headers.popularSearches}</h5>
        <ul className='tags-container'>
            {popularSearches.map(tag => (
                <li className='tag-wrapper' key={tag.title}>
                    <SearchTag {...tag}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PopularSearches