import React from 'react'
import "./Slide.css"

function Slide({imgSrc, imgAlt, subTitle, title, btnLink}: {imgSrc: string, imgAlt: string, subTitle: string, title: string, btnLink: string}) {
  return (
    <div className='slide'>
        <div className="slide-wrapper">
            <img className='background-img' src={imgSrc} alt={imgAlt} loading="lazy"/>
            <div className="content-wrapper">
                <h3 className='sub-title'>{subTitle}</h3>
                <h1 className='title'>{title}</h1>
                <a href={btnLink} className='slide-btn'>Shop now</a>
            </div>
        </div>
    </div>
  )
}

export default Slide