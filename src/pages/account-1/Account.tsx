import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import messages from '../../messages/messages'
import { fetchUser, login, logout } from '../../redux/user/actions'
import { Action, User, UserData } from '../../redux/user/types'
import "./Account.css"

type Props = {
  user: User, 
  loading: boolean,
  fetchUser: Function, 
  logout: Function
}

function Account({user, fetchUser, logout, loading}: Props) {
  useEffect(() => {
    if (user) return
    const cookie = document.cookie
    if (cookie.indexOf("sid=") != -1) fetchUser()
  }, [])

  const {accountDetails, noOrder, orderHistory, title} = messages.pages.account
  
  return user ? (
    <div id='account-page'>
      <div className="page-width">
        <div className="top">
          <h1 className='page-title'>{title}</h1>
          {loading && <p>Loading...</p>}
          <button className='logout-btn' onClick={() => logout()}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6591 4.65909L15 8M15 8L11.6591 11.3409M15 8H6.09091M6.09091 15H1.63636C1.46759 15 1.30573 14.933 1.18639 14.8136C1.06705 14.6943 1 14.5324 1 14.3636V1.63636C1 1.46759 1.06705 1.30573 1.18639 1.18639C1.30573 1.06705 1.46759 1 1.63636 1H6.09091" stroke="var(--color-primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Log out</span> 
          </button>
        </div>
        <div className="bottom">
          <div className="order-history">
            <h1 className='title'>{orderHistory}</h1>
            {user.numberOfOrders && <p>{Number(user.numberOfOrders)===0 ? noOrder : 'order(s)'}</p>}
          </div>
          <div className="account-details">
            <h1 className='title'>{accountDetails}</h1>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={"/account/login"}/>
  )
}

const mapStateToProps = (state: {user: UserData}) => {
  const {user, loading} = state.user
  return {
    user,
    loading
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