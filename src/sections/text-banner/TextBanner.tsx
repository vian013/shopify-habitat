import React from 'react'
import "./TextBanner.css"

function TextBanner({text}: {text: string}) {
  return (
    <div className='text-banner section'>
        <p className="text">{text}</p>
    </div>
  )
}

export default TextBanner