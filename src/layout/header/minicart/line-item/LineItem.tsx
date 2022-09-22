import parser from 'html-react-parser'
import React, { useState } from 'react'
import { BASE_URL } from '../../../../App'
import QuantitySelect from '../../../../components/select/quantity/QuantitySelect'
import trashIcon from '../../../icons/trash-icon'
import "./LineItem.css"

type LineItem = {
    imgUrl: string,
    title: string, 
    options: string,
    price: number,
    quantity: number, 
    variantId: string, 
    cartId: string, 
    lineId: string, 
    outOfStock: boolean, 
    fetchCartItems: Function
}

function LineItem({imgUrl ,title, options, price, quantity, variantId, cartId, lineId, outOfStock, fetchCartItems}: LineItem) {
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
            const res = await fetch(`${BASE_URL}/cart-item`, {
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
            const res = await fetch(`${BASE_URL}/cart-item`, {
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
        <div className={"cart-item"}>
            <div className="img-wrapper">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="content-wrapper">
                <p className='title'>{title}</p>
                <p className='price'>${price}</p>
                <p className='options'>{options}</p>

                <div className="buttons-wrapper">
                    <QuantitySelect quantity={quantity} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
                    <button className={'delete-btn'} onClick={handleDelete}>{parser(trashIcon)}</button>
                </div>
                {loading && <p>Loading...</p>}
                {outOfStock && <p>Out of stock. Maximum left is {quantity}</p>}
            </div>
        </div>
    )
}

export default LineItem