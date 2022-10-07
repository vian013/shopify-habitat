import { Action, UserData, UserActions } from "./types";

const initialState: UserData = {
    loading: false,
    user: null,
    loginError: "",
    logoutError: "",
    fetchUserError: "",
    createAccountError: "",

}

const userReducer = (state: UserData = initialState, action: Action) => {
    const {type, payload} = action
    switch (type) {
        case UserActions.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }            
        case UserActions.LOGIN_SUCCESS: 
            return {
                ...state,
                user: payload,
                loading: false
            }
        case UserActions.LOGIN_FAILURE: 
            return {
                ...state,
                loginError: payload,
                loading: false
            }
        case UserActions.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            }            
        case UserActions.LOGOUT_SUCCESS: 
            return {
                ...state,
                user: null,
                loading: false
            }
        case UserActions.LOGOUT_FAILURE: 
            return {
                ...state,
                logoutError: payload,
                loading: false
            }
        case UserActions.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }            
        case UserActions.FETCH_USER_SUCCESS: 
            return {
                ...state,
                user: payload,
                loading: false
            }
        case UserActions.FETCH_USER_FAILURE: 
            return {
                ...state,
                fetchUserError: payload,
                loading: false
            }
        case UserActions.CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }            
        case UserActions.CREATE_USER_SUCCESS: 
            return {
                ...state,
                user: payload,
                loading: false
            }
        case UserActions.CREATE_USER_FAILURE: 
            const _error = payload as {message: string}
            return {
                ...state,
                createAccountError: _error.message,
                loading: false
            }
        default:
            return state
    }
}

export default userReducer