import React from 'react'
import { Result } from '../SearchResults'
import parse from "html-react-parser"

function ProductResults({results, handleNavigate}: {results: Result[], handleNavigate: Function}) {
  return (
    <>
        {
            results.map(({title, titleHtml, link}) => (
                <h1 key={title} className='title' onClick={() => handleNavigate(link)}>{parse(titleHtml)}</h1>
            ))
        }
    </>
  )
}

export default ProductResults
