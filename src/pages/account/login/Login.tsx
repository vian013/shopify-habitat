import React, { FormEvent, useState } from 'react'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext, BASE_URL, UserContext } from '../../../App'
import AccountForm from '../../../components/account-form/AccountForm'
import messages from '../../../messages/messages'
import { AppActions } from '../../../store/actions/actions'
import { UserActions } from '../../../store/actions/userActions'
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {userDispatch} = useContext(UserContext)!
  const {state: {isLoggedIn}, dispatch} = useContext(AppContext)!
  const {title, subtitle, btnText, noAccount, forgotPassword, forgotPasswordLink, createAccountLink, createAccount} = messages.pages.login

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
      credentials: "include"
    })
    if (res.status === 200) {
      const user = await res.json()
      userDispatch({type: UserActions.SET_USER, payload: user})
      dispatch({type: AppActions.SET_LOGGEDIN})
    }
    if (res.status === 400) {
      const data = await res.json()
      const err = data.error
      setError(err)
    }  
  }

  return isLoggedIn ? (
    <Redirect to={"/account"}/>
  ) : (
    <AccountForm 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
      title={title}
      subtitle={subtitle}
      btnText={btnText}
      additionalText={forgotPassword}
      additionalLink={forgotPasswordLink}
      footerTitle={createAccount}
      footerText={noAccount}
      footerLink={createAccountLink}
    />
  )
}

export default Login