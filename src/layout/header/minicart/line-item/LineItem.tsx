import React, { useState } from 'react'
import QuantitySelect from '../../../../components/select/quantity/QuantitySelect'
import styles from "./LineItem.module.css"

function LineItem({title, quantity, variantId, cartId, lineId, fetchCartItems} : {title: string, quantity: number, variantId: string, cartId: string, lineId: string, fetchCartItems: Function}) {
    const [loading, setLoading] = useState<boolean>(false)
    
    const handleDecrease = async () => {
        if (quantity <= 1) return
        setLoading(true)
        await handleUpdateCart(-1)
        fetchCartItems(loading, setLoading)
    }
   
    const handleIncrease = async () => {
        setLoading(true)
        await handleUpdateCart(1)
        fetchCartItems(loading, setLoading)
    }

    const handleDelete = async () => {
        setLoading(true)
        await handleDeleteCartItem()
        fetchCartItems(loading, setLoading)
    }

    const handleDeleteCartItem = async () => {
        const res = await fetch("http://localhost:4000/cart-item", {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({cartId, lineIds: [lineId]})
        })
    }

    const handleUpdateCart = async(quantity: number) => {
        try {
            const res = await fetch("http://localhost:4000/cart-item", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({variantId, quantity, cartId})
            })
        } catch (error) {
            
        }
    }
    
    return (
        <div className={styles["cart-item"]}>
            <p>{title} {variantId}</p>
            <QuantitySelect quantity={quantity} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
            {loading && <p>Loading...</p>}
            <button className={styles['delete-btn']} onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default LineItem