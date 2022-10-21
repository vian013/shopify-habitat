import { ActionCreator } from "redux"
import { Cart, CartActions } from "./types"


export type CreateCartPayload = {
    productHandle: string, 
    options: {[key: string] : string}, 
    quantity: number
}

export type AddToCartPayload = CreateCartPayload & {cartId: string}

export type UpdateCartPayload = {
    cartId: string, 
    lineId: string, 
    variantId: string
    newQuantity: number
}

export type DeleteCartPayload = {
    cartId: string
    lineId: string,
}

const fetchCartRequest = () => {
    return {
        type: CartActions.FETCH_CART_REQUEST
    }
}

const fetchCartSuccess = (payload: Cart) => {
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

const createCartSuccess = (payload: Cart) => {
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

const createCart = (payload: CreateCartPayload) => {
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

const addToCartSuccess = (payload: Cart) => {
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

const updateCartSuccess = (payload: Cart) => {
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

const updateCart = (payload: UpdateCartPayload) => {
    return {
        type: CartActions.UPDATE_CART,
        payload
    }
}

const deleteCartRequest = () => {
    return {
        type: CartActions.DELETE_CART_REQUEST
    }
}

const deleteCartSuccess = (payload: Cart) => {
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

const deleteCart = (payload: DeleteCartPayload) => {
    return {
        type: CartActions.DELETE_CART,
        payload
    }
}

const openCart = () => {
    return {
        type: CartActions.OPEN_CART
    }
}

const closeCart = () => {
    return {
        type: CartActions.CLOSE_CART
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
    updateCartRequest,
    updateCartSuccess,
    updateCartFailure,
    updateCart,
    openCart,
    closeCart
}