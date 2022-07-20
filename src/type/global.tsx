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