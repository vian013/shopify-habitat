import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext, UserContext } from '../../App'
import { AppActions } from '../../store/actions/actions'
import { UserActions } from '../../store/actions/userActions'

function Account() {
  const {state, dispatch} = useContext(AppContext)!
  const {userState, userDispatch} = useContext(UserContext)! 
  const {fName, lName, email} = userState

  const fetchUser = async() => {
    const res = await fetch("http://localhost:4000/user", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    })
    const data = await res.json()
    dispatch({type: AppActions.SET_LOGGEDIN})
    userDispatch({type: UserActions.SET_USER, payload: data})
  }

  useEffect(()=>{
    const cookie = document.cookie
    if (cookie.indexOf("sid=") != -1) {
      fetchUser()
    } else {
      dispatch({type: AppActions.SET_LOGGEDOUT})
    }
  },[])

  const handleLogout = () => {
    fetch("http://localhost:4000/delete-sid", {
      method: "GET",
      credentials: "include"
    })
    dispatch({type: AppActions.SET_LOGGEDOUT})
  } 

  if (!state.isLoggedIn) return (
    <Redirect to={"/login"}/>
  )
  
  return (
    <div>
      {fName && lName && <h1>User Name: {fName} {lName}</h1>}
      {email && <h1>Email: {email}</h1>}
      <button onClick={handleLogout}>Log out</button>
    </div>
  ) 
}

export default Account