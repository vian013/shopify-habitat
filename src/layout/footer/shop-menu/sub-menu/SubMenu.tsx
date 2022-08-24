import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./SubMenu.css"

function SubMenu({name, link, list}: {name: string, link: string, list: {name: string, link: string}[]}) {
    const [openList, setOpenList] = useState<boolean>(false)
  return (
    <>
        <div className="title-wrapper">
            <Link to={link}>{name}</Link>
            <span className='dropdown-btn' onClick={()=>setOpenList(!openList)}></span>
        </div>
        <div className={`list-wrapper ${openList?"open":""}`}>
            {list.map(({link, name}, index) => (
                <Link key={index} to={link}>{name}</Link>
            ))}
        </div>
    </>
  )
}

export default SubMenu