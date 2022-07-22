import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { shopContext } from '../header/Header';
import "./MenuTab.css"


function MenuTab({link, title}: {link: string, title: string}) {
  const {openShopPanel, closeShopPanel} = useContext(shopContext)!
  
  return (
    <li data-testid="test-menuTab" className={`menu-tab-wrapper ${title==="Shop"?"shop-tab":""}`} onMouseOver={title==="Shop"?openShopPanel:undefined} onMouseLeave={title==="Shop"?closeShopPanel:undefined}>
        <Link className='menu-tab' to={link}>{title}</Link>
    </li>
  )
}

export default MenuTab