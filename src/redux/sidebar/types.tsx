export enum SidebarActions {
    OPEN_SIDEBAR = "OPEN_SIDEBAR",
    HIDE_SIDEBAR = "HIDE_SIDEBAR",
    CLOSE_SIDEBAR = "CLOSE_SIDEBAR",
    SET_SIDEBAR_CONTENT="SET_SIDEBAR_CONTENT"
} 

export type SidebarAction = {
    type: string,
    payload?: any
}

export type SidebarState = {
    isSidebarOpen: boolean,
    content: string
}