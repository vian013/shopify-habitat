import { Reducer } from "redux"
import { SidebarAction, SidebarActions, SidebarState } from "./types"

const initialState: SidebarState = {
    isSidebarOpen: false,
    content: ""
}

const sidebarReducer: Reducer<SidebarState, SidebarAction> = (state = initialState, action) => {
    const {type, payload} = action
    
    switch (type) {
        case SidebarActions.OPEN_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: true
            }            
        case SidebarActions.HIDE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false
            }            
        case SidebarActions.CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false,
                content: ""
            }            
        case SidebarActions.SET_SIDEBAR_CONTENT:
            return {
                ...state,
                content: payload
            }            
        default:
            return state
    }
}

export default sidebarReducer