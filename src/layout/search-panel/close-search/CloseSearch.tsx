import React from 'react'
import closeIcon from '../../icons/close-icon'
import NavIcon from '../../nav-icons/nav-icon/NavIcon'
import "./CloseSearch.css"

function CloseSearch({handleClose}: {handleClose: ()=>void}) {
    
  return (
    <NavIcon {...closeIcon} handleClick={handleClose}/>
  )
}

export default CloseSearch