import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import userReducer from "./user/reducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "@redux-devtools/extension"
import sidebarReducer from "./sidebar/reducer"
import createSagaMiddleware from "redux-saga"
import cartReducer from "./cart/reducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store