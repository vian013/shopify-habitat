import React from 'react'
import CurrencySetting from '../CurrencySetting'
import LanguageSetting from '../LanguageSetting'
import "./GeneralSettings.css"

function GeneralSettings() {
  return (
    <ul className='general-settings-wrapper'>
        <LanguageSetting />
        <CurrencySetting />
    </ul>
  )
}

export default GeneralSettings