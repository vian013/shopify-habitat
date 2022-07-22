import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

  }
  
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        Email
        <input type="text" />
        Password
        <input type="text" />
      </form>

      <Link to={"/create-account"}>Create an account</Link>
    </div>
  )
}

export default Login