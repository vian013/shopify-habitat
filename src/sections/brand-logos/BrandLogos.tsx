import React, { useState } from 'react'
import brandLogos from '../../messages/brand-logos'
import BrandLogo from '../brand-logo/BrandLogo'
import "./BrandLogos.css"

const initFadedState = new Array<boolean>(brandLogos.length) 

function BrandLogos() {
  const [fadedState, setFadedState] = useState<boolean[]>(initFadedState)

  const handleMouseOver = (index: number) => {
    const newState = new Array<boolean>(brandLogos.length) 
    newState.fill(true)

    newState[index] = false
    setFadedState(newState)
  }

  const handleMouseLeave = () => {
    setFadedState(initFadedState)
  }

  return (
    <div className='brand-logos section'>
        {brandLogos.map((logo, index) => (
            <BrandLogo key={index} imgSrc={logo} isFaded={fadedState[index]} logoIndex={index} handleMouseLeave={handleMouseLeave} handleMouseOver={handleMouseOver}/>
        ))} 
    </div>
  )
}

export default BrandLogos