import { Reducer } from "react";
import { IAction, IFilter } from "../../type/global";
import { FilterActions } from "../actions/filterActions";

export const filterReducer: Reducer<IFilter, IAction<any>> = (state, {type, payload}) => {
    switch (type) {
        case FilterActions.SET_MIN_PRICE:
            return {
                ...state,
                minPrice: payload
            }
        case FilterActions.SET_MAX_PRICE:
            return {
                ...state,
                maxPrice: payload
            }
        case FilterActions.SET_COLOR:
            return {
                ...state,
                color: payload
            }
        case FilterActions.SET_SIZE:
            return {
                ...state,
                size: payload
            }
        default:
            return state
    }
}