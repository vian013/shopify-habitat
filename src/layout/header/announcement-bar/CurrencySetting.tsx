import React, { useContext, useEffect, useMemo } from 'react'
import { AppContext } from '../../../App'
import currencies from '../../../settings-options/currencies'
import GeneralSetting from './general-setting/GeneralSetting'

function CurrencySetting() {
  const {dispatch} = useContext(AppContext)
  
  
  
  const handleSetting = (val: string) => {
    dispatch({
      type: "SET_CURRENCY",
      payload: val
    })
  }
  
  return (
    <GeneralSetting options={currencies} handleSetting={handleSetting} languageWidth={false}/>
  )
}

export default CurrencySetting