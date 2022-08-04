import React, { FormEvent, useEffect, useState } from 'react'
import Select from '../Select'
import styles from "./ColorSelect.module.css"

function ColorSelect({values}: {values: string[]}) {
  const [curColor, setCurColor] = useState(values[0])
  
  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setCurColor(target.value)
  }
  
  return (
    <Select title={"Color"} currentValue={curColor}>
        <div className={styles['color-panel']}>
            {values.map((value, index) => (
                <React.Fragment key={value}>
                  <div className={styles["color-option"]}>
                    <input id={`color-${value}`} defaultChecked={index===0&&true} type="radio" name={'Color'} value={value} onChange={handleChange}/>
                    <label className={`${styles["input-label"]} ${styles[value]}`} htmlFor={`color-${value}`}>
                    </label>
                  </div>
                </React.Fragment>
            ))}
        </div>
    </Select>
  )
}

export default React.memo(ColorSelect)