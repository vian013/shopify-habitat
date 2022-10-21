import {SidebarActions} from "./types"

const openSidebar = () => {
    return {
        type: SidebarActions.OPEN_SIDEBAR
    }
}

const hideSidebar = () => {
    return {
        type: SidebarActions.HIDE_SIDEBAR
    }
}

const closeSidebar = () => {
    return {
        type: SidebarActions.CLOSE_SIDEBAR
    }
}

const setSidebarContent = (payload: string) => {
    return {
        type: SidebarActions.SET_SIDEBAR_CONTENT,
        payload
    }
}

export {
    openSidebar,
    hideSidebar,
    closeSidebar,
    setSidebarContent
}