import React, { useEffect, useState } from 'react'
import QuantitySelect from '../../../../components/select/quantity/QuantitySelect'
import { CartItem, CartState } from '../../../../redux/cart/types'
import "./LineItem.css"
import parser from 'html-react-parser'
import trashIcon from '../../../icons/trash-icon'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { useDispatch } from 'react-redux'
import { deleteCart, updateCart } from '../../../../redux/cart/actions'

type LineItem = CartItem & {
    cartId: string, 
    outOfStock?: boolean, 
    showCost?: boolean
}

function LineItem({imgUrl ,title, options, price, quantity, variantId, cost, cartId, lineId, outOfStock, showCost}: LineItem) {
    const {loading: cartLoading} = useSelector<RootState>(state => state.cart) as CartState
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(()=>{
        if (loading && !cartLoading) setLoading(cartLoading)
    }, [loading, cartLoading])

    const dispatch = useDispatch()
    
    const handleDecrease = () => {
        setLoading(true)
        dispatch(updateCart({cartId, lineId, variantId, newQuantity: quantity-1}))
    }
    
    const handleIncrease = () => {
        setLoading(true)
        dispatch(updateCart({cartId, lineId, variantId, newQuantity: quantity+1}))
    }
    
    const handleDelete = () => {
        setLoading(true)
        dispatch(deleteCart({cartId, lineId}))
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