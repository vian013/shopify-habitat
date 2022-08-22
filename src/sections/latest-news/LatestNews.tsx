import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_API_URL } from '../../App'
import SectionHeader from '../../components/section-header/SectionHeader'
import sections from '../../messages/sections'
import "./LatestNews.css"

type Article = {
    imgUrl: string,
    publishedAt: string
    title: string,
    handle: string
}

function LatestNews() {
    const [articles, setArticles] = useState<Article[]>([])
    const {title, subTitle, readMoreBtn, viewAllBtn} = sections.latestNews
    const blogHandle = "news"

    useEffect(() => {
        const fetchArticles = async() => {
            try {
                const res = await fetch(`${BASE_API_URL}/blogs/${blogHandle}`)
                const _articles = await res.json()
                setArticles(_articles)
            } catch (error) {
                console.log(error)
            }
        }

        fetchArticles() 
    }, [blogHandle])    
    
  return (
    <div className='latest-news section'>
        <SectionHeader title={title} subTitle={subTitle}/>
        <div className="articles-wrapper">
            {articles.map(({imgUrl, publishedAt, title, handle}, index) => (
                <div className="article-wrapper">
                    <Link to={`/blogs/${handle}`} >
                        <div className={`img-wrapper style-${index+1}`}>
                            <img src={imgUrl} alt={`article-${index}-img`} />
                        </div>
                    </Link>
                    <div className="content-wrapper">
                        <p className='published-at'>{publishedAt}</p>
                        <Link to={`/blogs/${handle}`} >
                            <h1 className='title'>{title}</h1>
                        </Link>
                        <Link to={`/blogs/${handle}`} className='read-more'>{readMoreBtn}</Link>
                    </div>
                </div>
            ))}
        </div>
        <div className="view-all-wrapper">
            <Link to="/blogs" className='view-all'>{viewAllBtn}</Link>
        </div>
    </div>
  )
}

export default LatestNews