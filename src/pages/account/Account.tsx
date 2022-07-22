import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../App'

function Account() {
  const {state} = useContext(AppContext)!
  const history = useHistory()

  if (!state.isLoggedIn) history.push("/login")
  
  return (
    <div>Account</div>
  )
}

export default Account