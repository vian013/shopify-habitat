import { Reducer } from "react";
import { IAction, IUser } from "../../type/global";
import { UserActions } from "../actions/userActions";

export const userReducer: Reducer<IUser, IAction<any>> = (state: IUser, {type, payload}: IAction<any>) => {
    switch (type) {
        case UserActions.SET_FNAME: 
            return {
                ...state,
                fName: payload
            }
        case UserActions.SET_LNAME: 
            return {
                ...state,
                lName: payload
            }
        case UserActions.SET_EMAIL: 
            return {
                ...state,
                email: payload
            }
        case UserActions.SET_USER: 
            return {
                fName: payload.firstName,
                lName: payload.lastName,
                email: payload.email,
            }
        default:
            return state
    }
}