import {SidebarActions} from "./types"

const openSidebar = () => {
    return {
        type: SidebarActions.OPEN_SIDEBAR
    }
}

const closeSidebar = () => {
    return {
        type: SidebarActions.CLOSE_SIDEBAR
    }
}

export {
    openSidebar,
    closeSidebar
}