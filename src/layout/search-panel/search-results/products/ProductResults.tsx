import React from 'react'
import { Result } from '../SearchResults'
import parse from "html-react-parser"
import styles from "../SearchResults.module.css"

function ProductResults({results, handleNavigate}: {results: Result[], handleNavigate: Function}) {
  return (
    <>
        {
            results.map(({title, titleHtml, link}) => (
                <h1 key={title} className={styles['title']} onClick={() => handleNavigate(link)}>{parse(titleHtml)}</h1>
            ))
        }
    </>
  )
}

export default ProductResults
