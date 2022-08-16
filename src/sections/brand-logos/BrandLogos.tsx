import React, { useState } from 'react'
import brandLogos from '../../messages/brand-logos'
import BrandLogo from '../brand-logo/BrandLogo'
import "./BrandLogos.css"

const initFadedState = [
  false,
  false,
  false,
  false,
  false
]

function BrandLogos() {
  const [fadedState, setFadedState] = useState<boolean[]>(initFadedState)

  const handleMouseOver = (index: number) => {
    const newState = [
      true,
      true,
      true,
      true,
      true
    ]

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