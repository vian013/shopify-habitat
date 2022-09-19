import React from 'react'
import "./ImageWithText.css"

type Props = {
    imgUrl: string,
    imgAlt: string,
    title: string,
    subtitle: string,
    description: string
}

function ImageWithText({imgUrl, imgAlt, title, subtitle, description}: Props) {
  return (
    <div className='image-with-text section'>
        <div className="page-width">
            <div className="container">
                <div className="img-wrapper">
                    <img src={imgUrl} alt={imgAlt} />
                </div>
                <div className="content-wrapper">
                    <p className='subtitle'>{subtitle}</p>
                    <h1 className='title'>{title}</h1>
                    <p className='description'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageWithText