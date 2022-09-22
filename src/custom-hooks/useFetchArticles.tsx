import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../App'
import { PageData } from '../type/global'


function useFetchArticles(blogHandle: string) {
    const [pageData, setPageData] = useState<PageData>({
        articles: [],
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: "",
        endCursor: ""
    })

    useEffect(() => {
        const fetchArticles = async() => {
            try {
                const res = await fetch(`${BASE_URL}/blogs/${blogHandle}`)
                const data = await res.json()
                setPageData(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchArticles() 
    }, [blogHandle]) 

  return pageData
}

export default useFetchArticles