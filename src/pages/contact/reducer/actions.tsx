import { ContactActions } from "./types"

const setSuccess = (payload: string) => {
    return {
        type: ContactActions.SET_SUCCESS,
        payload
    }
}

const setNameError = (payload: string) => {
    return {
        type: ContactActions.SET_NAME_ERROR,
        payload
    }
}

const setEmailError = (payload: string) => {
    return {
        type: ContactActions.SET_EMAIL_ERROR,
        payload
    }
}

const setPhoneError = (payload: string) => {
    return {
        type: ContactActions.SET_PHONE_ERROR,
        payload
    }
}

const setCommentError = (payload: string) => {
    return {
        type: ContactActions.SET_COMMENT_ERROR,
        payload
    }
}

export {
    setSuccess,
    setNameError,
    setEmailError,
    setPhoneError,
    setCommentError
}