enum QuickViewActions {
    OPEN_QUICK_VIEW = "OPEN_QUICK_VIEW",
    SET_QUICK_VIEW_HANDLE = "SET_QUICK_VIEW_HANDLE"
}

type QuickViewState = {
    handle: string
}

type Action = {
    type: string,
    payload: any
}

export {
    QuickViewActions,
    QuickViewState,
    Action
}