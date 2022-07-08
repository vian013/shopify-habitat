import React, { ChangeEvent, useState } from 'react'
import "./GeneralSetting.css"

function GeneralSetting({options, handleSetting, languageWidth}: {options: string[], handleSetting: React.EventHandler<any>, languageWidth: boolean}) {
  const [value, setValue] = useState(options[0]) 

  const handleChange = (e: ChangeEvent<any>) => {
    const val = e.target.value
    setValue(val)
    handleSetting(val)
  }
  
  return (
    <>
      <li className='general-setting-wrapper'>
        <select className={`general-setting ${languageWidth&&".general-setting--language"}`} defaultValue={value} onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
      </li>
    </>
  )
}

export default GeneralSetting