import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import userReducer from "./user/reducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "@redux-devtools/extension"
import sidebarReducer from "./sidebar/reducer"

const rootReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store