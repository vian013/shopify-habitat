import React from 'react'

function Overlay({isBackgroundBlurred}: {isBackgroundBlurred: boolean}) {
  return (
    <div className={`blurred-bg ${isBackgroundBlurred?"open":""}`}></div>
  )
}

export default Overlay