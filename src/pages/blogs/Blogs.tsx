import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { BASE_API_URL } from '../../App'
import ArticlesWrapper from '../../components/articles-wrapper/ArticlesWrapper'
import Pagination from '../../components/pagination/Pagination'
import useFetchArticles from '../../custom-hooks/useFetchArticles'
import messages from '../../messages/messages'
import { Article, PageData } from '../../type/global'
import "./Blogs.css"
import styles from "./Blogs.module.css"

function Blogs() {
  const [date, setDate] = useState<string>(new Date().toDateString())
  const blogHandle = "news"
  // const pageData: PageData = useFetchArticles(blogHandle)
  const [pageData, setPageData] = useState<PageData>({
    articles: [],
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: "",
    endCursor: ""
})
  const [currentPage, setCurrentPage] = useState<number>(1)
  const {articles, hasNextPage, hasPreviousPage, startCursor, endCursor} = pageData

  const fetchArticles = async(direction: string) => {
    try {
        if (direction==="prev") {
          const res = await fetch(`${BASE_API_URL}/blogs/${blogHandle}?startCursor=${startCursor}`)
          const data = await res.json()
          setPageData(data)
        } else {
          const res = await fetch(`${BASE_API_URL}/blogs/${blogHandle}?endCursor=${endCursor}`)
          const data = await res.json()
          setPageData(data)
        }
        
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(() => {
    setDate(new Date().toDateString().substring(3))
  }, [])

  const curPageRef = useRef<number>(currentPage)
  
  useEffect(() => {
    if (currentPage < curPageRef.current) fetchArticles("prev")
    if (currentPage >= curPageRef.current) fetchArticles("next")
    curPageRef.current = currentPage

  }, [currentPage])

  return (
    <div id='blogs-page'>
      <header>
        <h1 className={styles.title}>{messages.pages.blogs.title}</h1>
        <p className='date'>{date}</p>
      </header>
      <div className="articles-container">
        <ArticlesWrapper articles={articles} showExcerpt/>
        <Pagination 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}  
        />
      </div>
    </div>
  )
}

export default Blogs