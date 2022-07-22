import React, { ChangeEvent, useState } from 'react'
import ItemPost from './item-post/ItemPost'
import "../blog-content/BlogContent.css"

function BlogContent({blogList}:{blogList:{title:string, link:string, content:string}[]}){
    return (
        <div className='blog-content-wrapper'>
             {blogList.map((blog, index)=>(
                <ItemPost title={blog.title} link={blog.link} content={blog.content} position={index}/>
             ))} 
        </div>
    )
}

export default BlogContent