import { Reducer } from "redux";
import { Action, QuickViewActions, QuickViewState } from "./types";

const initialState: QuickViewState = {
    handle: ""
}

const quickViewReducer: Reducer<QuickViewState, Action> = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case QuickViewActions.SET_QUICK_VIEW_HANDLE:
            return {
                ...state,
                handle: payload
            }            
        default:
            return state
    }
} 

export default quickViewReducer