export enum UserActions {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILURE = "LOGIN_FAILURE",
    LOGOUT_REQUEST = "LOGOUT_REQUEST",
    LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
    LOGOUT_FAILURE = "LOGOUT_FAILURE",
    FETCH_USER_REQUEST = "FETCH_USER_REQUEST",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
}

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    displayName: string,
    email: string,
    numberOfOrders: number,
    phone: number
} | null

export type UserData = {
    loading: boolean,
    user: User,
    error: string
}

export type Action = {
    type: string,
    payload?: User | string
}