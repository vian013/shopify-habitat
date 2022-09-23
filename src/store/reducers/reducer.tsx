import { Reducer } from "react"
import {IAction, IState} from "../../type/global"
import { AppActions } from "../actions/actions"

export const reducer: Reducer<IState, IAction<any>> = (state: IState, {type, payload}: IAction<any>) => {
    switch (type) {
        case AppActions.SET_LANGUAGE:
            return {
                ...state,
                language: payload
            }
        case AppActions.SET_CURRENCY:
            return {
                ...state,
                currency: payload
            }
        case AppActions.SET_BLURRED:
            return {
            ...state,
            isBackgroundBlurred: true,
            test: false
            }
        case AppActions.SET_UNBLURRED:
            return {
            ...state,
            isBackgroundBlurred: false
            }
        case AppActions.SET_LOGGEDIN:
            return {
            ...state,
            isLoggedIn: true
            }
        case AppActions.SET_LOGGEDOUT:
            return {
            ...state,
            isLoggedIn: false
            }
        case AppActions.OPEN_SIDEBAR:
            return {
            ...state,
            isSidebarOpen: true,
            isBackgroundBlurred: true
            }
        case AppActions.CLOSE_SIDEBAR:
            return {
            ...state,
            isSidebarOpen: false,
            isBackgroundBlurred: false
            }
        case AppActions.OPEN_QUICKVIEW:
            return {
            ...state,
            isQuickViewOpen: true
            }
        case AppActions.CLOSE_QUICKVIEW:
            return {
            ...state,
            isQuickViewOpen: false
            }
        case AppActions.SET_QUICKVIEW_HANDLE:
            return {
            ...state,
            quickViewHandle: payload
            }
        default:
            return state
    }
}

