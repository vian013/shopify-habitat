import { ActionCreator } from "redux"
import { CartActions } from "./types"

const fetchCartRequest = () => {
    return {
        type: CartActions.FETCH_CART_REQUEST
    }
}

const fetchCartSuccess = (payload: any) => {
    return {
        type: CartActions.FETCH_CART_SUCCESS,
        payload
    }
}

const fetchCartFailure = (payload: any) => {
    return {
        type: CartActions.FETCH_CART_FAILURE,
        payload
    }
}

const fetchCart = (cartId: string) => {
    return {
        type: CartActions.FETCH_CART,
        cartId
    }
}

const createCartRequest = () => {
    return {
        type: CartActions.CREATE_CART_REQUEST
    }
}

const createCartSuccess = (payload: any) => {
    return {
        type: CartActions.CREATE_CART_SUCCESS,
        payload
    }
}

const createCartFailure = (payload: any) => {
    return {
        type: CartActions.CREATE_CART_FAILURE,
        payload
    }
}

const createCart = (payload: {productHandle: string, options: {[key: string] : string}, quantity: number}) => {
    return {
        type: CartActions.CREATE_CART,
        payload
    }
}

const addToCartRequest = () => {
    return {
        type: CartActions.ADD_TO_CART_REQUEST
    }
}

const addToCartSuccess = (payload: any) => {
    return {
        type: CartActions.ADD_TO_CART_SUCCESS,
        payload
    }
}

const addToCartFailure = (payload: any) => {
    return {
        type: CartActions.ADD_TO_CART_FAILURE,
        payload
    }
}

export type AddToCartPayload = {productHandle: string, options: {[key: string] : string}, quantity: number, cartId: string}

const addToCart = (payload: AddToCartPayload) => {
    return {
        type: CartActions.ADD_TO_CART, 
        payload
    }
}

const updateCartRequest = () => {
    return {
        type: CartActions.UPDATE_CART_REQUEST
    }
}

const updateCartSuccess = (payload: any) => {
    return {
        type: CartActions.UPDATE_CART_SUCCESS,
        payload
    }
}

const updateCartFailure = (payload: any) => {
    return {
        type: CartActions.UPDATE_CART_FAILURE,
        payload
    }
}

const updateCart = () => {
    return {
        type: CartActions.UPDATE_CART
    }
}

const deleteCartRequest = () => {
    return {
        type: CartActions.DELETE_CART_REQUEST
    }
}

const deleteCartSuccess = (payload: any) => {
    return {
        type: CartActions.DELETE_CART_SUCCESS,
        payload
    }
}

const deleteCartFailure = (payload: any) => {
    return {
        type: CartActions.DELETE_CART_FAILURE,
        payload
    }
}

const deleteCart = () => {
    return {
        type: CartActions.DELETE_CART
    }
}

const setCartQuantity = (payload: number) => {
    return {
        type: CartActions.SET_CART_QUANTITY,
        payload
    }
}

const setCartSubTotal = (payload: number) => {
    return {
        type: CartActions.SET_CART_SUBTOTAL,
        payload
    }
}

export {
    fetchCartRequest,
    fetchCartSuccess,
    fetchCartFailure,
    fetchCart,
    createCartRequest,
    createCartFailure,
    createCartSuccess,
    createCart,
    addToCartRequest,
    addToCartSuccess,
    addToCartFailure,
    addToCart,
    deleteCartRequest,
    deleteCartSuccess,
    deleteCartFailure,
    deleteCart,
    setCartQuantity,
    setCartSubTotal
}