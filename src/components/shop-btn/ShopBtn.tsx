import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./ShopBtn.module.css"

type Props = {
    link: string, 
    title: string, 
    bgColor?: string
}

function ShopBtn({link, title, bgColor}: Props) {
  return (
    <Link to={link} className={`${styles["shop-btn"]} ${bgColor?styles[bgColor]:""}`}>{title}</Link>
  )
}

export default ShopBtn