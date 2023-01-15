import { BASE_URL } from "../../App"
import { AddToCartPayload, CreateCartPayload, DeleteCartPayload } from "./actions"
import { CartItems } from "./types"

const fetchCart = async(cartId: string) => {
    try {
        const res = await fetch(`${BASE_URL}/cart-items?cartId=${cartId}`)
        const data = await res.json()
        return data
    } catch (error) {
    }
}

const createCart = async(payload: CreateCartPayload) => {
    try {
        const res = await fetch(`${BASE_URL}/cart-items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
        })
        const data = await res.json()
        return data
    } catch (error) {
    }
}

const addToCart = async(payload: AddToCartPayload) => {
    try {
        const res = await fetch(`${BASE_URL}/cart-item`, {
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

const updateCart = async(payload: AddToCartPayload) => {
    try {
        const res = await fetch(`${BASE_URL}/cart-item`, {
            method: "PUT",
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

const deleteCart = async(payload: DeleteCartPayload) => {
    try {
        const res = await fetch(`${BASE_URL}/cart-item`, {
            method: "DELETE",
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
    createCart,
    addToCart,
    deleteCart,
    updateCart
}