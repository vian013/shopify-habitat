import React from 'react'
import { Link } from 'react-router-dom'
import "./Breadcrumb.css"

function Breadcrumb({tag}: {tag?: string}) {
  return (
    <div className='breadcrumb'>
        <Link to={"/"}>Home</Link>
        <span>{"/"}</span>
        <Link to={"/blogs"}>News</Link>
        {tag && tag!=="all" && (
            <>
                <span>{"/"}</span>
                <span className="tag">{tag}</span>
            </>
        )}
    </div>
  )
}

export default Breadcrumb