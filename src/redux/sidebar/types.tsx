export enum SidebarActions {
    OPEN_SIDEBAR = "OPEN_SIDEBAR",
    CLOSE_SIDEBAR = "CLOSE_SIDEBAR",
} 

export type SidebarAction = {
    type: string,
    payload?: any
}

export type SidebarState = {
    isSidebarOpen: boolean
}