import React, { useContext, useMemo } from 'react'
import { AppContext } from '../../../App'
import currencies from '../../../settings-options/currencies'
import GeneralSetting from './general-setting/GeneralSetting'

function CurrencySetting() {
  const {setState} = useContext(AppContext)
  
  const handleSetting = (val: string) => {
    setState((prev: IState) => {
      return {
        ...prev,
        currency: val
      }
    })
  }
  
  return (
    <GeneralSetting options={currencies} handleSetting={handleSetting} languageWidth={false}/>
  )
}

export default CurrencySetting