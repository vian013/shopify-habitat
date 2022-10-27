import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import userReducer from "./user/reducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "@redux-devtools/extension"
import sidebarReducer from "./sidebar/reducer"
import createSagaMiddleware from "redux-saga"
import cartReducer from "./cart/reducer"
import rootSaga from "./rootSaga"
import quickViewReducer from "./quickview/reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["sidebar", "quickView"]
}

const rootReducer = combineReducers({
    user: userReducer,
    sidebar: sidebarReducer,
    cart: cartReducer,
    quickView: quickViewReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store