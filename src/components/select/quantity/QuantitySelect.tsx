import React from 'react'
import styles from "./QuantitySelect.module.css"

function QuantitySelect({handleDecrease, handleIncrease, quantity} : {handleDecrease: ()=>void, handleIncrease: ()=>void, quantity: number}) {
  return (
    <div className={styles['quantity-panel']}>
        <button className={styles['decrease-btn']} onClick={handleDecrease}>-</button>
        <span className={styles['quantity-value']}>{quantity}</span>
        <button className={styles['increase-btn']} onClick={handleIncrease}>+</button>
    </div>
  )
}

export default QuantitySelect
