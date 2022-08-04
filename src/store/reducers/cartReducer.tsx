import { Reducer } from "react";
import { IAction, ICart } from "../../type/global";
import { CartActions } from "../actions/cartActions";

export const cartReducer: Reducer<ICart, IAction<any>> = (state: ICart, {type, payload}: IAction<any>) => {
    switch (type) {
        case CartActions.CREATE_CART:
            return {
                ...state,
                cartId: payload.id,
                cartItems: payload.items
            }
        case CartActions.ADD_TO_CART:
            return {
                ...state,
                cartItems: payload.items
            }
        case CartActions.OPEN_CART:
            return {
                ...state,
                isCartOpen: true
            }
        case CartActions.CLOSE_CART:
            return {
                ...state,
                isCartOpen: false
            }
    
        default:
            return state
    }
}