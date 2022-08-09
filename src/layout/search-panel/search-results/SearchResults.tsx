import React, { useState } from 'react'
import styles from "./SearchResults.module.css"
import { history } from '../../../App'
import ProductResults from './products/ProductResults'
import ArticleResults from './articles/ArticleResults'
import { SearchResult } from '../../../messages/search-result-tabs'

export type Result = {title: string, titleHtml: string, link: string}

function SearchResults({results, handleCloseSearch}: {results: Result[], handleCloseSearch: Function}) {
    const [resultTab, setResultTab] = useState<string>(SearchResult.PRODUCTS)

    const handleNavigate = (link: string) => {
        history.push(link)
        handleCloseSearch()
    }
    
    const renderResult = () => {
        switch (resultTab) {
            case SearchResult.PRODUCTS:
                return (
                    <ProductResults results={results} handleNavigate={handleNavigate}/>
                )
            case SearchResult.ARTICLES:
                return (
                    <ArticleResults />
                )
            default:
                return <h1>No Result</h1>
        }
    }

  return (
    <div className={styles['search-results']}>
        <div className={styles["result-tabs"]}>
            <button onClick={() => setResultTab(SearchResult.PRODUCTS)}>{SearchResult.PRODUCTS}</button>
            <button onClick={() => setResultTab(SearchResult.ARTICLES)}>{SearchResult.ARTICLES}</button>
            <button onClick={() => setResultTab(SearchResult.COLLECTION)}>{SearchResult.COLLECTION}</button>
            <button onClick={() => setResultTab(SearchResult.PAGE)}>{SearchResult.PAGE}</button>
        </div>
        <div className={styles["result-panel"]}>
            {renderResult()}
        </div>
    </div>
  )
}

export default SearchResults