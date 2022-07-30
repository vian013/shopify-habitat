import React from 'react'
import styles from "./QuantitySelect.module.css"

function QuantitySelect({handleDecrease, handleIncrease, quantity} : {handleDecrease: ()=>void, handleIncrease: ()=>void, quantity: number}) {
  return (
    <div className={styles['quantity-panel']}>
        <button className={styles['decrease-btn']} onClick={handleDecrease} type="button">-</button>
        <span className={styles['quantity-value']}>{quantity}</span>
        <button className={styles['increase-btn']} onClick={handleIncrease} type="button">+</button>
    </div>
  )
}

export default React.memo(QuantitySelect)
