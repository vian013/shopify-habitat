import React, { useState } from 'react'
import { history } from '../../../App'
import { SearchResult } from '../../../messages/search-result-tabs'
import "./ResultPanel.css"
import SearchResults, { Result } from './search-results/SearchResults'

export type Results = {
    products: Result[],
    articles: Result[],
}

type Props = {
    results: Results|null, 
    handleCloseSearch: Function
}

function ResultPanel({results, handleCloseSearch}: Props) {
    const [resultTab, setResultTab] = useState<string>(SearchResult.PRODUCTS)
    let {products, articles} = results!

    const handleNavigate = (link: string) => {
        history.push(link)
        handleCloseSearch()
    }
    
    const renderResult = () => {
        switch (resultTab) {
            case SearchResult.PRODUCTS:
                return (
                    <SearchResults type='products' results={products} handleNavigate={handleNavigate}/>
                )
            case SearchResult.ARTICLES:
                return (
                    <SearchResults type='articles' results={articles} handleNavigate={handleNavigate}/>
                )
            default:
                return <h1>No Result</h1>
        }
    }

  return (
    <div className='result-panel'>
        <div className="result-tabs">
            {products.length>0 && <button className={`result-tab ${resultTab===SearchResult.PRODUCTS?"active":""}`} onClick={() => setResultTab(SearchResult.PRODUCTS)}>{SearchResult.PRODUCTS}</button>}
            {articles.length>0 && <button className={`result-tab ${resultTab===SearchResult.ARTICLES?"active":""}`} onClick={() => setResultTab(SearchResult.ARTICLES)}>{SearchResult.ARTICLES}</button>}
        </div>
        <div className="results-wrapper">
            {results && renderResult()}
        </div>
    </div>
  )
}

export default ResultPanel