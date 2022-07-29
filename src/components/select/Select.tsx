import React from 'react'
import styles from "./Select.module.css"

function Select({title, currentValue, children} : {title: string, currentValue: string, children?: JSX.Element}) {
  return (
    <div className={styles['select']}>
      <p className={styles['title']}>{title}: <span className={styles['current-value']}>{currentValue}</span></p>
      {children}
    </div>
  )
}

export default Select