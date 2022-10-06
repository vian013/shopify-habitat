import React from 'react'
import { Link } from 'react-router-dom'
import "./AccountForm.css"

type Props = {
    children?: JSX.Element,
    title: string,
    subtitle: string,
    additionalLink?: string,
    additionalText?: string,
    footerTitle: string
    footerText: string,
    footerLink: string,
}

function AccountForm({children, title, subtitle, additionalText, additionalLink, footerTitle, footerText, footerLink}: Props) {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
        
        {children}

        <div className="forgot-password-wrapper">
          {additionalLink && (
            <Link to={additionalLink} className="forgot-password shop-btn">{additionalText}</Link>
          )} 
        </div>
        <div className="login-footer">
          <p className='no-account'>{footerTitle}</p>
          <Link to={footerLink} className="shop-btn">{footerText}</Link>
        </div>
      </div>
    </div>
  )
}

export default AccountForm