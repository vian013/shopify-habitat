import React from 'react'
import { Link } from 'react-router-dom'
import sections from '../../messages/sections'
import { Article } from '../../type/global'
import "./ArticlesWrapper.css"

function ArticlesWrapper({articles, showExcerpt}: {articles: Article[], showExcerpt: boolean}) {
    const {readMoreBtn} = sections.latestNews
    
  return (
    <div className="page-width">
        <div className="articles-wrapper">
            {articles.map(({imgUrl, publishedAt, title, handle, excerpt}, index) => (
                <div key={index} className="article-wrapper">
                    <Link to={`/blogs/${handle}`} >
                        <div className={`img-wrapper style-${index+1}`}>
                            <img loading='lazy' src={imgUrl} alt={`article-${index}-img`} />
                        </div>
                    </Link>
                    <div className="content-wrapper">
                        <p className='published-at'>{publishedAt}</p>
                        <Link to={`/blogs/${handle}`} >
                            <h1 className='title'>{title}</h1>
                        </Link>
                        {showExcerpt && excerpt && <p className='excerpt'>{`${excerpt.split(" ").slice(0, 30).join(" ")}...`}</p>}
                        <Link to={`/blogs/${handle}`} className='read-more'>{readMoreBtn}</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ArticlesWrapper