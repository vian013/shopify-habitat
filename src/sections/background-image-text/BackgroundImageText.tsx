import React from 'react'
import './BackgroundImageText.css'

type Props = {
    imgUrl: string,
    imgAlt: string,
    title: string,
    subtitle: string
}

function BackgroundImageText({imgUrl, imgAlt, title, subtitle}: Props) {
  return (
    <div className='background-image-text section'>
        <div className="img-wrapper">
            <img src={imgUrl} alt={imgAlt} />
        </div>
        <div className="content-wrapper">
            <h1 className="title">{title}</h1>
            <p className='subtitle'>{subtitle}</p>
        </div>
    </div>
  )
}

export default BackgroundImageText