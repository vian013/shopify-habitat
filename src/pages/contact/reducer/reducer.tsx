import { Reducer } from "react"
import { Action, ContactActions, FormMessages, FormValues } from "./types"


const contactReducer: Reducer<FormMessages, Action> = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case ContactActions.SET_SUCCESS:
            return {
                ...state,
                success: payload
            }
        case ContactActions.SET_NAME_ERROR:
            return {
                ...state,
                name: payload
            }
        case ContactActions.SET_EMAIL_ERROR:
            return {
                ...state,
                email: payload
            }
        case ContactActions.SET_PHONE_ERROR:
            return {
                ...state,
                phone: payload
            }
        case ContactActions.SET_COMMENT_ERROR:
            return {
                ...state,
                comment: payload
            }
        default:
            return state
    }
}

export default contactReducer