import React, { FormEvent, useEffect, useState } from 'react'
import Select from '../Select'
import styles from './SizeSelect.module.css'

function SizeSelect({values}: {values: string[]}) {
  const [curSize, setSize] = useState(values[0])
  
  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setSize(target.value)
  }
  
  return (
    <Select title={"Size"} currentValue={curSize}>
        <div className={styles['size-panel']}>
            {values.map((value, index) => (
                <React.Fragment key={value}>
                  <div className={styles["size-option"]}>
                      <input id={`size-${value}`} defaultChecked={index===0&&true} type="radio" name={'Size'} value={value} onChange={handleChange}/>
                      <label className={styles["input-label"]} htmlFor={`size-${value}`}>

                        <p className={styles['size-value']}>{value}</p>
                      </label>
                  </div>
                </React.Fragment>
            ))}
        </div>
    </Select>
  )
}

export default React.memo(SizeSelect)