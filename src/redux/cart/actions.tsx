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

const fetchCart = (payload: any) => {
    return {
        type: CartActions.FETCH_CART,
        payload
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

const createCart = (payload: any) => {
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

const addToCart = () => {
    return {
        type: CartActions.ADD_TO_CART
    }
}

const deleteCartRequest = () => {
    return {
        type: CartActions.UPDATE_CART_REQUEST
    }
}

const deleteCartSuccess = (payload: any) => {
    return {
        type: CartActions.UPDATE_CART_SUCCESS,
        payload
    }
}

const deleteCartFailure = (payload: any) => {
    return {
        type: CartActions.UPDATE_CART_FAILURE,
        payload
    }
}

const deleteCart = () => {
    return {
        type: CartActions.UPDATE_CART
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
    deleteCart
}