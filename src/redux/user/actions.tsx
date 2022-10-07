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

const login = ({email, password}: {email: string, password: string}) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch(loginRequest())
            const res = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
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
    fetchUser
}