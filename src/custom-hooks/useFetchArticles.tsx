import React, { useEffect, useState } from 'react'
import { BASE_API_URL } from '../App'
import { Article } from '../type/global'

function useFetchArticles(blogHandle: string) {
    const [articles, setArticles] = useState<Article[]>([])

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

  return articles
}

export default useFetchArticles