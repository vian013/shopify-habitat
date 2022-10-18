import { Reducer } from "redux"
import { SidebarAction, SidebarActions, SidebarState } from "./types"

const initialState: SidebarState = {
    isSidebarOpen: false
}

const sidebarReducer: Reducer<SidebarState, SidebarAction> = (state = initialState, action) => {
    const {type} = action
    
    switch (type) {
        case SidebarActions.OPEN_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: true
            }            
        case SidebarActions.CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false
            }            
        default:
            return state
    }
}

export default sidebarReducer