import { ProductType } from "../../type/product"

export enum CartActions {
    FETCH_CART = "FETCH_CART",
    FETCH_CART_REQUEST = "FETCH_CART_REQUEST",
    FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS",
    FETCH_CART_FAILURE = "FETCH_CART_FAILURE",
    CREATE_CART = "CREATE_CART",
    CREATE_CART_REQUEST = "CREATE_CART_REQUEST",
    CREATE_CART_SUCCESS = "CREATE_CART_SUCCESS",
    CREATE_CART_FAILURE = "CREATE_CART_FAILURE",
    ADD_TO_CART = "ADD_TO_CART",
    ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST",
    ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
    ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE",
    UPDATE_CART = "UPDATE_CART",
    UPDATE_CART_REQUEST = "UPDATE_CART_REQUEST",
    UPDATE_CART_SUCCESS = "UPDATE_CART_SUCCESS",
    UPDATE_CART_FAILURE = "UPDATE_CART_FAILURE",
    DELETE_CART = "DELETE_CART",
    DELETE_CART_REQUEST = "DELETE_CART_REQUEST",
    DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS",
    DELETE_CART_FAILURE = "DELETE_CART_FAILURE",
    SET_CART_QUANTITY = "SET_CART_QUANTITY",
    SET_CART_SUBTOTAL = "SET_CART_SUBTOTAL"
}

export type CartState = {
    loading: boolean,
    error: string,
    cart: Cart | null,
    totalQuantity: number,
    subTotal: number
    outOfStockError?: {lineId: string}
}

export type Cart = {
    id: string,
    items: CartItem[],
    totalQuantity: number,
    total: number,
    subTotal: number,
    totalTax: number
}

export type CartItem = {
    imgUrl: string,
    title: string, 
    options: string, 
    price: number,
    quantity: number, 
    variantId: string, 
    lineId: string,
    cost: number
  }
  
export type CartItems = CartItem[]