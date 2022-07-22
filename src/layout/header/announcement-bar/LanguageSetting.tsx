import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../App'
import languages from '../../../settings-options/languages'
import { AppActions } from '../../../store/actions'
import GeneralSetting from './general-setting/GeneralSetting'

function LanguageSetting() {
  const {dispatch} = useContext(AppContext)!
 

  const handleSetting = (val: string) => {
    dispatch({
      type: AppActions.SET_LANGUAGE,
      payload: val
    })
  }
    
  return (
    <GeneralSetting options={languages} handleSetting={handleSetting} languageWidth/>
  )
}

export default LanguageSetting