import React from 'react'
import Nav from '../nav/Nav'
import AnnouncementBar from './announcement-bar/AnnouncementBar'
import { announcementTitle } from './announcement-bar/announment'

function Header() {
  return (
    <>
      <AnnouncementBar title={announcementTitle}/>
      <Nav/>
    </>
  )
}

export default Header