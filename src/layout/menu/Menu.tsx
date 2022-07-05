import React from 'react'
import MenuTab from '../menu-tab/MenuTab'
import "./Menu.css"

function Menu({tabList}: {tabList: {link: string, title: string}[]}) {
  return (
    <div data-testid="test-menu">
        <ul className='menu-list'>
            {tabList.map(tab => (
                <MenuTab key={tab.title} link={tab.link} title={tab.title}/>
            ))}
        </ul>
    </div>
  )
}

export default Menu