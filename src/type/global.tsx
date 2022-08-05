import { ProductType } from "./product"

export interface IState {
    language: string
    currency: string,
    isBackgroundBlurred: boolean,
    isLoggedIn: boolean
}

export interface IAction<T> {
    type: string, 
    payload?: T
}

export interface IUser {
    fName: string,
    lName: string,
    email: string
}

export interface ICart {
    cartId: string,
    cartItems: ProductType[],
    isCartOpen: boolean,
    cartTotalQuantity: number,
    outOfStockError: {lineId: string}
}