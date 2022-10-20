import { Reducer } from "redux";
import { CartActions, CartState } from "./types";

const initialState: CartState = {
    loading: false,
    error: "",
    cart: null,
    totalQuantity: 0,
    subTotal: 0
}

type Action = {
    type: string,
    payload: any
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
        case CartActions.SET_CART_QUANTITY:
            return {
                ...state,
                totalQuantity: action.payload
            }
        case CartActions.SET_CART_SUBTOTAL:
            return {
                ...state,
                subTotal: action.payload
            }
        default:
            return state
    }
}

export default cartReducer