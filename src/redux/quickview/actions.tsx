import { QuickViewActions } from "./types"

const openQuickView = (payload: string)=>{
    return {
        type: QuickViewActions.OPEN_QUICK_VIEW,
        payload
    }
}

const setQuickViewHandle = (payload: string)=>{
    return {
        type: QuickViewActions.SET_QUICK_VIEW_HANDLE,
        payload
    }
}

export {
    openQuickView,
    setQuickViewHandle
}