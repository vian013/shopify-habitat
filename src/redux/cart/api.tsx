import { BASE_URL } from "../../App"
import { AddToCartPayload } from "./actions"
import { CartItems } from "./types"

export type CartData = {
    totalQuantity: number, 
    subTotal: number, 
    items: CartItems
}

const fetchCart = async(cartId: string) => {
    try {
        const res = await fetch(`${BASE_URL}/cart-items?cartId=${cartId}`)
        const data: CartData = await res.json()
        return data
    } catch (error) {
    }
}

const createCart = async(payload: AddToCartPayload) => {
    try {
        const res = await fetch(`${BASE_URL}/cart-items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        return data
    } catch (error) {
        
    }
    
}

export {
    fetchCart,
    createCart
}