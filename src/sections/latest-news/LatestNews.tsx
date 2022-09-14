import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArticlesWrapper from '../../components/articles-wrapper/ArticlesWrapper'
import SectionHeader from '../../components/section-header/SectionHeader'
import useFetchArticles from '../../custom-hooks/useFetchArticles'
import sections from '../../messages/sections'
import { Article, PageData } from '../../type/global'
import "./LatestNews.css"

function LatestNews() {
  const {title, subTitle, viewAllBtn} = sections.latestNews
  const blogHandle = "news"
  const pageData: PageData = useFetchArticles(blogHandle)
  const {articles} = pageData
    
  return (
    <div className='latest-news section'>
        <SectionHeader title={title} subTitle={subTitle}/>
        <ArticlesWrapper articles={articles.slice(0, 3)} showExcerpt={false}/>
        <div className="view-all-wrapper">
            <Link to="/blogs" className='view-all'>{viewAllBtn}</Link>
        </div>
    </div>
  )
}

export default LatestNews