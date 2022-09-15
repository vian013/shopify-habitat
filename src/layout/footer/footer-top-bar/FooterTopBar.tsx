import React from 'react'
import ShopBtn from '../../../components/shop-btn/ShopBtn'
import sections from '../../../messages/sections'
import "./FooterTopBar.css"

function FooterTopBar() {
    const {btnText, title, link} = sections.footer.topBar
    
  return (
    <div className='footer-top-bar'>
        <div className="page-width">
            <div className="content-wrapper">
                <p className='title'>{title}</p>
                <ShopBtn link={link} title={btnText} bgColor='orange'/>
            </div>
        </div>
    </div>
  )
}

export default FooterTopBar