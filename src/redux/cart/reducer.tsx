import { Reducer } from "redux";
import { Action, CartActions, CartState } from "./types";

const initialState: CartState = {
    loading: false,
    error: "",
    cart: null,
}

const cartReducer: Reducer<CartState, Action> = (state = initialState, action: Action) => {
    switch (action.type) {
        case CartActions.CREATE_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CartActions.CREATE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: ''
            }
        case CartActions.CREATE_CART_FAILURE:
            return {
                ...state,
                loading: false,
                cart: null,
                error: action.payload
            }
        case CartActions.FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CartActions.FETCH_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: ''
            }
        case CartActions.FETCH_CART_FAILURE:
            return {
                ...state,
                loading: false,
                cart: null,
                error: action.payload
            }
        case CartActions.ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CartActions.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: ''
            }
        case CartActions.ADD_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                cart: null,
                error: action.payload
            }
        case CartActions.UPDATE_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CartActions.UPDATE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: ''
            }
        case CartActions.UPDATE_CART_FAILURE:
            return {
                ...state,
                loading: false,
                cart: null,
                error: action.payload
            }
        case CartActions.DELETE_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CartActions.DELETE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: ''
            }
        case CartActions.DELETE_CART_FAILURE:
            return {
                ...state,
                loading: false,
                cart: null,
                error: action.payload
            }
        default:
            return state
    }
}

export default cartReducer