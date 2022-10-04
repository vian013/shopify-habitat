import parser from 'html-react-parser'
import React, { useState } from 'react'
import { BASE_URL } from '../../../../App'
import QuantitySelect from '../../../../components/select/quantity/QuantitySelect'
import trashIcon from '../../../icons/trash-icon'
import { CartItem } from '../MiniCart'
import "./LineItem.css"

type LineItem = CartItem & {
    cartId: string, 
    outOfStock: boolean, 
    fetchCartItems: Function,
    showCost?: boolean
}

function LineItem({imgUrl ,title, options, price, quantity, variantId, cost, cartId, lineId, outOfStock, fetchCartItems, showCost}: LineItem) {
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
                <div className="info-wrapper">
                    <p className='title'>{title}</p>
                    <p className='price'>${price}</p>
                    <p className='options'>{options}</p>
                </div>

                <div className="buttons-wrapper">
                    <QuantitySelect quantity={quantity} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
                    <button className={'delete-btn'} onClick={handleDelete}>{parser(trashIcon)}</button>
                </div>
                {loading && <p>Loading...</p>}
                {outOfStock && <p>Out of stock. Maximum left is {quantity}</p>}
                {showCost && <div className='cost'>
                        <p>${cost}</p>
                    </div>}
            </div>
        </div>
    )
}

export default LineItem