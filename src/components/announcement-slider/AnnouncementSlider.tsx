import React from 'react'
import announcements from '../../messages/announcements'
import "./AnnouncementSlider.css"

function AnnouncementSlider() {
  return (
    <div className='announcement-slider-container'>
        <div className="announcement-wrapper">
            {announcements.map((announcement, index) => (
                <div key={index} className="announcement">{announcement}</div>
            ))}
        </div>
    </div>
  )
}

export default AnnouncementSlider