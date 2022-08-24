import React from 'react'
import popularSearches from '../../../messages/popular-searches'
import SearchTag from './search-tag/SearchTag'
import "./PopularSearches.css"
import sections from '../../../messages/sections'

function PopularSearches() {
  return (
    <div className='popular-search'>
        <h5 className='title'>{sections.header.popularSearches}</h5>
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