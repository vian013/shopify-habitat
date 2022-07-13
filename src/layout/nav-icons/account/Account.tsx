import React from 'react'
import accountIcon from '../../icons/account-icon'
import NavIcon from '../nav-icon/NavIcon'

function Account() {
  return (
    <li>
        <NavIcon {...accountIcon} handleClick={()=>{}}/>
    </li>
  )
}

export default Account