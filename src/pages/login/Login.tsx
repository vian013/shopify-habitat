import React, { FormEvent, useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { AppContext, UserContext } from '../../App'
import { AppActions } from '../../store/actions/actions'
import { UserActions } from '../../store/actions/userActions'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {userDispatch} = useContext(UserContext)!
  const {state: {isLoggedIn}, dispatch} = useContext(AppContext)!

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch("http://localhost:4000/login", {
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
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        Email
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <br />
        Password
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <br />
        <input type="submit" value="Submit" />
      </form>

      {error&&<p>{error}</p>}
      <Link to={"/create-account"}>Create an account</Link>
    </div>
  )
}

export default Login