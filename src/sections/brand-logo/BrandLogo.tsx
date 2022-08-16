import React from 'react'
import styles from "./BrandLogo.module.css"

function BrandLogo({imgSrc, isFaded, handleMouseOver, handleMouseLeave, logoIndex}: {imgSrc: string, isFaded: boolean, logoIndex: number, handleMouseOver:(index: number)=>void, handleMouseLeave:()=>void}) {
  
  return (
    <div className={`${styles['img-wrapper']} ${isFaded?styles['faded']:""}`} onMouseOver={()=>handleMouseOver(logoIndex)} onMouseLeave={handleMouseLeave}>
        <img src={imgSrc}/>
    </div>
  )
}

export default BrandLogo