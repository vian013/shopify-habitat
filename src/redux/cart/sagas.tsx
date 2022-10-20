import {all, put, takeEvery, takeLatest} from "redux-saga/effects"
import { AddToCartPayload, createCartRequest, createCartSuccess, fetchCart, fetchCartRequest, fetchCartSuccess, setCartQuantity, setCartSubTotal } from "./actions"
import { CartData, createCart as createCartApi, fetchCart as fetchCartApi } from "./api"
import { CartActions } from "./types"

function* fetchCartSaga(action: {type: string, cartId:string}){
    const {cartId} = action
    console.log("cartId",cartId);
    
    yield put(fetchCartRequest())
    
    try {
        const data: CartData = yield fetchCartApi(cartId) 
        const {items, subTotal, totalQuantity} = data
        yield put(fetchCartSuccess(items))
        yield put(setCartQuantity(totalQuantity))
        yield put(setCartSubTotal(subTotal))
    } catch (error) {
        
    }
}

function* watchFetchCartSaga(){
    yield takeLatest(CartActions.FETCH_CART, fetchCartSaga)
}

function* createCartSaga(action: {type: string, payload: AddToCartPayload}) {
    yield put(createCartRequest())

    try {
        const data: CartData = yield createCartApi(action.payload)      
        yield put(createCartSuccess(data))
    } catch (error) {
    }

}

function* watchCreateCartSaga(){
    yield takeLatest(CartActions.CREATE_CART, createCartSaga)
}

function* cartSagas() {
    yield all([
        watchFetchCartSaga(),
        watchCreateCartSaga()
    ])
}

export default cartSagas