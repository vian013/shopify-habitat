import React, { Dispatch } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Breadcrumb.css"

type Props = {
  tag?: string
  setTag?: Dispatch<string>
}

function Breadcrumb({tag, setTag}: Props) {
  const history = useHistory()
  
  const handleClick = () => {
    if(setTag) setTag("all")
    history.push("/blogs")
  }
  
  return (
    <div className='breadcrumb'>
        <Link to={"/"}>Home</Link>
        <span>{"/"}</span>
        <span onClick={handleClick}>News</span>
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