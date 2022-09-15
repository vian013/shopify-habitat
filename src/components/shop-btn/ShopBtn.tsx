import React from 'react'
import { Link } from 'react-router-dom'
import "./ShopBtn.css"

type Props = {
    link: string, 
    title: string, 
    bgColor?: string
}

function ShopBtn({link, title, bgColor}: Props) {
  return (
    <Link to={link} className={`shop-btn ${bgColor}`}>{title}</Link>
  )
}

export default ShopBtn