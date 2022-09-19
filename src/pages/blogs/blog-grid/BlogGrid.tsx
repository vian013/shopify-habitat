import React, { useEffect, useRef, useState } from 'react'
import { BASE_API_URL } from '../../../App'
import ArticlesWrapper from '../../../components/articles-wrapper/ArticlesWrapper'
import Pagination from '../../../components/pagination/Pagination'
import { PageData } from '../../../type/global'

type Props = {
    handle: string,
    blogHandle: string
}

function BlogGrid({handle, blogHandle}: Props) {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [navigate, setNavigate] = useState<number>(1)
    const [pageData, setPageData] = useState<PageData>({
        articles: [],
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: "",
        endCursor: ""
    })
    const {articles, hasNextPage, hasPreviousPage, startCursor, endCursor} = pageData
    const curPageRef = useRef<number>(currentPage)
    
    const paginate = async(direction: string) => {
        try {
            if (direction==="prev") {
              const res = await fetch(`${BASE_API_URL}/blogs/${blogHandle}?startCursor=${startCursor}${handle&&`&tag=${handle}`}`)
              const data = await res.json()
              setPageData(data)
            } else {
              const res = await fetch(`${BASE_API_URL}/blogs/${blogHandle}${endCursor&&`?endCursor=${endCursor}`}${handle&&`&tag=${handle}`}`)
              const data = await res.json()
              setPageData(data)
            }
            
        } catch (error) {
            console.log(error)
        }
      }
    
    const fetchInitialArticles = async() => {
        try {
        const res = await fetch(`${BASE_API_URL}/blogs/${blogHandle}${handle&&`?tag=${handle}`}`)
        const data = await res.json()
        setPageData(data)
        setCurrentPage(1)
        curPageRef.current = 1
        } catch (error) {
        console.log(error);
        }
    }
     
    useEffect(()=>{
        fetchInitialArticles()
    }, [handle])

    
    useEffect(() => {
        if (currentPage < curPageRef.current) paginate("prev")
        if (currentPage > curPageRef.current) paginate("next")
        curPageRef.current = currentPage
    }, [navigate])
        
    return (
        <div className='blog-grid'>
            <ArticlesWrapper articles={articles} showExcerpt/>
            <Pagination 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                navigate={navigate}
                setNavigate={setNavigate}
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}  
            />
        </div>
    )
}

export default BlogGrid