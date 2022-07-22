import React, { ChangeEvent, useState } from 'react'
import "./Header.css"

function Header ({handleSetting}:{handleSetting: React.EventHandler<any>}){
    const handleChange =  (e: ChangeEvent<any>)=>{

    }


    return(
        <ul className='header-wrapper'>
            <li>Home</li>
            <li>/</li>
            <li>News</li>
        </ul>
    )
}

export default Header