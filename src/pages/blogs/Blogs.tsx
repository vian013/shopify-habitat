import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import messages from '../../messages/messages'
import BlogGrid from './blog-grid/BlogGrid'
import "./Blogs.css"
import styles from "./Blogs.module.css"

function Blogs() {
  const {handle} = useParams() as {handle: string}
  const [date, setDate] = useState<string>(new Date().toDateString())
  const blogHandle = "news"
  const [tag, setTag] = useState<string>(handle)
  const history = useHistory()
  
  useEffect(() => {
    setDate(new Date().toDateString().substring(3))
  }, [])

  useEffect(()=>{
    if (tag!=="all" && tag!==undefined) history.push(`/blogs/tagged/${tag}`)
    else history.push("/blogs")
  }, [tag])

  return (
    <div id='blogs-page'>
      <Breadcrumb tag={handle}/>
      <header>
        <h1 className="page-title">{messages.pages.blogs.title}</h1>
        <p className='date'>{date}</p>
      </header>
      <div className="articles-container">
        <div className="select-wrapper">
          <select defaultValue={handle} onChange={(e) => setTag(e.target.value)}>
            <option value="all">All</option>
            <option value="chairs">Chairs</option>
            <option value="cushion">Cushion</option>
            <option value="green">Green</option>
            <option value="home">Home</option>
          </select>
        </div>
        <BlogGrid 
          blogHandle={blogHandle}
          handle={handle}
        />
      </div>
    </div>
  )
}

export default Blogs