import { ProductType } from "./product"

export interface IState {
    language: string
    currency: string,
    isBackgroundBlurred: boolean,
    isLoggedIn: boolean,
    isSidebarOpen: boolean,
    isQuickViewOpen: boolean,
    quickViewHandle: string
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

export interface IFilter {
    minPrice: number,
    maxPrice: number,
    color: string,
    size: string
}

export type Article = {
    imgUrl: string,
    publishedAt: string
    title: string,
    handle: string,
    contentHtml: string
    author: string,
    excerpt?: string
}

export type PageData = {
    articles: Article[], 
    hasNextPage: boolean, 
    hasPreviousPage: boolean, 
    startCursor: string, 
    endCursor: string
}

export type LoginFormValues = {
    email: string,
    password: string
}

export type CreateAccountFormValues = LoginFormValues & {
    fName: string,
    lName: string
}
