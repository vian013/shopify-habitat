import React, { ChangeEvent, useState } from 'react'
import BlogHeader from './blog-header/BlogHeader'
import Header from './header/Header'
import "../blog-posts/BlogPosts.css";

export default function BlogPosts(){
    const handleSetting = ()=>{}
    const handleSelectOption = (e: ChangeEvent<any>)=>{
        console.log(e.target.value)
    }
    return(
        <div className='blog-posts-wrapper'>
            <Header handleSetting={handleSetting}/>
            <BlogHeader handleSetting={handleSelectOption}/>
        </div>
    )
}