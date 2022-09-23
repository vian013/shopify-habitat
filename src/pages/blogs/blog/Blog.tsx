import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../../App';
import parser from 'html-react-parser';
import { Article } from '../../../type/global';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import "./Blog.css"

function Blog() {
    const {handle} = useParams() as {handle: string}
    console.log(handle);
    const [article, setArticle] = useState<Article>()

    useEffect(()=>{
        const fetchArticle = async() => {
            const res= await fetch(`${BASE_URL}/blogs/${handle}`)
            const data = await res.json()
            setArticle(data)
        }

        fetchArticle()
    }, [handle])

    useEffect(() => {
        console.log("article:", article);
        
    }, [article])

    
  return (
    <div id='blog-page'>
        <Breadcrumb tag={handle}/>
        
        {article && (
            <div className="page-width">
                <div className="article-wrapper">
                    <div className="sub-heading">
                        <p className="publish-at">{article.publishedAt}</p>
                        <p className="author">{article.author}</p>
                    </div>
                    <h1 className="heading">{article.title}</h1>
                    <div className="content-wrapper">
                        {parser(article.contentHtml)}
                    </div>
                </div>
            </div>
        ) }
    </div>
  )
}

export default Blog