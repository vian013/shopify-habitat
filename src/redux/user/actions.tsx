import { Dispatch } from "redux"
import { BASE_URL } from "../../App"
import { Action, UserActions } from "./types"

const loginRequest = () => {
    return {
        type: UserActions.LOGIN_REQUEST,
    }
}

const loginSuccess = (payload: any) => {
    return {
        type: UserActions.LOGIN_SUCCESS,
        payload
    }
}

const loginFailure = (payload: any) => {
    return {
        type: UserActions.LOGIN_FAILURE,
        payload
    }
}

const logoutRequest = () => {
    return {
        type: UserActions.LOGOUT_REQUEST,
    }
}

const logoutSuccess = () => {
    return {
        type: UserActions.LOGOUT_SUCCESS
    }
}

const logoutFailure = (payload: any) => {
    return {
        type: UserActions.LOGOUT_FAILURE,
        payload
    }
}

const fetchUserRequest = () => {
    return {
        type: UserActions.FETCH_USER_REQUEST,
    }
}

const fetchUserSuccess = (payload: any) => {
    return {
        type: UserActions.FETCH_USER_SUCCESS,
        payload
    }
}

const fetchUserFailure = (payload: any) => {
    return {
        type: UserActions.FETCH_USER_FAILURE,
        payload
    }
}

const createUserRequest = () => {
    return {
        type: UserActions.CREATE_USER_REQUEST,
    }
}

const createUserSuccess = (payload: any) => {
    return {
        type: UserActions.CREATE_USER_SUCCESS,
        payload
    }
}

const createUserFailure = (payload: any) => {
    return {
        type: UserActions.CREATE_USER_FAILURE,
        payload
    }
}

const login = (fields: {email: string, password: string}) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch(loginRequest())
            const res = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(fields),
                credentials: "include"
            })
            if (res.status === 200) {
                const user = await res.json()
                dispatch(loginSuccess(user))
              }
              if (res.status === 400) {
                const data = await res.json()
                const error = data.error
                dispatch(loginFailure(error))
            }
        } catch (error) {
            dispatch(loginFailure(error))
        }
    }
}

const logout = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch(logoutRequest())
            await fetch(`${BASE_URL}/logout`, {
                method: "GET",
                credentials: "include"
            })
            dispatch(logoutSuccess())
        } catch (error) {
            dispatch(logoutFailure(error))
        }
    }
}

const fetchUser = (userId?: string) => {
    const url = `${BASE_URL}/user${userId?`?id=${userId}`:""}`
    return async(dispatch: Dispatch<Action>) => {
        try {
            dispatch(fetchUserRequest())
            const res = await fetch(url, {
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include"
              })
              
            const data = await res.json()
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            dispatch(fetchUserFailure(error))
        }
    }
}

const createUser = (fields: {email: string, password: string, fName: string, lName: string}) => {
    console.log(fields);
    
    return async(dispatch: Dispatch<Action>) => {
        try {
            dispatch(createUserRequest())
            const res = await fetch(`${BASE_URL}/create-account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(fields)
            })
            if (res.status >= 400) {
                const error = await res.json()
                throw new Error(error.message)
            } 
            const data = await res.json()
            dispatch(createUserSuccess(data))
        } catch (error) {
            const error1 = error as {message: string}
            console.log(error1.message);
            
            dispatch(createUserFailure(error))
        }
    }
}

export {
    loginRequest,
    loginSuccess,
    loginFailure,
    login,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    logout,
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    fetchUser,
    createUserRequest,
    createUserSuccess,
    createUserFailure,
    createUser
}