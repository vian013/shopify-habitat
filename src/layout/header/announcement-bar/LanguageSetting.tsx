import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import languages from '../../../settings-options/languages'
import GeneralSetting from './general-setting/GeneralSetting'

function LanguageSetting() {
  const {setState} = useContext(AppContext)
  
  const handleSetting = (val: string) => {
    setState((prev: IState) => {
      return {
        ...prev,
        language: val
      }
    })
  }
    
  return (
    <GeneralSetting options={languages} handleSetting={handleSetting} languageWidth/>
  )
}

export default LanguageSetting