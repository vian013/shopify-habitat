import React from 'react'
import "./MenuTab.css"

function MenuTab({link, title}: {link: string, title: string}) {
  return (
    <li data-testid="test-menuTab" className='menu-tab-wrapper'>
        <a className='menu-tab' href={link}>{title}</a>
    </li>
  )
}

export default MenuTab