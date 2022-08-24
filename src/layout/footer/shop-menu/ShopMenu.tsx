import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import tabList from '../../../messages/tab-list'
import SubMenu from './sub-menu/SubMenu'
import "./ShopMenu.css"
const {link, title, subMenus} = tabList[1]

function ShopMenu() {
    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false)
    
  return (
    <div className={`shop-menu`} >
        <Link to={link}>{title}</Link>
        <span className='dropdown-btn' onClick={()=>setOpenSubMenu(!openSubMenu)}></span>
        <div className={`sub-menus-wrapper ${openSubMenu?"open":""}`}>
            {subMenus?.map((menu, index) => (
                <SubMenu key={index} {...menu}/>
            ))}
        </div>
    </div>
  )
}

export default ShopMenu