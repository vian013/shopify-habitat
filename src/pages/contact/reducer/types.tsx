export type Action = {
    type: string,
    payload: string
}

export type FormValues = {
    name: string,
    email: string,
    phone: string,
    comment: string
}

export type FormMessages = {
    success: string,
    name: string,
    email: string,
    phone: string,
    comment: string
}

export enum ContactActions {
    SET_SUCCESS= "SET_SUCCESS",
    SET_NAME_ERROR= "SET_NAME_ERROR",
    SET_EMAIL_ERROR= "SET_EMAIL_ERROR",
    SET_PHONE_ERROR= "SET_PHONE_ERROR",
    SET_COMMENT_ERROR= 'SET_COMMENT_ERROR'
}