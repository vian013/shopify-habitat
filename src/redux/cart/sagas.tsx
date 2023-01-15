import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects"
import { closeSidebar, openSidebar, setSidebarContent } from "../sidebar/actions"
import { AddToCartPayload, addToCartRequest, addToCartSuccess, CreateCartPayload, createCartRequest, createCartSuccess, DeleteCartPayload, deleteCartRequest, deleteCartSuccess, fetchCart, fetchCartRequest, fetchCartSuccess, updateCartRequest, updateCartSuccess} from "./actions"
import { addToCart as addToCartApi, createCart as createCartApi, deleteCart as deleteCartApi, fetchCart as fetchCartApi, updateCart as updateCartApi} from "./api"
import { Cart, CartActions } from "./types"

function* fetchCartSaga(action: {type: string, cartId:string}){
    const {cartId} = action
    yield put(fetchCartRequest())
    
    try {
        const data: Cart = yield call(fetchCartApi, cartId)  
        if(data) yield put(fetchCartSuccess(data))
    } catch (error) {
        
    }
}

function* watchFetchCartSaga() {
    yield takeLatest(CartActions.FETCH_CART, fetchCartSaga)
}

function* createCartSaga(action: {type: string, payload: CreateCartPayload}) {
    yield put(createCartRequest())
    
    try {
        const data: Cart  = yield call(createCartApi, action.payload)      
        if(data) {
            yield put(createCartSuccess(data))
            yield put(openSidebar())
            yield put(setSidebarContent("cart"))
        } 
    } catch (error) {
    }

}

function* watchCreateCartSaga() {
    yield takeLatest(CartActions.CREATE_CART, createCartSaga)
}

type AddToCartData = {
    cart: Cart,
    outOfStockError: {
        lineId: string,
        maximumQuantity: number
    }
}

function* addToCartSaga(action: {type: string, payload: AddToCartPayload}) {
    yield put(addToCartRequest())
    
    
    try {
        const data: AddToCartData = yield call(addToCartApi, action.payload)
        const {cart, outOfStockError} = data
        
        if(cart) {
            yield put(addToCartSuccess(cart))
            yield put(openSidebar())
            yield put(setSidebarContent("cart"))
        } 
    } catch (error) {
    }
}

function* watchAddToCartSaga() {
    yield takeLatest(CartActions.ADD_TO_CART, addToCartSaga)
}

function* updateCartSaga(action: {type: string, payload: AddToCartPayload}) {
    yield put(updateCartRequest())

    try {
        const data: AddToCartData = yield call(updateCartApi, action.payload)
        const {cart, outOfStockError} = data
        
        if(cart) yield put(updateCartSuccess(cart))
    } catch (error) {
    }
}

function* watchUpdateCartSaga() {
    yield takeLatest(CartActions.UPDATE_CART, updateCartSaga)
}

function* deleteCartSaga(action: {type: string, payload: DeleteCartPayload}) {
    yield put(deleteCartRequest())

    try {
        const data: Cart = yield call(deleteCartApi, action.payload)     
        if(data) yield put(deleteCartSuccess(data))   
    } catch (error) {
    }
}

function* watchDeleteCartSaga() {
    yield takeLatest(CartActions.DELETE_CART, deleteCartSaga)
}

function* openCartSaga(action: {type: string, cartId?: string}) {
    if (action.cartId) yield put(fetchCart(action.cartId))
    yield put(openSidebar())
    yield put(setSidebarContent("cart")) 
}

function* watchOpenCart() {
    yield takeEvery(CartActions.OPEN_CART, openCartSaga)
}


function* cartSagas() {
    yield all([
        watchFetchCartSaga(),
        watchCreateCartSaga(),
        watchAddToCartSaga(),
        watchDeleteCartSaga(),
        watchUpdateCartSaga(),
        watchOpenCart(),
    ])
}

export default cartSagas