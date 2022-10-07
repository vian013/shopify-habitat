import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import { fetchUser, login, logout } from '../../redux/user/actions'
import { Action, User, UserData } from '../../redux/user/types'

function Account({user, fetchUser, logout}: {user: User, fetchUser: Function, logout: Function}) {
  useEffect(() => {
    if (user) return
    const cookie = document.cookie
    if (cookie.indexOf("sid=") != -1) fetchUser()
  }, [])
  
  return user ? (
    <div>
      <h1>{user.displayName}</h1>
      <h1>{user.email}</h1>
      <button className='shop-btn' onClick={() => logout()}>Log out</button>
    </div>
  ) : (
    <Redirect to={"/account/login"}/>
  )
}

const mapStateToProps = (state: {user: UserData}) => {
  const {user} = state.user
  return {
    user
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<UserData, null, Action>) => {
  return {
    login: (info: {email: string, password: string}) => dispatch(login(info)),
    logout: () => dispatch(logout()),
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account) 