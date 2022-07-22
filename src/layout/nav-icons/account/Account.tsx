import React from 'react'
import accountIcon from '../../icons/account-icon'
import NavIcon from '../nav-icon/NavIcon'
import {useHistory} from "react-router-dom"

function Account() {
  const history = useHistory()
  
  return (
    <li>
        <NavIcon {...accountIcon} handleClick={()=>{history.push("/account")}}/>
    </li>
  )
}

export default Account