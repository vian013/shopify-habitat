import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import messages from '../../../messages/messages'
import "./ResetPassword.css"

function ResetPassword() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    
    const {title, subtitle, cancel, cancelLink, submit} = messages.pages.resetPassword
    const { emailPlaceholder } = messages.pages.login

    const handleSubmit = ()=>{}
    
  return (
    <div id="reset-password-page">
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>

                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input placeholder={emailPlaceholder} type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <button className='btn' type="submit">{submit}</button>
                    <div className="login-footer">
                        <Link to={cancelLink} className="shop-btn">{cancel}</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default ResetPassword