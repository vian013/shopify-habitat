interface IState {
    openSearch: boolean
}

interface IAction <T>{
    type: string,
    payload: T
}

const reducer = (action: IAction<any>, initialState: IState) => {

}