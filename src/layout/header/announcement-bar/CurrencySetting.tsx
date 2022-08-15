import React, { useContext, useEffect, useMemo } from 'react'
import { AppContext } from '../../../App'
import currencies from '../../../messages/settings-options/currencies'
import { AppActions } from '../../../store/actions/actions'
import GeneralSetting from './general-setting/GeneralSetting'

function CurrencySetting() {
  const {dispatch} = useContext(AppContext)!
  
  const handleSetting = (val: string) => {
    dispatch({
      type: AppActions.SET_CURRENCY,
      payload: val
    })
  }
  
  return (
    <GeneralSetting options={currencies} handleSetting={handleSetting} languageWidth={false}/>
  )
}

export default CurrencySetting