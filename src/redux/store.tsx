import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import userReducer from "./user/reducer"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {composeWithDevTools} from "@redux-devtools/extension"

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store