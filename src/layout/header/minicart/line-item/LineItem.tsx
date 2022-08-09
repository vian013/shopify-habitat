import React, { useState } from 'react'
import QuantitySelect from '../../../../components/select/quantity/QuantitySelect'
import styles from "./LineItem.module.css"

type LineItem = {title: string, quantity: number, variantId: string, cartId: string, lineId: string, outOfStock: boolean, fetchCartItems: Function}

function LineItem({title, quantity, variantId, cartId, lineId, outOfStock, fetchCartItems}: LineItem) {
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
        await fetchCartItems(loading, setLoading)
    }

    const handleDeleteCartItem = async () => {
        try {
            const res = await fetch("http://localhost:4000/cart-item", {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({cartId, lineIds: [lineId]})
            })
        } catch (error) {
            console.log(error);
        }
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
            console.log(error);
        }
    }
    
    return (
        <div className={styles["cart-item"]}>
            <p>{title} {variantId}</p>
            <QuantitySelect quantity={quantity} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
            {loading && <p>Loading...</p>}
            {outOfStock && <p>Out of stock. Maximum left is {quantity}</p>}
            <button className={styles['delete-btn']} onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default LineItem