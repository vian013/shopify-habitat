import React from 'react'
import parse from "html-react-parser"
import "./SearchResults.css"

export type Result = {
  title: string, 
  titleHtml: string, 
  link: string,
  imgUrl: string,
  price?: number
}

type Props = {
  type: string,
  results: Result[], 
  handleNavigate: (link: string)=>void
}

function SearchResults({type, results, handleNavigate}: Props) {
  return (
    <div className={`search-results ${type}`}>
      {results.length &&
        results.map(({title, titleHtml, link, imgUrl, price}, index) => (
          <div className="search-result" key={index}>
            <div className="img-wrapper">
              <img src={imgUrl} alt={title} />
            </div>
            <div className="content-wrapper">
              <h1 key={title} className='title' onClick={() => handleNavigate(link)}>{parse(titleHtml)}</h1>
              {price && <p className='price'>${price}</p>}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SearchResults