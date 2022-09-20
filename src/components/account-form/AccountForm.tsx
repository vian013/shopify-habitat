import React, { Dispatch, FormEvent } from 'react'
import { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AppContext } from '../../App'
import messages from '../../messages/messages'
import "./AccountForm.css"

type Props = {
    children?: JSX.Element,
    email: string,
    setEmail: Dispatch<string>
    password: string,
    setPassword: Dispatch<string>
    error: string,
    handleSubmit: (e: FormEvent) => Promise<void>,
    title: string,
    subtitle: string,
    btnText: string,
    additionalLink?: string,
    footerTitle: string
    footerText: string,
    footerLink: string,
}

function AccountForm({children, email, setEmail, password, setPassword, error, handleSubmit, title, subtitle, btnText, additionalLink, footerTitle, footerText, footerLink}: Props) {
  const {state: {isLoggedIn}} = useContext(AppContext)!
  const { emailPlaceholder, passwordPlaceholder} = messages.pages.login

  return isLoggedIn ? (
    <Redirect to={"/account"}/>
  ) : (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>

        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          {children}
          <input placeholder={emailPlaceholder} type="text" value={email} onChange={e => setEmail(e.target.value)}/>
          <input placeholder={passwordPlaceholder} type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='btn' type="submit">{btnText}</button>
        </form>

        <div className="forgot-password-wrapper">
          {additionalLink && (
            <Link to={"/"} className="forgot-password shop-btn">{additionalLink}</Link>
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