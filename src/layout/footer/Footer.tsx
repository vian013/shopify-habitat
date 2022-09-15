import React from 'react'
import { Link } from 'react-router-dom'
import sections from '../../messages/sections'
import tabList from '../../messages/tab-list'
import "./Footer.css"
import helpList from './help-list'
import ShopMenu from './shop-menu/ShopMenu'
import socialList from './social-list'
import parser from 'html-react-parser'
import FooterTopBar from './footer-top-bar/FooterTopBar'
const {menuTitles, newsLetter} = sections.footer

function Footer() {
  
  return (
    <footer id='footer'>
      <FooterTopBar />
      <div className="container">
        <div className="page-width">
          <div className="content-wrapper">
            <div className="left">
              <div className="menus-wrapper">
                <div className="menu-wrapper">
                  <div className="menu-title">{menuTitles.company}</div>
                  <div className="links-wrapper">
                    {tabList.map(({link, title}, index) => {
                      return title === "Shop" ? (
                        <ShopMenu key={index}/>
                      ) : (
                        <Link key={index} to={link}>{title}</Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="menus-wrapper">
                <div className="menu-wrapper">
                  <div className="menu-title">{menuTitles.help}</div>
                  <div className="links-wrapper">
                    {helpList.map(({link, name}, index) => (
                      <Link key={index} to={link}>{name}</Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="menus-wrapper">
                <div className="menu-wrapper">
                  <div className="menu-title">{menuTitles.getInTouch}</div>
                  <div className="links-wrapper">
                    {socialList.map(({link, name, svgContent}, index) => (
                      <Link key={index} className='social-link' to={link}>{parser(svgContent)}<span className='link-name'>{name}</span></Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
                <div className="newsletter-wrapper">
                  <div className="newsletter-title">{newsLetter.title}</div>
                  <div className="newsletter-subtitle">{newsLetter.subTitle}</div>
                  <p className='email-label'>Email</p>
                  <div className="email-input-wrapper">
                    <input className='email-input' placeholder={newsLetter.emailPlaceholder} type="text" />
                    <button className='submit-btn'>
                      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.799805 5.5H12.7998" stroke="var(--background-color--1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M9.49976 1L13.9998 5.5L9.49976 10" stroke="var(--background-color--1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer