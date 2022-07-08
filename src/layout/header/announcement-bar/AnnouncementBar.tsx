import React from 'react'
import GeneralSettings from './general-settings/GeneralSettings'
import "./AnnouncementBar.css"

function AnnouncementBar({title}: {title: string}) {
  return (
    <div id='announcement-bar'>
        <h3 className='announcement-title'>{title}</h3>
        <GeneralSettings />
    </div>
  )
}

export default AnnouncementBar