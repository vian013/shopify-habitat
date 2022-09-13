import React, { useEffect, useState } from 'react'
import ArticlesWrapper from '../../components/articles-wrapper/ArticlesWrapper'
import useFetchArticles from '../../custom-hooks/useFetchArticles'
import messages from '../../messages/messages'
import "./Blogs.css"
import styles from "./Blogs.module.css"

function Blogs() {
  const [date, setDate] = useState<string>(new Date().toDateString())
  const blogHandle = "news"
  const articles = useFetchArticles(blogHandle)

  useEffect(() => {
    setDate(new Date().toDateString().substring(3))
  }, [])


  return (
    <div id='blogs-page'>
      <header>
        <h1 className={styles.title}>{messages.pages.blogs.title}</h1>
        <p className='date'>{date}</p>
      </header>
      <ArticlesWrapper articles={articles} showExcerpt/>
    </div>
  )
}

export default Blogs